import { TextInputProps } from "../../../interfaces/text-input";
import IconInfo from "../../../public/assets/IconInfo";

const TextInput = ({
  placeholder,
  isError = false,
  errorMessage = "",
  type = "text",
  label,
  ...rest
}: TextInputProps) => {
  return (
    <div className="flex flex-col mb-3">
      <label className="mb-3 text-xl" htmlFor={label}>
        {label}
      </label>
      <input
        {...rest}
        className="border border-neutral-300 rounded-xl h-13.5 px-4"
        id={label}
        type={type}
        placeholder={placeholder}
      />
      {isError && (
        <div className="text-orange-500 flex gap-1 items-center">
          <IconInfo />
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default TextInput;
