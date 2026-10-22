import Link from "next/link";
import type { Vehicle } from "@/types";
import { ArrowUpRight, Heart } from "@/components/icons";
import { formatPrice } from "@/data/vehicles";

export function StatusPill({ status }: { status: string }) { return <span className={`status-pill status-${status.toLowerCase().replaceAll(" ", "-")}`}><i />{status}</span>; }

export function VehicleCard({ vehicle, compact = false }: { vehicle: Vehicle; compact?: boolean }) {
  return <Link href={`/inventory/${vehicle.slug}`} className={`vehicle-card ${compact ? "vehicle-card-compact" : ""}`}>
    <div className="vehicle-card-image"><img src={vehicle.images[0]} alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`} loading="lazy" /><div className="vehicle-card-image-shade" /><span className="vehicle-ref">{vehicle.ref}</span><button className="card-heart" aria-label={`Save ${vehicle.make} ${vehicle.model}`} onClick={(event) => event.preventDefault()}><Heart size={16} /></button><span className="card-arrow"><ArrowUpRight size={17} /></span></div>
    <div className="vehicle-card-info"><div className="vehicle-card-title"><div><p className="vehicle-year">{vehicle.year} · {vehicle.bodyType}</p><h3>{vehicle.make} <em>{vehicle.model}</em></h3></div><StatusPill status={vehicle.status.toUpperCase()} /></div><div className="vehicle-card-meta"><span>{vehicle.mileage.toLocaleString()} km</span><span>{vehicle.transmission}</span><span>{vehicle.fuel}</span></div><div className="vehicle-card-price">{formatPrice(vehicle.price)}</div></div>
  </Link>;
}
