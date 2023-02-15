import React from 'react';
import Lottie from 'react-lottie';
import animationData from './113096-coming-soon.json'


const Blog = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <section className="background-radial-gradient overflow-hidden">
            <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                <div className="row gx-lg-5 align-items-center mb-5">
                <Lottie options={defaultOptions}
           
              
             />
                </div >
            </div >
        </section >
    );
};

export default Blog;