"use client";

import { useRouter } from "next/navigation";
import { useRef, useTransition } from "react";

type Props = { initialQuery: string };

export default function ProjectFilter({ initialQuery }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const q = e.target.value.trim();
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      startTransition(() => {
        const params = new URLSearchParams();
        if (q) params.set("q", q);
        params.set("page", "1");
        router.push(`/studentproject?${params.toString()}`);
      });
    }, 380);
  }

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 pt-10 pb-4">
      <div className="max-w-5xl mx-auto">
        <p
          className="text-white/70 text-[14px] md:text-[15px] mb-3 flex items-center gap-1"
          style={{ fontFamily: "Neue Montreal", fontWeight: 500 }}
        >
          Filter below <span className="text-[11px]">↘</span>
        </p>
        <div className="relative inline-block">
          <input
            type="text"
            defaultValue={initialQuery}
            onChange={handleChange}
            placeholder="Explore by keyword..."
            className="rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-white/85 placeholder:text-white/30 text-[14px] w-64 md:w-80 outline-none focus:border-white/35 transition-colors"
            style={{ fontFamily: "Neue Montreal" }}
          />
          {isPending && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white/40 border-t-white/80 animate-spin" />
          )}
        </div>
      </div>
    </div>
  );
}
