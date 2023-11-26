import { Link } from "react-router-dom"
import Title from "../components/Title"


const PageNotFound =()=> {
  return (
    <>
    <Title title="Page Not Found" />
    <div>Page Not Found</div>
    <Link to='/'> Home</Link>
    </>
  )
}

export default PageNotFound