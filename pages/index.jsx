/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CommentCard from "../components/CommentCard";
import styles from "../styles/default.module.css";
import data from "../data.json";
import Reply from "../components/Reply";
import InputComp from "../components/InputComp";
import ReplyInput from "../components/ReplyInput";
import { selectReply } from "../store/replySlice";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [comment, setComments] = useState(data);
  const isReply = useSelector(selectReply);
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        {comment.comments.map((each) => (
          <>
            <CommentCard each={each} />
            {isReply && (
              <ReplyInput details={comment.currentUser} reply={each} />
            )}
            <div className={styles.reply_ctn}>
              {each.replies.map((reply, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={key} className={styles.reply_inner}>
                  <Reply reply={reply} />
                  {isReply && (
                    <ReplyInput details={comment.currentUser} reply={reply} />
                  )}
                </div>
              ))}
            </div>
          </>
        ))}

        <InputComp details={comment.currentUser} />
      </div>
    </div>
  );
};

export default Home;
