import { PublicFooter, PublicHeader } from "@/components/public-shell";
import HomeClient from "@/components/home-client";

export default function Home() { return <div className="site-shell"><PublicHeader overlay /><HomeClient /><PublicFooter /></div>; }
