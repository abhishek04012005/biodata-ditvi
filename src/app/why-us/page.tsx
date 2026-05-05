import WhyUs from "@/component/whyus/WhyUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Us | Ditvi Biodata Service",
  description: "Learn why Ditvi delivers premium ATS-ready biodatas and support you can trust.",
};

export default function WhyUsPage() {
  return <WhyUs />;
}
