import { useState } from 'react';
import PasswordField from '../inputs/PasswordField';
import TextField from '../inputs/TextField';
import 'primereact/resources/themes/lara-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import eventifyLogo from '../icons/eventifyLogo.png'; // Adjust the path as necessary
export default function SignUpForm() {

const [form, setForm] = useState({
    FirstName: '',
    LastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
});
const [errors, setErrors] = useState({});

const validate = () => {
    const newErrors = {};
    if (!form.FirstName.trim()) newErrors.FirstName = 'First name is required.';
    if (!form.LastName.trim()) newErrors.LastName = 'Last name is required.';
    if (!form.username.trim()) newErrors.username = 'Username is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email format.';
    if (!form.password) newErrors.password = 'Password is required.';
    else {
        if (form.password.length < 8) newErrors.password = 'Password must be at least 8 characters.';
        if (!/[a-z]/.test(form.password)) newErrors.password = 'Password must contain a lowercase letter.';
        if (!/[A-Z]/.test(form.password)) newErrors.password = 'Password must contain an uppercase letter.';
        if (!/[0-9]/.test(form.password)) newErrors.password = 'Password must contain a number.';
    }
    if (!form.confirmPassword) newErrors.confirmPassword = 'Please confirm your password.';
    else if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';
    return newErrors;
};

const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    // TODO: Submit registration to backend
    alert('Registration successful!');
};

return (
    <form onSubmit={handleSubmit} className="w-96 ">
    <div className="flex flex-col items-center mb-6">
        <div className="flex flex-row items-center mb-6">
        <img src={eventifyLogo} className="w-20 h-20" alt="logo" />
        <span className="text-4xl font-inter">eventify</span>
        </div>
        <h2 className="text-2xl font-bold mt-4">Sign up</h2>
        <p className="text-sm text-gray-400">Create an account to get started</p>
    </div>
    {['FirstName', 'LastName', 'username', 'email', 'password', 'confirmPassword'].map((field, idx) => {
        const isPassword = field.toLowerCase() === 'password';
        const isConfirm = field.toLowerCase() === 'confirmpassword';
        return (
            <div key={idx} className="mb-2 relative flex flex-col w-full">
                <label className="block text-sm mb-2">{field.replace(/([A-Z])/g, ' $1')}</label>
                {isPassword || isConfirm ? (
                    <PasswordField
                        name={field}
                        value={form[field]}
                        onChange={handleInputChange}
                        feedback={isPassword} // فقط برای فیلد پسورد اصلی فیدبک فعال باشد
                    />
                ) : (
                    <TextField
                        name={field}
                        value={form[field]}
                        onChange={handleInputChange}
                    />
                )}
                {errors[field] && <span className="text-red-400 text-xs">{errors[field]}</span>}
            </div>
        );
    })}
    <button
        type="submit"
        className="w-full bg-orange-500 mt-2 hover:bg-orange-600 active:bg-orange-400 p-2 rounded-lg text-white font-semibold cursor-pointer transition-colors duration-200"
    >
        Sign up
    </button>
    <p className="text-center text-sm text-gray-400 mt-4 mb-4">
        Already have an account?{' '}
        <a className="text-blue-400" href="/Login">Sign in</a>
    </p>
    </form>
);
}
