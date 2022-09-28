import styles from "../../styles/Technologies.module.css";
import data from "../../data.json";
import rocket from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import Image from 'next/image';

const tech = data.technology[0];

const Technology = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tech_main}>
        <div className={styles.tech_left}>
          <div className={styles.tech_pick}>
            <h5>
              <span>03</span> space launch 101
            </h5>
          </div>
          <div className={styles.tech_main_text}>
            <div className={styles.tech_buttons}>
                <button className="round">1</button>
                <button className="round">2</button>
                <button className="round">3</button>
            </div>
            <div className={styles.tech_text}>
                <h6>THE TERMINOLOGY...</h6>
                <h3>{tech.name}</h3>
                <p>{tech.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tech_img}>
        <Image src={rocket} alt="rocket" />
      </div>
    </div>
  );
};

export default Technology;
