import React from "react";
import { experiences } from "../constants";
import CardShowcase from "./CardShowcase";

// Services Showcase component using the reusable CardShowcase
const ServicesShowcase = () => {
  // Transform experiences data to match CardShowcase format
  const serviceItems = experiences.map(experience => {
    // Determine which service this is to get the right key
    const key = experience.title.includes("Executive") ? "executive" :
                experience.title.includes("Airport") ? "airport" : "group";

    return {
      key,
      icon: experience.icon,
      iconBg: experience.iconBg,
      date: true // Services have dates
    };
  });

  return <CardShowcase items={serviceItems} translationPrefix="service-details" />;
};

export default ServicesShowcase;
