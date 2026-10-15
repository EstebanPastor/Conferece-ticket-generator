import UploadInput from "./UploadInput";
import TextInput from "./TextInput";
import SubmitFormButton from "../ticket-form-page/SubmitFormButton";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useUserStore } from "../../store/user";
import { useShowTicket } from "../../hooks/useShowTicket";
import { ChangeEvent, useState } from "react";

type Inputs = {
  fullName: string;
  email: string;
  githubUsername: string;
};

const Form = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const context = useShowTicket();
  const userStore = useUserStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  const sendForm: SubmitHandler<Inputs> = (data: Inputs) => {
    const { email, fullName, githubUsername } = data;
    context.setShowTicket(true);
    userStore.setUser({
      email,
      fullName,
      githubUser: githubUsername,
      url: imageUrl,
    });
  };

  return (
    <form className="relative z-10" onSubmit={handleSubmit(sendForm)}>
      <UploadInput onChange={handleChange} url={imageUrl} />

      <TextInput
        {...register("fullName", { required: "Full name is required" })}
        label="Full Name"
        placeholder="Esteban Pastor"
        isError={!!errors.fullName}
        errorMessage={errors.fullName?.message}
      />
      <TextInput
        {...register("email", {
          required: "Email is required",
          pattern: {
            value:
              /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
            message: "Please provide a valid email address",
          },
        })}
        label="Email Address"
        placeholder="esteban.pastor@example.com"
        type="email"
        isError={!!errors.email}
        errorMessage={errors.email?.message}
      />
      <TextInput
        {...register("githubUsername", {
          required: "Github username is required",
        })}
        label="Github Username"
        placeholder="estebanpastor"
        isError={!!errors.githubUsername}
        errorMessage={errors.githubUsername?.message}
      />
      <SubmitFormButton />
    </form>
  );
};

export default Form;
