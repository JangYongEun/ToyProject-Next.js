import { propsType } from "../../../interfaces/PropsType";
import styles from "./Result.module.css"
import { sentence } from "../../../etc/data";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

const StyledMyDiv = styled.div`
background-color: ${(props) => props.color};
height: 30px;
width: 30px;
margin:2px;
`

export default function Result({index,data}:propsType) {


  const copyColor = (color:string):any => {
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = color;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  }
  

  return ( <>
    <div><p className={styles.p}>{sentence[index]}</p></div>
   {
    index === 0 && data ? (
    <div className={styles.div}>There are {data} people.</div>) : 
    index === 1 && data ? 
    (<div><p className={styles.p}>It is probably {data}.</p></div>): 
    index === 2 && data ?
    <div className={styles.colorBox}>{
     data.colors.map((color:any,i:number) => (
      <StyledMyDiv onClick={()=>copyColor(color.raw_hex)} color={color.raw_hex} data-tip={color.raw_hex} key={i}></StyledMyDiv>
    ))
     }
     <ReactTooltip />
     </div> :
    null
    }
    
    </>
)
}
