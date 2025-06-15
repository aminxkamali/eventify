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
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="pi pi-twitter text-xl hover:text-orange-400"></i></a>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><i className="pi pi-instagram text-xl hover:text-orange-400"></i></a>
                    <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"><i className="pi pi-youtube text-xl hover:text-orange-400"></i></a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="pi pi-linkedin text-xl hover:text-orange-400"></i></a>
                </div>
            </div>

            {/* Columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16 text-sm">
            {/* درباره ایونتیفای */}
                <div>
                    <h4 className="font-semibold text-gray-300 mb-3">About Eventify</h4>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <li>Eventify is your all-in-one platform for discovering, creating, and managing events with your friends and teams.</li>
                        <li>Plan, join, and organize events easily with a modern and intuitive interface.</li>
                        <li>Collaborate with your community, share ideas, and never miss an important moment.</li>
                        <li>Designed for teams, friends, and anyone who loves to connect and celebrate together.</li>
                    </ul>
                </div>

            {/* Explore */}
                <div>
                    <h4 className="font-semibold text-gray-300 mb-3">Explore</h4>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <li><Link to="/ExplorePage">Discover Events</Link></li>
                        <li><Link to="/MyEventsPage">My Events</Link></li>
                        <li><Link to="/CommunityPage">Community</Link></li>
                        <li><Link to="/CreateEvent">Create Event</Link></li>
                        <li><Link to="/ProfilePage">Profile</Link></li>
                        <li><Link to="/ContactUsPage">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact & Support */}
                <div>
                    <h4 className="font-semibold text-gray-300 mb-3">Contact & Support</h4>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <li>Have questions or need help? Reach out to us!</li>
                        <li>We are here to assist you with any inquiries or issues.</li>
                        <li>Follow us on social media for updates and news.</li>
                        <li>Join our community for discussions and support.</li>
                        <li>Email: <a href="mailto:support@eventify.com" className="hover:text-orange-400">support@eventify.com</a></li>
                        <li>Instagram: <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">@eventify</a></li>
                        <li>LinkedIn: <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">Eventify Team</a></li>
                        <li>Help Center</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>
        </div>
        </footer>
    );
}
