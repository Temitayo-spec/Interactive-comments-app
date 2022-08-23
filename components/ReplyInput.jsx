/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import styles from "../styles/reply_input.module.css";

const ReplyInput = ({ details }) => {
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
        <button type="button">Reply</button>
      </div>
    </div>
  );
};

export default ReplyInput;
