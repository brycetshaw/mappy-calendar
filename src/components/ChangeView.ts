import {LatLngTuple, ZoomOptions} from "leaflet";
import {useMap} from "react-leaflet";




export default function ChangeView({ center, zoom, zoomOptions= {animate: true} }: {center: LatLngTuple, zoomOptions: ZoomOptions, zoom: number}) {
    const map = useMap();
    map.setView(center, zoom, zoomOptions);
    return null;
}