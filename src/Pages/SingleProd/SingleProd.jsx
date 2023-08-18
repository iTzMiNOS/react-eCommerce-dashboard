import { singleProduct } from '../../Components/SinglePage/SingleData'
import SinglePage from '../../Components/SinglePage/SinglePage'
import './SingleProd.css'



export default function SingleProd() {
    return (
        <div className="single-prod">
            <SinglePage {...singleProduct}/>
        </div>
    )
}
