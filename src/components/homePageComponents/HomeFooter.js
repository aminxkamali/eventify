import React from 'react';
import { Link } from 'react-router-dom';
import EventifyLogo from '../../icons/eventifyLogo.png';
export default function HomeFooter() {
    return (
        <footer className="bg-[#0E141E] text-white w-full pt-12 pb-16 px-8">
            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">

            {/* Socials & Logo */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1">
                    <img src={EventifyLogo} alt="logo" className="w-12 h-12" />
                    <span className="text-l ">eventify</span>
                </div>
                <div className="flex gap-4 mt-2">
                    <a href="#"><i className="pi pi-twitter text-xl hover:text-orange-400"></i></a>
                    <a href="#"><i className="pi pi-instagram text-xl hover:text-orange-400"></i></a>
                    <a href="#"><i className="pi pi-youtube text-xl hover:text-orange-400"></i></a>
                    <a href="#"><i className="pi pi-linkedin text-xl hover:text-orange-400"></i></a>
                </div>
            </div>

            {/* Columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16 text-sm">
            {/* Use Cases */}
                <div>
                    <h4 className="font-semibold text-gray-300 mb-3">Use cases</h4>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <li><Link to="#">UI design</Link></li>
                        <li><Link to="#">UX design</Link></li>
                        <li><Link to="#">Wireframing</Link></li>
                        <li><Link to="#">Diagramming</Link></li>
                        <li><Link to="#">Brainstorming</Link></li>
                        <li><Link to="#">Online whiteboard</Link></li>
                        <li><Link to="#">Team collaboration</Link></li>
                    </ul>
                </div>

            {/* Explore */}
                <div>
                    <h4 className="font-semibold text-gray-300 mb-3">Explore</h4>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <li><Link to="#">Design</Link></li>
                        <li><Link to="#">Prototyping</Link></li>
                        <li><Link to="#">Development features</Link></li>
                        <li><Link to="#">Design systems</Link></li>
                        <li><Link to="#">Collaboration features</Link></li>
                        <li><Link to="#">Design process</Link></li>
                        <li><Link to="#">FigJam</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                    <div>
                        <h4 className="font-semibold text-gray-300 mb-3">Resources</h4>
                        <ul className="flex flex-col gap-2 text-gray-400">
                            <li><Link to="#">Blog</Link></li>
                            <li><Link to="#">Best practices</Link></li>
                            <li><Link to="#">Colors</Link></li>
                            <li><Link to="#">Color wheel</Link></li>
                            <li><Link to="#">Support</Link></li>
                            <li><Link to="#">Developers</Link></li>
                            <li><Link to="#">Resource library</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
