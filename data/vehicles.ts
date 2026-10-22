import type { Lead, RequestRecord, Vehicle } from "@/types";

const images = {
  lx: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1600&q=88",
  lc: "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=1600&q=88",
  gle: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=88",
  gclass: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1600&q=88",
  range: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=88",
  x5: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=88",
  cayenne: "https://images.unsplash.com/photo-1611651338412-8403fa6e3599?auto=format&fit=crop&w=1600&q=88",
  prado: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=88",
  rav: "https://images.unsplash.com/photo-1551830820-330a71b99659?auto=format&fit=crop&w=1600&q=88",
  defender: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=88",
};

export const vehicles: Vehicle[] = [
  { id: "v1", slug: "2024-lexus-lx600-sm-1766", ref: "SM-1766", make: "Lexus", model: "LX600", trim: "VIP Executive", year: 2024, price: 48_900_000, mileage: 12_000, transmission: "Automatic", fuel: "Petrol", engine: "3.5L V6 Twin Turbo", bodyType: "SUV", condition: "Foreign Used", status: "available", color: "Atomic Silver", interior: "Black semi-aniline leather", images: [images.lx, images.lc, images.gle], description: "A commanding expression of modern luxury. The LX600 blends effortless power with a serene, handcrafted cabin and considered technology for every journey.", features: ["Adaptive Cruise Control", "Panoramic Sunroof", "Mark Levinson Sound", "360° Camera", "Semi-aniline Leather", "Heads-up Display"], added: "2 days ago", enquiryCount: 18 },
  { id: "v2", slug: "2023-toyota-land-cruiser-lc300-sm-1742", ref: "SM-1742", make: "Toyota", model: "Land Cruiser LC300", trim: "ZX", year: 2023, price: 38_500_000, mileage: 21_400, transmission: "Automatic", fuel: "Diesel", engine: "3.3L V6 Twin Turbo", bodyType: "SUV", condition: "Foreign Used", status: "available", color: "Pearl White", interior: "Tan leather", images: [images.lc, images.prado, images.lx], description: "A new standard for unstoppable capability. The LC300 delivers presence, comfort and confidence across every terrain.", features: ["Multi-terrain Select", "JBL Premium Audio", "Ventilated Seats", "Crawl Control", "Sunroof", "Lane Trace Assist"], added: "5 days ago", enquiryCount: 24 },
  { id: "v3", slug: "2022-toyota-land-cruiser-prado-sm-1698", ref: "SM-1698", make: "Toyota", model: "Land Cruiser Prado", trim: "TX-L Package", year: 2022, price: 17_950_000, mileage: 34_800, transmission: "Automatic", fuel: "Petrol", engine: "2.7L 4-Cylinder", bodyType: "SUV", condition: "Foreign Used", status: "reserved", color: "Black Mica", interior: "Black leather", images: [images.prado, images.lc], description: "Quietly capable and unmistakably refined, the Prado is ready for the city, the coast and everything beyond.", features: ["Leather Interior", "Reverse Camera", "Dual Zone Climate", "Smart Entry", "Roof Rails", "Cruise Control"], added: "1 week ago", enquiryCount: 11 },
  { id: "v4", slug: "2024-mercedes-benz-gle450-sm-1771", ref: "SM-1771", make: "Mercedes-Benz", model: "GLE 450", trim: "4MATIC AMG Line", year: 2024, price: 29_800_000, mileage: 8_600, transmission: "Automatic", fuel: "Petrol", engine: "3.0L Inline-6", bodyType: "SUV", condition: "Foreign Used", status: "available", color: "Obsidian Black", interior: "Macchiato Beige", images: [images.gle, images.x5], description: "The GLE makes every arrival feel effortless, pairing a sculpted silhouette with intuitive luxury and sure-footed performance.", features: ["MBUX Navigation", "Burmester Sound", "Burmester Sound", "Ambient Lighting", "Panoramic Roof", "AMG Styling"], added: "3 days ago", enquiryCount: 9 },
  { id: "v5", slug: "2023-mercedes-benz-g-class-sm-1710", ref: "SM-1710", make: "Mercedes-Benz", model: "G-Class", trim: "G 63 AMG", year: 2023, price: 61_500_000, mileage: 14_200, transmission: "Automatic", fuel: "Petrol", engine: "4.0L V8 Biturbo", bodyType: "SUV", condition: "Foreign Used", status: "booked", color: "Manufaktur Olive", interior: "Nappa Black", images: [images.gclass, images.gle], description: "An icon, intensified. The G 63 AMG brings exceptional performance to a design that has never followed the crowd.", features: ["AMG Performance", "Burmester 3D Sound", "Carbon Fibre Trim", "Active Multicontour Seats", "Night Package", "360° Camera"], added: "2 weeks ago", enquiryCount: 31 },
  { id: "v6", slug: "2023-range-rover-vogue-sm-1681", ref: "SM-1681", make: "Range Rover", model: "Vogue", trim: "P530 Autobiography", year: 2023, price: 55_900_000, mileage: 19_700, transmission: "Automatic", fuel: "Petrol", engine: "4.4L V8", bodyType: "SUV", condition: "Foreign Used", status: "available", color: "Santorini Black", interior: "Caraway Windsor leather", images: [images.range, images.lx], description: "Peerless composure. Range Rover’s most luxurious expression moves through the world with quiet authority.", features: ["Executive Class Seats", "Meridian Signature Sound", "Electronic Air Suspension", "Head-up Display", "Soft Close Doors", "Panoramic Roof"], added: "3 weeks ago", enquiryCount: 16 },
  { id: "v7", slug: "2022-bmw-x5-xdrive40i-sm-1657", ref: "SM-1657", make: "BMW", model: "X5 xDrive40i", trim: "M Sport", year: 2022, price: 18_750_000, mileage: 28_100, transmission: "Automatic", fuel: "Petrol", engine: "3.0L TwinPower Turbo", bodyType: "SUV", condition: "Foreign Used", status: "sold", color: "Alpine White", interior: "Cognac Sensafin", images: [images.x5, images.gle], description: "Confidently athletic, beautifully resolved. The X5 makes everyday driving feel like a considered choice.", features: ["M Sport Package", "Harman Kardon Audio", "Gesture Control", "Panoramic Glass Roof", "Parking Assistant", "Adaptive LED"], added: "1 month ago", enquiryCount: 22 },
  { id: "v8", slug: "2023-porsche-cayenne-sm-1724", ref: "SM-1724", make: "Porsche", model: "Cayenne", trim: "GTS", year: 2023, price: 26_500_000, mileage: 16_300, transmission: "Automatic", fuel: "Petrol", engine: "4.0L V8", bodyType: "SUV", condition: "Foreign Used", status: "available", color: "Crayon Grey", interior: "Black leather / Alcantara", images: [images.cayenne, images.x5], description: "Sports car instinct, SUV versatility. The Cayenne GTS is designed for people who want the road to feel alive.", features: ["Sport Chrono Package", "Bose Surround Sound", "Adaptive Sport Seats", "Porsche Torque Vectoring", "Panoramic Roof", "Apple CarPlay"], added: "4 days ago", enquiryCount: 13 },
  { id: "v9", slug: "2024-toyota-rav4-adventure-sm-1760", ref: "SM-1760", make: "Toyota", model: "RAV4", trim: "Adventure", year: 2024, price: 9_850_000, mileage: 7_900, transmission: "Automatic", fuel: "Hybrid", engine: "2.5L Hybrid", bodyType: "SUV", condition: "Foreign Used", status: "available", color: "Urban Khaki", interior: "Black fabric", images: [images.rav, images.prado], description: "A more intelligent kind of adventure, with hybrid efficiency and the versatility to go further.", features: ["Toyota Safety Sense", "Hybrid Powertrain", "Wireless CarPlay", "Smart Entry", "Dual Zone Climate", "Reverse Camera"], added: "1 week ago", enquiryCount: 7 },
  { id: "v10", slug: "2023-land-rover-defender-110-sm-1702", ref: "SM-1702", make: "Land Rover", model: "Defender 110", trim: "X-Dynamic HSE", year: 2023, price: 31_900_000, mileage: 20_500, transmission: "Automatic", fuel: "Diesel", engine: "3.0L D300", bodyType: "SUV", condition: "Foreign Used", status: "reserved", color: "Carpathian Grey", interior: "Ebony Windsor leather", images: [images.defender, images.range], description: "Purposeful by nature, luxurious by design. Defender 110 is ready for the long way around.", features: ["Terrain Response 2", "Meridian Sound", "Wade Sensing", "Heated Steering Wheel", "Panoramic Roof", "ClearSight Mirror"], added: "2 weeks ago", enquiryCount: 15 },
];

export const leads: Lead[] = [
  { id: "l1", customer: "James Mwangi", initials: "JM", vehicle: "Lexus LX600", type: "Test Drive", source: "Website", status: "New", time: "12 min ago", phone: "+254 712 483 920", assigned: "A. Otieno" },
  { id: "l2", customer: "Sarah Wanjiku", initials: "SW", vehicle: "Toyota LC300", type: "Financing", source: "Instagram", status: "Contacted", time: "48 min ago", phone: "+254 734 221 807", assigned: "M. Hassan" },
  { id: "l3", customer: "David Otieno", initials: "DO", vehicle: "Prado TX", type: "Trade-In", source: "Website", status: "Pending", time: "2 hrs ago", phone: "+254 701 883 114", assigned: "A. Otieno" },
  { id: "l4", customer: "Anne Kilonzo", initials: "AK", vehicle: "Range Rover Vogue", type: "Enquiry", source: "WhatsApp", status: "Qualified", time: "Yesterday", phone: "+254 722 109 442", assigned: "J. Kamau" },
  { id: "l5", customer: "Brian Shah", initials: "BS", vehicle: "Mercedes G 63", type: "Enquiry", source: "Website", status: "Negotiating", time: "Yesterday", phone: "+254 711 552 931", assigned: "M. Hassan" },
];

export const testDrives: RequestRecord[] = [
  { id: "td1", customer: "James Mwangi", vehicle: "Lexus LX600", meta: "Thu, 14 Mar · 10:30 AM", status: "PENDING", date: "Today" },
  { id: "td2", customer: "Anne Kilonzo", vehicle: "Range Rover Vogue", meta: "Thu, 14 Mar · 2:00 PM", status: "CONFIRMED", date: "Today" },
  { id: "td3", customer: "Peter Njoroge", vehicle: "BMW X5", meta: "Fri, 15 Mar · 11:00 AM", status: "CONFIRMED", date: "Tomorrow" },
  { id: "td4", customer: "Nadia Ali", vehicle: "Porsche Cayenne", meta: "Sat, 16 Mar · 9:30 AM", status: "COMPLETED", date: "This week" },
];

export const tradeIns: RequestRecord[] = [
  { id: "tr1", customer: "David Otieno", vehicle: "2020 Toyota Harrier", meta: "52,300 km · KES 5.8M expected", status: "UNDER REVIEW", date: "2 hrs ago" },
  { id: "tr2", customer: "Mercy Achieng", vehicle: "2019 BMW X3", meta: "68,100 km · KES 4.2M expected", status: "VALUED", date: "Yesterday" },
  { id: "tr3", customer: "Omar Hassan", vehicle: "2021 Mercedes C200", meta: "31,900 km · KES 5.9M expected", status: "OFFER SENT", date: "2 days ago" },
];

export const financing: RequestRecord[] = [
  { id: "f1", customer: "Sarah Wanjiku", vehicle: "Toyota Land Cruiser LC300", meta: "30% deposit · 48 months · KES 769k/mo", status: "IN REVIEW", date: "48 min ago" },
  { id: "f2", customer: "John Kamau", vehicle: "Mercedes-Benz GLE 450", meta: "KES 6M deposit · 36 months · KES 827k/mo", status: "CONTACTED", date: "Yesterday" },
  { id: "f3", customer: "Nadia Ali", vehicle: "Porsche Cayenne GTS", meta: "25% deposit · 60 months · KES 548k/mo", status: "APPROVED", date: "3 days ago" },
];

export const formatPrice = (value: number) => `KES ${value.toLocaleString("en-KE")}`;
export const getVehicle = (slug: string) => vehicles.find((vehicle) => vehicle.slug === slug) ?? vehicles[0];
