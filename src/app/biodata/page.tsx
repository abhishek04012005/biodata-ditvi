import React from "react";
import BiodataCard from "../../structure/biodata/biodata";
import biodataList from "../../data/biodata";
import Script from "next/script";

export async function generateMetadata() {
  return {
    title: "Biodata Templates | Traditional Biodata Designs",
    description:
      "Browse our collection of traditional biodata templates to create a polished biodata presentation.",
    keywords: "biodata templates, traditional biodata designs, service biodata, modern biodata templates",
    openGraph: {
      title: "Biodata Templates | Traditional Biodata Designs",
      description:
        "Browse our collection of traditional biodata templates to create a polished biodata presentation.",
      images: ["https://your-domain.com/images/biodata-templates-preview.jpg"],
    },
  };
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Traditional Biodata Templates",
  description: "Collection of traditional biodata templates",
  publisher: {
    "@type": "Organization",
    name: "Biodata Maker",
    logo: {
      "@type": "ImageObject",
      url: "https://your-domain.com/logo.png",
    },
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: biodataList.length,
    itemListElement: biodataList.map((template, index) => ({
      "@type": "Product",
      position: index + 1,
      name: template.name,
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    })),
  },
};

const AllBiodata: React.FC = () => {
  return (
    <>
      <Script type="application/ld+json" id="schema-jsonld">
        {JSON.stringify(schemaData)}
      </Script>
      <div className="allbiodata">
        <BiodataCard
          title="Biodata Templates"
          subtitle="Discover our curated biodata designs for traditional profiles"
          biodataDetails={biodataList}
          isSlider={false}
          showButton={true}
        />
      </div>
    </>
  );
};

export default AllBiodata;
