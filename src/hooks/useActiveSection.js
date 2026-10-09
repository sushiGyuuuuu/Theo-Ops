import { useEffect, useState } from "react";

export function useActiveSection(ids) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids]);

  return active;
}