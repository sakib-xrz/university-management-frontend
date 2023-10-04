import { DatePicker } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";

const FormDatePicker = ({ name, label, onChange, size = "large" }) => {
  const { control, setValue } = useFormContext();

  const handleOnChange = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, dateString);
  };

  return (
    <div>
      <p style={{ marginBottom: "5px", fontWeight: "500" }}>
        {label ? label : null}
      </p>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            value={dayjs(field.value) || ""}
            size={size}
            onChange={handleOnChange}
            style={{ width: "100%" }}
          />
        )}
      />
    </div>
  );
};

export default FormDatePicker;
