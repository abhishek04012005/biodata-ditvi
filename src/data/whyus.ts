interface WhyUsItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  hoverBg: string;
  animationDelay: string;
}

const whyUsData: WhyUsItem[] = [
  {
    id: 1,
    title: "Traditional & Modern Designs",
    description:
      "Beautifully crafted marriage biodata templates blending tradition with modern elegance",
    icon: "🎨",
    hoverBg: "#0062ff2a",
    animationDelay: "0s",
  },
  {
    id: 2,
    title: "Matrimony Focused Layout",
    description:
      "Designed to clearly present personal, family, and partner details for better understanding",
    icon: "📄",
    hoverBg: "#0062ff2a",
    animationDelay: "0.2s",
  },
  {
    id: 3,
    title: "Easy & Ready to Use",
    description:
      "Simple formats that are easy to edit, download, and share with families instantly",
    icon: "⚡",
    hoverBg: "#0062ff2a",
    animationDelay: "0.4s",
  },
  {
    id: 4,
    title: "100% Satisfaction",
    description:
      "Pay only when you are fully satisfied with your marriage biodata design",
    icon: "✨",
    hoverBg: "#0062ff2a",
    animationDelay: "0.6s",
  },
];

export type { WhyUsItem };
export default whyUsData;
