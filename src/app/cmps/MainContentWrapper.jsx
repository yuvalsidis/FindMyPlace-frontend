

import AiContainer from "./AiContainer"
import MapContainer from "./MapContainer"
import styles from "../styles/cmps/MainContentWrapper.module.scss"

const MainContentWrapper = ({location}) => {
    return (
        <div className={styles.mainContentWrapper}>
            <MapContainer location={location}/>
            <AiContainer />
        </div>
    )
}

export default MainContentWrapper