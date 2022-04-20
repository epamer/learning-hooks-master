import { useState, useCallback } from "react";

function useCounter(
  initialCount = 0
): {
  count: number;
  increment: () => void;
  reset: () => void;
} {
  const [count, setCount] = useState<number>(initialCount);
  const increment = useCallback(() => setCount(count + 1), [count]);
  const reset = useCallback(() => setCount(initialCount), [initialCount]);
  return { count, increment, reset };
}

export default useCounter;
