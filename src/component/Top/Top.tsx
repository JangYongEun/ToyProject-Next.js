import { propsType } from "../../../interfaces/PropsType";
import Menu from "../Menu/Menu";
import styles from "./Top.module.css"
export default function Top({index}:propsType) {
  return ( <div>
    <p className={styles.head} >FIND & FICTURE</p>
    <Menu index={index}/>
    </div>
  );
}
