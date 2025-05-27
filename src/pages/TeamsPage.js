import React from 'react'
import TeamsPageHeader from '../components/TeamsPageComponents/TeamsPageHeader'
import TeamsPageBody from '../components/TeamsPageComponents/TeamsPageBody'
export default function TeamsPage(){
    return(
        <>
            <div className="min-h-screen bg-white flex flex-col">
                <TeamsPageHeader/>
                <TeamsPageBody/>
            </div>
        </>
    )
}