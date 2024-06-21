

import AiContainer from "./AiContainer"
import MapContainer from "./MapContainer"
import styles from "../styles/cmps/MainContentWrapper.module.scss"

const MainContentWrapper = () => {
    return (
        <div className={styles.mainContentWrapper}>
            <AiContainer />
            <MapContainer />
        </div>
    )
}

export default MainContentWrapper