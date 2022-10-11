import Router from "next/router";
import { useCallback } from "react";
import styles from "../../styles/Destinations.module.css";
import data from "./data";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

const Destination = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [position, setPosition] = useState(0);
  const dest = data.destinations[position];

  const renderNavBar = useCallback(() => {
    return (
      <div className={styles.des_planet_nav}>
        <ul className="navText">
          {data.destinations.map((planet, index) => (
            <li
              onClick={() => setPosition(index)}
              key={index}
              style={{
                borderBottom: index == position ? "4px solid white" : "0",
              }}
            >
              {planet.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }, [position]);

  return (
    <div className={styles.container} key={dest.name}>
      <div className={styles.des_main}>
        <div className={styles.des_left}>
          <div className={styles.des_pick}>
            <h5>
              <span>01</span> pick your destination
            </h5>
          </div>
          <div className={styles.des_planet}>
            <Image src={dest.images.png} alt="planet" className="lineUp" />
          </div>
        </div>
        <div className={styles.des_right}>
          {renderNavBar()}
          <div className={styles.des_main_text}>
            <h1 className="lineDown">{dest.name}</h1>
            <p className="fadeInD2">{dest.description}</p>
          </div>
          <div className={styles.des_sup_info}>
            <div className={styles.des_distance}>
              <p className="sHeading2">Avg. distance</p>
              <h6 className="SlideIn1">{dest.distance}</h6>
            </div>
            <div className={styles.des_travel_time}>
              <p className="sHeading2">est. travel time</p>
              <h6 className="SlideIn2">{dest.travel}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
