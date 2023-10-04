"use client";

import { Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

const FormSelectField = ({
  name,
  size = "large",
  value,
  placeholder = "select",
  options,
  label,
  defaultValue,
}) => {
  const { control } = useFormContext();

  return (
    <>
      <p style={{ marginBottom: "5px", fontWeight: "500" }}>
        {label ? label : null}
      </p>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            size={size}
            options={options}
            value={value}
            style={{ width: "100%" }}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
