import styles from "../../styles/Crew.module.css";
import data from "./data";
import Image from "next/image";
import { useState, useCallback } from "react";

const Crew = () => {
  const [position, setPosition] = useState(0);
  const crew = data.crew[position];

  const renderRadioBtn = useCallback(() => {
    return (
      <div className={styles.crew_radio}>
          <span 
          className="dot"
          onClick={() => setPosition(0)} 
          style={{
            backgroundColor: 0 == position ? "#ffffff" : "#464646",
          }}
          ></span>
          <span 
          className="dot"
          onClick={() => setPosition(1)} 
          style={{
            backgroundColor: 1 == position ? "#ffffff" : "#464646",
          }}
          ></span>
          <span 
          className="dot"
          onClick={() => setPosition(2)} 
          style={{
            backgroundColor: 2 == position ? "#ffffff" : "#464646",
          }}
          ></span>
          <span 
          className="dot"
          onClick={() => setPosition(3)} 
          style={{
            backgroundColor: 3 == position ? "#ffffff" : "#464646",
          }}
          ></span>
      </div>
    );
  }, [position]);

  return (
    <div className={styles.container} key={crew.name}>
      <div className={styles.crew_main}>
        <div className={styles.crew_left}>
          <div className={styles.crew_pick}>
            <h5>
              <span>02</span> meet your crew
            </h5>
          </div>
          <div className={styles.crew_main_text}>
            <h4 className="fadeIn">{crew.role}</h4>
            <h3 className="fromLeft2">{crew.name}</h3>
            <p className="fadeInD">{crew.bio}</p>
          </div>
          {renderRadioBtn()}
        </div>
      </div>
      <div className={styles.crew_img}>
        <Image
          src={crew.images.png}
          alt="man"
          className="fadeIn"
        />
      </div>
    </div>
  );
};

export default Crew;
