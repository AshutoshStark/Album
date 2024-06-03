import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../components/constants/constants'
import { saveAs } from 'file-saver'

const Download = () => {

    const ID = useParams().id
    const [data,setData] = useState<any>();

    const getDownload =async()=>{
        await axios.get(`${API_URL}/image/getImages?image_id=${ID}`).then((response)=>{
            setData(response.data.imageUploads )
        })
    }

    const downloadImage = () => {
        saveAs('image_url', 'image.jpg') // Put your image URL here.
      }

    useEffect(()=>{
        getDownload()
    },[])

    console.log(data)

  return (
    <Layout>
        <MainDiv>
            <img src={data?.imageURL} alt="" />
            <h1>{data?.imageTitle}</h1>
            <p>{data?.imageDis}</p>
            <p>Views : {data?.view}</p>
            <Button>
              <Link to={''} onClick={downloadImage} > 
                <span>Upload an image</span>
              </Link>
            </Button>
        </MainDiv>
    </Layout>
  )
}

const Button = styled.div`
position: relative;
  a {
  cursor: pointer;
  font-weight: 700;
  font-family: Helvetica,"sans-serif";
  transition: all .2s;
  padding: 10px 20px;
  border-radius: 100px;
  background: #cfef00;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  font-size: 15px;
  text-decoration: none;
  color: #070807db;
  width: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 900px) {
    font-size: 0.7rem;
    width: 15vw;
  }
}

a:hover {
  background: #c4e201;
}

a:active {
  transform: scale(0.95);
}


`

const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;

    img{
        border-radius: 15px;
        width: auto;
        height: 60vh;
        @media screen and (max-width: 900px) {
            width:80vw;
            height: auto;
        }
    }
    h1{
        color: #f5f5f5f5;
    }
    p{
        color:#f5f5f5f5
    }
`

export default Download
