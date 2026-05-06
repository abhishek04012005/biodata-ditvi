import Contact from "@/component/contact/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ditvi Biodata Service",
  description: "Get in touch with Ditvi for biodata help, support, and expert guidance.",
};

export default function ContactPage() {
  return <Contact />;
}
