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
            data.map(d => <SwiperSlide>
                <div className='text-center'>
                <p className='h6' style={{lineHeight:"10px"}}>{d.about.slice(0,20)}</p>
                <p className='h6' style={{lineHeight:"10px"}}>{d.about.slice(21,41)}</p>
                <p className='h6' style={{lineHeight:"10px"}}>{d.about.slice(42,62)}</p>
                <p className='h6' style={{lineHeight:"10px"}}>{d.about.slice(63,83)}</p>
                <p className='h6' style={{lineHeight:"10px"}}>{d.about.slice(84,104)}</p>
                <h3>{d.name}</h3>
                <h4>{d.email}</h4>
                </div>
                </SwiperSlide>)
        }
        
      </Swiper>
    </>
        </div>
    );
};

export default PeopleCommitnt;