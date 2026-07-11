"use client";

import { cn } from "@/lib/utils";

export function GridBackground({ className = "" }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-0 pointer-events-none rounded-2xl overflow-hidden",
        "[background-size:40px_40px]",
        "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        className
      )}
    />
  );
}