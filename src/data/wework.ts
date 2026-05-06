interface WorkStep {
  number: number;
  title: string;
  steps: string[];
  icon: string;
}

const weWork: WorkStep[] = [
  {
    number: 1,
    title: "Select & Submit",
    steps: [
      "Select a design which you like, click on 'Get Now' button.",
      "Fill your Name, WhatsApp Number and submit it.",
      "Pay 50% to start."
    ],
    icon: "🎨",
  },
  {
    number: 2,
    title: "Review & Approve",
    steps: [
      "You will receive customized traditional biodata with watermark.",
      "Review the biodata carefully, If you want to make any changes, reply with your feedback.",
      "Ensure you are satisfied with biodata.",
    ],
    icon: "✨",
  },
  {
    number: 3,
    title: "Pay & Download",
    steps: [
      `Text us, "I am satisfied".`,
      "We will send you a payment link for remaining 50%.",
      "After successful payment, you will receive your biodata without watermark.",
    ],
    icon: "🚀",
  },
];

export default weWork;
