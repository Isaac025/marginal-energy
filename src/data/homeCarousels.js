import { about, commitment, gallery, publications } from "./content";

// Homepage demo cards. Edit these arrays to change the content shown in either carousel.
export const latestNewsCards = [
  {
    category: "Our vision",
    title: "A future-ready energy company for Africa",
    summary: about.mv[1].text,
    image: about.mv[1].image,
    imageAlt: "Image representing Marginal Energy's vision",
    to: "/about",
  },
  {
    category: "Community",
    title: "Growing together with our host communities",
    summary: commitment.intro.body,
    image: commitment.initiatives.image,
    imageAlt: commitment.initiatives.imageAlt,
    to: "/our-commitment",
  },
  {
    category: "Gallery",
    title: "Innovation across the energy value chain",
    summary: gallery[0].alt,
    image: gallery[0].src,
    imageAlt: gallery[0].alt,
    to: "/gallery",
  },
  {
    category: "Company news",
    title: publications.items[0].title,
    summary: publications.items[0].text,
    image: gallery[1].src,
    imageAlt: gallery[1].alt,
    to: "/media-blog",
  },
  {
    category: "People & progress",
    title: "Creating lasting value through shared effort",
    summary:
      "Explore the people, places, and progress behind Marginal Energy's work.",
    image: gallery[4].src,
    imageAlt: gallery[4].alt,
    to: "/gallery",
  },
  {
    category: "Responsible energy",
    title: "Powering more, responsibly",
    summary:
      "See how responsible operations and long-term thinking shape our approach to energy.",
    image: gallery[5].src,
    imageAlt: gallery[5].alt,
    to: "/our-commitment",
  },
];

// Illustrative investor notices. Replace dates and details with company-approved filings before publication.
export const regulatoryNewsCards = [
  {
    title: "Annual compliance statement",
    date: "15.10.2026",
    summary:
      "Marginal Energy reaffirms its commitment to applicable Nigerian energy regulations, transparent reporting, and responsible operations.",
  },
  {
    title: "2025 financial results",
    date: "30.04.2026",
    summary:
      "Full-year results for the period ended 31 December 2025 are available for shareholders and other stakeholders.",
  },
  {
    title: "Corporate governance update",
    date: "12.02.2026",
    summary:
      "The company has reviewed its governance and disclosure practices to support accountability and timely investor communication.",
  },
  {
    title: "Operational and sustainability update",
    date: "18.11.2025",
    summary:
      "An update on operational priorities, environmental responsibility, and engagement with host communities.",
  },
];
