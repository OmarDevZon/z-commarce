/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  rules?: any;
  className?: string;
  placeholder?: string;
};

export const SaenInput = ({
  type,
  name,
  label,
  rules,
  className,
  placeholder,
}: TInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}  rules={rules}>
            {type === "password" ? (
              <>
                {" "}
                <Input.Password
                  {...field}
                  type={type}
                  id={name}
                  size="large"
                  placeholder={placeholder}
                  className={`rounded-none ${className}`}
                />{" "}
              </>
            ) : (
              <>
                {" "}
                <Input
                  {...field}
                  type={type}
                  id={name}
                  size="large"
                  placeholder={placeholder}
                  className={`rounded-none ${className}`}
                />{" "}
              </>
            )}
          </Form.Item>
        )}
      />
    </div>
  );
};
