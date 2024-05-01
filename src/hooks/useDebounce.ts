import { useEffect, useState } from "react";

export const useDebounce = (term: string | undefined) => {
  const [value, setValue] = useState<string>();

  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      setValue(term);
    }, 500);

    return () => {
      clearTimeout(timeoutRef);
    };
  }, [term]);

  return value;
};
