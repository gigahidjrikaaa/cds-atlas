import type { Metadata } from "next";
import { SlideDeck } from "@/components/slide-deck";

export const metadata: Metadata = {
  title: "Presentation mode",
  description:
    "Full-screen slide deck for the Consumer Decision Survey (A–F) — one focus at a time: cases, insights, analysis and metaphors.",
};

export default function PresentPage() {
  return <SlideDeck />;
}
