import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import ResetPasswordSuccessPage from './pages/resetPasswordSuccessPage';
import PasswordResetErrorPage from './pages/passwordResetErrorPage';
import HomePage from './pages/HomePage';
// import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import ProfilePage from './pages/profilePage';
import CreateEventPage from './pages/CreateEventPage';
import MyEventsPage from './pages/MyEventsPage';
import ExplorePage from './pages/ExplorePage';
import CommunityPage from './pages/CommunityPage';
import './index.css';
import LandingPage from './pages/LandingPage';
import ChatWidget from './components/ChatWidget';
import ChangePasswordMethod from './pages/ChangePasswordMethod';
import ChangePasswordWithEmailPage from './pages/ChangePasswordWithEmailPage';
import ChangePasswordCurrentPage from './pages/ChangePasswordCurrentPage';
function App() {
  // مسیرهایی که نباید ChatWidget نمایش داده شود
  const hiddenChatRoutes = [
    '/',
    '/login',
    '/signup',
    '/ForgetPasswordPage',
    '/resetPasswordSuccessPage',
    '/passwordResetErrorPage',
    '/change-password-method',
    '/change-password-email',
    '/change-password-current',
  ];
  const location = window.location;
  const shouldShowChat = !hiddenChatRoutes.includes(location.pathname);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/ForgetPasswordPage" element={<ForgetPasswordPage />} />
          <Route path="/resetPasswordSuccessPage" element={<ResetPasswordSuccessPage />} />
          <Route path="/passwordResetErrorPage" element={<PasswordResetErrorPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path='/ProfilePage' element={<ProfilePage/>}/>
          <Route path="/CreateEvent" element={<CreateEventPage/>} />
          <Route path='/MyEventsPage' element={<MyEventsPage/>}/>
          <Route path='/ExplorePage' element={<ExplorePage />} />
          <Route path='/CommunityPage' element={<CommunityPage />} />
          <Route path="/change-password-method" element={<ChangePasswordMethod />} />
          <Route path="/change-password-email" element={<ChangePasswordWithEmailPage />} />
          <Route path="/change-password-current" element={<ChangePasswordCurrentPage />} />
        </Routes>
        {shouldShowChat && <ChatWidget />}
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
