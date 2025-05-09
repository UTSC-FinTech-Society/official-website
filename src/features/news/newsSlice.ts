import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse, AxiosError } from "axios";
import convertArrayBufferToBase64String from "../../utils/displayImage";

export type NewsState = {
    newsList: { news_id: number, title: string, content: string, picture_type: string, picture_data: string, author: string, created_at: Date } [] | [],
    isLoading: boolean
};

export type NewsType = { news_id: number, title: string, content: string, picture_type: string, picture_data: string, author: string, created_at: Date };

const initialState = {
    newsList: [],
    isLoading: false
};

export const getAllNews = createAsyncThunk('news/getAllNews', async(_, thunkAPI) => {
    try {
        const response: AxiosResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/news`);
        return response.data.allNews.map((news: any) => ({ ...news, picture_data: news.picture_data.data }));
    } catch(error: AxiosError | any) {
        return thunkAPI.rejectWithValue(error.response.data.error);
    }
});

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllNews.pending.toString()]: (state: NewsState) => {
            state.isLoading = true;
        },
        [getAllNews.fulfilled.toString()]: (state: NewsState, action: PayloadAction<{news_id: number, title: string, content: string, picture_type: string, picture_data: ArrayBuffer, author: string, created_at: Date}[]>) => {
            state.newsList = action.payload.map(news => ({ ...news, picture_data: convertArrayBufferToBase64String(news.picture_data)! })).sort((a, b) => {
                if (a.created_at > b.created_at) return -1;
                if (a.created_at < b.created_at) return 1;
                return 0;
            });
            state.isLoading = false;
        },
        [getAllNews.rejected.toString()]: (state: NewsState, action: PayloadAction<string>) => {
            state.isLoading = false;
        }
    }
});

export default newsSlice.reducer;