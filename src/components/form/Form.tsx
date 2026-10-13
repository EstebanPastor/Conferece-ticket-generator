import UploadInput from "./UploadInput";
import TextInput from "./TextInput";
import SubmitFormButton from "../ticket-form-page/SubmitFormButton";

const Form = () => {
  return (
    <div className="relative z-10">
      <UploadInput />
      <TextInput label="Full Name" placeholder="Esteban Pastor" />
      <TextInput
        label="Email Address"
        placeholder="esteban.pastor@example.com"
        type="email"
      />
      <TextInput label="Github Username" placeholder="estebanpastor" />
      <SubmitFormButton />
    </div>
  );
};

export default Form;
