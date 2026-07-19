"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  HelpCircle,
  MessageSquare,
  Zap,
} from "lucide-react";
import * as React from "react";
import { TextRise } from "../custom/TextRise";
import { Heading } from "../includes/TypoGraphy";
interface FAQItem {
  question: string;
  answer: string;
}
interface Category {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  colorClass: string;
  borderClass: string;
  glowClass: string;
}
const FAQ_CATEGORIES: Category[] = [
  {
    id: "general",
    label: "Membership",
    icon: HelpCircle,
    color: "#3b82f6",
    colorClass: "text-blue-400",
    borderClass: "border-l-blue-500/80",
    glowClass: "shadow-[0_0_15px_rgba(59,130,246,0.15)]",
  },
  {
    id: "research",
    label: "Research & Publications",
    icon: BookOpen,
    color: "#3b82f6",
    colorClass: "text-blue-400",
    borderClass: "border-l-blue-500/80",
    glowClass: "shadow-[0_0_15px_rgba(59,130,246,0.15)]",
  },
  {
    id: "events",
    label: "Events",
    icon: Zap,
    color: "#3b82f6",
    colorClass: "text-blue-400",
    borderClass: "border-l-blue-500/80",
    glowClass: "shadow-[0_0_15px_rgba(59,130,246,0.15)]",
  },
];
const faqData: Record<string, FAQItem[]> = {
  general: [
    {
      question: "What is IEEE and is it only for engineering students?",
      answer: "IEEE (Institute of Electrical and Electronics Engineers) is the world's largest technical professional organization. While engineering is in our name, IEEE NSUT is open to all students passionate about technology, computer science, research, design, management, and digital innovation.",
    },
    {
      question: "What are the primary benefits of joining IEEE?",
      answer: "Joining IEEE unlocks global networking opportunities, access to the IEEE Xplore Digital Library, professional certifications, hands-on project experience, leadership roles, and sponsored travel/participation in international conferences.",
    },
  ],
  research: [
    {
      question: "How do I access IEEE research papers and publications?",
      answer: "IEEE research papers are available through the IEEE Xplore digital library. As an IEEE NSUT student member, you get special access privileges and workshops on how to write, search for, and publish research papers.",
    },
    {
      question: "Can undergraduate students publish papers through IEEE?",
      answer: "Yes, absolutely! We regularly host research-writing bootcamps and connect undergraduate students with senior mentors and faculty advisors to guide them through the drafting, editing, and submission process for IEEE conferences.",
    },
  ],
  events: [
    {
      question: "What conferences, hackathons, and events do you organize?",
      answer: "We host national-level hackathons, AI/ML workshops, guest lectures by industry veterans from top tech companies, and flagship annual events where students build real-world products, collaborate, and win prizes.",
    },
    {
      question: "How can I participate in hands-on technical projects?",
      answer: "IEEE NSUT runs dedicated Special Interest Groups (SIGs) in AI/ML, WebDev, AppDev, Core Electronics, and Research. Members can join these groups, receive mentorship, and build robust portfolio projects.",
    },
  ],
};
export default function FAQASection() {
  const [activeTab, setActiveTab] = React.useState<string>("general");
  const [expandedIndexes, setExpandedIndexes] = React.useState<number[]>([]);
  const activeCategory = FAQ_CATEGORIES.find((cat) => cat.id === activeTab) || FAQ_CATEGORIES[0];
  const activeFAQs = faqData[activeTab] || [];
  // Reset expanded question when tab changes
  React.useEffect(() => {
  setExpandedIndexes([]);
}, [activeTab]);
  return (
    <section className="bg-black text-white py-20 px-6 sm:px-8 w-full relative overflow-hidden" id="faq">
      {/* Background ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -right-1/4 top-1/4 h-[400px] w-[400px] rounded-full blur-[120px] opacity-10 transition-colors duration-1000" 
          style={{ backgroundColor: activeCategory.color }}
        />
        <div 
          className="absolute -left-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full blur-[120px] opacity-10 transition-colors duration-1000" 
          style={{ backgroundColor: activeCategory.color }}
        />
      </div>
      <div className="max-w-[1200px] w-full mx-auto flex flex-col relative z-10">
        
        {/* Section Header */}
        <div className="w-full flex flex-col text-center mb-16 max-w-2xl mx-auto">
          
          <Heading className="text-center mb-0 text-white drop-shadow-[0_0_12px_rgba(59,130,246,0.45)]">
               <TextRise text="Frequently Asked Questions" perWord delay={0.2} />
          </Heading>

          <p className="text-neutral-400 text-sm sm:text-base mt-4 max-w-lg mx-auto">
            Find answers to standard questions about membership, events, research, and collaborative groups.
          </p>
        </div>
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full mt-4">
          
          {/* Left Column: Navigation Tabs & CTAs */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24 h-fit">
            
            {/* Category Navigation Menu */}
            <div className="bg-[#0b0c10]/70 border border-white/5 backdrop-blur-xl rounded-3xl p-3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 no-scrollbar shadow-2xl">
              {FAQ_CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isSelected = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={cn(
                      "relative flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 w-full text-left whitespace-nowrap lg:whitespace-normal group",
                      isSelected ? "text-white" : "text-neutral-400 hover:text-neutral-200"
                    )}
                  >
                    {/* Active Sliding Background Capsule */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeFaqCategory"
                        className="absolute inset-0 bg-white/[0.03] border border-white/10 rounded-2xl"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    )}
                    <div className={cn(
                      "p-2.5 rounded-xl relative z-10 transition-all duration-300 shrink-0",
                      isSelected ? "bg-white/10" : "bg-white/[0.02] group-hover:bg-white/5"
                    )}>
                      <Icon className={cn(
                        "w-5 h-5 transition-transform duration-300 group-hover:scale-110",
                        isSelected ? cat.colorClass : "text-neutral-400"
                      )} />
                    </div>
                    <span className="relative z-10 text-sm font-semibold tracking-wide text-left">
                      {cat.label}
                    </span>
                  </button>
                );
              })}
            </div>
            {/* Premium Help CTA Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#0b0c10]/40 p-6 backdrop-blur-xl hidden lg:block group">
              <div 
                className="absolute -right-10 -bottom-10 w-28 h-28 rounded-full blur-2xl pointer-events-none group-hover:scale-110 transition-all duration-700 opacity-20"
                style={{ backgroundColor: activeCategory.color }}
              />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/10 text-neutral-300 group-hover:text-white transition-colors duration-300">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-white text-base">Still have questions?</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Can't find the answers you're looking for? Reach out to our community managers.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-400 font-semibold group/btn hover:text-blue-300 transition-colors mt-2"
                  >
                    Contact Support
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: FAQ Expandable List */}
          <div className="lg:col-span-8 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex flex-col gap-4 w-full"
              >
                {activeFAQs.map((faq, idx) => {
                  const isExpanded = expandedIndexes.includes(idx);
                  return (
                    <div
                      key={idx}
                      className={cn(
                        "relative border border-white/5 rounded-3xl overflow-hidden transition-all duration-300",
                        isExpanded ? "bg-[#0b0c10]/90" : "bg-[#0b0c10]/30 hover:bg-[#0b0c10]/70",
                        isExpanded && activeCategory.glowClass
                      )}
                    >
                      {/* Left category-colored accent border */}
                      <div 
                        className={cn(
                          "absolute left-0 top-0 bottom-0 w-[4px] transition-all duration-300",
                          isExpanded ? activeCategory.borderClass : "bg-transparent"
                        )}
                        style={{ backgroundColor: isExpanded ? activeCategory.color : 'transparent' }}
                      />
                      {/* Question Header Accordion Trigger */}
                      <button
                        onClick={() =>
                         setExpandedIndexes((prev) =>
                            prev.includes(idx)
                            ? prev.filter((i) => i !== idx)
                               : [...prev, idx]
                         )
                        }
                        className="w-full flex items-center justify-between gap-4 py-5 px-6 md:px-8 text-left text-white focus:outline-none group select-none"
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs font-bold text-neutral-500 bg-white/[0.02] border border-white/10 w-8 h-8 rounded-xl flex items-center justify-center shrink-0 group-hover:border-white/20 transition-all duration-300">
                            Q{idx + 1}
                          </span>
                          <span className="text-sm md:text-base font-semibold text-blue-400 group-hover:text-white transition-colors duration-200">
                            {faq.question}
                          </span>
                        </div>
                        <div className={cn(
                          "w-8 h-8 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-white/20 transition-all duration-300 shrink-0",
                          isExpanded && "rotate-180"
                        )}>
                          <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                        </div>
                      </button>
                      {/* Expandable Answer Content */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                          >
                            <div className="px-6 md:px-8 pb-6 pt-1 flex flex-col gap-5 border-t border-white/5">
                              {/* Main Answer text */}
                              <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-normal">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        {/* Mobile-only contact option */}
        <div className="lg:hidden w-full text-center mt-8">
          <p className="text-xs text-neutral-500">
            Still have questions?{" "}
            <a href="#contact" className="text-blue-400 underline font-medium hover:text-blue-300 transition-colors">
              Get in touch with us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}