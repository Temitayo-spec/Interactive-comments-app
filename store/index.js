/* eslint-disable linebreak-style */
import { configureStore } from '@reduxjs/toolkit';
import { replyReducer } from './replySlice';

export default configureStore({
  reducer: {
    reply: replyReducer,
  },
});
