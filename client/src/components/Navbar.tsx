import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Sun, Moon, LogOut, User, Menu, X, Home, BookOpen, Brain, CreditCard } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useState, useRef, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface NavbarProps {
  onOpenAuthModal?: (tab: 'login' | 'signup') => void;
  onProtectedAction?: () => boolean;
}

export function Navbar({ onOpenAuthModal, onProtectedAction }: NavbarProps = {}) {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setShowMobileMenu(false);
      }
    };

    if (showMobileMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [showMobileMenu]);

  const handleLogout = async () => {
    setShowMobileMenu(false);
    setLoggingOut(true);

    try {
      await supabase.auth.signOut();
      localStorage.clear();
      sessionStorage.clear();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
      setLoggingOut(false);
      window.location.href = '/';
    }
  };

  const getUserDisplayName = () => {
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name;
    }
    if (user?.email) {
      return user.email.split('@')[0];
    }
    return 'User';
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: Home, protected: false },
    { name: 'Formulas', path: '/formulas', icon: BookOpen, protected: true },
    { name: 'Quiz', path: '/quiz', icon: Brain, protected: true },
    { name: 'Subscribe', path: '/subscribe', icon: CreditCard, protected: false },
  ];

  const handleNavClick = (path: string, isProtected: boolean) => {
    setShowMobileMenu(false);

    if (isProtected) {
      // If onProtectedAction is provided, check if action is allowed
      if (onProtectedAction && !onProtectedAction()) {
        return;
      }

      // Fallback if no handler provided but protection needed (should ideally be handled by parent)
      if (!user) {
        onOpenAuthModal?.('login');
        return;
      }
    }

    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 py-2.5 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <p className="text-white text-xs sm:text-sm font-semibold relative z-10 flex items-center justify-center gap-2">
          <span className="text-lg">🎓</span>
          <span>Practice quiz and case studies updated with Jan 2026 curriculum</span>
        </p>
      </div>

      {/* Main Navbar */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <img
                  src="/logo.webp"
                  alt="Logo"
                  className="w-10 h-10 rounded-xl shadow-md group-hover:shadow-lg transition-shadow"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  NISM Smart Prep
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path, !!link.protected)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </button>

              {/* User Menu or Login - Desktop */}
              {!user ? (
                <button
                  onClick={() => onOpenAuthModal?.('login')}
                  className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
                >
                  <User className="w-4 h-4" />
                  Login
                </button>
              ) : (
                <div className="hidden md:flex items-center gap-3">
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border border-transparent hover:border-gray-200 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                  >

                    {user.user_metadata?.avatar_url && !imgError ? (
                      <img
                        src={user.user_metadata.avatar_url}
                        alt="Profile"
                        className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 object-cover"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-sm font-bold shadow-sm">
                        {getUserDisplayName().charAt(0).toUpperCase()}
                      </div>
                    )}
                    <span className="hidden lg:block text-sm font-medium text-gray-700 dark:text-gray-200 max-w-[150px] truncate">
                      {getUserDisplayName()}
                    </span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    disabled={loggingOut}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-50"
                  >
                    {loggingOut ? (
                      <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <LogOut className="w-4 h-4" />
                    )}
                    <span className="hidden lg:inline">{loggingOut ? 'Logging out...' : 'Logout'}</span>
                  </button>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="md:hidden p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {showMobileMenu ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav >
      </div >

      {/* Mobile Menu Overlay */}
      {
        showMobileMenu && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowMobileMenu(false)}></div>
          </div>
        )
      }

      {/* Mobile Menu Panel */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-[73px] right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* User Info */}
          {user && (
            <div className="p-6 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-lg border-2 border-white/30">
                  {getUserDisplayName().charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white truncate">
                    {getUserDisplayName()}
                  </p>
                  <p className="text-xs text-blue-100 truncate">
                    {user.email}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="space-y-1 px-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path, !!link.protected)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{link.name}</span>
                  </button>
                );
              })}
            </div>

            {/* User Actions */}
            {user && (
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 px-4 space-y-1">
                <Link
                  to="/dashboard"
                  onClick={() => setShowMobileMenu(false)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span>Account</span>
                </Link>
                <button
                  onClick={handleLogout}
                  disabled={loggingOut}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-50"
                >
                  {loggingOut ? (
                    <div className="w-5 h-5 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <LogOut className="w-5 h-5" />
                  )}
                  <span>{loggingOut ? 'Logging out...' : 'Logout'}</span>
                </button>
              </div>
            )}

            {/* Login Button for Mobile */}
            {!user && (
              <div className="mt-6 px-4">
                <button
                  onClick={() => {
                    setShowMobileMenu(false);
                    onOpenAuthModal?.('login');
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all duration-200"
                >
                  <User className="w-5 h-5" />
                  Login
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              © 2025 Prof. Sheetal Kunder Academy
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
