import  {useState } from "react"
import { Progress } from "reactstrap"
import Review from "./Review"

const ProgressHeader = () => {

    const [isOpen, setModal] = useState(false); 
  
    const toggle = () => setModal(!isOpen);

    return (
    <div className="progress_container_top">
        <div className="progress_container_top_left">
            <p>Progress</p>
        </div>
        <div className="progress_container_top_middle">
            <Progress value={90}>10/21</Progress>
        </div>
        <div className="progress_container_top_right">
            <button onClick={toggle} type="button" className="forward">Submit form</button>
        </div>
        <Review isOpen={isOpen} toggle={toggle}/>
    </div>
)
}

export default ProgressHeader