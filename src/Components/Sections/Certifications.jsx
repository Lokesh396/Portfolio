import React from 'react'
import CertificationCard from './CertificationCard'
import { certificateObj } from '../utils/data';
const Certifications = () => {
    return (
        <section id='certifications' className='scroll-mt-16 md:mb-24 lg:mb-10 lg:scroll-mt-24'>
           <h5 className='text-left mb-2 py-4 sticky top-0 bg-slate-900 text-white text-base font-semibold'>CERTIFICATES</h5>
         {certificateObj.map((certificate) => <CertificationCard key={certificate.id} certification={certificate}/>)}
     
        </section>
  )
}

export default Certifications