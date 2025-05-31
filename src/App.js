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
import FriendsPage from './pages/FriendsPage';
import TeamsPage from './pages/TeamsPage';
import MyEventsPage from './pages/MyEventsPage';
import './index.css';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/ForgetPasswordPage" element={<ForgetPasswordPage />} />
          <Route path="/resetPasswordSuccessPage" element={<ResetPasswordSuccessPage />} />
          <Route path="/passwordResetErrorPage" element={<PasswordResetErrorPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path='/ProfilePage' element={<ProfilePage/>}/>
          <Route path="/CreateEvent" element={<CreateEventPage/>} />
          <Route path="/FriendsPage" element={<FriendsPage/>}/>
          <Route path='/TeamsPage' element={<TeamsPage/>}/>
          <Route path='/MyEventsPage' element={<MyEventsPage/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
