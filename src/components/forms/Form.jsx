"use client";

import { useForm, FormProvider } from "react-hook-form";

export default function Form({ children, submitHandler, defaultValues }) {
  const formConfig = {};

  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);

  const { handleSubmit, reset } = methods;

  const onSubmit = (data) => {
    submitHandler(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
