import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import { Homepage } from './components/Homepage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProtectedRoute } from './components/ProtectedRoute';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { AuthModal } from './components/AuthModal';

// Lazy load heavy components for better performance
const Dashboard = lazy(() => import('./components/Dashboard').then(module => ({ default: module.Dashboard })));
const Quiz = lazy(() => import('./components/Quiz').then(module => ({ default: module.Quiz })));
const Login = lazy(() => import('./components/Login').then(module => ({ default: module.Login })));
const SubscriptionPlans = lazy(() => import('./components/SubscriptionPlans').then(module => ({ default: module.SubscriptionPlans })));
const DashboardHome = lazy(() => import('./components/DashboardHome').then(module => ({ default: module.DashboardHome })));
const Terms = lazy(() => import('./components/Terms').then(module => ({ default: module.Terms })));
const ShippingPolicy = lazy(() => import('./components/ShippingPolicy').then(module => ({ default: module.ShippingPolicy })));
const RefundPolicy = lazy(() => import('./components/RefundPolicy').then(module => ({ default: module.RefundPolicy })));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
// Loading Component
import { PageLoader } from './components/PageLoader';
import { ScrollToTop } from './components/ScrollToTop';
// ... (imports)
import { useAuth } from './context/AuthContext';
import { SubscriptionPopup } from './components/SubscriptionPopup';

function AppContent() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSubscriptionPopupOpen, setIsSubscriptionPopupOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'login' | 'signup'>('login');
  const { user, hasActiveSubscription } = useAuth();

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

  return (
    <>
      <ScrollToTop />
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        defaultTab={authModalTab}
      />
      <SubscriptionPopup
        isOpen={isSubscriptionPopupOpen}
        onClose={() => setIsSubscriptionPopupOpen(false)}
      />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login defaultTab="signup" />} />

          {/* Subscription Plans - Public page with navbar */}
          <Route path="/subscribe" element={
            <div className="min-h-screen bg-white dark:bg-black">
              <Navbar onOpenAuthModal={openAuthModal} onProtectedAction={handleProtectedAction} />
              <main role="main" className="fade-in">
                <SubscriptionPlans />
              </main>
              <Footer onProtectedAction={handleProtectedAction} />
            </div>
          } />

          {/* Dashboard - Main landing page after login */}
          <Route path="/dashboard" element={
            <ProtectedRoute requireSubscription={false}>
              <div className="min-h-screen bg-white dark:bg-black">
                <Navbar onOpenAuthModal={openAuthModal} onProtectedAction={handleProtectedAction} />
                <main role="main" className="fade-in">
                  <DashboardHome />
                </main>
                <Footer onProtectedAction={handleProtectedAction} />
              </div>
            </ProtectedRoute>
          } />

          {/* Formulas - Requires subscription */}
          <Route path="/formulas" element={
            <ProtectedRoute requireSubscription={true}>
              <div className="min-h-screen bg-white dark:bg-black">
                <Navbar onOpenAuthModal={openAuthModal} onProtectedAction={handleProtectedAction} />
                <main role="main" className="fade-in">
                  <Dashboard />
                </main>
                <Footer onProtectedAction={handleProtectedAction} />
              </div>
            </ProtectedRoute>
          } />

          {/* Quiz - Requires subscription */}
          <Route path="/quiz" element={
            <ProtectedRoute requireSubscription={true}>
              <div className="min-h-screen bg-white dark:bg-black">
                <Navbar onOpenAuthModal={openAuthModal} onProtectedAction={handleProtectedAction} />
                <main role="main" className="fade-in">
                  <Quiz />
                </main>
                <Footer onProtectedAction={handleProtectedAction} />
              </div>
            </ProtectedRoute>
          } />

          {/* Terms & Conditions - Public page */}
          <Route path="/terms" element={
            <div className="min-h-screen bg-white dark:bg-black">
              <Navbar onOpenAuthModal={openAuthModal} onProtectedAction={handleProtectedAction} />
              <Terms />
              <Footer onProtectedAction={handleProtectedAction} />
            </div>
          } />

          {/* Privacy Policy - Public page */}
          <Route path="/privacy" element={
            <div className="min-h-screen bg-white dark:bg-black">
              <Navbar onOpenAuthModal={openAuthModal} onProtectedAction={handleProtectedAction} />
              <PrivacyPolicy />
              <Footer onProtectedAction={handleProtectedAction} />
            </div>
          } />

          {/* Shipping & Delivery Policy - Public page */}
          <Route path="/shipping" element={
            <div className="min-h-screen bg-white dark:bg-black">
              <Navbar onOpenAuthModal={openAuthModal} onProtectedAction={handleProtectedAction} />
              <ShippingPolicy />
              <Footer onProtectedAction={handleProtectedAction} />
            </div>
          } />

          {/* Refund & Cancellation Policy - Public page */}
          <Route path="/refund" element={
            <div className="min-h-screen bg-white dark:bg-black">
              <Navbar onOpenAuthModal={openAuthModal} onProtectedAction={handleProtectedAction} />
              <RefundPolicy />
              <Footer onProtectedAction={handleProtectedAction} />
            </div>
          } />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
