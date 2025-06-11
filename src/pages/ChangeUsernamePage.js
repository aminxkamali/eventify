import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eventifyLogo from '../icons/eventifyLogo.png';

export default function ChangeUsernamePage() {
    const navigate = useNavigate();
    const [newUsername, setNewUsername] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Mock: لیست یوزرنیم‌های تکراری برای تست
    const takenUsernames = ['admin', 'test', 'user1'];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);
        setIsLoading(true);
        // بررسی تکراری بودن یوزرنیم
        if (takenUsernames.includes(newUsername.trim().toLowerCase())) {
            setError('This username is already taken.');
            setIsLoading(false);
            return;
        }
        // اینجا باید api صدا زده شود
        // await api.changeUsername({ oldUsername, newUsername })
        setTimeout(() => {
            setSuccess(true);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0E141E] text-white px-4">
            <div className="bg-[#181F2A] rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-8">
                <div className="flex flex-col items-center gap-2">
                    <img src={eventifyLogo} alt="Eventify Logo" className="w-20 h-20" />
                    <h2 className="text-2xl font-bold mb-2 text-center">Change Username</h2>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <label htmlFor="new-username" className="text-sm font-semibold">New Username</label>
                    <input
                        id="new-username"
                        type="text"
                        value={newUsername}
                        onChange={e => setNewUsername(e.target.value)}
                        className="rounded-lg px-4 py-2 bg-[#21333F] text-white border border-[#21333F] outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter new username"
                        autoComplete="off"
                        required
                    />
                    {error && <div className="text-red-400 text-sm mt-1">{error}</div>}
                    {success && <div className="text-green-400 text-sm mt-1">Username changed successfully!</div>}
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 mt-2"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Saving...' : 'Change Username'}
                    </button>
                </form>
                <button
                    className="text-blue-400 hover:underline text-sm mt-2"
                    onClick={() => navigate('/profilePage')}
                >
                    Back to Profile
                </button>
            </div>
        </div>
    );
}
