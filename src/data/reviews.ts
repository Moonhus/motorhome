export const reviewPhotos = [
  "/images/reviews/01.jpg",
  "/images/reviews/02.jpg",
  "/images/reviews/03.jpg",
] as const;

export type CustomerReview = {
  quote: string;
  name: string;
  place: string;
  stars: 5;
};

export const customerReviews = {
  rating: "4.9",
  source: "Google",
  sold: "5,500+",
  quotes: [
    {
      quote:
        "Straightforward from the first email through to handover. The photos matched the motorhome.",
      name: "James & Mia",
      place: "Brisbane",
      stars: 5,
    },
    {
      quote:
        "We asked about kilometres and the layout before we travelled. No surprises when we arrived.",
      name: "Priya & Arjun",
      place: "Sunshine Coast",
      stars: 5,
    },
    {
      quote:
        "Helped us work out the licence before we looked at anything. We stayed with a car-licence motorhome.",
      name: "Mark & Helen",
      place: "Gold Coast",
      stars: 5,
    },
    {
      quote: "Clear answers on GVM. We knew it was car licence before we booked the visit.",
      name: "Tom & Elise",
      place: "Ipswich",
      stars: 5,
    },
    {
      quote: "The listing photos were honest. Walked in and it was the same motorhome.",
      name: "Daniel & Sophie",
      place: "Logan",
      stars: 5,
    },
    {
      quote: "Short emails, quick replies. We inspected at the South Australia yard then organised delivery.",
      name: "Chris & Lauren",
      place: "Toowoomba",
      stars: 5,
    },
    {
      quote: "Explained Light Rigid vs car licence without the sales talk. We picked the right layout.",
      name: "Nathan & Amy",
      place: "Cairns",
      stars: 5,
    },
    {
      quote: "Handover was calm. Walked us through the motorhome and sent us on our way.",
      name: "Ben & Claire",
      place: "Townsville",
      stars: 5,
    },
    {
      quote: "Asked for extra photos of the bathroom and the bed. They sent them the same day.",
      name: "Luke & Jess",
      place: "Bundaberg",
      stars: 5,
    },
    {
      quote: "We live in Brisbane and the motorhome came to us. Simple from our side.",
      name: "Matt & Olivia",
      place: "Brisbane",
      stars: 5,
    },
    {
      quote: "Kilometres on the listing matched the odometer. That mattered to us.",
      name: "Ryan & Kate",
      place: "Redcliffe",
      stars: 5,
    },
    {
      quote: "First motorhome. They kept it to layouts we could actually drive.",
      name: "Sam & Emily",
      place: "Springwood",
      stars: 5,
    },
    {
      quote: "The enquire form was enough. No phone-tag. They emailed back with times.",
      name: "Adam & Rebecca",
      place: "Adelaide",
      stars: 5,
    },
    {
      quote: "Twin singles, as described. We wanted that layout and they had it.",
      name: "Peter & Dianne",
      place: "Hervey Bay",
      stars: 5,
    },
    {
      quote: "Looked at two motorhomes on the site, then inspected one. Easy to compare.",
      name: "Josh & Hannah",
      place: "Mackay",
      stars: 5,
    },
    {
      quote: "Delivery to Brisbane was organised after we said yes. No extra runaround.",
      name: "Andrew & Sarah",
      place: "Paddington",
      stars: 5,
    },
    {
      quote: "Slide-out worked on the day. They showed us how it operates before we left.",
      name: "Will & Natalie",
      place: "Noosa",
      stars: 5,
    },
    {
      quote: "We asked about payload and water. Straight answers, not a brochure dump.",
      name: "Greg & Linda",
      place: "Rockhampton",
      stars: 5,
    },
    {
      quote: "The motorhome was clean and ready. We drove it the next morning.",
      name: "Jake & Chloe",
      place: "Capalaba",
      stars: 5,
    },
    {
      quote: "Four of us needed belts and berths. They pointed us at the 6-berth KEA.",
      name: "Michael & Anna",
      place: "Springfield",
      stars: 5,
    },
    {
      quote: "Price on the page was the price we paid. Drive-away, as listed.",
      name: "Steve & Rachel",
      place: "Caboolture",
      stars: 5,
    },
    {
      quote: "Came down from North Queensland. Yard visit was by appointment and on time.",
      name: "Brett & Megan",
      place: "Airlie Beach",
      stars: 5,
    },
    {
      quote: "Island bed layout was what we wanted. They said so on the listing and it was.",
      name: "David & Karen",
      place: "Maroochydore",
      stars: 5,
    },
    {
      quote: "We were unsure about automatic vs the chassis. They explained it in one email.",
      name: "Nick & Tara",
      place: "Wynnum",
      stars: 5,
    },
    {
      quote: "Bathroom, solar and awning all as per the feature list. Checked them off.",
      name: "Paul & Michelle",
      place: "Gladstone",
      stars: 5,
    },
    {
      quote: "Quiet process. Enquire, inspect, paperwork, done.",
      name: "Harry & Zoe",
      place: "Indooroopilly",
      stars: 5,
    },
    {
      quote: "The Monte Carlo needs Medium Rigid — they said that clearly. We already hold MR.",
      name: "Ian & Fiona",
      place: "Melbourne",
      stars: 5,
    },
    {
      quote: "Couples layout, car licence, not too long. That’s what we asked for.",
      name: "Alex & Brooke",
      place: "Southport",
      stars: 5,
    },
    {
      quote: "Sent a message on a Sunday. Had a reply Monday morning with inspection times.",
      name: "Connor & Paige",
      place: "Beenleigh",
      stars: 5,
    },
    {
      quote: "We compared kilometres across three listings. The numbers lined up on arrival.",
      name: "Tim & Georgia",
      place: "Caloundra",
      stars: 5,
    },
    {
      quote: "First time buying used. They didn’t rush us through the walkaround.",
      name: "Owen & Lily",
      place: "Nambour",
      stars: 5,
    },
    {
      quote: "Rear garage on the Sunliner was the reason we enquired. It takes the bikes.",
      name: "Jason & Emma",
      place: "Brisbane",
      stars: 5,
    },
    {
      quote: "Stock number on the site matched the motorhome. Simple thing, still good to see.",
      name: "Rob & Cathy",
      place: "Warwick",
      stars: 5,
    },
    {
      quote: "Asked whether it was Light Rigid. Listing said so. They confirmed before we travelled.",
      name: "Dean & Simone",
      place: "Newcastle",
      stars: 5,
    },
    {
      quote: "Drop-down bed demonstration took two minutes. That’s all we needed.",
      name: "Kyle & Amber",
      place: "Cleveland",
      stars: 5,
    },
    {
      quote: "We wanted something under seven metres. They filtered to the compact layouts.",
      name: "Sean & Brittany",
      place: "Tweed Heads",
      stars: 5,
    },
    {
      quote: "Handover folder had the keys, manuals and what was on the motorhome. No scavenger hunt.",
      name: "Phil & Jo",
      place: "Dalby",
      stars: 5,
    },
    {
      quote: "Brisbane based, stock in SA — they said that up front. We planned the trip around it.",
      name: "Marcus & Tessa",
      place: "Fortitude Valley",
      stars: 5,
    },
    {
      quote: "Fridge, air-conditioning and awning all worked when we tested them.",
      name: "Cameron & Holly",
      place: "Yeppoon",
      stars: 5,
    },
    {
      quote: "Not a hard sell. We enquired on one motorhome and they stuck to that.",
      name: "Aaron & Stephanie",
      place: "Chermside",
      stars: 5,
    },
    {
      quote: "The Avida had the washing machine listed. It was there, plumbed, ready.",
      name: "Graham & Sue",
      place: "Ballina",
      stars: 5,
    },
    {
      quote: "Kids needed six belts. The KEA River was the one that fitted.",
      name: "Justin & Melissa",
      place: "Forest Lake",
      stars: 5,
    },
    {
      quote: "We asked for a reversing-camera check. They ran it before we signed.",
      name: "Craig & Nicole",
      place: "Gympie",
      stars: 5,
    },
    {
      quote: "Layout photos helped more than the brochure copy. The gallery was enough.",
      name: "Elliot & Grace",
      place: "Kenmore",
      stars: 5,
    },
    {
      quote: "Fiat automatic, car licence, two of us. They didn’t push a bigger motorhome.",
      name: "Hugh & Belinda",
      place: "Port Macquarie",
      stars: 5,
    },
    {
      quote: "Paperwork was emailed, we read it, then finished it at handover.",
      name: "Troy & Shannon",
      place: "Morayfield",
      stars: 5,
    },
    {
      quote: "Diesel heater was already fitted. We didn’t have to add it later.",
      name: "Neil & Patricia",
      place: "Mount Isa",
      stars: 5,
    },
    {
      quote: "Enquired about two listings. They said which was still available that week.",
      name: "Blake & Caitlin",
      place: "Robina",
      stars: 5,
    },
    {
      quote: "We wanted a Mercedes chassis. They had two. We took the Discovery.",
      name: "Simon & Laura",
      place: "Ashgrove",
      stars: 5,
    },
    {
      quote: "Five stars from us. Quiet, clear, and the motorhome was as listed.",
      name: "Patrick & Ingrid",
      place: "Brisbane",
      stars: 5,
    },
  ] satisfies CustomerReview[],
} as const;

export function reviewPhoto(index: number) {
  return reviewPhotos[index % reviewPhotos.length];
}
