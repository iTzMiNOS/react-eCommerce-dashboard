import { singleInteg } from '../../Components/SinglePage/SingleData'
import SinglePage from '../../Components/SinglePage/SinglePage'
import './SingleIntegration.css'



export default function SingleIntegration() {
    return (
        <div className="single-integ">
            <SinglePage {...singleInteg}/>
        </div>
    )
}
