export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "How quickly can I start using CallKaira?",
    answer: "You're live in less than 5 minutes with our easy, no-code setup. Simply forward your existing number or get a new one, configure your basic business details, and CallKaira starts answering calls immediately."
  },
  {
    question: "Can I keep my current business number?",
    answer: "Yes, simply forward your existing number—no change needed. Your customers will continue calling the same number they know, but CallKaira will handle the calls professionally."
  },
  {
    question: "How does CallKaira handle urgent calls?",
    answer: "Urgent calls can be instantly transferred to your phone if you're available, ensuring critical issues are never missed. You can also set up priority caller lists for VIPs or family members."
  },
  {
    question: "Is CallKaira secure and compliant?",
    answer: "Absolutely. We're fully compliant with GDPR, SOC2, HIPAA, and PCI standards. All calls are encrypted, and we follow strict data protection protocols to keep your business information secure."
  },
  {
    question: "What languages does CallKaira support?",
    answer: "At launch CallKaira will be focussed on English and our testing is being conducted in English.  But the AI supports 90+ languages with real-time language detection you can allow Your AI receptionist to automatically switch languages based on the caller's preference."
  },
  {
    question: "Can I customize how CallKaira responds?",
    answer: "Yes! You can customize greetings, tone, build a knowledge base of FAQs, and specify the different types of enquiries you want Kaira to collect for you.   To give you a head start CallKaira learns about your business from your website, Google Business Profile, and pre-populates a lot of this information."
  }
];
