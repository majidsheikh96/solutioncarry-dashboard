import type React from "react";
import type { Metadata } from "next";
import "../globals.css";
import { TopNavigation } from "@/components/top-navigation";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Solutioncarry - Freelancer",
  description: "Freelancer area of Solutioncarry",
};

export default function FreelancerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This area is rendered inside the root app layout which already provides
  // the <html> and <body> tags and may render the main navigation. To avoid
  // duplicate html/body and headers we return a fragment that only renders
  // the per-area wrapper, TopNavigation is intentionally omitted because the
  // root `StudentNavigation` will switch to `FreelancerNavigation` for
  // freelancer paths. Keep the Toaster here so freelancer pages still have
  // access to toast UI.
  return (
    <>
      <div className="bg-upwork-light-gray min-w-full">{children}</div>
      <Toaster />
    </>
  );
}
