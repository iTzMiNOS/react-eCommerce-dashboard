import { singleCustomer } from '../../Components/SinglePage/SingleData'
import SinglePage from '../../Components/SinglePage/SinglePage'
import './SingleCustomer.css'



export default function SingleCustomer() {
    return (
        <div className="single-customer">
            <SinglePage {...singleCustomer} />
        </div>
    )
}
