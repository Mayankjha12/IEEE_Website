"use client";
import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], offset: number = 85) {
  const [active, setActive] = useState(sectionIds[0]);
  useEffect(() => {
    const handleScroll = () => {
      let found = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top - offset <= 0) {
            found = id;
          }
        }
      }
      setActive(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);
  return active;
}