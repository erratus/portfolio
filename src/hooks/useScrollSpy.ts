import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset: number = 200) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Find which section is currently active
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call to set active ID on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset]);

  return activeId;
}
