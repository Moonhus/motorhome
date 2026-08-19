export type CustomerReview = {
  quote: string;
  name: string;
  place: string;
  photo: string;
  stars: 5;
};

export const customerReviews = {
  rating: "4.9",
  source: "Google",
  sold: "5,500+",
  quotes: [
    {
      quote:
        "Couldn’t be happier with the whole experience. The motorhome was beautifully presented, extremely clean and exactly as described. The team made everything simple from our first inspection through to pickup.",
      name: "James",
      place: "Brisbane",
      photo: "/images/reviews/07.jpg",
      stars: 5,
    },
    {
      quote:
        "We purchased our first motorhome through the team and they made what could have been a stressful process incredibly easy. No pressure, plenty of time to look everything over and all our questions were answered.",
      name: "Priya",
      place: "Sunshine Coast",
      photo: "/images/reviews/14.jpg",
      stars: 5,
    },
    {
      quote:
        "Picked up our motorhome a few months ago and have already done several trips in it. It has been absolutely fantastic. Very happy with the condition of the vehicle and the service we received.",
      name: "Mark",
      place: "Gold Coast",
      photo: "/images/reviews/02.jpg",
      stars: 5,
    },
    {
      quote:
        "Great people to deal with. Straightforward, knowledgeable and very helpful throughout the entire purchase. The motorhome was spotless when we collected it and ready to hit the road.",
      name: "Helen",
      place: "Toowoomba",
      photo: "/images/reviews/19.jpg",
      stars: 5,
    },
    {
      quote:
        "After looking at quite a few motorhomes we finally found the right one here. The quality and presentation stood out immediately. Everything was explained properly and there were no surprises.",
      name: "Daniel",
      place: "Logan",
      photo: "/images/reviews/05.jpg",
      stars: 5,
    },
    {
      quote:
        "We travelled interstate to purchase our motorhome and the team made the process extremely easy. They were happy to answer questions, send extra photos and provide everything we needed before making the trip.",
      name: "Lauren",
      place: "Cairns",
      photo: "/images/reviews/11.jpg",
      stars: 5,
    },
    {
      quote:
        "Our motorhome was presented beautifully and you could tell it had been properly looked after. The handover was thorough and we left feeling confident with everything. Would happily recommend them.",
      name: "Nathan",
      place: "Townsville",
      photo: "/images/reviews/16.jpg",
      stars: 5,
    },
    {
      quote:
        "Excellent experience from start to finish. Friendly team, no pushy sales tactics and very good knowledge of the motorhomes they sell. We are extremely happy with our purchase.",
      name: "Claire",
      place: "Bundaberg",
      photo: "/images/reviews/08.jpg",
      stars: 5,
    },
    {
      quote:
        "We upgraded from our previous motorhome and the entire process was smooth and professional. The new one was immaculate inside and out when we picked it up.",
      name: "Matt",
      place: "Paddington",
      photo: "/images/reviews/20.jpg",
      stars: 5,
    },
    {
      quote:
        "Really impressed with the level of service. Nothing felt rushed and they took the time to show us how everything worked before we left. That was especially helpful as first-time motorhome owners.",
      name: "Kate",
      place: "Redcliffe",
      photo: "/images/reviews/03.jpg",
      stars: 5,
    },
    {
      quote:
        "We have now travelled thousands of kilometres in our motorhome and absolutely love it. Buying it was one of the best decisions we have made. Thank you to the team for making the whole process so easy.",
      name: "Sam",
      place: "Springfield",
      photo: "/images/reviews/12.jpg",
      stars: 5,
    },
    {
      quote:
        "Very professional company to deal with. Good communication, honest description of the vehicle and an easy handover. The motorhome looked even better in person than it did in the photos.",
      name: "Rebecca",
      place: "Adelaide",
      photo: "/images/reviews/06.jpg",
      stars: 5,
    },
    {
      quote:
        "The motorhome was incredibly clean and well presented. You could tell a lot of care had gone into preparing it for sale. Very happy with both the vehicle and the customer service.",
      name: "Peter",
      place: "Hervey Bay",
      photo: "/images/reviews/18.jpg",
      stars: 5,
    },
    {
      quote:
        "We had been searching for the right motorhome for months. From the moment we walked in we felt comfortable. The team knew their products and answered everything without putting pressure on us.",
      name: "Hannah",
      place: "Mackay",
      photo: "/images/reviews/09.jpg",
      stars: 5,
    },
    {
      quote:
        "Fantastic experience. We had a couple of questions after taking delivery and the team were still happy to help us. Good old-fashioned service that is becoming harder to find.",
      name: "Andrew",
      place: "Noosa",
      photo: "/images/reviews/01.jpg",
      stars: 5,
    },
    {
      quote:
        "Purchased our motorhome recently and couldn’t fault the process. Communication was excellent, paperwork was straightforward and the vehicle was ready exactly when promised.",
      name: "Natalie",
      place: "Caboolture",
      photo: "/images/reviews/15.jpg",
      stars: 5,
    },
    {
      quote:
        "As newcomers to motorhoming we had plenty of questions. Everyone was patient and explained things in simple terms. We drove away feeling confident and have loved every trip since.",
      name: "Greg",
      place: "Rockhampton",
      photo: "/images/reviews/10.jpg",
      stars: 5,
    },
    {
      quote:
        "Very happy customers. The vehicle was mechanically sound, beautifully detailed and presented exactly as advertised. Would definitely buy through them again.",
      name: "Chloe",
      place: "Capalaba",
      photo: "/images/reviews/17.jpg",
      stars: 5,
    },
    {
      quote:
        "We recently downsized into a motorhome for travelling around Australia and the team were fantastic to deal with. Friendly, helpful and genuinely knowledgeable. A very positive experience.",
      name: "Michael",
      place: "Maroochydore",
      photo: "/images/reviews/04.jpg",
      stars: 5,
    },
    {
      quote:
        "From our first phone call to collecting the keys, everything was handled professionally. The motorhome was immaculate and the handover was excellent. We would have no hesitation recommending them to family and friends.",
      name: "Rachel",
      place: "Ashgrove",
      photo: "/images/reviews/13.jpg",
      stars: 5,
    },
  ] satisfies CustomerReview[],
} as const;
