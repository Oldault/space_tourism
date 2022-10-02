import styles from "../../styles/Crew.module.css";
import data from "../../data.js";
import Image from "next/image";
import { useState } from "react";


const Crew = () => {

  const [position, setPosition] = useState(0);
  const crew = data.crew[position];


  return (
    <div className={styles.container}>
      <div className={styles.crew_main}>
        <div className={styles.crew_left}>
          <div className={styles.crew_pick}>
            <h5>
              <span>02</span> meet your crew
            </h5>
          </div>
          <div className={styles.crew_main_text}>
            <h4>{crew.role}</h4>
            <h3>{crew.name}</h3>
            <p>{crew.bio}</p>
          </div>
          <div className={styles.crew_radio}>
            <span className="dot" onClick={() => setPosition(0)}></span>
            <span className="dot" onClick={() => setPosition(1)}></span>
            <span className="dot" onClick={() => setPosition(2)}></span>
            <span className="dot" onClick={() => setPosition(3)}></span>
          </div>
        </div>
      </div>
      <div className={styles.crew_img}>
        <Image src={crew.images.png} alt="man" />
      </div>
    </div>
  );
};

export default Crew;
