import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse, AxiosError } from "axios";
import convertArrayBufferToBase64String from "../../utils/displayImage";

export type EventsState = {
    eventsList: { event_id: number, name: string, description: string, register_deadline: Date, start_datetime: Date, end_datetime: Date, entry_fee?: number, location: string, poster_type: string, poster_data: string, signup_link?: string, created_at: Date } [] | [],
    isLoading: boolean
};

export type EventType = { event_id: number, name: string, description: string, register_deadline: Date, start_datetime: Date, end_datetime: Date, entry_fee?: number, location: string, poster_type: string, poster_data: string, signup_link?: string, created_at: Date };

const initialState = {
    eventsList: [],
    isLoading: false
};

export const getAllEvents = createAsyncThunk('events/getAllEvents', async(_, thunkAPI) => {
    try {
        const response: AxiosResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/events`);
        return response.data.events.map((event: any) => ({ ...event, poster_data: event.poster_data.data }));
    } catch(error: AxiosError | any) {
        return thunkAPI.rejectWithValue(error.response.data.error);
    }
});

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllEvents.pending.toString()]: (state: EventsState) => {
            state.isLoading = true;
        },
        [getAllEvents.fulfilled.toString()]: (state: EventsState, action: PayloadAction<{ event_id: number, name: string, description: string, register_deadline: Date, start_datetime: Date, end_datetime: Date, entry_fee?: number, location: string, poster_type: string, poster_data: ArrayBuffer, signup_link?: string, created_at: Date }[]>) => {
            state.eventsList = action.payload.map(event => ({ ...event, poster_data: convertArrayBufferToBase64String(event.poster_data)! })).sort((a, b) => {
                if (a.created_at > b.created_at) return -1;
                if (a.created_at < b.created_at) return 1;
                return 0;
            });
            state.isLoading = false;
        },
        [getAllEvents.rejected.toString()]: (state: EventsState, action: PayloadAction<string>) => {
            state.isLoading = false;
        }
    }
});

export default eventsSlice.reducer;