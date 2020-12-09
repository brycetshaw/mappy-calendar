import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk, RootState} from '../../redux/store';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import {Dayjs} from "dayjs";


// enum DOF {
//     FIXED, FREE, DERIVED
// }
//
// interface DateItem {
//     time: Date;
//     freedom: DOF;
// }
//
// interface StartEnd {
//     start: DateItem
//     end: DateItem
//     duration: never
// }
//
// interface StartDuration {
//     start: DateItem
//     end: never
//     duration: DateItem
// }
//
// interface EndDuration {
//     start: never
//     end: DateItem
//     duration: DateItem
// }
//
// export type EventListItem = StartEnd | StartDuration | EndDuration
//
// interface CalendarState {
//     view: {
//         start: Date
//         view: 'month' | 'week' | 'day' | 'agenda'
//     }
//     inRange: EventListItem[],
//     selected: EventListItem
//
// }
export const hello = 'yes'

// const initialState: CalendarState = {
//     view: {
//         start: new Date(),
//         view: "month"
//     },
//     inRange: [],
//     // selected:
// };

// export const calendarSlice = createSlice({
//     name: 'calendar',
//     initialState,
//     reducers: {
//         increment: state => {
//             // Redux Toolkit allows us to write "mutating" logic in reducers. It
//             // doesn't actually mutate the state because it uses the Immer library,
//             // which detects changes to a "draft state" and produces a brand new
//             // immutable state based off those changes
//             state.value += 1;
//         },
//         decrement: state => {
//             state.value -= 1;
//         },
//         // Use the PayloadAction type to declare the contents of `action.payload`
//         incrementByAmount: (state, action: PayloadAction<number>) => {
//             state.value += action.payload;
//         },
//     },
// });

// export const {increment, decrement, incrementByAmount} = calendarSlice.actions;
//
// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount: number): AppThunk => dispatch => {
//     setTimeout(() => {
//         dispatch(incrementByAmount(amount));
//     }, 1000);
// };
//
// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state: RootState) => state.calendar.value;

// export default calendarSlice.reducer;