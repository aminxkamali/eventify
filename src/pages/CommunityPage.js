import React from 'react';
import CommunityPageHeader from '../components/communityPageComponents/CommunityPageHeader';
import TeamsPageBody from '../components/communityPageComponents/TeamsPageBody';
import FriendsPageBody from '../components/communityPageComponents/FriendsPageBody';

export default function CommunityPage() {
    return (
        <div className="min-h-screen max-h-screen h-screen overflow-hidden flex flex-col bg-white">
            <CommunityPageHeader />
            <div className="flex flex-1 flex-row w-full h-full">
                <div className="w-1/2 bg-[#0E141E] h-full">
                    <FriendsPageBody />
                </div>
                <div className="w-1/2 bg-[#0E141E] h-full">
                    <TeamsPageBody />
                </div>
            </div>
        </div>
    );
}
