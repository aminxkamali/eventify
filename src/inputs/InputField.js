export default function InputField({ label, ...props }) {
  return (
    <div className="mb-4">
      <label className="block text-sm mb-2">{label}</label>
      <input
        {...props}
        className="w-full h-11 p-2 rounded-lg bg-[#060C16] border border-[#21333F] focus:border-white outline-none transition-colors duration-200"
      />
    </div>
  );
}
