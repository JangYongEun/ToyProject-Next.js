import Link from "next/link";
import { propsType } from "../../../interfaces/PropsType";
import styles from "./Menu.module.css"
export default function Menu({index}:propsType) {
  return ( 
    <nav className={index === 1 ? styles.object : index === 2 ? styles.color : styles.people}>
      <Link  href="/people">👨‍👩‍👧PEOPLE</Link>
      <Link  href="/object">⌚OBJECT</Link>
      <Link  href="/color">🎨COLOR</Link>
    </nav>
)
}
