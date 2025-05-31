import { Link } from 'react-router-dom';
import eventifyLogo from '../../icons/eventifyLogo.png'; // Adjust the path as necessary
export default function HomeHeader() {
return (
    <header className="w-full bg-[#0E141E] flex flex-col items-center ">
        <div className="w-full pr-8 pl-8 flex items-center justify-between">
            <div className="w-1/3 flex items-center justify-start">
                <img src={eventifyLogo} className="w-20 h-20" alt="logo" />
                <span className="text-xl font-inter font-bold text-white self-center">
                    eventify
                </span>
            </div>
            <nav className="w-1/3 flex items-center gap-6 text-white text-base font-medium justify-center" >
                <Link to="/HomePage" className="hover:text-orange-400">Home</Link>
                <Link to="/explore" className="hover:text-orange-400">Explore</Link>
                <Link to="/MyEventsPage" className="hover:text-orange-400">My Events</Link>
                <Link to="/FriendsPage" className="hover:text-orange-400">Friends</Link>
                <Link to="/TeamsPage" className="hover:text-orange-400">Teams</Link>
            </nav>
            <div className="w-1/3 flex items-center gap-3 justify-end">
                <Link to='/ProfilePage'>
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-12 h-12 rounded-full border-2 border-white" alt="profile" />
                </Link>
            </div>
        </div>
    </header>
);
}
