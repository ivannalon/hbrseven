import styles from "./styles.module.css"
import herofirst from "../../assets/herofirst.png"
import shelterbuddy from "../../assets/shelterbuddy.svg"
import flower from "../../assets/flower.svg"
import flower1 from "../../assets/flower1.svg"
import flower2 from "../../assets/flower2.svg"
import flower3 from "../../assets/flower3.svg"
import hireguide from "../../assets/hireguide.svg"
import lupa from "../../assets/lupa.svg"

export function Home(){
  return(
    <div className={styles.container}>
      <div className={styles.svg}>
        <img src={herofirst} alt="" />
      </div>
      <div className={styles.frames}>
        <div className={styles.shelterbuddy}><img src={shelterbuddy} alt="" /></div>
        <div className={styles.flowers}>
          <img src={flower} alt="" />
          <img src={flower1} alt="" />
          <img src={flower2} alt="" />
          <img src={flower3} alt="" />
        </div>
        <div className={styles.hireguide}><img src={hireguide} alt="" /></div>
        <div className={styles.lupa}><img src={lupa} alt="" /></div>
      </div>
    </div>
  )
}