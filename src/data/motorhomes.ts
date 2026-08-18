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
      "Low-kilometre Iveco-based Conquest DX with air-bag suspension, alcove bunk and a full ensuite — a serious touring motorhome on a car licence.",
    description:
      "This 2019 Jayco Conquest DX IV.25.5 sits on the Iveco Daily 50C chassis with the 3.0-litre bi-turbo diesel and eight-speed automatic. At 7.95 m it is a proper C-class tourer: over-cab sleeping, four berths, four seatbelts and Jayco’s fibreglass Tough Frame body. Fitted with electric awning, solar, dual house batteries, diesel heater and a separate shower and toilet, it is ready for long Queensland runs or a lap of the country. Inspected at our Brisbane yard.",
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
      "Fiat-based Conquest with slide-out island bed, luton peak and a full wet ensuite — four berths, four belts, car licence.",
    description:
      "The 2018 Jayco Conquest 25-1 is one of the most useful layouts Jayco built: a slide-out island bed, over-cab luton for guests, and a separate shower and toilet. Built on the Fiat Ducato with AL-KO motorhome chassis, it stays under 4.5 t so it can be driven on a standard car licence. Silver bull bar, wind-out awning and a three-way fridge make it an easy weekender or full-timer. Currently in Brisbane stock.",
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
      "Titanium-pack Ovation M7 alcove on a Fiat Ducato Maxi — 7.92 m, car licence, and priced to move at $67,900.",
    description:
      "Avan’s Ovation M7 Alcove with the Titanium exterior pack is a high-spec Australian C-class: insulated composite body, double-glazed hopper windows, roof air-conditioning and a full-width rear ensuite. The 3.0-litre Ducato Maxi and six-speed automated gearbox keep it easy around Brisbane and composed on the highway. Alcove bunk over the cab plus a dinette bed sleeps four. Wind-out awning is fitted. A sharp buy in the current market.",
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
      "Australian-built Sunliner Holiday on Iveco Daily, Premium pack, silver bull bar and electric entry step.",
    description:
      "Sunliner builds in Australia, and this 2015 Holiday 601 Iveco Premium shows it: a high-profile alcove body, Iveco Daily chassis, silver bull bar and an electric side step. The Premium pack adds upgraded furnishings and touring kit. Four berths with the over-cab double, a practical mid kitchen and a rear bathroom. A proven, no-nonsense tourer for couples who still want the extra bunk for grandkids. Available to view in Brisbane.",
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
      "British luxury coachbuilt with a fixed rear island bed, 7.9 m Fiat Ducato base and a composed low-line profile.",
    description:
      "Auto-Trail’s Frontier Delaware is a different flavour to the Australian C-class crowd: a low-line British coachbuilt with a proper rear island bed and a compact lounge up front. At 7.9 m and 4,250 kg GVM it is easy to place on the road. Charcoal lower cladding, silver bull bar and the Fiat Ducato diesel drivetrain. Ideal for a couple who want a real bedroom rather than making up a dinette every night. In stock in Brisbane.",
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
      "Compact Australian-built Twist with slide-out living, east-west bed and the lime-green LE graphics — easy to drive, easy to park.",
    description:
      "The Sunliner Twist is all about space in a 25-foot package: a slide-out lounge/diner, a fixed east-west bed and a dry ensuite. This LE example wears the lime and black side graphics and a silver bull bar on the Fiat Ducato 3.0-litre automatic. Diesel heater, roof air-con, roll-out awning and an external BBQ point. A smart choice if you want something more wieldy than an eight-metre island-bed coachbuilt. View at our Brisbane yard.",
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
