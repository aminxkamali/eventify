import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import 'primereact/resources/themes/lara-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function ProfileForm() {
    const [imageSrc, setImageSrc] = useState(null);
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        birthDate: null,
        phone: '',
        bio: '',
        image: null,
    });

    const handleUpload = ({ files }) => {
        const file = files[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setImageSrc(objectUrl);
            setForm(prev => ({ ...prev, image: file }));
        }
    };

    const handleChange = (key, value) => {
        setForm(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', form);
        setImageSrc(null);
        
        setForm({
            firstName: '',
            lastName: '',
            email: '',
            birthDate: null,
            phone: '',
            bio: '',
            image: null,
        });
    };

    return (
        <div className='w-full h-full bg-[#0E141E] pr-8 pl-8 justify-center items-center'>
            <form className='flex flex-row gap-4 w-full justify-around' onSubmit={handleSubmit}>
                <div className="flex flex-col items-center justify-center w-[30%] rounded border border-gray-700 p-12 mt-12">
                    <h1 className="text-4xl font-light mb-8 text-white">Profile</h1>

                    <div className="w-40 h-40 rounded-full bg-black flex items-center justify-center border border-gray-600 mb-6 overflow-hidden">
                        {imageSrc ? (
                            <img src={imageSrc} alt="profile" className="w-full h-full object-cover" />
                        ) : (
                            <i className="pi pi-user text-7xl text-gray-700" />
                        )}
                    </div>

                    <FileUpload
                        mode="basic"
                        chooseLabel="Upload Photo"
                        customUpload
                        uploadHandler={handleUpload}
                        style={{ background: '#949CFF', color: '#fff', borderRadius: '10px', border: 'none' }}
                    />
                </div>

                <div className='flex flex-col w-[40%] justify-center rounded border border-gray-700 p-12 mt-12'>
                    <div className='flex flex-row w-full gap-2'>
                        <div className="mb-4 w-1/2">
                            <label className="block text-sm mb-2 text-white" htmlFor="firstName">First Name</label>
                            <InputText
                                id="firstName"
                                value={form.firstName}
                                onChange={(e) => handleChange('firstName', e.target.value)}
                                className="w-full h-11 p-2 rounded-lg bg-[#060C16] border border-[#21333F] focus:border-white outline-none transition-colors duration-200"
                            />
                        </div>
                        <div className="mb-4 w-1/2">
                            <label className="block text-sm mb-2 text-white" htmlFor="lastName">Last Name</label>
                            <InputText
                                id="lastName"
                                value={form.lastName}
                                onChange={(e) => handleChange('lastName', e.target.value)}
                                className="w-full h-11 p-2 rounded-lg bg-[#060C16] border border-[#21333F] focus:border-white outline-none transition-colors duration-200"
                            />
                        </div>
                    </div>

                    <div className='mb-4'>
                        <label className="block text-sm mb-2 text-white" htmlFor='email'>Email</label>
                        <InputText 
                            id='email'
                            type='email'
                            value={form.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            className="w-full h-11 p-2 rounded-lg bg-[#060C16] border border-[#21333F] focus:border-white outline-none transition-colors duration-200"
                        />
                    </div>

                    <div className="mb-4 text-white">
                        <label className="block text-sm mb-2 text-white" htmlFor="birthDate">Birth Date</label>
                        <Calendar
                            id="birthDate"
                            value={form.birthDate}
                            onChange={(e) => handleChange('birthDate', e.value)}
                            showIcon
                            showButtonBar
                            dateFormat="yy-mm-dd"
                            inputClassName="w-full h-11 p-2 pl-10 rounded-lg bg-[#060C16] border border-[#21333F] focus:border-white outline-none transition-colors duration-200"
                            className="w-full"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm mb-2 text-white" htmlFor="phone">Phone</label>
                        <InputText
                            id="phone"
                            type="tel"
                            value={form.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            className="w-full h-11 p-2 rounded-lg bg-[#060C16] border border-[#21333F] focus:border-white outline-none transition-colors duration-200"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm mb-2 text-white" htmlFor="bio">Bio</label>
                        <InputTextarea
                            id="bio"
                            rows={4}
                            value={form.bio}
                            onChange={(e) => handleChange('bio', e.target.value)}
                            className="w-full p-2 rounded-lg bg-[#060C16] border border-[#21333F] focus:border-white outline-none transition-colors duration-200 resize-none"
                        />
                    </div>

                    <Button 
                        type="submit" 
                        label="Submit" 
                        className="mt-4 w-full h-11 text-white font-semibold hover:bg-[#FF8C2E] active:bg-[#FF8C2E] transition-colors duration-200" 
                        style={{ background: '#FF8C2E', border: 'none' }} 
                    />
                </div>
            </form>
        </div>
    );
}
