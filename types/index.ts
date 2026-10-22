export type VehicleStatus = "available" | "reserved" | "booked" | "sold";
export type LeadStatus = "New" | "Pending" | "Contacted" | "Qualified" | "Negotiating" | "Converted" | "Closed";

export interface Vehicle {
  id: string;
  slug: string;
  ref: string;
  make: string;
  model: string;
  trim: string;
  year: number;
  price: number;
  mileage: number;
  transmission: string;
  fuel: string;
  engine: string;
  bodyType: string;
  condition: string;
  status: VehicleStatus;
  color: string;
  interior: string;
  images: string[];
  description: string;
  features: string[];
  added: string;
  enquiryCount: number;
}

export interface Lead {
  id: string;
  customer: string;
  initials: string;
  vehicle: string;
  type: string;
  source: string;
  status: LeadStatus;
  time: string;
  phone: string;
  assigned: string;
}

export interface RequestRecord {
  id: string;
  customer: string;
  vehicle: string;
  meta: string;
  status: string;
  date: string;
}
