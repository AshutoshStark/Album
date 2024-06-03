import React, { useEffect } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'
import { useAppDispatch, useAppSelector } from '../components/Redux/hooks/hooks'
import { image } from '../components/Redux/slice/ImageCall'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom'

const Home = () => {

  const dispatch = useAppDispatch()
  const data = useAppSelector(state=>state.ImageCall.data)

  useEffect(()=>{
    dispatch(image())
  },[])

  return (
    <Layout>
      <MainDiv>
        <div className="IntroBox">
          <div className="heading">
            ALBUM
          </div>
          <div className="title">
            An Album for Creators and Illustrators to share there Creation
          </div>
          <div className="description">
            This is an open source Album for the Grafix designers to share there art and spread colors in world 
            <Button>
              <Link to={'/upload'}>
                <span>Upload an image</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="ImageBox">
            <div className="image">
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {data?.imageUploads?.map((item:any,index:any)=>(    
            <SwiperSlide>
              <div className="images">
                <img src={item.imageURL} alt="can't load image" />
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
            </div>
          <div className="title"></div>
          <div className="description"></div>
        </div>
      </MainDiv>
    </Layout>
  )
}

const Button = styled.div`
position: relative;
margin: 4rem 0 0 0rem;
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
position: relative;

.IntroBox{
width: 60vw;
height: 70vh;
background: linear-gradient(to left, #00000011 1%,#000000ea 45%);
position: absolute;
.heading{
  font-size: 5rem;
  font-weight: 500;
  color: #b9e202;
  margin: 1rem;
  @media screen and (max-width: 900px) {
    font-size: 3rem;
  }
}
.title{
  color: #b9e202;
  font-size: 1.5rem;
  margin: 1rem;
  @media screen and (max-width: 900px) {
    font-size: 1rem;
  }
}
.description{
  color: #f5f5f5;
  margin: 1rem;
}
}
.ImageBox{
  width: 100vw;
  height: 70vh;
  position: absolute;
  z-index: -1;
  .image{
    width: 100vw;
    height: 70vh;
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 40vw;
  height: 70vh;
  object-fit: cover;
  margin: 0 0 0 30rem;
  @media screen and (max-width: 900px) {
    margin: 0 0 0 3rem;
    width: 100vw;
  }
}

 }
}
`

export default Home
