import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const FormTextArea = ({ name, label, rows, value, placeholder }) => {
  const { control } = useFormContext();
  return (
    <div className={`flex flex-col  w-full`}>
      <p style={{ marginBottom: "5px", fontWeight: "500" }}>
        {label ? label : null}
      </p>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input.TextArea
            rows={rows}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
          />
        )}
      />
    </div>
  );
};

export default FormTextArea;
