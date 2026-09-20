"use client";

import { useEffect, useState } from "react";

/** The clock in Mitrovicë. Kosovo keeps Central European time; IANA files it under Europe/Belgrade. */
export function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Europe/Belgrade",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  // The placeholder has the same character count as the time, so nothing shifts on hydration.
  return (
    <span className="tnum" suppressHydrationWarning>
      {time ? `${time} local` : "--:-- local"}
    </span>
  );
}
