import { BookOpen, Trophy, Target, Star } from 'lucide-react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AuthModal } from './AuthModal';
import { useAuth } from '../context/AuthContext';
import { SubscriptionPopup } from './SubscriptionPopup';

export function Homepage() {
  const navigate = useNavigate();
  const { user, hasActiveSubscription } = useAuth();
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSubscriptionPopupOpen, setIsSubscriptionPopupOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'login' | 'signup'>('login');

  const testimonials = [
    {
      name: "Chandra Shekaar",
      role: "Cleared Research Analyst (RA)",
      image: "👨‍🔬",
      text: "Just cleared the Research Analyst (RA) on my first attempt — and I'm from an engineering background! Big thanks to Sheetal Madam — her course is truly transformative. She explains tough concepts clearly and keeps learning engaging.",
      rating: 5
    },
    {
      name: "Pankaj Sabnani",
      role: "Cleared NISM XV (1st Attempt)",
      image: "👨‍🎓",
      text: "I just cleared the NISM XV Research Analyst Exam in my first attempt and I can't thank Prof. Sheetal Kunder ma'am and her team enough. Her videos helped me in getting my concepts cleared for all types of questions.",
      rating: 5
    },
    {
      name: "Sandip Kadam",
      role: "Cleared NISM XIII",
      image: "👨‍💼",
      text: "This was my 3rd attempt and believe that it was only because of her tremendous support and mentorship. Sheetal mam is an excellent teacher who always answers questions patiently and ensures we don't have any confusion.",
      rating: 5
    },
    {
      name: "Neeraj Yadav",
      role: "Student",
      image: "👨‍💻",
      text: "Prof. Sheetal Kunder is an excellent mentor who goes above and beyond to ensure her students understand every concept clearly. She is approachable, patient, and always willing to explain even the smallest doubts.",
      rating: 5
    },
    {
      name: "Seo Moon-jo",
      role: "Cleared Common Derivatives",
      image: "👩‍💼",
      text: "I enrolled for common derivatives exam with Sheetal Kunder Academy a month back. The study plan video in the course helped me plan my exam strategy. I cleared in my first attempt. Thank you so much Sheetal ma'am!",
      rating: 5
    }
  ];

  const openAuthModal = (tab: 'login' | 'signup') => {
    setAuthModalTab(tab);
    setIsAuthModalOpen(true);
  };

  const handleProtectedAction = () => {
    if (!user) {
      openAuthModal('login');
      return false;
    }
    if (!hasActiveSubscription) {
      setIsSubscriptionPopupOpen(true);
      return false;
    }
    return true;
  };

  const handleFormulaTutorClick = () => {
    if (handleProtectedAction()) {
      navigate('/formulas');
    }
  };

  const handleQuizPracticeClick = () => {
    if (handleProtectedAction()) {
      navigate('/quiz');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      <Navbar onOpenAuthModal={openAuthModal} onProtectedAction={handleProtectedAction} />

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        defaultTab={authModalTab}
      />

      <SubscriptionPopup
        isOpen={isSubscriptionPopupOpen}
        onClose={() => setIsSubscriptionPopupOpen(false)}
      />

      {/* Floating WhatsApp Chat Button */}
      <a
        href="https://api.whatsapp.com/send?phone=%2B919987308778&text=Hello%20Prof.%20Sheetal%20Mam%2C%20I%20have%20a%20query%20regarding%20NISM%20Exam%20Series.%20Please%20guide%20me%20further"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all hover:scale-110 button-press"
        style={{ boxShadow: '0 4px 24px 0 rgba(37, 211, 102, 0.4)' }}
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-8 h-8"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4.062 28.25a1 1 0 0 0 1.312 1.312l6.857-2.174A11.96 11.96 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.74 0-3.41-.447-4.857-1.223a1 1 0 0 0-.765-.07l-5.13 1.627 1.627-5.13a1 1 0 0 0-.07-.765A9.963 9.963 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.29-7.709c-.273-.137-1.617-.797-1.868-.888-.25-.092-.432-.137-.614.137-.182.273-.705.888-.865 1.07-.159.182-.318.205-.591.068-.273-.137-1.153-.425-2.197-1.354-.813-.724-1.362-1.617-1.523-1.89-.159-.273-.017-.42.12-.557.124-.123.273-.318.409-.477.137-.159.182-.273.273-.455.091-.182.045-.341-.023-.478-.068-.137-.614-1.482-.841-2.03-.222-.534-.448-.461-.614-.47-.159-.007-.341-.009-.523-.009a1.01 1.01 0 0 0-.727.341c-.25.273-.955.934-.955 2.277 0 1.343.978 2.64 1.114 2.823.137.182 1.926 2.943 4.67 4.013.653.282 1.162.45 1.56.576.655.209 1.25.18 1.72.109.525-.078 1.617-.661 1.846-1.299.227-.637.227-1.183.159-1.299-.068-.114-.25-.182-.523-.318z" /></svg>
      </a>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 sm:py-20 pt-24">
        <div className="text-center mb-12 fade-in">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-pska rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative p-6 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 rounded-full">
              <Trophy className="w-16 h-16 text-blue-600 dark:text-blue-400" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-6xl font-extrabold mb-4 leading-tight">
            <span className="text-gradient">Clear NISM Series in 1st Attempt</span>
            <br />
            <span className="text-2xl sm:text-4xl font-bold text-gray-700 dark:text-gray-300 mt-2 block">
              Smart Preparation Starts Here 🎯
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of successful candidates who cleared NISM certifications with Prof. Sheetal Kunder Academy
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={handleFormulaTutorClick}
              className="px-8 py-4 bg-gradient-pska text-white rounded-xl hover:shadow-2xl glow-effect transition-all transform hover:scale-105 font-bold text-lg w-full sm:w-auto button-press"
            >
              Formula Tutor
            </button>
            <button
              onClick={handleQuizPracticeClick}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-cyan-400 border-2 border-blue-600 dark:border-cyan-400 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 font-bold text-lg w-full sm:w-auto button-press"
            >
              Quiz Practice
            </button>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold">
              ✓ Updated Jan 2026 Curriculum
            </span>
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
              ✓ 50+ Practice Formulas
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold">
              ✓ Expert Guidance
            </span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-2 border-blue-100 dark:border-gray-700 card-hover fade-in">
            <div className="bg-blue-100 dark:bg-blue-900 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Formula Tutor</h3>
            <p className="text-gray-600 dark:text-gray-300">Master all NISM formulas with step-by-step solutions and practice problems</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-2 border-blue-100 dark:border-gray-700 card-hover fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-cyan-100 dark:bg-cyan-900 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Quiz Practice</h3>
            <p className="text-gray-600 dark:text-gray-300">Topic-wise quizzes with instant feedback and detailed explanations</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-2 border-blue-100 dark:border-gray-700 card-hover fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-purple-100 dark:bg-purple-900 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Trophy className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Progress Tracking</h3>
            <p className="text-gray-600 dark:text-gray-300">Monitor your performance and get readiness reports for exams</p>
          </div>
        </div>
      </section>

      {/* About Prof. Sheetal Kunder */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="max-w-3xl w-full bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow p-6 md:p-8 border border-yellow-200 text-gray-900 dark:text-gray-100 text-lg leading-relaxed flex flex-col items-center">
            <img
              src="/pp.jpeg"
              alt="About Prof. Sheetal Kunder"
              className="rounded-full shadow-2xl w-56 h-56 object-cover border-4 border-yellow-200 mb-6"
            />
            <h2 className="text-2xl font-bold mb-2 text-gradient">About Prof. Sheetal Kunder (Program Director)</h2>
            <p className="mb-2 font-semibold">SEBI® Research Analyst. Registration No. INH000013800</p>
            <p className="mb-2">M.Com, M.Phil, B.Ed, PGDFM, Teaching Diploma (in Accounting & Finance) from Cambridge International Examination, UK. Various NISM Certification Holders. Ex-BSE Institute Faculty.</p>
            <p>18 years of extensive experience in Accounting & Finance. Faculty Development Programs and Management Development Programs at the PAN India level to create awareness about the emerging trends in the Indian Capital Market, and counsel hundreds of students in career choices in the finance area</p>
            <div className="flex flex-wrap gap-4 mt-6 justify-center">
              <a
                href="https://www.linkedin.com/in/sheetal-kunder-608870179/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg button-press font-semibold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" /></svg>
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@profsheetalkunderacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all hover:shadow-lg button-press font-semibold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.116c-1.868-.504-9.386-.504-9.386-.504s-7.518 0-9.386.504a2.994 2.994 0 0 0-2.112 2.116c-.504 1.868-.504 5.768-.504 5.768s0 3.9.504 5.768a2.994 2.994 0 0 0 2.112 2.116c1.868.504 9.386.504 9.386.504s7.518 0 9.386-.504a2.994 2.994 0 0 0 2.112-2.116c.504-1.868.504-5.768.504-5.768s0-3.9-.504-5.768zm-13.498 9.814v-8l8 4-8 4z" /></svg>
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Hear from our successful students
            </p>
            <div className="h-1 w-24 bg-gradient-pska mx-auto rounded-full mt-4"></div>
          </div>

          {/* Horizontal Scrolling Testimonials */}
          <div
            ref={testimonialsRef}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'thin' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 sm:w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border-2 border-blue-100 dark:border-gray-700 snap-center card-hover"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient mb-4">
                Learning Resources
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Watch our educational videos on YouTube
              </p>
              <div className="h-1 w-24 bg-gradient-pska mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/AE87u7K11Lo?si=hh3ZMAUpIhmLoeNg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-72 rounded-2xl shadow-xl border-2 border-red-200 dark:border-gray-600"></iframe>
              </div>
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Mx1dw21vByw?si=Y2rAod3H--jRfy1K" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-72 rounded-2xl shadow-xl border-2 border-red-200 dark:border-gray-600"></iframe>
              </div>
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/07eFKNFo8vY?si=xGG_QOjAErw6Esrw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-72 rounded-2xl shadow-xl border-2 border-red-200 dark:border-gray-600"></iframe>
              </div>
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/sjh_ol4RTMw?si=JXioOi36lrTxxOoS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; compute-pressure" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-72 rounded-2xl shadow-xl border-2 border-red-200 dark:border-gray-600"></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer onProtectedAction={handleProtectedAction} />
    </div>
  );
}
