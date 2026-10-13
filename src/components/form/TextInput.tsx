import { TextInputProps } from "../../../interfaces/text-input";

const TextInput = ({ text, placeholder, type, label }: TextInputProps) => {
  return (
    <div className="flex flex-col mb-3">
      <label className="mb-3 text-xl" htmlFor={label}>
        {label}
      </label>
      <input
        className="border border-neutral-300 rounded-xl h-13.5 px-4"
        id={label}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
