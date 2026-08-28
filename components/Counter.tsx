"use client";

import { useEffect, useState } from "react";

export default function Counter({ start = 14392 }: { start?: number }) {
  const [n, setN] = useState(start);
  useEffect(() => {
    const id = setInterval(() => setN((c) => c + Math.floor(Math.random() * 3)), 4200);
    return () => clearInterval(id);
  }, []);
  return <>{n.toLocaleString()}</>;
}
