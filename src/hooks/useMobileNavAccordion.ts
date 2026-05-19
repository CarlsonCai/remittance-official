import { useCallback, useState } from "react";

export function useMobileNavAccordion(menuOpen: boolean) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [prevMenuOpen, setPrevMenuOpen] = useState(menuOpen);

  if (menuOpen !== prevMenuOpen) {
    setPrevMenuOpen(menuOpen);
    if (!menuOpen) {
      setExpandedId(null);
    }
  }

  const toggle = useCallback((id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  }, []);

  return { expandedId, toggle };
}
