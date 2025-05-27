export default function SubmitButton({ children }) {
  return (
    <button
      type="submit"
      className="w-full h bg-orange-500 mt-2 hover:bg-orange-600 active:bg-orange-400 p-2 rounded-lg text-white font-semibold cursor-pointer transition-colors duration-200"
    >
      {children}
    </button>
  );
}
