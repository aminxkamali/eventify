import LoginForm from '../Forms/LoginForm'
import SEO from '../components/SEO';

export default function LoginPage() {
    return (
        <>
            <SEO
                title="Eventify | Login to Your Account"
                description="Login to your Eventify account to manage your events, connect with friends, and join communities."
                keywords="login, sign in, Eventify, account, events, connect"
            />
            <div className="min-h-screen flex items-center justify-center bg-[#0E141E] text-white">
                <LoginForm />
            </div>
        </>
    );
}
