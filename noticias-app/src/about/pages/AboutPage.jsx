import React from 'react';

import { AboutCard } from '../components/AboutCard';
import { FootBar } from '../../ui/components/FootBar';

export const AboutPage = () => {

  

  return (
    <>
        <div className='mb-5'>
            <div className='container d-flex justify-content-center animate__animated animate__zoomIn'>
              <AboutCard />
            </div>
        </div>

        <FootBar />
    </>
  )
}
