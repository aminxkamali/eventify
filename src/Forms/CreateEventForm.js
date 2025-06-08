import React  ,{ useState} from 'react'
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/lara-dark-indigo/theme.css';  // یا theme دلخواه
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect } from 'primereact/multiselect';
import ErrorAlert from '../components/createEventPageComponents/CreateEventErrorAlert';
import SuccessAlert from '../components/createEventPageComponents/CreateEventSuccessAlert';
import { Chips } from 'primereact/chips';

// گزینه‌های اولیه
const memberOptions = [
    { label:'Mike Smith' , value: 'Mike Smith' },
    { label: 'Mina Ahmadi', value: 'Mina Ahmadi' },
    { label: 'Hamid Rezaei', value: 'Hamid Rezaei' }
];

const teamOptions = [
    { label: 'Design Team', value: 'Design Team' },
    { label: 'Dev Team', value: 'Dev Team' },
    { label: 'Marketing Team', value: 'Marketing Team' }
];
const CreateEventPage = () => {


    const [alert, setAlert] = useState({ type: '', message: '' });
    const [eventForm, setEventForm] = useState({
        Title: "",
        Description: "",
        Owner: "",
        Type: "",
        StartTime: "",
        EndTime: "",
        IsDone: false,
        Tags: [],
        members: [],
        Teams: [],
        Note: "",
    })
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!eventForm.Title.trim()) newErrors.Title = 'Title is required.';
        if (!eventForm.Description.trim()) newErrors.Description = 'Description is required.';
        if (!eventForm.Owner.trim()) newErrors.Owner = 'Owner is required.';
        if (!eventForm.Type) newErrors.Type = 'Type is required.';
        if (eventForm.Type === 'Todo') {
            if (!eventForm.EndTime) newErrors.EndTime = 'Duo Time is required.';
        } else {
            if (!eventForm.StartTime) newErrors.StartTime = 'Start Time is required.';
            if (!eventForm.EndTime) newErrors.EndTime = 'End Time is required.';
            if (eventForm.StartTime && eventForm.EndTime && new Date(eventForm.EndTime) <= new Date(eventForm.StartTime)) {
                newErrors.EndTime = 'End Time must be after Start Time.';
            }
        }
        if (!eventForm.Tags || eventForm.Tags.length === 0) newErrors.Tags = 'At least one tag is required.';
        if (!eventForm.members || eventForm.members.length === 0) newErrors.members = 'At least one member is required.';
        if (!eventForm.Teams || eventForm.Teams.length === 0) newErrors.Teams = 'At least one team is required.';
        // Note is optional
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            setAlert({ type: 'error', message: 'Please fill out all fields correctly.' });
            setTimeout(() => setAlert({ type: '', message: '' }), 3000);
            return;
        }

        console.log('Event Created:', eventForm);

        setEventForm({
            Title: "",
            Description: "",
            Owner: "",
            Type: "",
            StartTime: "",
            EndTime: "",
            IsDone: false,
            Tags: [],
            members: [],
            Teams: [],
            Note: "",
        });

        setAlert({ type: 'success', message: 'Event created successfully!' });
        setTimeout(() => setAlert({ type: '', message: '' }), 3000);
    };


    return (
        <form className='w-full h-full bg-[#0E141E]  flex flex-col  '>
            <h1 className="flex justify-center items-center mt-4 mb-2">
                <span className="text-2xl font-bold text-white border border-white rounded-xl px-6 py-2 text-center">
                    Create your own event
                </span>
            </h1>
            <div className='w-full mb-2 flex flex-row justify-center gap-1 '>
                <div className="w-1/3">
                    <label className="block text-sm mb-2 text-white" htmlFor="title">Title</label>
                    <InputText
                        placeholder='insert title'
                        id="title"
                        value={eventForm.Title}
                        onChange={(e) => setEventForm({ ...eventForm, Title: e.target.value })}
                        className="w-full h-11 p-2 rounded-lg bg-[#060C16] text-white  focus:border-white outline-none transition-colors duration-200"
                    />
                    {errors.Title && <span className="text-red-400 text-xs">{errors.Title}</span>}
                </div>
                <div className="w-1/3">
                    <label className="block text-sm mb-2 text-white" htmlFor="Description">Description</label>
                    <InputText
                        placeholder='insert description'
                        id="Description"
                        value={eventForm.Description}
                        onChange={(e) => setEventForm({ ...eventForm, Description: e.target.value })}
                        className="w-full h-11 p-2 rounded-lg bg-[#060C16] text-white focus:border-white outline-none transition-colors duration-200"
                    />
                    {errors.Description && <span className="text-red-400 text-xs">{errors.Description}</span>}
                </div>
            </div>
            <div className='w-full mb-2 flex flex-row justify-center gap-1 '>
                <div className="w-1/3">
                    <label className="block text-sm mb-2 text-white" htmlFor="Owner">Owner</label>
                    <InputText
                        placeholder='insert owner'
                        id="Owner"
                        value={eventForm.Owner}
                        onChange={(e) => setEventForm({ ...eventForm, Owner: e.target.value })}
                        className="w-full h-11 p-2 rounded-lg bg-[#060C16] text-white  focus:border-white outline-none transition-colors duration-200"
                    />
                    {errors.Owner && <span className="text-red-400 text-xs">{errors.Owner}</span>}
                </div>
                <div className="w-1/3">
                    <label className="block text-sm mb-2 text-white" htmlFor="Type">Type</label>
                    <Dropdown
                        id="Type"
                        value={eventForm.Type}
                        options={[
                            { label: 'Todo', value: 'Todo' },
                            { label: 'Event', value: 'Event' }
                        ]}
                        onChange={(e) => {
                            const selectedType = e.value;
                            setEventForm(prev => ({
                                ...prev,
                                Type: selectedType,
                                StartTime: selectedType === 'Todo' ? new Date() : prev.StartTime // Reset only if Todo
                            }));
                        }}
                        placeholder="Select Type"
                        className="w-full "
                        panelClassName="bg-[#0E141E] text-white"
                        dropdownIcon="pi pi-chevron-down"
                        style={{
                            background: '#060C16',
                            borderColor: '#21333F',
                            color: 'white',
                            height: '44px',
                            borderRadius: '0.5rem'
                        }}
                    />
                    {errors.Type && <span className="text-red-400 text-xs">{errors.Type}</span>}
                </div>
            </div>
                <div className='w-full mb-2 flex flex-row justify-center gap-1'>
                    {eventForm.Type === "Todo" ? (
                        <div className="w-2/3 mb-2">
                            <label className="block text-sm mb-2 text-white" htmlFor="DuoTime">Duo Time</label>
                            <Calendar
                                id="DuoTime"
                                value={eventForm.EndTime || new Date()}
                                onChange={(e) => setEventForm({
                                    ...eventForm,
                                    StartTime: new Date(),
                                    EndTime: e.value
                                })}
                                showTime
                                hourFormat="24"
                                showIcon
                                minDate={new Date()}
                                className="w-full"
                                inputClassName="w-full h-11 p-2 pl-10 rounded-lg bg-[#060C16] text-white focus:border-white outline-none transition-colors duration-200"
                            />
                            {errors.EndTime && <span className="text-red-400 text-xs">{errors.EndTime}</span>}
                        </div>
                    ) : (
                        <>
                            <div className="w-1/3 mb-2">
                                <label className="block text-sm mb-2 text-white" htmlFor="StartTime">Start Time</label>
                                <Calendar
                                    id="StartTime"
                                    value={eventForm.StartTime || new Date()}
                                    onChange={(e) => setEventForm({ ...eventForm, StartTime: e.value })}
                                    showTime
                                    hourFormat="24"
                                    showIcon
                                    disabled={false}
                                    minDate={new Date()}
                                    className="w-full"
                                    inputClassName="w-full h-11 p-2 pl-10 rounded-lg bg-[#060C16] text-white  focus:border-white outline-none transition-colors duration-200"
                                />
                                {errors.StartTime && <span className="text-red-400 text-xs">{errors.StartTime}</span>}
                            </div>
                            <div className="w-1/3 mb-2">
                                <label className="block text-sm mb-2 text-white" htmlFor="EndTime">End Time</label>
                                <Calendar
                                    id="EndTime"
                                    value={eventForm.EndTime}
                                    onChange={(e) => setEventForm({ ...eventForm, EndTime: e.value })}
                                    showTime
                                    hourFormat="24"
                                    showIcon
                                    minDate={eventForm.StartTime || new Date()}
                                    className="w-full"
                                    inputClassName="w-full h-11 p-2 pl-10 rounded-lg bg-[#060C16] text-white focus:border-white outline-none transition-colors duration-200"
                                />
                                {errors.EndTime && <span className="text-red-400 text-xs">{errors.EndTime}</span>}
                            </div>
                        </>
                    )}
                </div>

                <div className='w-full mb-2 flex flex-row justify-center gap-1'>
                    <div className='w-2/3 mb-2 p-fluid'>
                        <label className="block text-sm mb-2 text-white" htmlFor="Tags">Tags</label>
                        <Chips
                            id='Tags'
                            value={eventForm.Tags}
                            placeholder='input your tags'
                            onChange={(e) => setEventForm({ ...eventForm, Tags: e.value })}
                            className="w-full h-11 rounded-lg bg-[#0E141E] transition-colors duration-200"
                            inputClassName="w-full h-11 px-3 py-2 text-white bg-[#0E141E] outline-none border-none"
                        />
                        {errors.Tags && <span className="text-red-400 text-xs">{errors.Tags}</span>}
                    </div>
                </div>

            <div className='w-full mb-2 flex flex-row justify-center gap-1'>
                <div className='w-1/3 mb-2'>
                    <label className="block text-sm mb-2 text-white" htmlFor="Members">Members</label>
                    <MultiSelect
                        id="Members"
                        value={eventForm.members}
                        options={memberOptions}
                        onChange={(e) => setEventForm({ ...eventForm, members: e.value })}
                        placeholder="Select members"
                        display="chip"
                        className="w-full text-sm"  // سایز متن انتخاب‌شده‌ها
                        panelClassName="max-h-65 overflow-y-auto bg-[#0E141E] text-white text-sm" // سایز متن لیست
                        style={{
                            background: '#060C16',
                            borderColor: '#21333F',
                            color: 'white',
                            borderRadius: '0.5rem',
                            fontSize: '0.75rem' // سایز متن placeholder و فیلد
                        }}
                        filter
                    />
                    {errors.members && <span className="text-red-400 text-xs">{errors.members}</span>}
                </div>

                <div className='w-1/3 mb-2'>
                    <label className="block text-sm mb-2 text-white" htmlFor="Teams">Teams</label>
                    <MultiSelect
                        id="Teams"
                        value={eventForm.Teams}
                        options={teamOptions}
                        onChange={(e) => setEventForm({ ...eventForm, Teams: e.value })}
                        placeholder="Select teams"
                        display="chip"
                        className="w-full text-sm"
                        panelClassName="max-h-65 overflow-y-auto bg-[#0E141E] text-white text-sm"
                        style={{
                            background: '#060C16',
                            borderColor: '#21333F',
                            color: 'white',
                            borderRadius: '0.5rem',
                            fontSize: '0.75rem'
                        }}
                        filter
                    />
                    {errors.Teams && <span className="text-red-400 text-xs">{errors.Teams}</span>}
                </div>
            </div>

            <div className='w-full mb-2 flex flex-row justify-center gap-4'>
                <div className='w-2/3 mb-2'>
                    <label className="block text-sm mb-2 text-white" htmlFor="Note">Note</label>
                    <textarea
                    placeholder='Add a note...'
                        id="Note"
                        value={eventForm.Note}
                        onChange={(e) => setEventForm({ ...eventForm, Note: e.target.value })}
                        className="w-full h-24 p-2 rounded-lg bg-[#060C16] text-white focus:border-white outline-none transition-colors duration-200 resize-none overflow-y-auto text-sm"
                    />
                </div>
            </div>
            
            <div className='w-full mb-6 flex justify-center'>
                <div className='w-2/3 mb-2'>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                    Create Event
                </button>
                </div>
            </div>
        </form>
    )
}

export default CreateEventPage