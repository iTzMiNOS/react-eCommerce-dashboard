import { singleUser } from '../../Components/SinglePage/SingleData'
import SinglePage from '../../Components/SinglePage/SinglePage'
import './SingleUser.css'



export default function SingleUser() {
    return (
        <div className="single-user">
            <SinglePage {...singleUser} />
        </div>
    )
}
