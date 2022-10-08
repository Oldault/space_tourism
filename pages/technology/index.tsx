import styles from "../../styles/Technologies.module.css";
import data from "../../data.js";
import Image from 'next/image';
import { useState } from "react";

const Technology = () => {

  const [position, setPosition] = useState(0);
  const tech = data.technology[position];

  return (
    <div className={styles.container} key={tech.name}>
      <div className={styles.tech_main}>
        <div className={styles.tech_left}>
          <div className={styles.tech_pick}>
            <h5>
              <span>03</span> space launch 101
            </h5>
          </div>
          <div className={styles.tech_main_text}>
            <div className={styles.tech_buttons}>
                <button className="round" onClick={() => setPosition(0)}>1</button>
                <button className="round" onClick={() => setPosition(1)}>2</button>
                <button className="round" onClick={() => setPosition(2)}>3</button>
            </div>
            <div className={styles.tech_text}>
                <h6>THE TERMINOLOGY...</h6>
                <h3 className="fadeIn">{tech.name}</h3>
                <p className="fadeIn">{tech.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tech_img}>
        <Image src={tech.images.portrait} alt="rocket" className="fadeIn"/>
      </div>
    </div>
  );
};

export default Technology;
