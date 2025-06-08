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
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        aboutMe: '',
        image: null,
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!form.firstName.trim()) newErrors.firstName = 'First name is required.';
        if (!form.lastName.trim()) newErrors.lastName = 'Last name is required.';
        if (!form.email.trim()) newErrors.email = 'Email is required.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email format.';
        if (!birthDate) newErrors.birthDate = 'Birth date is required.';
        else {
            const age = (new Date().getTime() - new Date(birthDate).getTime()) / (1000 * 60 * 60 * 24 * 365.25);
            if (age < 18) newErrors.birthDate = 'You must be at least 18 years old.';
        }
        if (form.aboutMe.length > 300) newErrors.aboutMe = 'About me must be less than 300 characters.';
        if (!form.image) newErrors.image = 'Profile image is required.';
        return newErrors;
    };

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const img = new window.Image();
        img.onload = () => {
            if (img.width === img.height) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    setImageSrc(event.target.result);
                    setForm((prev) => ({ ...prev, image: file }));
                };
                reader.readAsDataURL(file);
            } else {
                alert('Please upload a square image!');
                e.target.value = null;
            }
        };
        img.onerror = () => {
            alert('Invalid image file!');
            e.target.value = null;
        };
        img.src = URL.createObjectURL(file);
    };

    const navigate = useNavigate();
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const handleDeleteAccount = () => {
        setShowDeleteDialog(true);
    };
    const handleConfirmDelete = () => {
        setShowDeleteDialog(false);
        // TODO: Add delete account logic here
        // alert('Account deleted!');
        navigate('/Login');
    };
    const handleCancelDelete = () => {
        setShowDeleteDialog(false);
    };

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;
        // TODO: Submit profile update to backend
        alert('Profile updated successfully!');
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
                {errors.image && <span className="text-red-400 text-xs mb-2 block text-center">{errors.image}</span>}
                <button
                    onClick={handleButtonClick}
                    className="w-48 h-11 rounded-lg bg-indigo-400 text-white font-semibold hover:bg-indigo-500 transition"
                    type="button"
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
                <form className="space-y-6 mb-6" onSubmit={handleProfileSubmit}>
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
                                value={form.firstName}
                                onChange={handleInputChange}
                                className="w-full pl-2 h-11 p-2 rounded-lg bg-[#060C16] text-white  focus:border-white outline-none transition-colors duration-200"
                            />
                            {errors.firstName && <span className="text-red-400 text-xs">{errors.firstName}</span>}
                        </span>
                        <span className="w-1/2">
                            <label htmlFor="lastName" className="block mb-3">Last name</label>
                            <InputText
                                id="lastName"
                                value={form.lastName}
                                onChange={handleInputChange}
                                className="w-full pl-2 h-11 p-2 rounded-lg bg-[#060C16] text-white  focus:border-white outline-none transition-colors duration-200"
                            />
                            {errors.lastName && <span className="text-red-400 text-xs">{errors.lastName}</span>}
                        </span>
                    </div>
                    <div className="w-full mb-6">
                        <label htmlFor="email" className="block mb-3">Email</label>
                        <InputText
                            id="email"
                            value={form.email}
                            onChange={handleInputChange}
                            className="w-full pl-2 h-11 p-2 rounded-lg bg-[#060C16] text-white focus:border-white outline-none transition-colors duration-200"
                        />
                        {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
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
                        {errors.birthDate && <span className="text-red-400 text-xs">{errors.birthDate}</span>}
                    </div>
                    <div className=" w-full mb-6">
                        <label htmlFor="aboutMe" className="block mb-3">About me</label>
                        <InputTextarea
                            id="aboutMe"
                            value={form.aboutMe}
                            onChange={handleInputChange}
                            className="w-full pl-2 p-2 rounded-lg bg-[#060C16] text-white"
                            rows={5}
                            col={15}
                            style={{ resize: 'none' }}
                        />
                        {errors.aboutMe && <span className="text-red-400 text-xs">{errors.aboutMe}</span>}
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