import { singleOrder } from '../../Components/SinglePage/SingleData'
import SinglePage from '../../Components/SinglePage/SinglePage'
import './SingleOrder.css'



export default function SingleOrder() {
    return (
        <div className="single-order">
            <SinglePage {...singleOrder}/>
        </div>
    )
}
