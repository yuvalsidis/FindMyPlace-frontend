

import AiContainer from "./AiContainer"
import MapContainer from "./MapContainer"
import styles from "../styles/cmps/MainContentWrapper.module.scss"

const MainContentWrapper = ({setLocation,location}) => {
    return (
        <div className={styles.mainContentWrapper}>
            <MapContainer setLocation={setLocation} location={location}/>
            <AiContainer />
        </div>
    )
}

export default MainContentWrapper