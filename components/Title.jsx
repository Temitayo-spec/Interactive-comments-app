/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import React from "react";
import { useDispatch } from "react-redux";
import { setReply } from "../store/replySlice";
import styles from "../styles/title.module.css";

const Title = ({ each }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.lhs}>
          <img src={each.user.image.png} alt="user_image" />
          <h4>{each.user.username}</h4>
          {each.id === 4 && <span>you</span>}
          <p>{each.createdAt}</p>
        </div>

        <div className={styles.rhs}>
          {each.id !== 4 ? (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div onClick={() => dispatch(setReply(true))}>
              <img src="/images/icon-reply.svg" alt="reply_svg" />
              <span
                style={{
                  marginLeft: "0.7em",
                }}
              >
                Reply
              </span>
            </div>
          ) : (
            <>
              <span className={styles.btns}>
                <img src="/images/icon-delete.svg" alt="reply_svg" />
                <p>Delete</p>
              </span>
              <span className={styles.btns}>
                <img src="/images/icon-edit.svg" alt="reply_svg" />
                <p>Edit</p>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Title;
