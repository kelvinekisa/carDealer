import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };
const base = (props: IconProps) => ({ width: props.size ?? 18, height: props.size ?? 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, ...props });
export function ArrowUpRight(props: IconProps) { return <svg {...base(props)}><path d="M7 17 17 7M7 7h10v10" /></svg>; }
export function ArrowRight(props: IconProps) { return <svg {...base(props)}><path d="M5 12h14m-6-6 6 6-6 6" /></svg>; }
export function ArrowLeft(props: IconProps) { return <svg {...base(props)}><path d="M19 12H5m6 6-6-6 6-6" /></svg>; }
export function Search(props: IconProps) { return <svg {...base(props)}><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>; }
export function Menu(props: IconProps) { return <svg {...base(props)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>; }
export function X(props: IconProps) { return <svg {...base(props)}><path d="m6 6 12 12M18 6 6 18" /></svg>; }
export function Plus(props: IconProps) { return <svg {...base(props)}><path d="M12 5v14M5 12h14" /></svg>; }
export function Minus(props: IconProps) { return <svg {...base(props)}><path d="M5 12h14" /></svg>; }
export function Check(props: IconProps) { return <svg {...base(props)}><path d="m5 12 4 4L19 6" /></svg>; }
export function ChevronDown(props: IconProps) { return <svg {...base(props)}><path d="m6 9 6 6 6-6" /></svg>; }
export function ChevronRight(props: IconProps) { return <svg {...base(props)}><path d="m9 18 6-6-6-6" /></svg>; }
export function Sliders(props: IconProps) { return <svg {...base(props)}><path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h10M18 18h2" /><circle cx="16" cy="6" r="2" /><circle cx="8" cy="12" r="2" /><circle cx="16" cy="18" r="2" /></svg>; }
export function Heart(props: IconProps) { return <svg {...base(props)}><path d="M20.8 8.6c0 5.2-8.8 10.4-8.8 10.4S3.2 13.8 3.2 8.6a4.6 4.6 0 0 1 8.8-1.9 4.6 4.6 0 0 1 8.8 1.9Z" /></svg>; }
export function MessageCircle(props: IconProps) { return <svg {...base(props)}><path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.2 8.2 0 0 1-3.3-.7L4 20l1.7-4.3A7.3 7.3 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" /></svg>; }
export function Phone(props: IconProps) { return <svg {...base(props)}><path d="M5 4.5 8 3l2.2 5-2.1 1.3a14 14 0 0 0 6.7 6.7l1.3-2.1 5 2.2-1.5 3c-.5 1.2-1.8 1.7-3 1.3C9.2 18.1 5.9 14.8 3.7 7.5c-.4-1.2.1-2.5 1.3-3Z" /></svg>; }
export function Calendar(props: IconProps) { return <svg {...base(props)}><rect x="3.5" y="5" width="17" height="16" rx="1.5" /><path d="M7 3v4M17 3v4M3.5 9h17" /></svg>; }
export function Clock(props: IconProps) { return <svg {...base(props)}><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" /></svg>; }
export function MapPin(props: IconProps) { return <svg {...base(props)}><path d="M19 10.2c0 5.1-7 10.3-7 10.3S5 15.3 5 10.2a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></svg>; }
export function Gauge(props: IconProps) { return <svg {...base(props)}><path d="M4.5 16a8 8 0 1 1 15 0M12 12l4-4M5 19h14" /></svg>; }
export function Fuel(props: IconProps) { return <svg {...base(props)}><path d="M6 20V4h8v16M6 8h8M14 8h3l2 2v7a1.5 1.5 0 0 0 3 0v-5" /><path d="M9 20h4" /></svg>; }
export function Settings(props: IconProps) { return <svg {...base(props)}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.7 1.7-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.1h-2.4v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L8 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H6v-2.4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L7.3 8 9 6.3l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V5h2.4v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19 8l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.1v2.4h-.1a1.7 1.7 0 0 0-1.6 1Z" /></svg>; }
export function LayoutGrid(props: IconProps) { return <svg {...base(props)}><rect x="4" y="4" width="6" height="6" /><rect x="14" y="4" width="6" height="6" /><rect x="4" y="14" width="6" height="6" /><rect x="14" y="14" width="6" height="6" /></svg>; }
export function Car(props: IconProps) { return <svg {...base(props)}><path d="m5 16-1 3m15-3 1 3M4 16V9.5l2-1 1.5-4h9L18 8.5l2 1V16H4ZM7 13h.1M17 13h.1M6 8.5h12" /></svg>; }
export function Users(props: IconProps) { return <svg {...base(props)}><circle cx="9" cy="8" r="3" /><path d="M3.5 19c.3-3 2.2-4.5 5.5-4.5s5.2 1.5 5.5 4.5M16 5.5a3 3 0 0 1 0 5.8M17 14.8c2 .4 3.2 1.8 3.5 4.2" /></svg>; }
export function TrendUp(props: IconProps) { return <svg {...base(props)}><path d="m4 16 5-5 3 3 7-7M14 7h5v5" /></svg>; }
export function MoreHorizontal(props: IconProps) { return <svg {...base(props)}><circle cx="5" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="19" cy="12" r="1" fill="currentColor" /></svg>; }
export function Download(props: IconProps) { return <svg {...base(props)}><path d="M12 4v11m-4-4 4 4 4-4M5 20h14" /></svg>; }
export function Upload(props: IconProps) { return <svg {...base(props)}><path d="M12 16V5m-4 4 4-4 4 4M5 20h14" /></svg>; }
export function MenuDots(props: IconProps) { return <svg {...base(props)}><circle cx="12" cy="5" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="19" r="1" fill="currentColor" /></svg>; }
export function Spark(props: IconProps) { return <svg {...base(props)}><path d="m12 3 1.3 5.7L19 10l-5.7 1.3L12 17l-1.3-5.7L5 10l5.7-1.3L12 3ZM19 16l.5 2.5L22 19l-2.5.5L19 22l-.5-2.5L16 19l2.5-.5L19 16Z" /></svg>; }
export function Bell(props: IconProps) { return <svg {...base(props)}><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4" /></svg>; }
