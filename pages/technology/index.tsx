import styles from "../../styles/Technologies.module.css";
import data from "../../data.js";
import Image from "next/image";
import { useCallback, useState } from "react";

const Technology = () => {
  const [position, setPosition] = useState(0);
  const tech = data.technology[position];

  const renderBtn = useCallback(() => {
    return (
      <div className={styles.tech_buttons}>
        <button
          className="round"
          onClick={() => setPosition(0)}
          style={{
            color: 0 == position ? "black" : "#ffffff",
            backgroundColor: 0 == position ? "#ffffff" : "transparent",
            border: 0 == position ? "3px solid #ffffff" : "1px solid #464646",
          }}
        >
          1
        </button>
        <button
          className="round"
          onClick={() => setPosition(1)}
          style={{
            color: 1 == position ? "black" : "#ffffff",
            backgroundColor: 1 == position ? "#ffffff" : "transparent",
            border: 1 == position ? "3px solid #ffffff" : "1px solid #464646",
          }}
        >
          2
        </button>
        <button
          className="round"
          onClick={() => setPosition(2)}
          style={{
            color: 2 == position ? "black" : "#ffffff",
            backgroundColor: 2 == position ? "#ffffff" : "transparent",
            border: 2 == position ? "3px solid #ffffff" : "1px solid #464646",
          }}
        >
          3
        </button>
      </div>
    );
  }, [position]);

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
            {renderBtn()}
            <div className={styles.tech_text}>
              <h6>THE TERMINOLOGY...</h6>
              <h3 className="fadeIn">{tech.name}</h3>
              <p className="fadeIn">{tech.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tech_img}>
        <Image src={tech.images.portrait} alt="rocket" className="fadeIn" />
      </div>
    </div>
  );
};

export default Technology;
