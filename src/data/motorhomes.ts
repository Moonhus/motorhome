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

export const motorhomes: Motorhome[] = [
  {
    slug: "2019-jayco-conquest-dx-iv25-5",
    stockNumber: "CP-1901",
    year: 2019,
    brand: "Jayco",
    model: "Conquest DX IV.25.5",
    title: "2019 Jayco Conquest DX IV.25.5",
    price: 119990,
    kilometres: 41300,
    berths: 4,
    seatbelts: 4,
    lengthMetres: 7.95,
    chassis: "Iveco Daily 50C",
    engine: "3.0L bi-turbo diesel, 150 kW",
    transmission: "8-speed Hi-Matic automatic",
    fuel: "Diesel",
    gvmKg: 4495,
    licence: "Car",
    freshWaterL: 100,
    greyWaterL: 100,
    image: "/images/jayco-conquest-dx.jpg",
    gallery: [
      "/images/jayco-conquest-dx.jpg",
      "/images/interior-living.jpg",
      "/images/interior-alcove.jpg",
    ],
    summary:
      "A low-kilometre Iveco Conquest DX with air-bag suspension, alcove bunk and a full ensuite — serious touring, still on a car licence.",
    description:
      "If you want a late-model Australian C-class that still feels composed at highway speed, this 2019 Jayco Conquest DX IV.25.5 is the one to enquire on first. It sits on the Iveco Daily 50C with the 3.0-litre bi-turbo and eight-speed Hi-Matic, so the drive is quiet, tall-geared and easy. At 7.95 m you get a proper over-cab bunk, four seatbelts, four berths and Jayco’s fibreglass Tough Frame — plus electric awning, solar, dual house batteries, diesel heater and a separate shower and toilet. 41,300 km, in NSW stock, ready to deliver to Brisbane.",
    features: [
      "Iveco Daily rear-wheel drive with air-bag suspension",
      "Over-cab alcove double plus dinette conversion",
      "Separate shower and toilet ensuite",
      "Electric roll-out awning and BBQ bayonet",
      "160 W solar and dual 100 Ah house batteries",
      "Diesel heater, microwave, oven and grill",
      "Reversing camera and towbar",
      "Car licence GVM",
    ],
    specs: [
      { label: "Travel length", value: "7.95 m" },
      { label: "Travel height", value: "3.24 m" },
      { label: "GVM", value: "4,495 kg" },
      { label: "Tare (approx.)", value: "3,980 kg" },
      { label: "Fresh / grey water", value: "100 L / 100 L" },
    ],
  },
  {
    slug: "2018-jayco-conquest-25-1",
    stockNumber: "CP-1802",
    year: 2018,
    brand: "Jayco",
    model: "Conquest 25-1",
    title: "2018 Jayco Conquest 25-1",
    price: 89990,
    kilometres: 62400,
    berths: 4,
    seatbelts: 4,
    lengthMetres: 7.99,
    chassis: "Fiat Ducato / AL-KO",
    engine: "3.0L turbo-diesel, 132 kW",
    transmission: "6-speed Comfort-Matic",
    fuel: "Diesel",
    gvmKg: 4490,
    licence: "Car",
    freshWaterL: 125,
    greyWaterL: 125,
    image: "/images/jayco-conquest-25-1.jpg",
    gallery: [
      "/images/jayco-conquest-25-1.jpg",
      "/images/interior-living.jpg",
      "/images/interior-alcove.jpg",
    ],
    summary:
      "Jayco’s most useful 25-foot layout: slide-out island bed, luton for guests, wet ensuite, Fiat Ducato, car licence.",
    description:
      "The 2018 Jayco Conquest 25-1 is the layout people come back for. A slide-out queen island bed you can actually walk around, a luton peak when family stays, and a separate shower and toilet so camp mornings are civilised. Underneath is the Fiat Ducato with AL-KO motorhome chassis, 3.0-litre turbo-diesel and Comfort-Matic — all under 4.5 t, so it is a standard car licence. Silver bull bar, wind-out awning, three-way fridge. 62,400 km. NSW stock, delivery to Brisbane.",
    features: [
      "Slide-out queen island bed with under-bed storage",
      "Luton peak over-cab double",
      "Separate shower and toilet",
      "3.0L turbo-diesel Fiat Ducato",
      "AL-KO motorhome chassis",
      "Three-way fridge/freezer and microwave",
      "Silver bull bar and roll-out awning",
      "Rear-view camera",
    ],
    specs: [
      { label: "Travel length", value: "7.99 m" },
      { label: "Exterior width", value: "2.39 m" },
      { label: "GVM", value: "4,490 kg" },
      { label: "Internal height", value: "2.10 m" },
      { label: "Fresh / grey water", value: "125 L / 125 L" },
    ],
  },
  {
    slug: "2018-avan-ovation-m7-alcove-titanium",
    stockNumber: "CP-1803",
    year: 2018,
    brand: "Avan",
    model: "Ovation M7 Alcove Titanium",
    title: "2018 Avan Ovation M7 Alcove Titanium",
    price: 67900,
    kilometres: 54120,
    berths: 4,
    seatbelts: 4,
    lengthMetres: 7.92,
    chassis: "Fiat Ducato Maxi",
    engine: "3.0L Multijet turbo-diesel, 180 hp",
    transmission: "6-speed AMT automatic",
    fuel: "Diesel",
    gvmKg: 4490,
    licence: "Car",
    freshWaterL: 103,
    greyWaterL: 110,
    image: "/images/avan-ovation-m7.jpg",
    gallery: [
      "/images/avan-ovation-m7.jpg",
      "/images/interior-living.jpg",
      "/images/interior-alcove.jpg",
    ],
    summary:
      "Titanium-pack Ovation M7 alcove on a Fiat Ducato Maxi — 7.92 m, car licence, and the sharpest price on the yard at $67,900.",
    description:
      "This is the Ovation people mean when they ask for an Australian C-class that still feels special. The 2018 Avan Ovation M7 Alcove wears the Titanium graphics pack, with insulated composite walls, double-glazed hoppers, roof air-conditioning and a full-width rear ensuite. The Fiat Ducato Maxi 3.0-litre and six-speed AMT make Brisbane traffic and the highway equally undramatic. Sleeps four between the alcove and dinette, wind-out awning fitted, 54,120 km. Drive away $67,900, delivered from NSW.",
    features: [
      "Titanium exterior graphics pack",
      "C-class alcove sleeping over the cab",
      "Full-width rear ensuite",
      "Belaire reverse-cycle roof air-conditioning",
      "Dometic cooktop and oven, 185 L three-way fridge",
      "Double-glazed windows with blinds and flyscreens",
      "Wind-out awning",
      "Standard car licence",
    ],
    specs: [
      { label: "Travel length", value: "7.92 m" },
      { label: "Travel height", value: "3.03 m" },
      { label: "GVM", value: "4,490 kg" },
      { label: "Kerb mass", value: "3,810 kg" },
      { label: "Fresh / grey water", value: "103 L / 110 L" },
    ],
  },
  {
    slug: "2015-sunliner-holiday-601-iveco-premium",
    stockNumber: "CP-1504",
    year: 2015,
    brand: "Sunliner",
    model: "Holiday 601 Iveco Premium",
    title: "2015 Sunliner Holiday 601 Iveco Premium",
    price: 69990,
    kilometres: 98600,
    berths: 4,
    seatbelts: 4,
    lengthMetres: 7.2,
    chassis: "Iveco Daily",
    engine: "3.0L turbo-diesel",
    transmission: "Automatic",
    fuel: "Diesel",
    gvmKg: 4495,
    licence: "Car",
    freshWaterL: 100,
    greyWaterL: 80,
    image: "/images/sunliner-holiday-601.jpg",
    gallery: [
      "/images/sunliner-holiday-601.jpg",
      "/images/interior-living.jpg",
      "/images/interior-alcove.jpg",
    ],
    summary:
      "Australian-built Sunliner Holiday on Iveco Daily: Premium pack, silver bull bar, electric step, four berths.",
    description:
      "Sunliner still builds in Australia, and this 2015 Holiday 601 Iveco Premium is the sort of no-drama tourer that lasts. High-profile alcove body, Iveco Daily automatic, silver bull bar and an electric side step. Inside, the Premium pack lifts the furnishings; you get four berths with the over-cab double, a practical mid kitchen and a rear bathroom. Ideal for a couple who still want a bunk for grandkids. 98,600 km, in NSW, delivery to Brisbane available.",
    features: [
      "Iveco Daily chassis with automatic transmission",
      "Premium interior pack",
      "High-profile alcove over-cab bed",
      "Silver bull bar and electric entry step",
      "Roll-out awning",
      "Reverse-cycle air-conditioning",
      "Separate bathroom",
      "Car licence GVM",
    ],
    specs: [
      { label: "Travel length", value: "7.20 m" },
      { label: "Chassis", value: "Iveco Daily" },
      { label: "GVM", value: "4,495 kg" },
      { label: "Berths / belts", value: "4 / 4" },
      { label: "Fresh / grey water", value: "100 L / 80 L" },
    ],
  },
  {
    slug: "2014-auto-trail-delaware",
    stockNumber: "CP-1405",
    year: 2014,
    brand: "Auto-Trail",
    model: "Delaware",
    title: "2014 Auto-Trail Delaware",
    price: 74990,
    kilometres: 89200,
    berths: 4,
    seatbelts: 4,
    lengthMetres: 7.9,
    chassis: "Fiat Ducato",
    engine: "2.3L JTD turbo-diesel",
    transmission: "Automatic",
    fuel: "Diesel",
    gvmKg: 4250,
    licence: "Car",
    freshWaterL: 135,
    greyWaterL: 90,
    image: "/images/auto-trail-delaware.jpg",
    gallery: [
      "/images/auto-trail-delaware.jpg",
      "/images/interior-living.jpg",
      "/images/interior-alcove.jpg",
    ],
    summary:
      "British luxury coachbuilt: fixed rear island bed, 7.9 m Fiat Ducato, low-line profile, car-licence GVM.",
    description:
      "If you are tired of making up a dinette every night, the 2014 Auto-Trail Delaware is the antidote. A proper rear island bed, a compact lounge up front, and a low-line British coachbuilt body that sits quietly on the road. 7.9 m long, 4,250 kg GVM, Fiat Ducato turbo-diesel automatic, charcoal cladding and a silver bull bar. Truma heating and hot water, roll-out awning, external shower. 89,200 km. NSW stock, we can deliver to Brisbane.",
    features: [
      "Fixed rear island bed",
      "Front lounge converts to a second double",
      "Low-line aerodynamic profile",
      "Fiat Ducato turbo-diesel automatic",
      "Truma heating and hot water",
      "Roll-out awning and external shower",
      "Silver bull bar",
      "Car licence GVM",
    ],
    specs: [
      { label: "Travel length", value: "7.90 m" },
      { label: "Width", value: "2.35 m" },
      { label: "GVM", value: "4,250 kg" },
      { label: "Layout", value: "Rear island bed" },
      { label: "Berths / belts", value: "4 / 4" },
    ],
  },
  {
    slug: "2014-sunliner-twist-le",
    stockNumber: "CP-1406",
    year: 2014,
    brand: "Sunliner",
    model: "Twist LE",
    title: "2014 Sunliner Twist LE",
    price: 62990,
    kilometres: 71850,
    berths: 4,
    seatbelts: 4,
    lengthMetres: 7.6,
    chassis: "Fiat Ducato",
    engine: "3.0L turbo-diesel, 130 kW",
    transmission: "6-speed automatic",
    fuel: "Diesel",
    gvmKg: 4495,
    licence: "Car",
    freshWaterL: 100,
    greyWaterL: 55,
    image: "/images/sunliner-twist-le.jpg",
    gallery: [
      "/images/sunliner-twist-le.jpg",
      "/images/interior-living.jpg",
      "/images/interior-alcove.jpg",
    ],
    summary:
      "Australian-built Twist LE: slide-out living, east-west bed, dry ensuite — 25 feet that parks like a van.",
    description:
      "The Sunliner Twist is how you get a slide-out lounge, a fixed east-west bed and a dry ensuite without committing to an eight-metre island-bed coachbuilt. This LE wears the lime and black graphics and a silver bull bar on the Fiat Ducato 3.0-litre automatic. Diesel heater, roof air-con, roll-out awning and a BBQ point outside. Easy to place in a carpark, easy on a car licence. 71,850 km. Enquire for Brisbane delivery.",
    features: [
      "Slide-out living and dining area",
      "Fixed east-west bed",
      "Dry ensuite",
      "Fiat Ducato 3.0L automatic",
      "Diesel heater and roof air-conditioning",
      "Roll-out awning and external BBQ",
      "Lime green LE graphics and silver bull bar",
      "Electric entry step",
    ],
    specs: [
      { label: "Travel length", value: "7.60 m (25 ft)" },
      { label: "Chassis", value: "Fiat Ducato" },
      { label: "GVM", value: "4,495 kg" },
      { label: "Fresh / grey water", value: "100 L / 55 L" },
      { label: "Gas", value: "2 × 4 kg" },
    ],
  },
];

export function getMotorhome(slug: string) {
  return motorhomes.find((item) => item.slug === slug);
}

export function getBrands() {
  return [...new Set(motorhomes.map((item) => item.brand))].sort();
}
