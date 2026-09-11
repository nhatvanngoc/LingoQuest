import fs from 'fs';
import path from 'path';

const envPath = path.resolve(process.cwd(), '.env.local');
let token = process.env.VERCEL_TOKEN;

if (!token && fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  const match = content.match(/VERCEL_TOKEN=(.*)/);
  if (match) token = match[1].trim();
}

if (!token) {
  console.error('❌ VERCEL_TOKEN not found in environment or .env.local');
  process.exit(1);
}

async function run() {
  try {
    const res = await fetch('https://api.vercel.com/v6/deployments?limit=5', {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    if (!data.deployments) {
      console.log('API response:', data);
      return;
    }

    console.log('\n================== 🚀 VERCEL DEPLOYMENTS STATUS ==================');
    data.deployments.forEach((d, i) => {
      const stateIcon = d.readyState === 'READY' ? '✅ READY' : d.readyState === 'BUILDING' ? '⏳ BUILDING' : d.readyState === 'ERROR' ? '❌ ERROR' : d.readyState;
      const time = new Date(d.createdAt).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
      const sha = d.meta?.githubCommitSha?.slice(0, 7) || 'N/A';
      const msg = d.meta?.githubCommitMessage || 'No message';
      
      console.log(`\n[${i + 1}] Commit: ${sha} - "${msg}"`);
      console.log(`    Status: ${stateIcon} (${d.readyState})`);
      console.log(`    URL:    https://${d.url}`);
      console.log(`    Time:   ${time}`);
    });
    console.log('\n===================================================================\n');
  } catch (err) {
    console.error('Error fetching Vercel status:', err);
  }
}

run();
