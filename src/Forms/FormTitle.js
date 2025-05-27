export default function FormTitle({ title, subtitle }) {
  return (
    <>
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
    </>
  );
}
