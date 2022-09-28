import styles from "../../styles/Crew.module.css";
import data from "../../data.json";
import man from "../../assets/crew/image-douglas-hurley.png";
import Image from "next/image";

const crew = data.crew[0];

const Crew = () => {
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
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
      <div className={styles.crew_img}>
        <Image src={man} alt="man" />
      </div>
    </div>
  );
};

export default Crew;
