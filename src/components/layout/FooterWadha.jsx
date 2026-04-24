import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const FooterWadha = () => {
    const instagramUrl = "https://www.instagram.com/wadhadetergent?igsh=MTB2dGY0emVnZW8wYQ==";

    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Column 1 */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Wadha</h3>
                        <div className="flex flex-col space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <span>📞</span> 9404007182, 7887881694
                            </div>
                            <div className="flex items-center gap-2">
                                <span>✉️</span> swamiindustries.wadha@gmail.com
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2 text-sm">
                            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
                            <a href="#" className="hover:text-white transition-colors">Careers</a>
                            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Products</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/catalog" className="hover:text-white transition-colors">All Products</Link></li>
                            <li><Link to="/catalog?cat=detergent-powder" className="hover:text-white transition-colors">Wash and Shine Range</Link></li>
                            <li><Link to="/catalog?cat=detergent-cake" className="hover:text-white transition-colors">Wash and Shine Cakes</Link></li>
                            <li><Link to="/catalog?cat=toilet-cleaner" className="hover:text-white transition-colors">Toilet Cleaner</Link></li>
                            <li><Link to="/catalog?cat=liquid-dishwash" className="hover:text-white transition-colors">Liquid Dishwash</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Learn</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Stain Removal Guide</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">How to Wash</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Fabric Care Tips</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Wadha Detergent Powder. All Rights Reserved.</p>
                    <p className="mt-2 md:mt-0">Designed for Powerful Clean.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterWadha;
