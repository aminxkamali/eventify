import { InputText } from 'primereact/inputtext';

export default function TextField({ name, value, onChange }) {
  return (
    <InputText
      name={name}
      value={value}
      onChange={onChange}
      className="w-full h-11 p-2 rounded-lg bg-[#060C16] border border-[#21333F] focus:border-white outline-none transition-colors duration-200"
    />
  );
}
