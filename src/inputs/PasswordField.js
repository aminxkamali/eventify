import { Password } from 'primereact/password';

export default function PasswordField({ name, value, onChange, feedback, suggestions, allValid, showIcon, rules }) {
  return (
    <div className=" ">
      <Password
        name={name}
        value={value}
        onChange={onChange}
        toggleMask
        feedback={feedback}
        inputClassName="w-96 h-11 p-2 rounded-lg bg-[#060C16] border border-[#21333F] focus:border-white outline-none transition-colors duration-200"
        panelClassName="bg-[#0E141E] border border-[#21333F] text-white"
        header={feedback && <div className="font-bold mb-2">Suggestions</div>}
        footer={feedback && (
          <ul className="list-none p-0 m-0">
            {suggestions && suggestions.map((s, i) => (
              <li key={i} className="flex items-center gap-2 mb-1">
                <i className={`pi ${s.valid ? 'pi-check-circle text-green-500' : 'pi-times-circle text-red-500'}`}></i>
                <span className={s.valid ? 'text-green-400' : 'text-red-400'}>{s.label}</span>
              </li>
            ))}
          </ul>
        )}
      />
      {showIcon && (
        allValid ? (
          <i className="pi pi-check-circle text-green-500 absolute left-96 top-1/2  text-xl" />
        ) : (
          <i className="pi pi-times-circle text-red-500 absolute left-96 top-1/2 text-xl" />
        )
      )}
    </div>
  );
}
