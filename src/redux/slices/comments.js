// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../shared/api";

// export const fetchComments = createAsyncThunk("comments/fetch",
//     async(_, {rejectWithValue}) => {
//         try {
//             const result = await instance.get('/comments');
//             console.log(result);
//             return result;
//         } catch (error) {
//             return rejectWithValue(error);
//         }
//     }
// );

export const fetchComments = createAsyncThunk('comments/fetchComments', async () => {
    const { data } = await instance.get('/comments');
    console.log(data);
    return data;
});


export const fetchRemoveComment = createAsyncThunk('comments/fetchRemoveComment', async (id) =>
    instance.delete(`/comments/${id}`),
);


const initialState = {
    comments: {
        items: [],
        status: 'loading',
    },
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: {
        //comments
        [fetchComments.pending]: (state) => {
            state.comments.items = [];
            state.comments.status = 'loading';
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.comments.items = action.payload;
            console.log(action.payload);
            state.comments.status = 'loaded';
        },
        [fetchComments.rejected]: (state) => {
            state.comments.items = [];
            state.comments.status = 'error';
        },
        [fetchRemoveComment.pending]: (state, action) => {
            state.comments.items = state.comments.items.filter(obj=> obj._id === action.meta.arg)
        },
    },
});

export const commentsReducer = commentsSlice.reducer;