import type { StaticImageData } from "next/image";
import Biodata1111Image from "../assets/biodata/eternaltraditionaldesignbiodata.png";
import Biodata1112Image from "../assets/biodata/richrosedesignbiodata.png";
import Biodata1113Image from "../assets/biodata/sanskritidesignbiodata.png";
import Biodata1114Image from "../assets/biodata/madhubanipaintingdesignbiodata.png";

export type SeoData = {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  path: string;
  category: string;
  templatePreview: {
    mainImage: StaticImageData;
  };
  features: string[];
  targetAudience: string[];
};

export const biodataSeoData: Record<string, SeoData> = {
  classicBiodata: {
    title: "Classic Biodata Template | Traditional and ATS Friendly",
    description:
      "A polished biodata template built for traditionals seeking a recruiter-friendly presentation with clear achievements and career highlights.",
    keywords: "classic biodata template, traditional biodata, ATS friendly biodata, career biodata",
    ogImage: Biodata1111Image.src,
    path: "/biodata/classic-biodata/classic-biodata",
    category: "Biodata Template",
    templatePreview: {
      mainImage: Biodata1111Image,
    },
    features: [
      "Traditional top-section summary with career objective",
      "Clear experience timeline with quantified outcomes",
      "Skills and certifications presented for quick scanning",
      "Balanced layout with excellent readability",
    ],
    targetAudience: [
      "Doctors and medical traditionals",
      "Healthcare administrators and clinical staff",
      "Experienced traditionals seeking traditional formatting",
    ],
  },
  technicalBiodata: {
    title: "Technical Biodata Template | Structured for Skills and Projects",
    description:
      "A technical biodata design that highlights project work, certifications, and technical skills while keeping the layout easy to scan for hiring managers.",
    keywords: "technical biodata template, engineering biodata, project biodata, technical skills biodata",
    ogImage: Biodata1112Image.src,
    path: "/biodata/technical-biodata/technical-biodata",
    category: "Biodata Template",
    templatePreview: {
      mainImage: Biodata1112Image,
    },
    features: [
      "Project-focused sections with outcome-driven summaries",
      "Education and certification layout optimized for credibility",
      "Technical skills organized by competency areas",
      "Compact profile section for fast recruiter review",
    ],
    targetAudience: [
      "Engineering applicants",
      "Technical and operations candidates",
      "Telecalling and private-sector sales traditionals",
    ],
  },
  leadershipBiodata: {
    title: "Leadership Biodata Template | Impactful Career Narrative",
    description:
      "A high-impact leadership biodata template that emphasizes career progression, achievement statements, and executive-level credibility.",
    keywords: "leadership biodata template, senior biodata, management biodata, executive biodata",
    ogImage: Biodata1113Image.src,
    path: "/biodata/leadership-biodata/leadership-biodata",
    category: "Biodata Template",
    templatePreview: {
      mainImage: Biodata1113Image,
    },
    features: [
      "Leadership and achievement highlights prominently displayed",
      "Core competencies section tailored for senior roles",
      "Structured career history with outcome-focused bullets",
      "Strong visual hierarchy for executive profiles",
    ],
    targetAudience: [
      "Experienced engineering and operations traditionals",
      "Mid-level and senior job seekers",
      "Candidates applying for private-sector management roles",
    ],
  },
  modernBiodata: {
    title: "Modern Biodata Template | Clean and Contemporary Design",
    description:
      "A modern biodata layout designed to keep your profile sharp, readable, and attractive for recruiters in private jobs and technical roles.",
    keywords: "modern biodata template, polished biodata, private sector biodata, clean biodata design",
    ogImage: Biodata1114Image.src,
    path: "/biodata/modern-biodata/modern-biodata",
    category: "Biodata Template",
    templatePreview: {
      mainImage: Biodata1114Image,
    },
    features: [
      "Modern layout with smart section spacing",
      "Traditional summary that leads with value",
      "Skill clusters grouped by relevance",
      "Readable bullets with achievement focus",
    ],
    targetAudience: [
      "Telecalling and customer-facing traditionals",
      "Engineering candidates in private companies",
      "Applicants seeking modern, polished biodatas",
    ],
  },
};
