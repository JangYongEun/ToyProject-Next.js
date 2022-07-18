import  styles from "./ImageBox.module.css";
import { propsType } from "../../../interfaces/PropsType";
import { defaultImage, errorImage } from "../../../etc/data";
export default function ImageBox({index,imageUrl}:propsType) {
  return ( 
    <div className={styles.div}>
    { 
      imageUrl === '' ? <img  className={styles.img}  src={defaultImage[index]} alt='face'></img> 
      : <img id="inputimage" className={styles.img} 
      src={imageUrl} 
      alt='changeImage'
      onError={({ currentTarget }) => 
      {
      currentTarget.onerror = null;
      currentTarget.src=errorImage;}
      }/>  
    }
  </div>
)
}
