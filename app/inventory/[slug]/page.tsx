import type { Metadata } from "next";
import { PageFrame } from "@/components/public-shell";
import VehicleDetailClient from "@/components/vehicle-detail-client";
import { getVehicle, vehicles } from "@/data/vehicles";

export function generateStaticParams() { return vehicles.map((vehicle) => ({ slug: vehicle.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const vehicle = getVehicle((await params).slug); return { title: `${vehicle.year} ${vehicle.make} ${vehicle.model} | carDealer Motors`, description: vehicle.description }; }
export default async function VehiclePage({ params }: { params: Promise<{ slug: string }> }) { const vehicle = getVehicle((await params).slug); return <PageFrame><VehicleDetailClient vehicle={vehicle} /></PageFrame>; }
