import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk, RootState} from '../../redux/store';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import {Dayjs} from "dayjs";
import {Itinerary} from "../../models";


export interface CalendarWindow {
    start?: number;
    end?: number;
    view: 'month' | 'week' | 'day' | 'agenda'
}

interface CalendarState {
    inRange: Itinerary[];
    selected?: Itinerary;
    window: CalendarWindow;
}

const initialState: CalendarState = {
    inRange: [],
    window: {
        start: (new Date()).getUTCDate(),
        view: "month"
    }
};

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,
    reducers: {
        setWindow: (state, action: PayloadAction<CalendarWindow>) => {
            state.window = {...state.window, ...action.payload}
        }
    },
});

export const {setWindow} = calendarSlice.actions;

export const selectCalendarWindow = (state: RootState) => state.calendar.window;

export default calendarSlice.reducer;