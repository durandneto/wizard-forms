import { Progress } from "reactstrap"

const ProgressHeader = () => (
    <div className="progress_container_top">
        <div className="progress_container_top_left">
            <Progress value={90}>10/21</Progress>
        </div>
        <div className="progress_container_top_right">
        <button type="button" className="forward">Submit form</button>
        </div>
    </div>
)


export default ProgressHeader