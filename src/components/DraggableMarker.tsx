import React, {useCallback, useMemo, useRef, useState} from "react";
import {Marker, Popup} from "react-leaflet";
import {LatLngTuple} from "leaflet";

const refInitialValue= null;
const center = [51.0816, -115.3302] as LatLngTuple

const useDraggableMarker = () => {
    const [position, setPosition] = useState(center)
    const DraggableMarker = () => {
        const [draggable, setDraggable] = useState(false)
        const markerRef = useRef(refInitialValue as any)
        const eventHandlers = useMemo(
            () => ({
                dragend() {
                    const marker = markerRef.current
                    if (marker != null) {
                        setPosition(marker.getLatLng())
                    }
                },
            }),
            [],
        )
        const toggleDraggable = useCallback(() => {
            setDraggable((d) => !d)
        }, [])

        return (
            <Marker
                draggable={draggable}
                eventHandlers={eventHandlers}
                position={position}
                ref={markerRef}>
                <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
              ? 'Marker is draggable'
              : 'Click here to make marker draggable'}
        </span>
                </Popup>
            </Marker>
        )
    }
    return {DraggableMarker, position, setPosition}
}
export default useDraggableMarker;