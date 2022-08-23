/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import styles from "../styles/input_comp.module.css";

const InputComp = ({ details }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <img src={details.image.png} alt="" />
      </div>
      <textarea
        type="text"
        // eslint-disable-next-line react/jsx-curly-brace-presence
        value={""}
        placeholder="Add a comment"
      />
      <div className={styles.send_button}>
        <button type="button">Send</button>
      </div>
    </div>
  );
};

export default InputComp;
