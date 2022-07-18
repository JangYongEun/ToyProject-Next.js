import InputForm from '../src/component/InputForm/InputForm'
import  {propsType}  from '../interfaces/PropsType'
import { useState } from 'react'
import Result from '../src/component/ResultBox/Result'
import Clarifai from 'clarifai'
import ImageBox from '../src/component/ImageBox/ImageBox'
const Index  = ({index}:propsType) => {

  const API_KEY = process.env.NEXT_PUBLIC_APP_API_KEY
  const app = new Clarifai.App({
    apiKey: API_KEY
   });

  const [data,setData]=useState('');
  const [imageUrl,setImageUrl]= useState('');
  const urlChange = (url:string) => {
    setImageUrl(url)
    findPeople();

  }

  const findPeople = () => {
    app.models.predict(Clarifai.FACE_DETECT_MODEL,imageUrl).then(
      (response:any) => {
        const result = response.outputs[0].data.regions.length;
        setData(result)
      }
    )
  }

  return (
    <div>
      <ImageBox index={index} imageUrl={imageUrl}/>
      <Result index={index} data={data}/>
      <InputForm index={index} urlChange={urlChange}/>
    </div>
  )
}

export default Index
