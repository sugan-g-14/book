import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Cart.scss";
import Box from "./Box";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'


const Cart = () =>{
    const navigate = useNavigate();
    const Cart = useSelector(state=>state.Cart.items);
    const total_count = useSelector(state=>state.Cart.totalCount);
    const total_amount = useSelector(state=>state.Cart.totalAmount);
    const handleSubmit = (e) =>{
        e.preventDefault();
        Swal.fire(
            'Order placed!',
            'BUY THINK GROW!',
            'success'
        )
        setTimeout(()=>{
            navigate('/Ecommerce');
        },2000)
    }
    return(
        <div className="Cart">
            <div className="Shopping">
                <div className="shopWid">
                    <div className="Shopping_cart">
                        <div className="ShopHead">
                            <h1>Shopping Cart</h1>
                            <h3>Items: {total_count}</h3>
                        </div>
                        <div className="line"></div>
                        <div className="ShopHead">
                            <p>Product Details</p>
                            <p>Total payment</p>
                        </div>
                        <div className="Box_contain">
                            {
                                (Cart).map((elem)=>
                                    <Box elem={elem} key={elem.id}/>
                                )
                            }
                        </div>
                    </div>
                    <div className="back" onClick={()=>{navigate('/Ecommerce')}}>
                        <HiOutlineArrowNarrowLeft/>
                        &nbsp;&nbsp;
                        <p>Continue shopping</p>
                    </div>
                </div>
            </div>
            <div className="Payment">
                <form onSubmit={(e)=>handleSubmit(e)}>

                    <div className="Order">
                        <h1>ORDER SUMMARY</h1>
                        <div className="Order_head">
                            <div className="row">
                                <h2>Item {total_count}</h2>
                                <h2>${total_amount}</h2>
                            </div>
                        <div className="line"></div>
                        </div>
                        <div className="field">
                            <label htmlFor="">Shipping</label>
                            <input required type="text" placeholder="Shipping Address" />
                        </div>
                        <div className="field">
                            <label htmlFor="">Payment</label>
                            <select name="" id="" required>
                                <option value="">Select</option>
                                <option value="Gpay">GPAY</option>
                                <option value="COD">Cash On Delivery</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="">Promo Code:</label>
                            <input required type="text" placeholder="Code"/>
                            <button onClick={(e)=>e.preventDefault()}>Apply Coupen</button>
                        </div>
                        <div className="line"></div>
                        <div className="Order_bottom">
                            <h1>Total Cost: ${total_amount}</h1>
                            <button type="submit">Checkout</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cart