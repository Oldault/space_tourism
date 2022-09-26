import Router from "next/router";
import styles from "../../styles/Destinations.module.css";
import data from "../../data.json";
import Image from "next/image";
import moon from "../../assets/destination/image-moon.png"

const dest = data.destinations[0];
console.log(dest.images.png)

const Destination = () => {
  return (
    <div className={styles.container}>
      <div className={styles.des_main}>
        <div className={styles.des_left}>
          <div className={styles.des_pick}>
            <h5>
              <span>01</span> pick your destination
            </h5>
          </div>
          <div className={styles.des_planet}>
            <Image src={moon}/>
          </div>
        </div>
        <div className={styles.des_right}>
          <div className={styles.des_planet_nav}>
            <ul className="navText">
              <li>MOON</li>
              <li>MARS</li>
              <li>EUROPA</li>
              <li>TITAN</li>
            </ul>
          </div>
          <div className={styles.des_main_text}>
            <h1>{dest.name}</h1>
            <p>{dest.description}</p>
          </div>
          <div className={styles.des_sup_info}>
            <div className={styles.des_distance}>
              <p className="sHeading2">Avg. distance</p>
              <h6>{dest.distance}</h6>
            </div>
            <div className={styles.des_travel_time}>
              <p className="sHeading2">est. travel time</p>
              <h6>{dest.travel}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
