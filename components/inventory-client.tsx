"use client";
import { useMemo, useState } from "react";
import { Search, Sliders, X } from "@/components/icons";
import { vehicles } from "@/data/vehicles";
import { VehicleCard } from "@/components/vehicle-card";

export default function InventoryClient() {
  const [make, setMake] = useState("All makes"); const [sort, setSort] = useState("Featured"); const [query, setQuery] = useState(""); const [filters, setFilters] = useState(false);
  const makes = ["All makes", ...Array.from(new Set(vehicles.map((v) => v.make)))];
  const filtered = useMemo(() => vehicles.filter((v) => (make === "All makes" || v.make === make) && `${v.make} ${v.model} ${v.ref}`.toLowerCase().includes(query.toLowerCase())).sort((a,b) => sort === "Price: low to high" ? a.price-b.price : sort === "Price: high to low" ? b.price-a.price : sort === "Lowest mileage" ? a.mileage-b.mileage : b.year-a.year), [make,sort,query]);
  return <div className="inventory-page"><div className="inventory-toolbar"><div className="toolbar-left"><button className="toolbar-button" onClick={() => setFilters(!filters)}><Sliders size={15} /> Filters <span className="filter-count">{make !== "All makes" ? "1" : ""}</span></button><div className="search-inline"><Search size={14} /><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search collection" /></div><span className="results-count">{filtered.length.toString().padStart(2,"0")} vehicles</span></div><div className="toolbar-right"><span className="sort-label">Sort by</span><select className="sort-select" value={sort} onChange={(e)=>setSort(e.target.value)}><option>Featured</option><option>Newest arrivals</option><option>Price: low to high</option><option>Price: high to low</option><option>Lowest mileage</option></select></div></div><div className={`filter-drawer ${filters ? "open" : ""}`}><div><label>Make</label><select value={make} onChange={(e)=>setMake(e.target.value)}>{makes.map(m=><option key={m}>{m}</option>)}</select></div><button onClick={()=>{setMake("All makes");setQuery("")}}><X size={14}/> Clear</button></div><div className="inventory-grid">{filtered.map((vehicle)=><VehicleCard key={vehicle.id} vehicle={vehicle} />)}</div>{filtered.length===0 && <div className="empty-state"><Search size={24}/><h3>No vehicles found.</h3><p>Try another make, model or reference.</p></div>}</div>;
}
