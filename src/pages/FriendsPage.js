import React from 'react'
import FriendsPageHeader from '../components/FriendsPageComponents/FriendsPageHeader'
import FriendsPageBody from '../components/FriendsPageComponents/FriendsPageBody'
export default function FriendsPage(){
    return(
        <>
            <div className="min-h-screen bg-white flex flex-col">
                <FriendsPageHeader/>
                <FriendsPageBody/>
            </div>
        </>
    )
}