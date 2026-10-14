import UploadInput from "./UploadInput";
import TextInput from "./TextInput";
import SubmitFormButton from "../ticket-form-page/SubmitFormButton";
import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
  fullName: string;
  email: string;
  githubUsername: string;
};

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const sendForm: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(data);
   
  };

  return (
    <form className="relative z-10" onSubmit={handleSubmit(sendForm)}>
      <UploadInput />
      <TextInput
        {...register("fullName", { required: "Full name is required" })}
        label="Full Name"
        placeholder="Esteban Pastor"
        isError={errors.fullName?.type === "required"}
        errorMessage={errors.fullName?.message}
      />
      <TextInput
        {...register("email", {
          required: "Email is required",
          pattern:
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
        })}
        label="Email Address"
        placeholder="esteban.pastor@example.com"
        type="email"
        isError={
          errors.email?.type === "required" || errors.email?.type === "pattern"
        }
        errorMessage={
          errors.email?.message || "Please provide an valid email address"
        }
      />
      <TextInput
        {...register("githubUsername", {
          required: "Github username is required",
        })}
        label="Github Username"
        placeholder="estebanpastor"
        isError={errors.githubUsername?.type === "required"}
        errorMessage={errors.githubUsername?.message}
      />
      <SubmitFormButton />
    </form>
  );
};

export default Form;
