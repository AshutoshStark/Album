import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import { UploadDropzone } from '@bytescale/upload-widget-react';
import axios from 'axios';
import { API_URL } from '../components/constants/constants';
import Textarea from '@mui/joy/Textarea';


const Uploads = () => {

  const [imageTitle,setTitle] = useState<any>();
  const [imageDes,setDecription] = useState<any>();

  const UploadData =async(imageUrl:any)=>{
    if(imageUrl){
      await axios.post(`${API_URL}/image/addImage`,{
        imageURL:imageUrl,
        imageTitle:imageTitle,
        imageDis:imageDes,
        view:0,
      })
    }
  }

  const options = {
    apiKey: `${process.env.REACT_APP_API_KEY}`, 
    maxFileCount: 1,
    showFinishButton: true, // Note: You must use 'onUpdate' if you set 'showFinishButton: false' (default).
    styles: {
      colors: {
        primary: "#377dff"
      }
    }
  };

  return (
   <Layout>
    <MainDiv>
      <Details>
      <div className="input-field">
        <input required={true} name="text" type="text" onChange={(e)=>setTitle(e.target.value)} />
        <label>Title</label>
      </div>
      <Textarea
        color="primary"
        disabled={false}
        minRows={2}
        placeholder="enter your description here"
        size="lg"
        onChange={(e)=>setDecription(e.target.value)}
        variant="solid"
      />
      </Details>
    <UploadDropzone options={options}
                  onUpdate={({ uploadedFiles }) => UploadData(uploadedFiles.map(x => x.fileUrl).join("\n"))}
                  onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}
                  width="90vw"
                  height="80vh" 
                  />
    </MainDiv>
   </Layout>
  )
}

const Details = styled.div`
margin: 2rem;
display: flex;
flex-direction: column;
 gap: 2rem;
  .input-field {
  position: relative;
  border-bottom: 2px solid #f0f424;
  margin: 15px 0;
}

.input-field label {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: #fff;
  font-size: 16px;
  pointer-events: none;
  transition: 0.15s ease;
}

.input-field input {
  width: 100%;
  height: 40px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  color: #fff;
}

.input-field input:focus ~ label,
.input-field input:valid ~ label {
  font-size: 0.8rem;
  top: 10px;
  transform: translateY(-120%);
}

`

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`

export default Uploads
