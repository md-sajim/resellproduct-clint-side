import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./PeopleCommit.css";

// import required modules
import { EffectCards } from "swiper";
import { useQuery } from '@tanstack/react-query';

const PeopleCommitnt = () => {
    const {data=[]} = useQuery({
        queryKey:["commints"],
        queryFn:async()=>{
            const res = await fetch('http://localhost:5000/commints');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='my-5'>
            <h1 className='text-center mb-3'>People Like and Commint</h1>
            <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {
            data.map(d => <SwiperSlide>Slide 1</SwiperSlide>)
        }
        
      </Swiper>
    </>
        </div>
    );
};

export default PeopleCommitnt;