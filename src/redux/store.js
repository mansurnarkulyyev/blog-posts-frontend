import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { postsReducer } from "./slices/posts";
import { commentsReducer } from "./slices/comments";


const store = configureStore({
    reducer: {
        comments: commentsReducer,
        posts: postsReducer,
        auth: authReducer,
    },
});

export default store;