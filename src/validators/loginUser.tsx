import * as yup from "yup";
export const userLogin = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Campo obrigatório!")
    .email("Email Inválido!"),
  password: yup.string().required("Campo obrigatório!"),
});
