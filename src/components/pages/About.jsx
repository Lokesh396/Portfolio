import reactImg from '../../assets/react.svg'

function About() {
  return (
    <div style={{backgroundColor:"white"}} className='p-3 mt-3 rounded'>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, aliquid libero autem temporibus et aspernatur molestiae beatae fugit nesciunt ipsam maiores quibusdam laborum harum, omnis adipisci repudiandae, quaerat provident at!</p>
      <img src={reactImg} alt="home" />
    </div>
  )
}

export default About