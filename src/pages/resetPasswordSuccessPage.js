import { useNavigate, useLocation } from 'react-router-dom';

export default function ResetPasswordSuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Only show this page if navigated with state from ForgetPasswordForm
  if (!location.state || !location.state.emailSent) {
    // If accessed directly, redirect to forget password page
    navigate('/ForgetPasswordPage', { replace: true });
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0E141E] text-white p-4">
      <img src="/eventifyLogo.png" alt="logo" width={64} height={64} />
      <span className="text-2xl font-inter mt-2 mb-8">eventify</span>

      <div className="flex flex-col items-center">
        <div className="bg-green-500 rounded-full w-28 h-28 flex items-center justify-center mb-6">
          <span className="text-white text-5xl">✔</span>
        </div>
        <h2 className="text-2xl font-bold">Email has been sent successfully</h2>
        <p className="text-sm text-gray-400 mt-2">please check your email</p>

        <button
          onClick={() => navigate('/')}
          className="mt-6 text-blue-400 hover:underline text-sm"
        >
          Back to login
        </button>
      </div>
    </div>
  );
}
