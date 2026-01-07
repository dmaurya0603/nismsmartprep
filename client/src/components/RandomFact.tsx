import { useState } from 'react';
import { Quote, RefreshCw } from 'lucide-react';

const QUOTES = [
    "Clear NISM in your first attempt—not by luck, but by structured preparation and smart study strategies.",
    "Every concept you master today is one less obstacle between you and your NISM certification.",
    "The difference between NISM toppers and average scorers is not intelligence—it's consistency and mock test practice.",
    "Mock tests aren't just practice; they're your roadmap to understanding what the actual exam expects from you.",
    "Remember: NISM certification is not just a certificate—it's your competitive edge in the financial markets industry.",
    "Master the one-liners, understand the concepts, and watch your NISM score transform.",
    "Your first attempt is your best attempt. Prepare with dedication, and you'll clear it with confidence.",
    "In NISM exams, time management is as crucial as concept clarity. Practice both in every mock test.",
    "Don't fear negative marking—embrace it as a tool to make smarter choices in the actual exam.",
    "Every question you solve today builds your financial acumen for tomorrow's market challenges.",
    "NISM Series XIII, XV, or any series—the formula for success remains the same: structured learning + consistent practice + expert guidance.",
    "Your NISM score reflects your dedication. Make every mock test count, and your final exam will speak volumes.",
    "From derivatives to research analysis, every NISM series opens doors to new career opportunities. Prepare with that vision.",
    "Smart preparation starts with understanding the exam pattern, and mastery comes through relentless mock test practice.",
    "You're not just preparing for an exam; you're building expertise that will define your finance career. That's the NISM difference."
];

const AUTHOR = "Prof Sheetal Kunder";

export function RandomFact() {
    // Start with a random quote to avoid hydration mismatch if possible, 
    // but for simple client-side rendering, picking one on mount is fine.
    // To be safe with hydration/SSR if used later, we typically use useEffect to randomize,
    // but initially we can show the first one or a loading state.
    // Here we'll just pick randomly on state initialization for simplicity in SPA.
    const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * QUOTES.length));

    // Animation state triggers fade effect
    const [isAnimating, setIsAnimating] = useState(false);

    const getNextQuote = () => {
        setIsAnimating(true);
        setTimeout(() => {
            let nextIndex;
            do {
                nextIndex = Math.floor(Math.random() * QUOTES.length);
            } while (nextIndex === currentIndex && QUOTES.length > 1);

            setCurrentIndex(nextIndex);
            setIsAnimating(false);
        }, 300); // 300ms fade out before changing
    };

    return (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white text-center shadow-lg relative overflow-hidden group">
            {/* Dynamic Background Effect */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

            <div className="relative z-10 flex flex-col items-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Quote className="w-5 h-5 text-yellow-300" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-blue-100">
                        Expert Insight
                    </h3>
                </div>

                <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    <p className="text-xl font-medium leading-relaxed mb-4 italic font-serif">
                        "{QUOTES[currentIndex]}"
                    </p>
                    <div className="flex flex-col items-center gap-1">
                        <div className="h-0.5 w-12 bg-yellow-300/50 mb-2"></div>
                        <p className="text-sm font-semibold text-blue-100">
                            {AUTHOR}
                        </p>
                    </div>
                </div>

                <button
                    onClick={getNextQuote}
                    className="mt-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:rotate-180"
                    title="Get another quote"
                >
                    <RefreshCw className="w-5 h-5 text-white/80 hover:text-white" />
                </button>
            </div>
        </div>
    );
}
