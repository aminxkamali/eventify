import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eventifyLogo from "../icons/eventifyLogo.png"
import PasswordField from '../inputs/PasswordField';

export default function LoginForm() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errors, setErrors] = useState({});
const navigate = useNavigate();

const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Invalid email format.';
    if (!password) newErrors.password = 'Password is required.';
    return newErrors;
};

const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    try {
        if (email === 'admin@gmail.com' && password === 'admin') {
            navigate('/HomePage');
            return;
        }
      // TODO: Replace this with your real API call
      // Example:
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password }),
      // });
      // if (response.ok) {
      //   const data = await response.json();
      //   login(data.token); // ذخیره توکن در context
      //   navigate('/home');
      // } else {
      //   alert('Login failed');
      // }
        } catch (err) {
        
            alert('Login failed');
        }
};

return (
    <form onSubmit={handleSubmit} className="bg-[#0E141E] w-96">
        <div className="flex flex-col items-center mb-6">
            <div className="flex flex-row items-center mb-6">
            <img src={eventifyLogo} className="w-20 h-20" alt="logo" />
            <span className="text-4xl font-inter">eventify</span>
            </div>
            <h2 className="text-2xl font-bold mt-4 mb-1">Log in</h2>
            <p className="text-sm text-gray-400">
            Welcome back! Please enter your details.
            </p>
        </div>
        <div className="mb-4">
            <label className="block text-sm mb-1">Email</label>
            <input
                type="email"
                className="w-full h-11 p-2 rounded-lg bg-[#060C16] border border-[#21333F] mt-1 focus:border-white outline-none transition-colors duration-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
        </div>
        <div className="flex justify-between items-center">
            <label className="block text-sm mb-1">Password</label>
            <a href="/ForgetPasswordPage" className="text-xs text-blue-400">
            Forget password?
            </a>
        </div>
        <PasswordField
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            feedback={false}
            className="w-full h-11 mb-8 p-2 rounded-lg bg-[#060C16] border border-[#21333F] mt-1 focus:border-white outline-none transition-colors duration-200 mb-8"
        />
        {errors.password && <span className="text-red-400 text-xs">{errors.password}</span>}
        <button
            type="submit"
            className="w-full mt-6 bg-orange-500 hover:bg-orange-600 active:bg-orange-400 p-2 rounded-lg text-white font-semibold cursor-pointer transition-colors duration-200"
        >
            Log in
        </button>
        <p className="text-center text-sm text-gray-400 mt-4">
            Don’t have an account?{' '}
            <a className="text-blue-400" href="/signup">
            Sign up
            </a>
        </p>
    </form>
);
}