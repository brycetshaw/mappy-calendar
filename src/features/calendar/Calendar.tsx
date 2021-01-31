import React, {useEffect, useState} from "react";
import {Calendar, dateFnsLocalizer} from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import fromUnixTime from 'date-fns/fromUnixTime';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { setActive, unsetActive} from "../editor/editorSlice";
import {CalendarWindow } from './calendarSlice';
import {useDispatch} from "react-redux";
import {v4 as uuid} from 'uuid';
import {Itinerary} from "../../models";
import {DataStore} from "@aws-amplify/datastore";
import { PubSub } from "aws-amplify";

const locales = {
    'en-US': require('date-fns/locale/en-US'),
}
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

// @ts-ignore
const DnDCalendar = withDragAndDrop(Calendar);


const MyCalendar: any = (calendarWindow: CalendarWindow) => {
    const [eventsList, setEventsList] = useState([] as Array<Itinerary>)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(eventsList)
    }, [])


    const onEventDrop = (data: any) => {
        const {start, end, event} = data;

        DataStore.save(
            Itinerary.copyOf(event, updated => {
                updated.start = start
                updated.end = end
            })
        )

        // setEventsList(eventsList.map((item: any) => (item.key === event.key) ? {
        //     ...item,
        //     start: start,
        //     end: end
        // } : item))
    };

    const handleSelectEvent = (data: any) => {
        console.log(data)
        // dispatch(setActive(data.id))
    }

    const handleSelectSlot = (e: any) => {
        const newEvent = {start: {time: e.start.toISOString()}, end: {time:e.end.toISOString()}}
        // setEventsList([...eventsList, newEvent])
        console.log(newEvent)
        dispatch(unsetActive())
        dispatch(setActive({...newEvent}))

    }

    return (
        <DnDCalendar
            selectable
            resizable
            defaultDate={calendarWindow.start ? fromUnixTime(calendarWindow.start) : new Date()}
            defaultView={calendarWindow.view}
            events={eventsList.map((d) => ({
                start: Date.parse(d?.start.time),
                end: Date.parse(d?.end.time),
                title: d.title
            }))}
            localizer={localizer}
            onEventDrop={onEventDrop}
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
            style={{height: "100vh"}}
        />
    )
}

export default MyCalendar;