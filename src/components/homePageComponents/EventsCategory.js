import React from 'react';
import { Card } from 'primereact/card';

const Categories = [
    { id: 1, CategoryName: 'Tech', color: '#1DABF0' },
    { id: 2, CategoryName: 'Art', color: '#FE816C' },
    { id: 3, CategoryName: 'Music', color: '#9A99FD' },
    { id: 4, CategoryName: 'Business', color: '#A761EC' },
    { id: 5, CategoryName: 'Art', color: '#9A99FD' },
    { id: 6, CategoryName: 'Music', color: '#9A99FD' },
];

export default function EventsCategory() {
    return (
        <div className="flex flex-col items-center w-full pb-6 pt-2">
            <div className="flex flex-row justify-between w-full p-8">
                <span className="text-4xl font-bold font-inter text-gray xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
                    Browse by Category
                </span>
                <span className="text-base text-[#0F08F1] font-italic hover:cursor-pointer xl:text-base lg:text-sm md:text-xs sm:text-xxs">
                    <a href="/Categories">View all</a>
                </span>
            </div>

            <div className="w-full flex flex-row justify-center flex-wrap gap-8 px-6 md:gap-4 md:px-4 sm:gap-2 sm:px-2">
                {Categories.map((category) => (
                    <div
                        key={category.id}
                        className="overflow-hidden border-none rounded-none bg-white hover:cursor-pointer justify-center items-center p-4"
                        bodyClassName="p-0"
                    >
                        {/* Circular color icon for category */}
                        <div
                            className="w-40 h-40 rounded-full flex items-center justify-center mb-2"
                            style={{ backgroundColor: category.color }}
                        >
                            <span className="text-white text-xl font-bold text-center">
                                {category.CategoryName}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
