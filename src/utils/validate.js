import * as yup from 'yup'

const requiredMessage = 'Поле обязательно к заполнению'

export const validateSchema = yup.object().shape({
  name: yup
    .string()
    .required(requiredMessage)
    .min(2, 'Минимальная длина - 2 символов')
    .max(15, 'Максимальная длина - 15 символов'),
  lastname: yup.string().required(requiredMessage),
  email: yup
    .string()
    .email('Email введен некорректно')
    .required(requiredMessage),
  phone: yup
    .string()
    .required(requiredMessage)
    .length(18, 'Номер телефона введен некорректно'),
  birthyear: yup
    .number()
    .typeError(requiredMessage)
    .required(requiredMessage)
    .min(1960, 'Минимальное значение - 1960')
    .max(new Date().getFullYear() - 16, 'Минимальный возраст - 16 лет'),
  portfolio: yup
    .string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Введите корректный url'
    )
    .required(requiredMessage)
})
