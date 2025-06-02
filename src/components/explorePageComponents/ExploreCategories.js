import React from 'react';

export default function ExploreCategories() {
    return (
        <div className="w-full flex justify-center gap-4 mb-8">
            {['Sports', 'Art', 'Science', 'Entertainment', 'Business'].map((cat) => (
                <button key={cat} className="bg-white px-6 py-2 rounded-full shadow hover:bg-orange-100 text-gray-700 font-semibold transition-colors duration-200">
                    {cat}
                </button>
            ))}
        </div>
    );
}
