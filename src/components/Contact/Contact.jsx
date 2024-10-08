import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
const Contact = ({ data: { id, name, number } }) => {
  return (
    <>
      <div className={css.card}>
        <div className={css.info}>
          <div className={css.name}>
            <FaUser size="25" />
            <p>{name}</p>
          </div>
          <div className={css.number}>
            <FaPhoneAlt size="25" />
            <p>{number}</p>
          </div>
        </div>
        <button className={css.btn} id= {id} type="button">
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
