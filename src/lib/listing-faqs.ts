import type { Motorhome } from "@/data/motorhomes";

export function listingFaqs(motorhome: Motorhome) {
  return [
    {
      question: "Can I inspect the motorhome?",
      answer:
        "Yes. Inspections are by appointment at our South Australia yard.",
    },
    {
      question: "Can I organise a test drive?",
      answer:
        "Yes. Mention it on your enquiry and we will book a test drive with the inspection.",
    },
    {
      question: "Do you accept trade-ins?",
      answer:
        "Yes. Tell us what you have when you enquire and we will look at it.",
    },
    {
      question: "What licence do I need?",
      answer:
        motorhome.licence === "Car"
          ? `A standard Australian car licence is enough. This motorhome is ${motorhome.gvmKg.toLocaleString("en-AU")} kg GVM.`
          : `This motorhome is ${motorhome.gvmKg.toLocaleString("en-AU")} kg GVM, so it needs a Light Rigid (LR) licence.`,
    },
    {
      question: "Can you help with finance?",
      answer: "Yes. Ask on your enquiry and we will point you to finance options.",
    },
    {
      question: "Where is the motorhome located?",
      answer:
        "Stock sits at our South Australia yard. We work with Brisbane buyers every week.",
    },
    {
      question: "How do I make an enquiry?",
      answer:
        "Use the form on this page with your name, email and mobile. We will be in touch shortly.",
    },
  ];
}
