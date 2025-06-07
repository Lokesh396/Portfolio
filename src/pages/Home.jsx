import React,{useRef} from 'react'
import Hero from '../Components/Sections/Hero'
import Header from '../Components/Layout/Header'
import Body from '../Components/Layout/Body'

const Home = () => {
  const mainRef = useRef(null);
  return (
    <div className='lg:flex lg:gap-4 lg:justify-between mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16'>
        <Header ref={mainRef}/>
        <Body ref={mainRef} />
    </div>
  )
}

export default Home