import React from 'react'
import ProfileHeader from '../components/profilePageComponents/profileHeader';
import ProfileForm from '../Forms/profileForm';
export default function ProfilePage() {
    return (
        <>
            <div className='h-screen flex flex-col'>
                <ProfileHeader />
                <ProfileForm />
            </div>
        </>
    );
}
