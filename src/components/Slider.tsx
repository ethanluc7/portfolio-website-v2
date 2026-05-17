import { useRef } from "react";

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  trackColor: string;
  fillColor: string;
  className?: string;
}

export default function Slider({
  value,
  onChange,
  trackColor,
  fillColor,
  className = "",
}: SliderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  function getRatio(clientX: number) {
    if (!ref.current) return 0;
    const rect = ref.current.getBoundingClientRect();
    return Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
  }

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    onChange(getRatio(e.clientX));
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return;
    onChange(getRatio(e.clientX));
  }

  function onPointerUp() {
    dragging.current = false;
  }

  return (
    <div
      ref={ref}
      className={`h-1.5 rounded-full cursor-pointer shrink-0 ${className}`}
      style={{ backgroundColor: trackColor, touchAction: "none" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <div
        className="h-full rounded-full transition-colors duration-700"
        style={{
          width: `${value * 100}%`,
          backgroundColor: fillColor,
        }}
      />
    </div>
  );
}
