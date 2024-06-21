import { Marker } from "@vis.gl/react-google-maps"

const MarkerComponent = (position) => {
    return (
        <Marker>
            key={1}
            anchor={{ x: 0.5, y: 1 }}
            position={position}
        </Marker>
    )
}

export default MarkerComponent