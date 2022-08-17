import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import eventsReducer, { EventsState } from "./features/events/eventsSlice";
import newsReducer, { NewsState } from "./features/news/newsSlice";

export type RootState = {
    events: EventsState,
    news: NewsState
};

const store = configureStore({
    reducer: {
        events: eventsReducer,
        news: newsReducer
    },
    middleware: getDefaultMiddleware({ serializableCheck: false })
});

export type AppDispatch = typeof store.dispatch;

export default store;