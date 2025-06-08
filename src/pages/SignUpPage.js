import SignupForm from '../Forms/SignUpForm.js'
import SEO from '../components/SEO';

export default function SignupPage() {
    return (
        <>
            <SEO
                title="Eventify | Sign Up for Free"
                description="Create your free Eventify account and start discovering, creating, and managing events with friends and teams."
                keywords="sign up, register, create account, Eventify, join, free"
            />
            <div className="min-h-screen flex items-center justify-center bg-[#0E141E] text-white">
            <SignupForm />
            </div>
        </>
    )
}