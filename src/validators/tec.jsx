import * as yup from "yup";
export const createSchema = yup.object({
  title: yup.string().required("O nome da tech é obrigatório"),
  status: yup.string().required("O nome da tech é obrigatório"),
});

export const editSchema = yup.object({
  status: yup.string(),
});
