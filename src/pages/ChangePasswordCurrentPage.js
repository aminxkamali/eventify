import React from 'react';
import ChangePasswordCurrentForm from '../Forms/ChangePasswordCurrentForm';

export default function ChangePasswordCurrentPage() {
    const handlePasswordChange = (formData) => {
        console.log('Password change request:', formData);
        // TODO: Add API call for password change
        alert('Password changed successfully!');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0E141E] text-white px-4">
            <div className="bg-[#181F2A] rounded-xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Change Password</h2>
                <ChangePasswordCurrentForm onSubmit={handlePasswordChange} />
            </div>
        </div>
    );
}
