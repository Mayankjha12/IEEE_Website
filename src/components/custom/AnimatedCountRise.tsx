import React, { useRef, useEffect, useState, useMemo } from "react";
import { useInView } from "framer-motion";

type AnimatedCountRiseProps = {
  value: number | string;
  className?: string;
  duration?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
  prefix?: string;
  suffix?: string;
  digitClassName?: string;
};

export function AnimatedCountRise({
  value,
  className,
  digitClassName = "",
  duration = 1.2,
  delay = 0,
  once = true,
  amount = 0.5,
  prefix = "",
  suffix = "",
}: AnimatedCountRiseProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, amount });

  const valueStr = typeof value === "number" ? value.toString() : value;
  const digits = useMemo(() => valueStr.split(""), [valueStr]);
  const [rollingDigits, setRollingDigits] = useState<(number | string)[]>(() =>
    digits.map((d) => (/\d/.test(d) ? 0 : d))
  );

  useEffect(() => {
    if (!isInView) return;

    let stopped = false;
    const timers: NodeJS.Timeout[] = [];
    const digitIndexes = digits.map((d, i) => (/\d/.test(d) ? i : null)).filter(i => i !== null) as number[];
    const perDigitDuration = duration / (digitIndexes.length || 1);

    function animateDigit(idx: number) {
      if (idx >= digits.length || stopped) return;
      const char = digits[idx];
      if (!/\d/.test(char)) {
        setRollingDigits((prev) => {
          const arr = [...prev];
          arr[idx] = char;
          return arr;
        });
        if (idx + 1 < digits.length) {
          timers[idx + 1] = setTimeout(() => animateDigit(idx + 1), 60);
        }
        return;
      }
      const target = parseInt(char, 10);
      let current = 0;
      const stepTime = Math.max(18, (perDigitDuration * 1000) / (target + 1));

      function tick() {
        setRollingDigits((prev) => {
          const arr = [...prev];
          arr[idx] = current;
          return arr;
        });
        if (current < target) {
          current++;
          timers[idx] = setTimeout(tick, stepTime);
        } else {
          if (idx + 1 < digits.length) {
            timers[idx + 1] = setTimeout(() => animateDigit(idx + 1), 80);
          }
        }
      }
      tick();
    }

    setRollingDigits(digits.map((d) => (/\d/.test(d) ? 0 : d)));
    timers[0] = setTimeout(() => animateDigit(0), delay * 1000);

    return () => {
      stopped = true;
      timers.forEach((t) => clearTimeout(t));
    };
  }, [isInView, valueStr, duration, delay, digits]);
  
  const digitTW = "inline-block w-[0.72em] h-[1.08em] overflow-hidden relative align-baseline font-mono font-['Inter_var'] font-['tabular-nums'] text-center m-0 p-0 leading-[1.08em] tracking-[-0.03em]"; // tailwind/inline style
  const digitColumnTW = "absolute left-0 top-0 w-full m-0 p-0 transition-transform duration-300";
  const charTW = "inline-block w-[0.72em] h-[1.08em] align-baseline font-mono font-['Inter_var'] font-['tabular-nums'] text-center m-0 p-0 leading-[1.08em] tracking-[-0.03em] overflow-hidden";
  const rootTW = "inline-block whitespace-nowrap font-mono font-['Inter_var'] font-['tabular-nums'] align-baseline m-0 p-0 leading-[1.08em] tracking-[-0.03em]";

  return (
    <span
      ref={ref}
      className={`${rootTW} ${className || ""}`}
      style={{
        fontVariantNumeric: "tabular-nums",
        fontFamily: "Inter, Roboto Mono, Menlo, Monaco, 'Liberation Mono', 'Courier New', monospace",
      }}
    >
      {prefix && (
        <span className={`${charTW} ${digitClassName}`}>{prefix}</span>
      )}
      {digits.map((digit, idx) =>
        /\d/.test(digit) ? (
          <span
            key={idx}
            className={`${digitTW} ${digitClassName}`}
          >
            <span
              className={digitColumnTW}
              style={{
                transform: `translateY(-${Number(rollingDigits[idx]) * 1.08}em)`,
                transitionTimingFunction: "cubic-bezier(.69,1.41,.6,.98)",
              }}
            >
              {Array.from({ length: 10 }, (_, n) => (
                <span
                  key={n}
                  className="block h-[1.08em] leading-[1.08em] m-0 p-0 tracking-[-0.03em]"
                >
                  {n}
                </span>
              ))}
            </span>
          </span>
        ) : (
          <span
            key={idx}
            className={`${charTW} ${digitClassName}`}
          >
            {digit}
          </span>
        )
      )}
      {suffix && (
        <span className={`${charTW} ${digitClassName}`}>{suffix}</span>
      )}
    </span>
  );
}