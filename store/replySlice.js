/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable quotes */
import { createSlice } from "@reduxjs/toolkit";

const replySlice = createSlice({
  name: "reply",
  initialState: {
    reply: false,
  },
  reducers: {
    setReply: (state, action) => {
      state.reply = action.payload;
    },
  },
});

export const selectReply = (state) => state.reply.reply;

export const { setReply } = replySlice.actions;
export const replyReducer = replySlice.reducer;
