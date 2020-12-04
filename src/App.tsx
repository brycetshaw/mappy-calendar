import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import '@aws-amplify/ui/dist/style.css'
import 'antd/dist/antd.css'
import {withAuthenticator} from "aws-amplify-react";
import {DataStore} from "@aws-amplify/datastore";
import {API, graphqlOperation} from 'aws-amplify'
import * as APIt from './API'
import {Input, Button, Layout} from 'antd';
import {Itinerary} from "./models";
import DatePicker from "./components/DatePicker";
import {MapContainer, Marker, Polyline, Popup, TileLayer} from 'react-leaflet';
import Leaflet, {LatLngTuple} from "leaflet";
import useDraggableMarker from "./components/DraggableMarker";

const {RangePicker} = DatePicker;

function App() {
    const [origin, setOrigin] = useState([51.0816, -115.3302] as LatLngTuple)
    const [destination, setDestination] = useState([51.1816, -115.3302] as LatLngTuple)

    const {DraggableMarker, position, setPosition} = useDraggableMarker();

    // useEffect(() => {
    //     fetchItineraries()
    //     const subscription = DataStore.observe(Itinerary).subscribe(() => fetchItineraries())
    //     return () => subscription.unsubscribe()
    // }, [])

    useEffect(() => {
        setPosition([51.0816, -115.3302])
    }, [])

    // const fetchItineraries = () => {
    //
    // }

    type Position = {
        position: LatLngTuple,
        key: string,
        message: string
    }
    const positions = [
        {
            position: position,
            key: 'home',
            message: 'this is where I live'

        }
    ] as Position[]

    return (
        <Layout>
            <Layout.Header>
                header
            </Layout.Header>
            <RangePicker showTime={true}/>
            <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{height: '100vh', width: '100vw'}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <DraggableMarker/>

                {/*<Polyline*/}
                {/*    positions={paths} color='red'*/}
                {/*/>*/}

            </MapContainer>
        </Layout>

    );
}

export default App;
