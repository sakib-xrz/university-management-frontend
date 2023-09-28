"use client";

import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";

export default function FormInput({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
}) {
  const { control } = useFormContext();
  return (
    <>
      <p>{label ? label : null}</p>
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
            />
          ) : (
            <Input
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
            />
          )
        }
      />
    </>
  );
}
