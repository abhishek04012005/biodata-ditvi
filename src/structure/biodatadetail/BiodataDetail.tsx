"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "./biodatadetail.module.css";
import Background from "../background/Background";
import { Description, CheckCircle, WhatsApp, Phone, Download } from "@mui/icons-material";
import Container from "../container/Container";
import EnquiryPopup from "../enquiryPopup/EnquiryPopup";
import biodataDetails from "@/data/biodata";
import { SeoData } from "@/data/seo";
import Button from "../button/Button";
import Image from "next/image";
import { BiodataType } from "@/types/types";

interface BiodataDetailProps {
  overrideSlug?: string;
  seoData?: SeoData;
}

const BiodataDetail: React.FC<BiodataDetailProps> = ({ overrideSlug, seoData }) => {
  const router = useRouter();
  const params = useParams<{ category?: string; biodataId?: string; slug?: string }>();
  const biodataId = params.biodataId;
  const category = params.category ?? params.slug;
  const actualCategory = overrideSlug
    ? overrideSlug
    : biodataId
      ? biodataId.replace(/^biodata(\d+)$/, "biodata-$1")
      : category;
  const biodata = biodataDetails.find(
    (item) => item.slug === actualCategory
  ) as BiodataType | undefined;

  const pageTitle = seoData?.title.split("|")[0].trim() || biodata?.name || "Biodata Template";
  const pageDescription = seoData?.description || biodata?.shortDescription || "Traditional biodata template details.";

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleDownloadBiodata = () => {
    if (!biodata) return;

    const downloadUrl =
      typeof biodata.image === "string" ? biodata.image : biodata.image.src;

    const anchor = document.createElement("a");
    anchor.href = downloadUrl;
    anchor.download = `${biodata.slug}.png`;
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  useEffect(() => {
    if (!biodata) {
      router.push("/biodata");
      return;
    }
    setSelectedModel(biodata.slug);
  }, [biodata, router]);

  if (!biodata) {
    return null;
  }

  const totalPrice = biodata.discountPrice;
  const discountAmount = biodata.originalPrice - biodata.discountPrice;
  const discountPercent = Math.round((discountAmount / biodata.originalPrice) * 100);
  const whatsappUrl = `https://wa.me/919285248504?text=${encodeURIComponent(
    `Hello Ditvi Biodata, I would like to know more about the ${biodata.name} template.`
  )}`;

  return (
    <Background>
      <Container>
        <div className={styles.inner}>
          <div className={styles.header}>
            <div>
              <p className={styles.subTitle}>Biodata details</p>
              <h1 className={styles.title}>{pageTitle}</h1>
              <p className={styles.pageDescription}>{pageDescription}</p>
            </div>
            <Button variant="secondary" onClick={() => router.push("/biodata")}>
              Back to templates
            </Button>
          </div>

          <div className={styles.content}>
            <div className={styles.imageWrapper}>
              <div className={`${styles.image} ${imageLoaded ? styles.loaded : ""}`}>
                <Image
                  src={biodata.image}
                  alt={biodata.name}
                  width={520}
                  height={680}
                  priority
                  onLoadingComplete={() => setImageLoaded(true)}
                />
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.topRow}>
                <span className={styles.badge}>Biodata Template</span>
                <span className={styles.badgeSecondary}>Traditional</span>
              </div>

              <div className={styles.headingRow}>
                <h2>{biodata.name}</h2>
                <p>Traditional biodata formatting with clear sections for marriage proposals and family compatibility.</p>
              </div>

              <div className={styles.priceCard}>
                <div className={styles.priceInfo}>
                  <div className={styles.priceTop}>
                    <div className={styles.priceBlock}>
                      <span className={styles.priceLabel}>Original</span>
                      <span className={styles.priceOriginal}>₹{biodata.originalPrice}</span>
                    </div>
                    <div className={styles.priceBlock}>
                      <span className={styles.priceLabel}>Now</span>
                      <span className={styles.priceFinal}>₹{totalPrice}</span>
                    </div>
                  </div>
                  <div className={styles.discountInfo}>
                    <span className={styles.discountTag}>Save ₹{discountAmount}</span>
                    <span className={styles.discountPercent}>{discountPercent}% OFF</span>
                  </div>
                  <p className={styles.priceNote}>
                    Limited-time offer — grab this traditional biodata at the best price.
                  </p>
                </div>
                <div className={styles.offerBadge}>
                  Limited offer
                </div>
              </div>

              <div className={styles.actions}>
                <Button
                  variant="primary"
                  className={styles.actionButton}
                  onClick={() => setIsPopupOpen(true)}
                >
                  <Phone />
                  Enquiry Now
                </Button>
                <Button
                  variant="secondary"
                  className={styles.secondaryButton}
                  onClick={handleDownloadBiodata}
                >
                  <Download />
                  Download Biodata
                </Button>
                <Button
                  variant="secondary"
                  className={styles.secondaryButton}
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  <WhatsApp />
                  WhatsApp us
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.bottomDetails}>
            <div className={styles.featuresBlock}>
              <h3>What you get</h3>
              <ul>
                <li>
                  <CheckCircle className={styles.checkIcon} />
                  Traditional biodata layout with family-first sections
                </li>
                <li>
                  <CheckCircle className={styles.checkIcon} />
                  Strong presentation for background, values, and family traditions
                </li>
                <li>
                  <CheckCircle className={styles.checkIcon} />
                  Optimized biodata structure for marriage proposals across all castes
                </li>
              </ul>
            </div>
            <div className={styles.featuresBlock}>
              <h3>Biodata Details</h3>
              <ul>
                <li>
                  <CheckCircle className={styles.checkIcon} />
                  Includes editable sections for personal background and family details
                </li>
                <li>
                  <CheckCircle className={styles.checkIcon} />
                  Highlights cultural values and family traditions clearly
                </li>
                <li>
                  <CheckCircle className={styles.checkIcon} />
                  Designed for meaningful review by families and marriage prospects
                </li>
              </ul>
            </div>
            <div className={styles.description}>
              <div className={styles.descriptionHeader}>
                <Description />
                <h3>About this template</h3>
              </div>
              <p className={styles.descriptionText}>
                {biodata.longDescription}
              </p>
            </div>

            <div className={styles.detailSection}>
              <h3>Biodata Detail Overview</h3>
              <p className={styles.detailIntro}>{biodata.shortDescription}</p>
              <div className={styles.detailGrid}>
                <div className={styles.detailCard}>
                  <h4>Key Features</h4>
                  <ul>
                    {biodata.keyFeatures.map((feature, index) => (
                      <li key={index}>
                        <CheckCircle className={styles.checkIcon} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.detailCard}>
                  <h4>Benefits</h4>
                  <ul>
                    {biodata.benefits.map((benefit, index) => (
                      <li key={index}>
                        <CheckCircle className={styles.checkIcon} />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.detailCard}>
                  <h4>Best For</h4>
                  <ul>
                    {biodata.idealFor.map((item, index) => (
                      <li key={index}>
                        <CheckCircle className={styles.checkIcon} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.detailCard}>
                  <h4>Highlights</h4>
                  <ul>
                    {biodata.highlights.map((highlight, index) => (
                      <li key={index}>
                        <CheckCircle className={styles.checkIcon} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.doDontSection}>
                <div className={styles.doDontCard}>
                  <h4>Do</h4>
                  <ul>
                    {biodata.do.map((item, index) => (
                      <li key={index}>
                        <CheckCircle className={styles.checkIcon} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.doDontCard}>
                  <h4>Don&apos;t</h4>
                  <ul>
                    {biodata.dont.map((item, index) => (
                      <li key={index}>
                        <CheckCircle className={styles.checkIcon} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.info}>
              <div className={styles.model}>
                <h2>Biodata Summary</h2>
                <div className={styles.divider} />
                <p>
                  {biodata.name} is designed to help you present yourself beautifully for marriage proposals. It includes strong section hierarchy, cultural highlights, and streamlined presentation for traditional biodata and caste compatibility.
                </p>
              </div>

              <div className={styles.options}>
                <div className={styles.optionsGroup}>
                  <h3 className={styles.optionsTitle}>Key Features</h3>
                  <ul>
                    <li>
                      <CheckCircle className={styles.checkIcon} />
                      Clean, traditional biodata layout
                    </li>
                    <li>
                      <CheckCircle className={styles.checkIcon} />
                      Caste and culture friendly structure
                    </li>
                    <li>
                      <CheckCircle className={styles.checkIcon} />
                      Mobile-ready and family-friendly
                    </li>
                  </ul>
                </div>

                <div className={styles.optionsGroup}>
                  <h3 className={styles.optionsTitle}>Best For</h3>
                  <ul>
                    <li>
                      <CheckCircle className={styles.checkIcon} />
                      Individuals seeking marriage proposals
                    </li>
                    <li>
                      <CheckCircle className={styles.checkIcon} />
                      Families looking for suitable matches
                    </li>
                    <li>
                      <CheckCircle className={styles.checkIcon} />
                      Anyone seeking a traditional biodata design
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.hashtagsSection}>
              <h3>Related Tags</h3>
              <div className={styles.hashtagsContainer}>
                {biodata.tags.map((tag, index) => (
                  <span key={index} className={styles.hashtag}>
                    #{tag.replace(/\s+/g, "")}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <EnquiryPopup
        isOpen={isPopupOpen}
        heading="Enquiry for Biodata"
        paragraph="Please fill these details."
        buttonTitle="Send"
        onClose={() => {
          setIsPopupOpen(false);
        }}
        modelDetails={{
          modelNumber: selectedModel,
          language: "English",
          type: biodata.type ?? "biodata",
          amount: totalPrice,
        }}
      />
    </Background>
  );
};

export default BiodataDetail;
