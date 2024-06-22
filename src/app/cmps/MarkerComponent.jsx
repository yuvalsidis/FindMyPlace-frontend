import { Marker, AdvancedMarker} from "@vis.gl/react-google-maps"

const MarkerComponent = ({ location }) => {

    return (
        <AdvancedMarker position={{ lat: location.lat, lng: location.lng }}></AdvancedMarker>
        
    )
}

export default MarkerComponent