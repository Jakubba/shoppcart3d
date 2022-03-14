import React from 'react';
import {useCart} from "react-use-cart";
import img from './images/18306643691645017971-128.png'

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,

    } = useCart();
    if(isEmpty) return <h1 className="text-center">Yours Shopping basket is Empty</h1>
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Cart ({totalUniqueItems}) Total items: ({totalItems})</h5>
                    <table className="table table-light table-hover m-0">
                        {items.map((item,index)=>{
                            return(
                                <tbody key={index}>
                                    <tr>
                                        <td>
                                            <img className={'img-cart'} src = {item.img} style ={{height: '6rem'}} />
                                        </td>
                                        <td className={'text-cart'}>{item.price}</td>
                                        <td className={'text-cart'}>{item.title}</td>
                                        <td className={'text-cart'}>Szt. {item.quantity}</td>
                                        <td className={'button-cart'}>
                                            <button className="btn-color btn btn-info ms-2 btn-mobile"
                                            onClick={()=> updateItemQuantity(item.id, item.quantity - 1 )}
                                            >-</button>
                                            <button className="btn-color btn btn-info ms-2 btn-mobile"
                                                    onClick={()=> updateItemQuantity(item.id, item.quantity + 1 )}
                                            >+</button>
                                            <button className="btn-color btn btn-danger ms-2 btn-mobile"
                                                    onClick={()=>removeItem(item.id)}>X</button>
                                        </td>
                                    </tr>
                                </tbody>
                                )
                        })}

                    </table>
                </div>
                <div className="col-auto ms-auto text-total-mobile">
                    <h2>Total Price: $ {cartTotal }</h2>
                </div>
                <div className="col-auto">
                    <button className="btn btn-danger m-2  btn-danger-mobile"
                            onClick={() => emptyCart()}
                    >Clear Shopping</button>
                    <button className="btn btn-primary m-2 btn-prim-mobile">Pay Now</button>

                </div>
            </div>
            
        </section>
    );
};

export default Cart;