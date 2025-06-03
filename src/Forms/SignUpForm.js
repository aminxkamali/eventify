import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordField from '../inputs/PasswordField';
import TextField from '../inputs/TextField';
import 'primereact/resources/themes/lara-dark-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import eventifyLogo from '../icons/eventifyLogo.png'; // Adjust the path as necessary
export default function SignUpForm() {
const navigate = useNavigate();

const [form, setForm] = useState({
    FirstName: '',
    LastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
});

const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
    alert('Passwords do not match!');
    return;
    }

    try {
    // TODO: Replace this with your real API call
    // Example:
    // const response = await fetch('/api/signup', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form),
    // });
    // if (response.ok) {
    //   alert('Registration successful!');
    //   navigate('/');
    // } else {
    //   alert('Registration failed');
    // }
    } catch (error) {
    alert('Registration failed');
    }
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
        const passwordsFilled = form.password && form.confirmPassword;
        const passwordsMatch = passwordsFilled && form.password === form.confirmPassword;

        // Password validation rules
        const password = form.password;
        const hasLower = /[a-z]/.test(password);
        const hasUpper = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasMinLength = password && password.length >= 8;
        const allValid = hasLower && hasUpper && hasNumber && hasMinLength;

        // Suggestions for feedback
        const suggestions = [
            { label: 'At least one lowercase', valid: hasLower },
            { label: 'At least one uppercase', valid: hasUpper },
            { label: 'At least one numeric', valid: hasNumber },
            { label: 'Minimum 8 characters', valid: hasMinLength },
        ];
        const rules = { hasLower, hasUpper, hasNumber, hasMinLength };

        return (
            <div key={idx} className="mb-4 relative flex flex-col w-full">
                <label className="block text-sm mb-2">{field.replace(/([A-Z])/g, ' $1')}</label>
                {isPassword ? (
                    <PasswordField
                        name={field}
                        value={form[field]}
                        onChange={handleChange}
                        feedback={true}
                        suggestions={suggestions}
                        allValid={allValid}
                        showIcon={!!password}
                        rules={rules}
                    />
                ) : isConfirm ? (
                    <PasswordField
                        name={field}
                        value={form[field]}
                        onChange={handleChange}
                        feedback={false}
                        suggestions={suggestions}
                        allValid={passwordsMatch && allValid}
                        showIcon={!!form.confirmPassword}
                        rules={rules}
                    />
                ) : (
                    <TextField
                        name={field}
                        value={form[field]}
                        onChange={handleChange}
                    />
                )}
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
        <a className="text-blue-400" href="/">Sign in</a>
    </p>
    </form>
);
}
