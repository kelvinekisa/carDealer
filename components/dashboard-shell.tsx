"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Car, ChevronRight, LayoutGrid, TrendUp, Users, Calendar, Settings, ArrowUpRight } from "@/components/icons";
import { BrandMark } from "@/components/public-shell";

const nav = [["Overview","/dashboard",LayoutGrid],["Inventory","/dashboard/inventory",Car],["Leads","/dashboard/leads",Users],["Test drives","/dashboard/test-drives",Calendar],["Trade-ins","/dashboard/trade-ins",ArrowUpRight],["Financing","/dashboard/financing",ChevronRight],["Analytics","/dashboard/analytics",TrendUp]] as const;
export default function DashboardShell({ children }: { children: React.ReactNode }) { const path=usePathname(); return <div className="dashboard-shell"><aside className="dashboard-sidebar"><BrandMark/><p className="dash-nav-label">WORKSPACE</p><nav className="dash-nav">{nav.map(([label,href,Icon])=><Link key={href} href={href} className={path===href?"active":""}><Icon size={15}/>{label}</Link>)}</nav><div className="dash-spacer"/><div className="dash-user"><span className="avatar">AO</span><div><strong>Alex Otieno</strong><small>Sales manager</small></div><Settings size={14}/></div></aside><section className="dashboard-main"><header className="dash-topbar"><p>THURSDAY, 14 MARCH 2024 · NAIROBI</p><div className="dash-top-actions"><span className="notification"><Bell size={16}/></span><span className="avatar">AO</span></div></header>{children}</section></div>; }
