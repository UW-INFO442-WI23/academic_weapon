import '../../index.css';

function Cart() {
    return (
        <div className='cartbody row'>
            <div className='column left'>
                <div className='pickup'>
                    <p className='cartTitle'>Pick-Up Location & Time</p>
                    <button class="button-3 pickupButton" role="button">
                        <div>January 26 (10:00 - 16:00)</div>
                        <div>Seattle Community Center</div>
                    </button>
                    <button class="button-3 pickupButton" role="button">
                        <div>January 27 (10:00 - 16:00)</div>
                        <div>Safeway Northgate</div>
                    </button>
                    <button class="button-3 pickupButton" role="button">
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
                <div className='cartItems'>
                    <div>
                        <p>data</p>
                    </div>
                </div>

                <div className='checkout'>
                    <button class="button-3" role="button">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;

// <!-- HTML !-->
// <button class="button-3" role="button">Button 3</button>