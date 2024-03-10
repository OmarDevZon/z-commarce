/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import { FormLayout } from "antd/es/form/Form";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  layout: FormLayout | undefined;
} & TFormConfig;

export const SaenForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
  layout,
}: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const submit = (data: any) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Form  className="w-full" labelCol={{ span: 12 }} layout={layout} onFinish={methods.handleSubmit(submit)}>
        {children}
      </Form>
    </FormProvider>
  );
};
