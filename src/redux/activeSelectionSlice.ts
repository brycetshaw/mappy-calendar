import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk, RootState} from './store';
import {LatLngTuple} from "leaflet";
import {Itinerary} from "../models";

export interface CalendarWindow {
        start?: number;
        end?: number;
        view: 'month' | 'week' | 'day' | 'agenda'
}

type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};


interface ActiveSelectionState {
    draftEvent: RecursivePartial<Itinerary>;
    center: LatLngTuple;
    editablePoint: 'start'|'end'|null;
    calendarWindow: CalendarWindow;
}

const initialState: ActiveSelectionState = {
    center: [52.1816, -115.3302],
    calendarWindow: {
        start: (new Date()).getUTCDate(),
        view: "month"
    },
    editablePoint: null,
    draftEvent: {}

};

export const activeSelectionSlice = createSlice({
    name: 'active',
    initialState,
    reducers: {
        setActive: (state, action: PayloadAction<Partial<Itinerary>>) => {
            state.draftEvent = {...state.draftEvent, ...action.payload};
        },
        unsetActive: state => {
            state.draftEvent = {};
        },
        centerMap: (state, action: PayloadAction<LatLngTuple | undefined>) => {
            state.center = action.payload || state.center;
        },
        // setWindow: (state, action: PayloadAction<CalendarWindow>) => {
        //     state.calendarWindow = {...state.calendarWindow,  ...action.payload}
         setPoint: (state, action: PayloadAction<{index: 'start'|'end', point: LatLngTuple}>) => {
            const [lat, lng] = action.payload.point;

            state.draftEvent[action.payload.index] = {  ...state.draftEvent[action.payload.index], lat: lat, long: lng}
            state.editablePoint = null;
        }
    },
});

export const {setActive, unsetActive, centerMap,  setPoint} = activeSelectionSlice.actions;
// export const selectDraftEvent = (state: RootState) => state.active.draftEvent;
// export const selectMapCenter = (state: RootState) => state.active.center;
// export const selectCalendarWindow = (state: RootState) => state.active.calendarWindow;
// export const selectEditablePoint = (state: RootState) => state.active.editablePoint;

export default activeSelectionSlice.reducer;