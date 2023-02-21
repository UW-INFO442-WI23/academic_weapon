import '../../index.css';

function Confirmation() {
    return (
        <div className='confirmationbody'>
            <div className='successImg center'></div>
            <p className='thankYouMessage'>Thank you for your order!</p>
            <p className='subMessage'>Order details were emailed to 123@gmail.com</p>
            <div className='pickupDetail'>
                <div className='pickupMessage'>Pickup <br></br>Details:</div>
                <div className='pickupConfirmation'>
                    <div className='puDate'><p>Jan 26</p></div>
                    <div className='puLocation'><p>Community Center</p></div>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;