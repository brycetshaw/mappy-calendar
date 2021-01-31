import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../redux/store';
import {LatLngTuple} from "leaflet";

interface MapState {
    center: LatLngTuple;

}

const initialState: MapState = {
    center: [0,0],
};

export const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        centerMap: (state, action: PayloadAction<LatLngTuple | undefined>) => {
            state.center = action.payload || state.center;
        },
    },
});

export const {centerMap} = mapSlice.actions;
// export const selectDraftEvent = (state: RootState) => state.active.draftEvent;
export const selectMapCenter = (state: RootState) => state.map.center;
// export const selectCalendarWindow = (state: RootState) => state.active.calendarWindow;
// export const selectEditablePoint = (state: RootState) => state.active.editablePoint

export default mapSlice.reducer;