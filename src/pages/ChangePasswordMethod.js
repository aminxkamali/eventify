import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export default function ChangePasswordMethod() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0E141E] text-white px-4">
      <div className="bg-[#181F2A] rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-8">
        <h2 className="text-2xl font-bold mb-2 text-center">Change Password</h2>
        <Button
          label="Change password with email"
          className="w-full h-12 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          onClick={() => navigate('/change-password-email')}
        />
        <div className="flex items-center justify-center">
          <span className="text-gray-400">or</span>
        </div>
        <Button
          label="Change password with current password"
          className="w-full h-12 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
          onClick={() => navigate('/change-password-current')}
        />
      </div>
    </div>
  );
}
