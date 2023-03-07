import '../../index.css';
import {useSearchParams } from "react-router-dom";
import { useNavigate} from 'react-router-dom'
import Navbar from '../NavBar/navbar';
import { useEffect, useState } from 'react';
 
function Cart() {
    const [ params ] = useSearchParams()
    const [totalPrice, setTotalPrice]  = useState()
    const [newList, setNewList]  = useState([])
    const [initList, setInitList]  = useState([])
    const [whichButton, setButton] = useState(0);
    const navigate = useNavigate()
    const confirmationCallBack  = () => {
        if(whichButton != 0 ){
            navigate(`/Confirmation?pu=${whichButton}`)
            setInitList([])
        }
    }
    useEffect(()=>{
        const initList = params.get('cartList')
        let newList =[]
        let cartList =[]
        let totalPrice = 0
        if(initList !== "'null'"  &&  initList !=='null'){
            cartList =  initList.replaceAll('*','&').split('?')
            cartList.forEach((item)=>{
                totalPrice = totalPrice + JSON.parse(item).price
                newList.push(JSON.parse(item))
            })
            setTotalPrice(totalPrice)
            setInitList(initList)
        }
        setNewList(newList)
    },[])
    return (
        <div className='cartbody row'>
                <Navbar newList={initList}></Navbar>
            <div className='column left'>
                <div className='pickup'>
                    <p className='cartTitle'>Pick-Up Location & Time</p>
                    <button onClick={() => setButton(1)} id="1" class="button-3 pickupButton" role="button">
                        <div>January 26 (10:00 - 16:00)</div>
                        <div>Seattle Community Center</div>
                    </button>
                    <button onClick={() => setButton(2)} id="2"class="button-3 pickupButton" role="button">
                        <div>January 27 (10:00 - 16:00)</div>
                        <div>Safeway Northgate</div>
                    </button>
                    <button onClick={() => setButton(3)} id="3" class="button-3 pickupButton" role="button">
                        <div>January 28 (10:00 - 16:00)</div>
                        <div>Seattle Community Center</div>
                    </button>
                </div>

                <div className='payment'>
                    <p className='cartTitle'>Payment Checkout</p>
                    <p className='paymentInfo'>Full Name</p>
                    <textarea></textarea>
                    <p className='paymentInfo'>Card Number</p>
                    <textarea></textarea>
                    <p className='paymentInfo'>Billing Address</p>
                    <textarea></textarea>
                    <p className='paymentInfo'>Expiration Date</p>
                    <textarea></textarea>
                    <p className='paymentInfo'>CVV</p>
                    <textarea></textarea>
                </div>
            </div>

            <div className='column right'>
                <div className='checkout_items'>
                    {
                    newList.map((item,index)=>(
                        <div className='cartItems'>              
                            <div className='cartItems1'>{item.productName}</div>
                            <div className='cartItems4'>×{item.count}</div>
                            <div className='cartItems2'>${item.price}</div>
                            <div className='cartItems3'>{item.productUnit}</div>
                        </div>

                    ))}
                    {
                        newList.length >0 ? 
                        <>
                            <div className='totalPriceTop'></div>
                            <div className='totalPrice'>
                                <div className='totalPriceLeft' > ToTal</div>
                                <div className='totalPriceRight'> ${totalPrice}</div>
                            </div>
                        </>:null

                    }
                </div>
                
                <div className='checkout'>
                    <button class="button-3" role="button" onClick={() => confirmationCallBack()}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;