export type Motorhome = {
  slug: string;
  stockNumber: string;
  year: number;
  brand: string;
  model: string;
  title: string;
  price: number;
  kilometres: number;
  berths: number;
  seatbelts: number;
  lengthMetres: number;
  chassis: string;
  engine: string;
  transmission: string;
  fuel: "Diesel";
  gvmKg: number;
  licence: "Car" | "Light Rigid";
  freshWaterL: number;
  greyWaterL: number;
  image: string;
  gallery: string[];
  summary: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
};

function listingImages(stock: string, count: number) {
  const gallery = Array.from(
    { length: count },
    (_, index) => `/images/listings/${stock}/${String(index + 1).padStart(2, "0")}.jpg`,
  );
  return { image: gallery[0], gallery };
}

export const motorhomes: Motorhome[] = [
  {
    slug: "2021-kea-river-m721",
    stockNumber: "10783",
    year: 2021,
    brand: "KEA",
    model: "River M721",
    title: "2021 KEA River M721",
    price: 134990,
    kilometres: 136444,
    berths: 6,
    seatbelts: 6,
    lengthMetres: 7.21,
    chassis: "Mercedes-Benz",
    engine: "2.2L turbo-diesel",
    transmission: "7-speed automatic",
    fuel: "Diesel",
    gvmKg: 4490,
    licence: "Car",
    freshWaterL: 0,
    greyWaterL: 0,
    ...listingImages("10783", 22),
    summary:
      "Six-berth Mercedes C-class: cab-over bed, dinette conversion and rear U-lounge — car licence, $134,990.",
    description:
      "The 2021 KEA River M721 is the family layout on this list. Mercedes-Benz chassis, 2.2-litre turbo-diesel and a 7-speed automatic, with a 4,490 kg GVM so it stays on a standard car licence. Sleeps six across the cab-over bed, café dinette conversion and rear U-shaped lounge. Mid kitchen with stove, microwave and two-way fridge, combination bathroom with shower, toilet and basin. 136,444 km, stock 10783, NSW yard, delivery to Brisbane.",
    features: [
      "Seats 6, sleeps 6 with three separate sleeping areas",
      "Rear U-shaped lounge converts to a double",
      "Cab-over bed plus café dinette conversion",
      "Mercedes-Benz 2.2L turbo-diesel, 7-speed automatic",
      "4,490 kg GVM — standard car licence",
      "Combination bathroom with shower, toilet and basin",
      "House air-conditioning, microwave and 12V fridge/freezer",
      "Awning, reversing camera, cruise control",
    ],
    specs: [
      { label: "Stock", value: "10783" },
      { label: "Build", value: "March 2021" },
      { label: "GVM", value: "4,490 kg" },
      { label: "Licence", value: "Car" },
      { label: "Berths / belts", value: "6 / 6" },
      { label: "Layout", value: "C-class, rear U-lounge" },
    ],
  },
  {
    slug: "2023-avida-birdsville-c7454sl-10806",
    stockNumber: "10806",
    year: 2023,
    brand: "Avida",
    model: "Birdsville C7454SL",
    title: "2023 Avida Birdsville C7454SL",
    price: 189990,
    kilometres: 14857,
    berths: 4,
    seatbelts: 4,
    lengthMetres: 7.45,
    chassis: "Fiat Ducato",
    engine: "160 hp 2.2L turbo-diesel",
    transmission: "9-speed automatic",
    fuel: "Diesel",
    gvmKg: 4400,
    licence: "Car",
    freshWaterL: 0,
    greyWaterL: 0,
    ...listingImages("10806", 24),
    summary:
      "Low-kilometre 2023 Birdsville: electric slide-out, east/west island bed, rear dry ensuite, Fiat Ducato auto.",
    description:
      "This February 2023 Avida Birdsville C7454SL has travelled 14,857 km. Fiat Ducato 160 hp 2.2-litre turbo-diesel with a 9-speed automatic, 4,400 kg GVM, car licence. Large electric slide-out opens the café dinette and east/west island bed; over-cab bed sleeps guests. Full rear dry bathroom with separate shower, toilet, vanity and a top-load washing machine. Dual 120 Ah lithium, two solar panels, diesel heater. Stock 10806. NSW stock, we can deliver to Brisbane.",
    features: [
      "Large electric slide-out living area",
      "East/west island bed plus over-cab bed",
      "Rear dry bathroom with washing machine",
      "2 × 120 Ah lithium batteries and dual solar",
      "Fiat Ducato 160 hp, 9-speed automatic",
      "4,400 kg GVM — car licence",
      "Diesel heater, house air-conditioning, three-way fridge",
      "Electric entry step, picnic table, reversing camera",
    ],
    specs: [
      { label: "Stock", value: "10806" },
      { label: "Build", value: "February 2023" },
      { label: "GVM", value: "4,400 kg" },
      { label: "Licence", value: "Car" },
      { label: "Berths / belts", value: "4 / 4" },
      { label: "Layout", value: "Slide-out island bed" },
    ],
  },
  {
    slug: "2025-sunliner-navian-n541g",
    stockNumber: "10800",
    year: 2025,
    brand: "Sunliner",
    model: "Navian N541G",
    title: "2025 Sunliner Navian N541G",
    price: 259990,
    kilometres: 7375,
    berths: 4,
    seatbelts: 4,
    lengthMetres: 8.9,
    chassis: "Iveco Daily 72-210",
    engine: "210 hp 3.0L turbo-diesel",
    transmission: "8-speed automatic",
    fuel: "Diesel",
    gvmKg: 7200,
    licence: "Light Rigid",
    freshWaterL: 0,
    greyWaterL: 0,
    ...listingImages("10800", 30),
    summary:
      "Near-new June 2025 Navian with rear garage, slide-out living, island bed and Iveco 72-210 — LR licence.",
    description:
      "June 2025 Sunliner Navian N541G on the Iveco Daily 72-210: 210 hp 3.0-litre turbo-diesel, 8-speed automatic, 7,200 kg GVM, Light Rigid licence. 7,375 km. Rear garage module for bikes and touring gear, slide-out café dinette, walk-around island bed with hidden TV, second TV in the living area, rear ensuite with separate shower, toilet, vanity and concealed washing machine. Lithium batteries, solar, leather, Starlink Mini. Stock 10800. Enquire for Brisbane delivery.",
    features: [
      "Rear garage module with extra storage",
      "Slide-out café dining and walk-around island bed",
      "Rear ensuite with concealed washing machine",
      "Iveco Daily 72-210, 210 hp 3.0L turbo-diesel",
      "7,200 kg GVM — Light Rigid licence",
      "Dual lithium batteries, solar charging, Starlink Mini",
      "Leather upholstery, two TVs, compost toilet",
      "Electric awning, picnic table, UHF, extra dash camera",
    ],
    specs: [
      { label: "Stock", value: "10800" },
      { label: "Build", value: "June 2025" },
      { label: "GVM", value: "7,200 kg" },
      { label: "Licence", value: "Light Rigid" },
      { label: "Berths / belts", value: "4 / 4" },
      { label: "Layout", value: "Slide-out, island bed, garage" },
    ],
  },
  {
    slug: "2025-avan-ovation-m11",
    stockNumber: "10795",
    year: 2025,
    brand: "Avan",
    model: "Ovation M11",
    title: "2025 Avan Ovation M11",
    price: 209990,
    kilometres: 4239,
    berths: 2,
    seatbelts: 2,
    lengthMetres: 7.95,
    chassis: "Fiat Ducato",
    engine: "2.3L turbo-diesel",
    transmission: "8-speed automatic",
    fuel: "Diesel",
    gvmKg: 4490,
    licence: "Car",
    freshWaterL: 0,
    greyWaterL: 0,
    ...listingImages("10795", 24),
    summary:
      "Current-model Ovation M11: twin slide-outs, east/west island bed, rear ensuite, 4,239 km.",
    description:
      "September 2025 Avan Ovation M11 on the Fiat Ducato with an 8-speed automatic and 4,490 kg GVM — car licence. Twin slide-outs: lounge up front, east/west island bed at the rear, private ensuite behind. 4,239 km, near-new presentation. Dual 100 Ah AGM batteries, 200 W solar, house air-conditioning, 12V fridge, bull bar and towbar. Stock 10795. NSW yard, delivery to Brisbane.",
    features: [
      "Twin slide-out living and bedroom",
      "East/west island bed",
      "Private rear ensuite",
      "Fiat Ducato 2.3L turbo-diesel, 8-speed automatic",
      "4,490 kg GVM — car licence",
      "200 W solar and dual 100 Ah AGM batteries",
      "House air-conditioning, 12V fridge/freezer, microwave",
      "Bull bar, towbar, reversing camera, satellite navigation",
    ],
    specs: [
      { label: "Stock", value: "10795" },
      { label: "Build", value: "September 2025" },
      { label: "GVM", value: "4,490 kg" },
      { label: "Licence", value: "Car" },
      { label: "Berths / belts", value: "2 / 2" },
      { label: "Layout", value: "Twin slide-out island bed" },
    ],
  },
  {
    slug: "2018-avida-esperance-c7944",
    stockNumber: "10793",
    year: 2018,
    brand: "Avida",
    model: "Esperance C7944",
    title: "2018 Avida Esperance C7944",
    price: 189990,
    kilometres: 38467,
    berths: 4,
    seatbelts: 4,
    lengthMetres: 7.94,
    chassis: "Iveco Daily 50-170",
    engine: "170 hp 3.0L turbo-diesel",
    transmission: "Automatic",
    fuel: "Diesel",
    gvmKg: 4495,
    licence: "Car",
    freshWaterL: 0,
    greyWaterL: 0,
    ...listingImages("10793", 28),
    summary:
      "Spacious non-slide Esperance: lounge plus dining, full rear ensuite, Iveco 50-170, car licence.",
    description:
      "February 2018 Avida Esperance C7944 on the Iveco Daily 50-170 automatic. 4,495 kg GVM, car licence, 38,467 km. No slide-out — wide walkways, separate lounge and dining, sleeps four, full-width rear ensuite with separate shower and toilet. Diesel heater, solar, dual AGM batteries, two TVs, electric step, hydraulic stabilisers, towbar. Stock 10793. In NSW, ready to quote Brisbane delivery.",
    features: [
      "Non-slide-out layout with separate lounge and dining",
      "Sleeps four, full-width rear ensuite",
      "Iveco Daily 50-170 automatic, 170 hp 3.0L turbo-diesel",
      "4,495 kg GVM — car licence",
      "Diesel heater, solar charging, dual AGM batteries",
      "External entertainment unit, picnic table and shower",
      "Hydraulic stabilising system and towbar",
      "Two TVs, reversing camera, satellite navigation",
    ],
    specs: [
      { label: "Stock", value: "10793" },
      { label: "Build", value: "February 2018" },
      { label: "GVM", value: "4,495 kg" },
      { label: "Licence", value: "Car" },
      { label: "Berths / belts", value: "4 / 4" },
      { label: "Layout", value: "Non-slide, rear ensuite" },
    ],
  },
  {
    slug: "2023-avida-birdsville-c7454sl-10717",
    stockNumber: "10717",
    year: 2023,
    brand: "Avida",
    model: "Birdsville C7454 SL",
    title: "2023 Avida Birdsville C7454 SL",
    price: 179990,
    kilometres: 22354,
    berths: 4,
    seatbelts: 4,
    lengthMetres: 7.45,
    chassis: "Fiat Ducato",
    engine: "160 hp 2.3L turbo-diesel",
    transmission: "9-speed automatic",
    fuel: "Diesel",
    gvmKg: 4400,
    licence: "Car",
    freshWaterL: 0,
    greyWaterL: 0,
    ...listingImages("10717", 22),
    summary:
      "One-owner Birdsville sold new by us: electric slide-out, island bed, rear ensuite, 22,354 km.",
    description:
      "One-owner February 2023 Avida Birdsville C7454 SL, originally supplied by Australian Motor Homes. 22,354 km. Fiat Ducato 160 hp turbo-diesel, 9-speed automatic, 4,400 kg GVM, car licence. Electric slide-out with café dinette and east/west island bed, over-cab bed, rear ensuite with separate shower, cassette toilet, vanity and top-load washing machine. Dual 120 Ah lithium and solar. Stock 10717. NSW stock, delivery to Brisbane.",
    features: [
      "One owner from new, originally sold by us",
      "Large electric slide-out and east/west island bed",
      "Over-cab bed — seats 4, sleeps 4",
      "Rear ensuite with top-load washing machine",
      "2 × 120 Ah lithium batteries and solar",
      "Fiat Ducato 160 hp, 9-speed automatic",
      "4,400 kg GVM — car licence",
      "Leather, house air-conditioning, reversing camera",
    ],
    specs: [
      { label: "Stock", value: "10717" },
      { label: "Build", value: "February 2023" },
      { label: "GVM", value: "4,400 kg" },
      { label: "Licence", value: "Car" },
      { label: "Berths / belts", value: "4 / 4" },
      { label: "Layout", value: "Slide-out island bed" },
    ],
  },
  {
    slug: "2022-avida-esperance-c7834-sl",
    stockNumber: "10773",
    year: 2022,
    brand: "Avida",
    model: "Esperance C7834 SL",
    title: "2022 Avida Esperance C7834 SL",
    price: 222990,
    kilometres: 20551,
    berths: 4,
    seatbelts: 4,
    lengthMetres: 7.83,
    chassis: "Iveco Daily 50-180",
    engine: "180 hp 3.0L turbo-diesel",
    transmission: "Automatic",
    fuel: "Diesel",
    gvmKg: 5200,
    licence: "Light Rigid",
    freshWaterL: 200,
    greyWaterL: 0,
    ...listingImages("10773", 28),
    summary:
      "Late-model Esperance SL: slide-out living, island bed, dry bathroom, washing machine — LR licence.",
    description:
      "November 2022 Avida Esperance C7834 SL on the Iveco Daily 50-180: 180 hp 3.0-litre turbo-diesel, automatic, 5,200 kg GVM, Light Rigid licence. 20,551 km. Slide-out café dinette, permanent island bed, dry bathroom with separate shower, toilet and vanity, front-load washing machine. Leather, diesel heater, three-panel solar, extra 200 L fresh tank, 2,800 kg towbar, UHF. Stock 10773. Enquire for Brisbane delivery.",
    features: [
      "Slide-out living with permanent island bed",
      "Dry bathroom and front-load washing machine",
      "Iveco Daily 50-180, 180 hp 3.0L turbo-diesel",
      "5,200 kg GVM — Light Rigid licence",
      "Extra 200 L fresh water tank",
      "Three-panel solar, diesel heater, leather",
      "2,800 kg towbar, UHF radio, nudge bar",
      "Two TVs, electric entry step, reversing camera",
    ],
    specs: [
      { label: "Stock", value: "10773" },
      { label: "Build", value: "November 2022" },
      { label: "GVM", value: "5,200 kg" },
      { label: "Licence", value: "Light Rigid" },
      { label: "Berths / belts", value: "4 / 4" },
      { label: "Fresh water", value: "200 L extra tank" },
    ],
  },
  {
    slug: "2016-avida-esperance-b7922-sl",
    stockNumber: "10662",
    year: 2016,
    brand: "Avida",
    model: "Esperance B7922 SL",
    title: "2016 Avida Esperance B7922 SL",
    price: 159990,
    kilometres: 100830,
    berths: 2,
    seatbelts: 3,
    lengthMetres: 7.92,
    chassis: "Iveco Daily 50-170",
    engine: "170 hp 3.0L turbo-diesel",
    transmission: "8-speed automatic",
    fuel: "Diesel",
    gvmKg: 4495,
    licence: "Car",
    freshWaterL: 0,
    greyWaterL: 0,
    ...listingImages("10662", 27),
    summary:
      "Slide-out Esperance for two: island bed, full-width ensuite, Iveco 50-170, car licence, $159,990.",
    description:
      "March 2016 Avida Esperance B7922 SL on the Iveco Daily 50-170: 170 hp 3.0-litre turbo-diesel, 8-speed automatic, 4,495 kg GVM, car licence. 100,830 km. Slide-out café lounge, two-door three-way fridge, walk-around island bed with internal and external storage, full-width rear ensuite with separate shower, cassette toilet and vanity. Triple lithium, three-panel solar, diesel heater, 2,800 kg towbar. Stock 10662. NSW stock, delivery to Brisbane.",
    features: [
      "Slide-out café lounge and island bed",
      "Sleeps 2, seats 3",
      "Full-width ensuite with separate shower and toilet",
      "Iveco Daily 50-170, 8-speed automatic",
      "4,495 kg GVM — car licence",
      "3 × lithium batteries and three-panel solar",
      "Diesel heater, two TVs, electric entry step",
      "2,800 kg towbar, reversing camera",
    ],
    specs: [
      { label: "Stock", value: "10662" },
      { label: "Build", value: "March 2016" },
      { label: "GVM", value: "4,495 kg" },
      { label: "Licence", value: "Car" },
      { label: "Berths / belts", value: "2 / 3" },
      { label: "Layout", value: "Slide-out island bed" },
    ],
  },
  {
    slug: "2023-sunliner-switch-s494g",
    stockNumber: "10754",
    year: 2023,
    brand: "Sunliner",
    model: "Switch S494G",
    title: "2023 Sunliner Switch S494G",
    price: 205990,
    kilometres: 12421,
    berths: 4,
    seatbelts: 4,
    lengthMetres: 8.5,
    chassis: "Iveco Daily 50-180",
    engine: "180 hp 3.0L turbo-diesel",
    transmission: "8-speed automatic",
    fuel: "Diesel",
    gvmKg: 5000,
    licence: "Light Rigid",
    freshWaterL: 0,
    greyWaterL: 0,
    ...listingImages("10754", 30),
    summary:
      "2023 Switch with rear garage module, slide-out island bed, ensuite washing machine — LR licence.",
    description:
      "June 2023 Sunliner Switch S494G on the Iveco Daily 50-180: 180 hp 3.0-litre turbo-diesel, 8-speed automatic, Light Rigid licence. 12,421 km. Slide-out lounge and island bed, café dinette with belted travel seats, rear garage with dual-side access, electric platform and extendable tray. Rear ensuite with shower, toilet, vanity and top-load washing machine. 2,000 VA inverter, dual 110 Ah AGM, solar, leather, hydraulic stabilisers, 2,800 kg towbar. Stock 10754. Enquire for Brisbane delivery.",
    features: [
      "Rear garage module with dual-side access",
      "Slide-out living and permanent island bed",
      "Rear ensuite with washing machine",
      "Iveco Daily 50-180, 180 hp, 8-speed automatic",
      "Light Rigid licence",
      "2,000 VA inverter, solar, dual 110 Ah AGM batteries",
      "Leather, diesel heater, electric awning with topper",
      "Hydraulic stabilisers, bull bar, 2,800 kg towbar",
    ],
    specs: [
      { label: "Stock", value: "10754" },
      { label: "Build", value: "June 2023" },
      { label: "GVM", value: "5,000 kg" },
      { label: "Licence", value: "Light Rigid" },
      { label: "Berths / belts", value: "4 / 4" },
      { label: "Layout", value: "Slide-out, island bed, garage" },
    ],
  },
];

export function getMotorhome(slug: string) {
  return motorhomes.find((item) => item.slug === slug);
}

export function getBrands() {
  return [...new Set(motorhomes.map((item) => item.brand))].sort();
}
