"use client";

export default function GradientOrbs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Top-right cyan orb */}
      <div
        className="absolute -top-32 -right-32 h-[500px] w-[500px] animate-[float_20s_ease-in-out_infinite] rounded-full bg-gradient-to-br from-cyan-300/15 to-blue-400/10 blur-3xl"
        style={{ willChange: "transform" }}
      />

      {/* Bottom-left purple orb */}
      <div
        className="absolute -bottom-40 -left-40 h-[600px] w-[600px] animate-[float_25s_ease-in-out_infinite_reverse] rounded-full bg-gradient-to-tr from-purple-300/10 to-cyan-300/10 blur-3xl"
        style={{ willChange: "transform" }}
      />

      {/* Center-right small accent orb */}
      <div
        className="absolute top-1/2 right-1/4 h-[300px] w-[300px] animate-[float_18s_ease-in-out_2s_infinite] rounded-full bg-gradient-to-bl from-blue-300/10 to-indigo-300/5 blur-3xl"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
