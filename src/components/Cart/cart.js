import '../../index.css';

function Cart() {
    return (
        <div className='cartbody row'>
            <div className='column left'>
                <div className='pickup'>
                    <p>Pick-Up Location & Time</p>
                    <button class="button-3" role="button">location and time 1</button>
                    <button class="button-3" role="button">location and time 2</button>
                    <button class="button-3" role="button">location and time 3</button>
                </div>

                <div className='payment'>
                    <p>Payment Checkout</p>
                    <p>Full Name</p>
                    <textarea></textarea>
                    <p>Card Number</p>
                    <textarea></textarea>
                    <p>Billing Address</p>
                    <textarea></textarea>
                    <p>Expiration Date</p>
                    <textarea></textarea>
                    <p>CVV</p>
                    <textarea></textarea>
                </div>
            </div>

            <div className='column right'>
                <div className='cartItems'>
                    <div>
                        <p>data</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;

// <!-- HTML !-->
// <button class="button-3" role="button">Button 3</button>