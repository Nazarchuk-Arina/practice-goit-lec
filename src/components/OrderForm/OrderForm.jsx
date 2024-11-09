import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./OrderForm.module.css";
import * as Yup from "yup";

const OrderForm = () => {
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };

  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const orderSchema = Yup.object().shape({
    username: Yup.string().min(3, "abracadabra").max(20).required(),
    email: Yup.string().matches(re, "не является имейлом").required(),
    petType: Yup.string().oneOf(["cat", "dog"]),
  });

  const initialValues = {
    username: "",
    tel: "",
    email: "",
    range: 0,
    desire: "",
    petType: "",
    gender: "male",
    agree: false,
  };

  return (
    <div>
      <h1>Formik</h1>
      <Formik
        validationSchema={orderSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field
              className={s.input}
              type="text"
              placeholder="inter your name"
              name="username"
            />
            <ErrorMessage
              name="username"
              component="span"
              className={s.error}
            />
          </label>
          <label className={s.label}>
            <span>tel</span>
            <Field
              className={s.input}
              type="text"
              placeholder="inter your tel"
              name="tel"
            />
          </label>
          <label className={s.label}>
            <span>email</span>
            <Field
              className={s.input}
              type="text"
              placeholder="inter your email"
              name="email"
            />
            <ErrorMessage name="email" component="span" />
          </label>
          <label className={s.label}>
            <span>age</span>
            <Field
              className={s.input}
              type="range"
              placeholder="inter your name"
              name="range"
            />
          </label>
          <label className={s.label}>
            <span>prefer</span>
            <Field
              className={s.input}
              as="textarea"
              placeholder="inter your desire"
              name="desire"
            />
          </label>

          <label className={s.label}>
            <span>type</span>
            <Field
              className={s.input}
              as="select"
              placeholder="inter your desire"
              name="petType"
            >
              <option value="" disabled>
                Select pet type
              </option>
              <option value="cat">cati</option>
              <option value="dog">dogi</option>
              <option value="bog">bogi</option>
            </Field>
            <ErrorMessage name="petType" component="span" className={s.error} />
          </label>
          <div>
            <label>
              <Field
                type="radio"
                value="male"
                className={s.input}
                name="gender"
              />
              <span>Xлопчик</span>
            </label>
            <label>
              <Field
                type="radio"
                value="female"
                className={s.input}
                name="gender"
              />
              <span>Дічинка</span>
            </label>
          </div>
          <label>
            <Field type="checkbox" className={s.input} name="agree" />
            <span>Я приймаю всі правила платформи</span>
          </label>
          <button type="submit">Order</button>
        </Form>
      </Formik>
    </div>
  );
};

export default OrderForm;
