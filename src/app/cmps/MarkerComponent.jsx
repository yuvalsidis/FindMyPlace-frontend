import { Marker } from "@vis.gl/react-google-maps"

const MarkerComponent = ({location}) => {
    return (
        <Marker
            position={{ lat: location.lat, lng: location.lng }}>
        </Marker>
    )
}

export default MarkerComponent