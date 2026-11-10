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
    summary: "Explore the people, places, and progress behind Marginal Energy's work.",
    image: gallery[4].src,
    imageAlt: gallery[4].alt,
    to: "/gallery",
  },
  {
    category: "Responsible energy",
    title: "Powering more, responsibly",
    summary: "See how responsible operations and long-term thinking shape our approach to energy.",
    image: gallery[5].src,
    imageAlt: gallery[5].alt,
    to: "/our-commitment",
  },
];

// Intentional placeholders: replace the titles, dates, and summaries with approved notices.
export const regulatoryNewsCards = [
  {
    title: "Regulatory announcement",
    date: "DD.MM.YYYY",
    summary: "Replace this sample card with an approved regulatory announcement.",
  },
  {
    title: "Financial results",
    date: "DD.MM.YYYY",
    summary: "Add the reporting period and publication date when this notice is ready.",
  },
  {
    title: "Corporate announcement",
    date: "DD.MM.YYYY",
    summary: "Use this space for a company filing or investor update.",
  },
  {
    title: "Operational update",
    date: "DD.MM.YYYY",
    summary: "Replace this text with a reviewed and published operational notice.",
  },
];
