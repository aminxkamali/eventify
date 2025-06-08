import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eventifyLogo from'../icons/eventifyLogo.png'; // Adjust the path as necessary
export default function ForgetPasswordForm() {
const navigate = useNavigate();
const [email, setEmail] = useState('');
const [errors, setErrors] = useState({});

const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email format.';
    return newErrors;
};

const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
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
    <form
    onSubmit={handleSubmit}
    className="bg-[#0E141E] w-96 max-w-md mx-auto p-4 rounded text-white"
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
    {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}

    <button
        type="submit"
        className="w-full bg-orange-500 mt-2 hover:bg-orange-600 active:bg-orange-400 p-2 rounded-lg text-white font-semibold cursor-pointer transition-colors duration-200"
    >
        Send
    </button>

    <p className="text-center text-sm text-gray-400 mt-4">
        <a href="/Login" className="text-blue-400">
        Back to login
        </a>
    </p>
    </form>
);
}