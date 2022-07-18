import Input from "antd/lib/input/Input";
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import styles from "./InputForm.module.css"
import { propsType } from "../../../interfaces/PropsType";
import { getPath } from "../PageIndex/PageIndex";
import { useRouter } from "next/router";
import { useState } from "react";


 const InputForm = ({index,urlChange}:propsType,) => {
  const router = useRouter();
  const [url,setURL] = useState('');

  const urlChangeHandler = (e:any) => {
    setURL(e.currentTarget.value);
  }
  const onButtonSubmit = () => {
    urlChange(url)
  }
  
  return (
  <>
    <div className={styles.container}>
      <div onClick={()=>router.push(getPath(index-1))}><CaretLeftOutlined /> {getPath(index-1).substring(1).toUpperCase()}</div>
      <div><Input className={styles.input} type="search" placeholder="Enter the image URL" value={url} onChange={urlChangeHandler}></Input> </div>
      <div onClick={()=>router.push(getPath(index+1))} >{getPath(index+1).substring(1).toUpperCase()} <CaretRightOutlined /></div>
    </div>
    <div>
      <div className={index === 1 ? styles.object : index === 2 ? styles.color : styles.people} onClick={onButtonSubmit}>Search Button</div>
      <div className={index === 1 ? styles.objectLine : index === 2 ? styles.colorLine : styles.peopleLine}></div>
    </div>
  </>
  )
}
export default InputForm