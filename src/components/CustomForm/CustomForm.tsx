import React from "react";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  DefaultValues,
  Path,
} from "react-hook-form";
import { styled, TextField } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import css from "./CustomForm.module.css";
interface InputField {
  label: string;
  name: string;
  type?: string;
}

interface CustomFormProps<T extends FieldValues> {
  inputFields: InputField[];
  defaultValues?: DefaultValues<T>;
  onSubmit: SubmitHandler<T>;
  buttonLabel: string;
}

export default function CustomForm<T extends FieldValues>({
  buttonLabel,
  inputFields,
  onSubmit,
  defaultValues,
}: CustomFormProps<T>) {
  const { register, handleSubmit } = useForm<T>({
    defaultValues,
  });

  const CustomInputField = styled(TextField)({
    marginBottom: "0.8rem",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputFields.map((field) => (
        <div key={field.name}>
          <CustomInputField
            {...register(field.name as Path<T>)}
            id="outlined-basic"
            label={field.label}
            type={field.type || "text"}
            variant="outlined"
            placeholder={field.label}
            className={css.inputField}
          />
        </div>
      ))}
      <CustomButton buttonLabel={buttonLabel} type={"submit"} />
    </form>
  );
}
