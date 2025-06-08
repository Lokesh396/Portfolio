import React from 'react'
import CertificationCard from './CertificationCard'
import { certificateObj } from '../utils/data';
const Certifications = () => {
    return (
        <section id='certifications' className='lg:mb-16'>
           <h5 className='text-left py-4 sticky top-0 bg-slate-900 text-xl font-semibold md:hidden text-white'>CERTIFICATIONS</h5>
         {certificateObj.map((certificate) => <CertificationCard key={certificate.id} certification={certificate}/>)}
     
        </section>
  )
}

export default Certifications