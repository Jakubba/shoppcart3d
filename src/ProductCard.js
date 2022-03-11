import React from "react";
import { useCart} from "react-use-cart";

const ProductCard = (props) => {
    const { addItem } = useCart();
    return(
        <div className="col-6 row-col-xs-6 col-md-6 col-lg-3 col-xl-3 mx-0 mb-4 mobile-catalog-card">
            <div className="card p-0 overflow-hidden h-100 shadow mobile-card">
                <img className="card-img-top mobile-card-img" src={props.img}/>
                <div className="card-body mobile-body">
                    <h5 className="card-title mobile-text-tittle">{props.title}</h5>
                    <h5 className="card-text mobile-text">{props.description}</h5>
                    <h5 className="card-text mobile-text">$ {props.price}</h5>
                    <button className="btn btn-success mobile-button" onClick={()=> addItem(props.item)}>BUY</button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;