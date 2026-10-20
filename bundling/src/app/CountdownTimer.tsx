
"use client";

import { useEffect, useState } from "react";
import { trackMetaEvent } from "./MetaPixel";

const DURATION_SECONDS = 5 * 60 * 60;
const STORAGE_KEY = "max_bundle_promo_remaining_v1";
const CHECKOUT_URL =
  "https://maxautocare.orderonline.id/paket-bundling-3-in-1";

type CountdownTimerProps = {
  placement?: "top" | "bottom";
};

export default function CountdownTimer({
  placement = "top",
}: CountdownTimerProps) {
  const [remaining, setRemaining] = useState(DURATION_SECONDS);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved === null ? DURATION_SECONDS : Number(saved);

    let secondsLeft = Number.isFinite(parsed)
      ? Math.max(0, Math.min(DURATION_SECONDS, parsed))
      : DURATION_SECONDS;

    setRemaining(secondsLeft);

    const interval = window.setInterval(() => {
      secondsLeft = Math.max(0, secondsLeft - 1);
      localStorage.setItem(STORAGE_KEY, String(secondsLeft));
      setRemaining(secondsLeft);
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const hours = Math.floor(remaining / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;

  const format = (n: number) => String(n).padStart(2, "0");
  const timer = `${format(hours)}:${format(minutes)}:${format(seconds)}`;

  const handleCheckout = () => {
    trackMetaEvent("InitiateCheckout", {
      content_name: "MAX Auto Care Bundle",
      content_type: "product",
      currency: "IDR",
      value: 99000,
    });
  };

  if (placement === "bottom") {
    return (
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-red-500/30 bg-[#101012]/95 px-3 py-3 text-white shadow-2xl backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase text-red-400 sm:text-sm">
              Promo MAX Bundling 3-in-1
            </p>
            <p className="text-lg font-extrabold">Rp99.000</p>
            <p className="text-[10px] text-gray-400 sm:text-xs">
              Promo berakhir dalam: {timer}
            </p>
          </div>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCheckout}
            className="oo-link shrink-0 rounded-lg bg-red-600 px-4 py-3 text-center text-xs font-extrabold text-white hover:bg-red-500 sm:px-6 sm:text-sm"
          >
            ORDER SEKARANG
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto my-4 w-full max-w-5xl px-4">
      <div className="flex items-center justify-between gap-3 rounded-xl border border-red-500/30 bg-[#171719] p-3 text-white sm:p-4">
        <div>
          <p className="text-sm font-extrabold sm:text-base">
            Promo MAX Bundling 3-in-1
          </p>
          <p className="mt-1 text-xs text-gray-400 sm:text-sm">
            Paket hemat Rp99.000
          </p>
        </div>

        <div className="shrink-0 text-right">
          <p className="text-[10px] uppercase text-gray-400 sm:text-xs">
            Promo berakhir dalam
          </p>
          <p className="font-mono text-xl font-extrabold tracking-wider text-red-400 sm:text-2xl">
            {timer}
          </p>
        </div>
      </div>
    </div>
  );
}
