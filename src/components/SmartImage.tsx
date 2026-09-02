"use client";

import { useState, type ReactNode } from "react";

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  gradient?: string;
  icon?: ReactNode;
  priority?: boolean;
  loading?: "eager" | "lazy";
  sizes?: string;
  decoding?: "async" | "sync" | "auto";
  fetchPriority?: "high" | "low" | "auto";
};

export function SmartImage({
  src,
  alt,
  className = "",
  gradient = "from-brand-100 to-accent-100",
  icon,
  priority = false,
  loading,
  sizes,
  decoding,
  fetchPriority,
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  const resolvedLoading = loading ?? (priority ? "eager" : "lazy");
  const resolvedFetchPriority = fetchPriority ?? (priority ? "high" : "auto");
  const resolvedDecoding = decoding ?? (priority ? "sync" : "async");
  const resolvedSizes =
    sizes ?? (priority ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw");

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br ${gradient} ${className}`}
        role="img"
        aria-label={alt}
      >
        {icon}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`block bg-gradient-to-br from-gray-100 to-gray-200 text-transparent ${className}`}
      style={{ objectPosition: "center", objectFit: "cover" }}
      onError={() => setFailed(true)}
      loading={resolvedLoading}
      fetchPriority={resolvedFetchPriority}
      decoding={resolvedDecoding}
      sizes={resolvedSizes}
    />
  );
}