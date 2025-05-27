import { useNavigate, useLocation } from 'react-router-dom';

export default function PasswordResetErrorPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Only show this page if navigated with state from ForgetPasswordForm
  if (!location.state || !location.state.emailError) {
    navigate('/ForgetPasswordPage', { replace: true });
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0E141E] text-white p-4">
      <div className="flex flex-row items-center mb-6">
        <img src="/eventifyLogo.png" className="w-20 h-20" alt="logo" />
        <span className="text-4xl font-inter">eventify</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-red-500 rounded-full w-28 h-28 flex items-center justify-center mb-6">
          <span className="text-white text-5xl">✖</span>
        </div>
        <h2 className="text-2xl font-bold">Something went wrong</h2>
        <p className="text-sm text-gray-400 mt-2 text-center">
          There was a problem sending the reset password email.<br />Please check your email address and try again.
        </p>
        <button
          onClick={() => navigate('/ForgetPasswordPage')}
          className="mt-6 text-blue-400 hover:underline text-sm"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
