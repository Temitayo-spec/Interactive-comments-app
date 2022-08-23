/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import styles from "../styles/comment_card.module.css";
import Content from "./Content";
import Score from "./Score";
import Title from "./Title";

const CommentCard = ({ each }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Score each={each} />
        <div className={styles.rhs}>
          <Title each={each} />
          <Content each={each} />
        </div>
      </div>

    </div>
  );
};

export default CommentCard;
