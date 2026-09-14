import { redirect } from "next/navigation";

export default function FlashcardsIndexPage() {
  redirect("/flashcards/deck-1");
}
