import React from 'react';
import EventsPageHeader from '../components/explorePageComponents/ExploreHeader';
import ExploreMainHeader from '../components/explorePageComponents/ExploreMainHeader';
import ExploreSearch from '../components/explorePageComponents/ExploreSearch';
import ExploreCategories from '../components/explorePageComponents/ExploreCategories';
import ExploreEventCards from '../components/explorePageComponents/ExploreEventCards';
import SEO from '../components/SEO';

export default function ExplorePage() {
    return (
        <>
            <SEO
                title="Eventify | Explore Events and Categories"
                description="Browse and discover a wide range of events and categories. Find the perfect event for you and join communities on Eventify."
                keywords="explore, discover, event categories, join events, Eventify"
            />
            <div className="min-h-screen flex flex-col bg-[#0E141E]">
                <EventsPageHeader />
                <ExploreMainHeader />
                <ExploreSearch />
                <ExploreCategories />
                <ExploreEventCards />
            </div>
        </>
    );
}


