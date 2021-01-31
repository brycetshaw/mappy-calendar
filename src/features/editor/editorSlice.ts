import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk, RootState} from '../../redux/store';
import {LatLngTuple} from "leaflet";
import {Itinerary} from "../../models";

type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

interface ActiveSelectionState {
    draftEvent: RecursivePartial<Itinerary>;
    editablePoint: 'start' | 'end' | null;
}

const initialState: ActiveSelectionState = {
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

        setPoint: (state, action: PayloadAction<{ index: 'start' | 'end', point: LatLngTuple }>) => {
            const [lat, lng] = action.payload.point;
            state.draftEvent[action.payload.index] = {...state.draftEvent[action.payload.index], lat: lat, long: lng}
            state.editablePoint = null;
        }
    },
});

export const {setActive, unsetActive,  setPoint} = activeSelectionSlice.actions;
export const selectDraftEvent = (state: RootState) => state.editor.draftEvent;
export const selectEditablePoint = (state: RootState) => state.editor.editablePoint;

export default activeSelectionSlice.reducer;
