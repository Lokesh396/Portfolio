import { useState } from "react"

function Work() {
  const [item , setItem] = useState('all')
  return (
    <div className=" work-page d-flex1 justify-content-between">
      <h3>Portfolio</h3>
      <ul className="d-flex gap-3 fw-semibold">
        <li onClick={()=>setItem('all')} className={item === "all" && "active-link"}><a href="#">All</a></li>
        <li onClick={()=>setItem('web')} className={item === "web" && "active-link"}><a href="#">Web Development</a></li>
        <li onClick={()=>setItem('python')} className={item === "python" && "active-link"}><a href="#">Python</a></li>
      </ul>
    </div>
  )
}

export default Work