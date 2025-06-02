import React from 'react';
import EventsPageHeader from '../components/explorePageComponents/ExploreHeader';
import ExploreMainHeader from '../components/explorePageComponents/ExploreMainHeader';
import ExploreSearch from '../components/explorePageComponents/ExploreSearch';
import ExploreCategories from '../components/explorePageComponents/ExploreCategories';
import ExploreEventCards from '../components/explorePageComponents/ExploreEventCards';

export default function ExplorePage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#0E141E]">
            <EventsPageHeader />
            <ExploreMainHeader />
            <ExploreSearch />
            <ExploreCategories />
            <ExploreEventCards />
        </div>
    );
}


