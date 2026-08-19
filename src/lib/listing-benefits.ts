import type { Motorhome } from "@/data/motorhomes";

export type BenefitChip = {
  id: string;
  label: string;
};

const featureRules: { id: string; label: string; test: (text: string) => boolean }[] = [
  {
    id: "kitchen",
    label: "Kitchen",
    test: (text) => /kitchen|microwave|cooktop|stove/.test(text),
  },
  {
    id: "bathroom",
    label: "Bathroom",
    test: (text) => /bathroom|ensuite/.test(text),
  },
  {
    id: "shower",
    label: "Shower",
    test: (text) => /shower|ensuite/.test(text),
  },
  {
    id: "toilet",
    label: "Toilet",
    test: (text) => /toilet|ensuite/.test(text),
  },
  {
    id: "solar",
    label: "Solar",
    test: (text) => /solar/.test(text),
  },
  {
    id: "ac",
    label: "Air conditioning",
    test: (text) => /air-?conditioning|air con\b/.test(text),
  },
  {
    id: "fridge",
    label: "Fridge",
    test: (text) => /fridge/.test(text),
  },
  {
    id: "awning",
    label: "Awning",
    test: (text) => /awning/.test(text),
  },
  {
    id: "storage",
    label: "Storage",
    test: (text) => /storage|\bgarage\b/.test(text),
  },
  {
    id: "washing",
    label: "Washing machine",
    test: (text) => /washing machine/.test(text),
  },
  {
    id: "slideout",
    label: "Slide-out",
    test: (text) => /slide-?out/.test(text) && !/non-slide/.test(text),
  },
  {
    id: "lithium",
    label: "Lithium",
    test: (text) => /lithium/.test(text),
  },
  {
    id: "heater",
    label: "Diesel heater",
    test: (text) => /diesel heater/.test(text),
  },
  {
    id: "island",
    label: "Island bed",
    test: (text) => /island bed/.test(text),
  },
  {
    id: "inverter",
    label: "Inverter",
    test: (text) => /inverter/.test(text),
  },
];

function vehicleText(motorhome: Motorhome) {
  return [...motorhome.features, ...motorhome.description, ...motorhome.benefits]
    .join(" ")
    .toLowerCase();
}

export function listingBenefits(motorhome: Motorhome): BenefitChip[] {
  const text = vehicleText(motorhome);
  const chips: BenefitChip[] = [
    { id: "sleeps", label: `Sleeps ${motorhome.berths}` },
    { id: "seats", label: `Seats ${motorhome.seatbelts}` },
  ];

  const transmission = motorhome.transmission.toLowerCase();
  if (transmission.includes("automatic")) {
    chips.push({ id: "transmission", label: "Automatic" });
  } else if (transmission.includes("manual")) {
    chips.push({ id: "transmission", label: "Manual" });
  }

  chips.push({ id: "fuel", label: motorhome.fuel });

  for (const rule of featureRules) {
    if (rule.test(text)) {
      chips.push({ id: rule.id, label: rule.label });
    }
  }

  chips.push({
    id: "licence",
    label: motorhome.licence === "Car" ? "Car licence" : "Light Rigid",
  });

  return chips;
}

export function listingFeatureNotes(motorhome: Motorhome): string[] {
  return motorhome.features.filter((feature) => {
    const text = feature.toLowerCase();
    if (/gvm/.test(text)) return false;
    if (/licence|license/.test(text) && !/sleeps|seats|bed|garage/.test(text)) {
      return false;
    }
    return true;
  });
}
