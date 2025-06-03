import React, { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { useNavigate } from 'react-router-dom';


export default function ProfileForm() {
    const [birthDate, setBirthDate] = useState(null);
    const today = new Date();
    const minDate = new Date(today);
    minDate.setFullYear(minDate.getFullYear() - 100);
    const maxSelectableDate = new Date(today);
    maxSelectableDate.setFullYear(maxSelectableDate.getFullYear() - 18);
    const [imageSrc, setImageSrc] = useState(null);
    const fileInputRef = useRef();
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const img = new Image();
        img.onload = () => {
        if (img.width === img.height) {
            // عکس مربعی
            const reader = new FileReader();
            reader.onload = (event) => {
            setImageSrc(event.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload a square image!');
            e.target.value = null; // ریست کردن فایل انتخابی
        }
        };
        img.onerror = () => {
        alert('Invalid image file!');
        e.target.value = null;
        };
        img.src = URL.createObjectURL(file);
    };
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const handleDeleteAccount = () => {
        setShowDeleteDialog(true);
    };
    const navigate = useNavigate();
    const handleConfirmDelete = () => {
        setShowDeleteDialog(false);
        // TODO: Add delete account logic here
        // alert('Account deleted!');
        navigate('/Login');
    };
    const handleCancelDelete = () => {
        setShowDeleteDialog(false);
    };
    return (
        <div className="flex h-screen bg-[#0E141E] text-white">
            {/* Sidebar: Profile photo and upload */}
            <div className="flex flex-col items-center justify-center w-1/3 border-r border-gray-700 ">
                <h1 className="text-4xl font-light mb-8">Profile</h1>
                <div className="w-40 h-40 rounded-full bg-black flex items-center justify-center border border-gray-600 mb-6 overflow-hidden">
                    {imageSrc ? (
                        <img
                            src={imageSrc}
                            alt="Profile"
                            className="w-full h-full rounded-full object-cover object-center"
                            style={{ minWidth: '100%', minHeight: '100%' }}
                        />
                    ) : (
                        <i className="pi pi-user text-7xl text-gray-700" />
                    )}
                </div>
                <button
                    onClick={handleButtonClick}
                    className="w-48 h-11 rounded-lg bg-indigo-400 text-white font-semibold hover:bg-indigo-500 transition"
                >
                    Upload Photo
                </button>
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
            </div>

            {/* Main form */}
            <div className="flex-1 flex flex-col justify-center px-16">
                <form className="space-y-6 mb-6">
                    <div className="w-full mb-6 flex items-end gap-4" style={{alignItems:'flex-end'}}>
                        <div className="flex-1">
                            <label htmlFor="username" className="block mb-3">Username</label>
                            <InputText
                                id="username"
                                className="w-full pl-2 h-11 p-2 rounded-lg bg-[#060C16] text-white focus:border-white outline-none transition-colors duration-200"
                                disabled
                            />
                        </div>
                        <Button
                            label="Need to change password?"
                            className="h-11 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition whitespace-nowrap"
                            type="button"
                            onClick={() => navigate('/change-password-method')}
                            style={{alignSelf:'flex-end'}}
                        />
                    </div>
                    <div className="flex gap-6 mb-6">
                        <span className="w-1/2">
                            <label htmlFor="firstName" className="block mb-3">First name</label>
                            <InputText 
                                id="firstName" 
                                className="w-full pl-2 h-11 p-2 rounded-lg bg-[#060C16] text-white  focus:border-white outline-none transition-colors duration-200" 
                            />
                        </span>
                        <span className="w-1/2">
                            <label htmlFor="lastName" className="block mb-3">Last name</label>
                            <InputText 
                                id="lastName" 
                                className="w-full pl-2 h-11 p-2 rounded-lg bg-[#060C16] text-white  focus:border-white outline-none transition-colors duration-200" 
                            />
                        </span>
                    </div>
                    <div className="w-full mb-6">
                        <label htmlFor="email" className="block mb-3">Email</label>
                        <InputText 
                            id="email" 
                            className="w-full pl-2 h-11 p-2 rounded-lg bg-[#060C16] text-white focus:border-white outline-none transition-colors duration-200" 
                        />
                    </div>
                    <div className=" w-full mb-6">
                        <label htmlFor="birthDate" className="block mb-3">Birth date</label>
                        <Calendar
                            id="birthDate"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.value)}
                            className="w-full"
                            inputClassName="h-11 p-2 pl-2 rounded-lg bg-[#060C16] text-white focus:border-white outline-none transition-colors duration-200"
                            dateFormat="yy-mm-dd"
                            showIcon
                            maxDate={maxSelectableDate}  // مهم: حداکثر تاریخی که انتخاب می‌شود (حداقل 18 سال)
                            minDate={minDate}            // حداقل تاریخی که انتخاب می‌شود (مثلا 100 سال قبل)
                        />
                    </div>
                    <div className=" w-full mb-6">
                        <label htmlFor="aboutMe" className="block mb-3">About me</label>
                        <InputTextarea 
                            id="aboutMe" 
                            className="w-full pl-2 p-2 rounded-lg bg-[#060C16] text-white" 
                            rows={5} 
                            col={15}     
                            style={{ resize: 'none' }}
                        />
                    </div>
                    <div className="flex gap-4">
                        <Button 
                            label="Update profile" 
                            className="w-full mt-8 h-11 rounded-lg bg-[#FF8C2E] text-white font-bold hover:bg-orange-600 active:bg-orange-400 transition"
                            type="submit" 
                        />
                        <Button
                            label="Delete account"
                            className="w-full mt-8 h-11 rounded-lg bg-red-600 text-white font-bold hover:bg-red-700 active:bg-red-400 transition"
                            type="button"
                            onClick={handleDeleteAccount}
                        />
                    </div>
                </form>
                <ConfirmDialog
                    visible={showDeleteDialog}
                    onHide={handleCancelDelete}
                    message={<span className="text-left block">Are you sure that you want to delete your account?</span>}
                    header="Delete Account"
                    accept={handleConfirmDelete}
                    reject={handleCancelDelete}
                    acceptLabel="Yes"
                    rejectLabel="No"
                    className="bg-[#0E141E] text-white w-[700px] max-w-[90vw]"
                    contentClassName="flex flex-col items-start"
                    footerClassName="flex gap-4 justify-end"
                />
            </div>
        </div>
    );
}