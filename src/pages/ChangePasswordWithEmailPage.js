import React from 'react';
import ForgetPasswordForm from '../Forms/ForgetPasswordForm';

export default function ChangePasswordWithEmailPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0E141E]">
      <div className="bg-[#181F2A] rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Change Password with Email</h2>
        <ForgetPasswordForm/>
      </div>
    </div>
  );
}
