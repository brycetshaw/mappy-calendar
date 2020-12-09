import React, {useEffect, useState} from "react";

import Calendar from "./Calendar";
import EventForm from "./EventForm";
import {useSelector} from "react-redux";
import { selectDraftEvent} from "../redux/activeSelectionSlice";
import {PubSub} from "aws-amplify";


const CalendarArea = () => {
    // const [Calendar, setEventsList] = calendar(initialEventsList);
    const draftEvent = useSelector(selectDraftEvent);
    useEffect(() => {
        console.log('subscription set')
        const subscription = PubSub.subscribe('draftEvent').subscribe({
            next: data => console.log(data, 'clendarArea: message recieved on draftEvent channel.'),
            error: error => console.error(error),
            complete: () => console.log('Done'),
        })

        return subscription.unsubscribe();
    }, [])


    return (
        <div style={{height: '100%', width: '100%'}}>
            {
                draftEvent.start === '' ?
                    <Calendar/> :
                    <EventForm/>
            }
        </div>
    )
}

export default CalendarArea;