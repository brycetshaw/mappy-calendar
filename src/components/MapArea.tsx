import {MapContainer, Polyline, TileLayer, useMap, useMapEvents} from "react-leaflet";
import {Layout} from "antd";
import React, {useEffect} from "react";

import useDraggableMarker from "./DraggableMarker";
import {control, LatLngTuple, ZoomOptions} from "leaflet";
import {useDispatch, useSelector} from "react-redux";
import {selectEditablePoint, selectMapCenter, setActive, setPoint} from "../redux/activeSelectionSlice";

import ChangeView from "./ChangeView";
// import AddMarkerToClick from "./AddMarkerToClick";


const AddMarkerToClick = () => {
    // const handleClick = (e) => c
    const editablePoint = useSelector(selectEditablePoint);
    const dispatch = useDispatch();
    const map = useMapEvents({
        click: (e) => {
            if(!editablePoint) return;
            dispatch(setPoint({index: editablePoint, point: [e.latlng.lat, e.latlng.lng] as LatLngTuple}))
            console.log(editablePoint, e)
        }
    });

    return null;
}

const MapArea = () => {
    const {DraggableMarker, position, setPosition} = useDraggableMarker();
    const center = useSelector(selectMapCenter);

    return (
        <MapContainer center={center} zoom={13} scrollWheelZoom={true} style={{height: '100%', width: '100%'}}>
            <ChangeView center={center} zoom={13} zoomOptions={{animate: true}}/>
            <AddMarkerToClick/>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/*<DraggableMarker/>*/}

            {/*<Polyline*/}
            {/*    positions={paths} color='red'*/}
            {/*/>*/}

        </MapContainer>
    )
}

export default MapArea;