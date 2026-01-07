import { useNavigate, Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
    onProtectedAction?: () => boolean;
}

export function Footer({ onProtectedAction }: FooterProps = {}) {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: 'Home', path: '/', protected: false },
        { name: 'Formulas', path: '/formulas', protected: true },
        { name: 'Quiz Practice', path: '/quiz', protected: true },
        { name: 'Subscribe', path: '/subscribe', protected: false },
    ];

    const handleLinkClick = (path: string, isProtected: boolean) => {
        if (isProtected) {
            if (onProtectedAction && !onProtectedAction()) {
                return;
            }
        }
        navigate(path);
        scrollToTop();
    };

    const legalLinks = [
        { name: 'Terms & Conditions', path: '/terms' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Shipping & Delivery', path: '/shipping' },
        { name: 'Refund Policy', path: '/refund' },
    ];

    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/logo.webp"
                                alt="Logo"
                                className="w-12 h-12 rounded-lg"
                            />
                            <div>
                                <h3 className="font-bold text-white text-lg">NISM Smart Prep</h3>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            India's Most Valuable NISM Mentorship. Master your NISM Series exams with expert guidance.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <button
                                        onClick={() => handleLinkClick(link.path, !!link.protected)}
                                        className="text-sm text-gray-400 hover:text-white transition-colors text-left"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-2">
                            {legalLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        onClick={scrollToTop}
                                        className="text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:sheetal@profsheetalkunderacademy.com"
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                    <span className="break-all">sheetal@profsheetalkunderacademy.com</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+917400121111"
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                    +91 7400121111
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-2 text-sm text-gray-400">
                                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <span>Mumbai, Maharashtra, India</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-500">
                            © {currentYear} Prof. Sheetal Kunder Academy. All rights reserved.
                        </p>
                        <p className="text-sm text-gray-500">
                            Designed by{' '}
                            <a
                                href="https://shivanshmittal.tech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                shivanshmittal.tech
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
