import {useMapEvents} from "react-leaflet";

const AddMarkerToClick = () => {
    // const handleClick = (e) => c

    const map = useMapEvents({click: console.log});

    return null;
}

export default AddMarkerToClick;