import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import 'primereact/resources/themes/lara-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function ProfileForm() {
    return (
        <div className="flex min-h-screen bg-[#151922] text-white">
            {/* Sidebar: Profile photo and upload */}
            <div className="flex flex-col items-center justify-center w-1/3 border-r border-gray-700 py-12">
                <h1 className="text-4xl font-light mb-8">Profile</h1>
                <div className="w-40 h-40 rounded-full bg-black flex items-center justify-center border border-gray-600 mb-6">
                    <i className="pi pi-user text-7xl text-gray-700" />
                </div>
                <FileUpload
                    mode="basic"
                    chooseLabel="upload photo"
                    className="p-button p-button-rounded p-button-info w-48"
                    style={{ background: '#949CFF', color: '#fff', border: 'none' }}
                />
            </div>

            {/* Main form */}
            <div className="flex-1 flex flex-col justify-center px-16">
                <form className="space-y-6">
                    <div className="flex gap-6">
                        <span className="p-float-label w-1/2">
                            <InputText id="firstName" className="w-full bg-[#181C25] text-white" />
                            <label htmlFor="firstName">First name</label>
                        </span>
                        <span className="p-float-label w-1/2">
                            <InputText id="lastName" className="w-full bg-[#181C25] text-white" />
                            <label htmlFor="lastName">Last name</label>
                        </span>
                    </div>
                    <span className="p-float-label w-full">
                        <InputText id="email" className="w-full bg-[#181C25] text-white" />
                        <label htmlFor="email">Email</label>
                    </span>
                    <span className="p-float-label w-full">
                        <Calendar id="birthDate" className="w-full bg-[#181C25] text-white" dateFormat="yy-mm-dd" showIcon />
                        <label htmlFor="birthDate">Birth of date</label>
                    </span>
                    <span className="p-float-label w-full">
                        <InputTextarea id="aboutMe" className="w-full bg-[#181C25] text-white" rows={4} />
                        <label htmlFor="aboutMe">About me</label>
                    </span>
                    <Button label="Update profile" className="w-full mt-8" style={{ background: '#FF8C2E', border: 'none', fontSize: '1.3rem', height: '3.2rem' }} />
                </form>

            </div>
        </div>
    );
}