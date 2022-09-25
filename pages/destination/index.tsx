import Router from 'next/router';
import styles from "../../styles/Destinations.module.css";

const Destination = () => {
    return (
        <div>
            <div className={styles.des_main}>
                <div className={styles.des_left}>
                    <div className={styles.des_pick}>

                    </div>
                    <div className={styles.des_planet}>

                    </div>
                </div>
                <div className={styles.des_right}>
                    <div className={styles.des_planet_nav}>
                        <ul>
                            <li>MOON</li>
                            <li>MARS</li>
                            <li>EUROPA</li>
                            <li>TITAN</li>
                        </ul>
                    </div>
                    <div className={styles.des_main_text}>

                    </div>
                    <div className={styles.des_sup_info}>
                        <div className={styles.des_distance}>
                            <h5>Avg. distance</h5>
                        </div>
                        <div className={styles.des_travel_time}>
                            <h5>est. travel time</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;