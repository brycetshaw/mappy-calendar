import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import calendarReducer from '../features/calendar/calendarSlice';
import mapReducer from '../features/map/mapSlice';
import editorReducer from '../features/editor/editorSlice'

export const store = configureStore({
    reducer: {
        map: mapReducer,
        calendar: calendarReducer,
        editor: editorReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;