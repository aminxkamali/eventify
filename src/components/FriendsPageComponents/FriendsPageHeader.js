import React from 'react';
import { useNavigate } from 'react-router-dom'; // اگر از react-router-dom v6 استفاده می‌کنی
import eventifyLogo from '../../icons/eventifyLogo.png';
import { Link } from 'react-router-dom';
export default function FriendsPageHeader() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // حذف اطلاعات ذخیره‌شده
        localStorage.removeItem('user');
        localStorage.removeItem('token'); // یا هر چیزی که ذخیره کردی

        // انتقال به صفحه ورود
        navigate('/');
    };

    return (
        <header className="bg-[#0E141E] pr-4 pl-4">
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center'>
                    <img src={eventifyLogo} alt="Eventify Logo" className="h-20 w-20" />
                    <h1 className="text-white text-2xl font-bold font-sans">Eventify</h1>
                </div>
                <div className='flex flex-row items-center space-x-4 gap-2'>
                    <Link to="/HomePage" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="/events" className="text-white hover:text-gray-300">Explore</Link>
                    <Link to="/settings" className="text-white hover:text-gray-300">My Events</Link>
                    <Link to="/TeamsPage" className="hover:text-orange-400">Teams</Link>
                    <button
                        onClick={handleLogout}
                        className="text-white hover:text-red-500 transition-colors duration-200"
                    >
                        Logout
                    </button>
                </div>
                <div className='flex items-center gap-3'>
                    <Link to="/CreateEvent">
                        <button className='bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200'>
                            <span className="text-white">Create Event</span>
                        </button>
                    </Link>
                    <Link to='/ProfilePage'>
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-12 h-12 rounded-full border-2 border-white" alt="profile" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
