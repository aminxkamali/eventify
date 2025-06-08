import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eventifyLogo from'../icons/eventifyLogo.png'; // Adjust the path as necessary
export default function ForgetPasswordForm() {
const navigate = useNavigate();
const [email, setEmail] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // TODO: Replace this with your real API call
        // Example:
        // const response = await fetch('/api/forgot-password', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ email }),
        // });
        // if (response.ok) {
        //   navigate('/resetPasswordSuccessPage', { state: { emailSent: true } });
        // } else {
        //   navigate('/passwordResetErrorPage', { state: { emailError: true } });
        // }
    } catch (err) {
        navigate('/passwordResetErrorPage', { state: { emailError: true } });
    }
};

return (
    <div className='bg-[#0E141E] min-h-screen flex flex-col items-center justify-center'>
        <form
        onSubmit={handleSubmit}
        className="w-96 max-w-md mx-auto p-4 rounded text-white animate-fade-in-up"
        >
        <div className="flex flex-col items-center mb-6">
            <div className="flex flex-row items-center mb-6">
            <img src={eventifyLogo} className="w-20 h-20" alt="logo" />
            <span className="text-4xl font-inter">eventify</span>
            </div>
            <h2 className="text-2xl font-bold mt-4">Forget password</h2>
            <p className="text-sm text-center text-gray-400 mt-2">
            Enter your email address below and we&apos;ll send you instructions for
            resetting your password
            </p>
        </div>

        <label htmlFor="email" className="block text-sm mb-1">
            Email
        </label>
        <input
            id="email"
            type="email"
            className="w-full h-11 mb-4 p-2 rounded-lg bg-[#060C16] border border-[#21333F] mt-1 focus:border-white outline-none transition-colors duration-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />

        <button
            type="submit"
            className="w-full bg-orange-500 mt-2 hover:bg-orange-600 active:bg-orange-400 p-2 rounded-lg text-white font-semibold cursor-pointer transition-colors duration-200"
        >
            Send
        </button>

        <p className="text-center text-sm text-gray-400 mt-4">
            <a href="/change-password-method" className="text-blue-400">
            Back to change password
            </a>
        </p>
        </form>
    </div>
);
}

/* Tailwind animation utility (add to your global CSS if not already present) */
/*
@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fade-in-up 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
*/