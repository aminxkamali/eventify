export default function AuthLink({ text, linkText, href }) {
  return (
    <p className="text-center text-sm text-gray-400 mt-4 mb-4">
      {text}{' '}
      <a className="text-blue-400" href={href}>{linkText}</a>
    </p>
  );
}
