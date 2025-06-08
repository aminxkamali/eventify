import React, { useState } from 'react';
import PasswordField from '../inputs/PasswordField';

export default function ChangePasswordCurrentForm({ onSubmit }) {
    const [form, setForm] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!form.currentPassword) newErrors.currentPassword = 'Current password is required.';
        if (!form.newPassword) newErrors.newPassword = 'New password is required.';
        else {
            if (form.newPassword.length < 8) newErrors.newPassword = 'Password must be at least 8 characters.';
            if (!/[a-z]/.test(form.newPassword)) newErrors.newPassword = 'Password must contain a lowercase letter.';
            if (!/[A-Z]/.test(form.newPassword)) newErrors.newPassword = 'Password must contain an uppercase letter.';
            if (!/[0-9]/.test(form.newPassword)) newErrors.newPassword = 'Password must contain a number.';
        }
        if (!form.confirmNewPassword) newErrors.confirmNewPassword = 'Please confirm your new password.';
        else if (form.newPassword !== form.confirmNewPassword) newErrors.confirmNewPassword = 'Passwords do not match.';
        return newErrors;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;
        onSubmit(form);
    };

    const password = (form.newPassword || '').toString();
    const passwordValidationRules = {
        hasLower: /[a-z]/.test(password),
        hasUpper: /[A-Z]/.test(password),
        hasNumber: /[0-9]/.test(password),
        hasMinLength: password.length >= 8,
    };

    const suggestions = [
        { label: 'At least one lowercase', valid: passwordValidationRules.hasLower },
        { label: 'At least one uppercase', valid: passwordValidationRules.hasUpper },
        { label: 'At least one numeric', valid: passwordValidationRules.hasNumber },
        { label: 'Minimum 8 characters', valid: passwordValidationRules.hasMinLength },
    ];

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
                <label htmlFor="currentPassword" className="block mb-2">Current Password</label>
                <PasswordField
                    name="currentPassword"
                    value={form.currentPassword}
                    onChange={handleChange}
                    feedback={false}
                    className="w-full h-11 p-2 rounded-lg bg-[#060C16] border border-[#21333F] focus:border-white outline-none transition-colors duration-200"
                />
                {errors.currentPassword && <span className="text-red-400 text-xs">{errors.currentPassword}</span>}
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="newPassword" className="block mb-2">New Password</label>
                <div className="relative">
                    <PasswordField
                        name="newPassword"
                        value={form.newPassword}
                        onChange={handleChange}
                        feedback={true}
                        suggestions={suggestions}
                        rules={passwordValidationRules}
                        className="pr-10 rounded-lg bg-[#060C16] text-white  border border-[#21333F] focus:border-[#21333F] outline-none transition-colors duration-200 "
                    />
                    {form.newPassword && (
                        <span className={`absolute right-[-1.5rem] top-1/2 -translate-y-1/2 text-xl ${Object.values(passwordValidationRules).every(Boolean) ? 'text-green-500' : 'text-red-500'}`}>
                            {Object.values(passwordValidationRules).every(Boolean) ? (
                                <i className="pi pi-check" />
                            ) : (
                                <i className="pi pi-times" />
                            )}
                        </span>
                    )}
                    {errors.newPassword && <span className="text-red-400 text-xs block mt-1">{errors.newPassword}</span>}
                </div>
            </div>
            <div className="flex flex-col relative">
                <label htmlFor="confirmNewPassword" className="block mb-2 ">Confirm New Password</label>
                <div className="relative">
                    <PasswordField
                        name="confirmNewPassword"
                        value={form.confirmNewPassword}
                        onChange={handleChange}
                        feedback={false}
                        className="pr-10 rounded-lg bg-[#060C16] text-white  border border-[#21333F] focus:border-[#21333F] outline-none transition-colors duration-200"
                    />
                    {form.confirmNewPassword && (
                        <span className={`absolute right-[-1.5rem] top-1/2 -translate-y-1/2 text-xl ${form.confirmNewPassword === form.newPassword ? 'text-green-500' : 'text-red-500'}`}>
                            {form.confirmNewPassword === form.newPassword ? (
                                <i className="pi pi-check" />
                            ) : (
                                <i className="pi pi-times" />
                            )}
                        </span>
                    )}
                    {errors.confirmNewPassword && <span className="text-red-400 text-xs block mt-1">{errors.confirmNewPassword}</span>}
                </div>
            </div>
            <button
                type="submit"
                className="w-full bg-orange-500 mt-2 hover:bg-orange-600 active:bg-orange-400 p-2 rounded-lg text-white font-semibold cursor-pointer transition-colors duration-200"
            >
                Change Password
            </button>
            <div className="flex justify-center">
                <a href="/change-password-method" className="text-sm text-blue-500 hover:underline">back to change password page</a>
            </div>
        </form>
    );
}
