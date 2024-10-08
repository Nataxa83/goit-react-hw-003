import { Field, Formik, Form, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

const initialValues = {
  name: "",
  number: "",
};
const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    onAdd({
      id: Date.now(),
      name: values.name,
      number: values.number,
    });
    console.log(values);

    actions.resetForm();
  };

  const phoneRegExp = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Max 50 characters ")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Number must be at least 3 characters")
      .max(50, "Max 50 characters ")
      .required("Number is required")
      .matches(phoneRegExp, "Number format is 'xxx-xx-xx'"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <label>
          <span>Name</span>
        </label>
        <Field type="text" name="name" className={css.formInput} />
        <ErrorMessage className={css.errorName} name="name" component="span" />

        <label>
          <span>Number</span>
        </label>
        <Field type="text" name="number" className={css.formInput} />
        <ErrorMessage
          className={css.errorNumber}
          name="number"
          component="span"
        />

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
