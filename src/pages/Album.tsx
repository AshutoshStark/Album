import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'
import { useAppDispatch, useAppSelector } from '../components/Redux/hooks/hooks'
import { image } from '../components/Redux/slice/ImageCall'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../components/constants/constants'
import { GrFormView } from "react-icons/gr";

const Album = () => {

  const [views,setView] = useState<any>();
  const dispatch = useAppDispatch()
  const data = useAppSelector(state=>state.ImageCall.data)

  const CountViews=async(ID:any,viewdata:Number)=>{
    if(ID){
      await axios.put(`${API_URL}/image/getView?image_id=${ID}`,{
        view:viewdata
      })
  }
}

  useEffect(()=>{
    dispatch(image())
  },[])

  return (
    <Layout>
    <MainDiv>
      {data?.imageUploads?.map((item:any,index:any)=>(
      <Link to={`/download/${item._id}`} onClick={(e)=>(CountViews(item._id,item.view+1))}>
      <Container>
      <div className="details">
        {item.imageTitle} 
        <div className='view'>
        <GrFormView/> {item.view}
        </div>
      </div>
      <div className="image" >
        <img src={item?.imageURL} alt="" />
      </div>
      </Container>
      </Link>
      ))}
    </MainDiv>
   </Layout>
  )
}

const Container = styled.div`
  .image img{
    height: 70vh;
    width: auto;
    @media screen and (max-width: 900px) {
      width: 70vw;
      height: auto;
    }
  }
  .details{
    color: #f5f5f5f5;
    margin: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .view{
      display: flex;
      align-items: center;
      color: #4e4d4df5;
    }
    @media screen and (max-width: 900px) {
      font-size: 1rem;
    }
  }
  `

const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 1rem;
gap: 2rem;
a{
  text-decoration: none;
}

`
export default Album
