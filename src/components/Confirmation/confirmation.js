import '../../index.css';
import { useSearchParams } from "react-router-dom";
import Navbar from '../NavBar/navbar';

function Confirmation() {
    const [ params ] = useSearchParams();
    const flag = params.get('pu')
    let putime = null;
    let pulocation = null;
    if (flag == 1) {
        putime = "Jan 26 (10:00-16:00)"
        pulocation = "Seattle Community Center"
    } else if (flag == 2) {
        putime = "Jan 27 (10:00-16:00)"
        pulocation = "Safeway Northgate"
    } else if (flag == 3) {
        putime = "Jan 28 (10:00-16:00)"
        pulocation = "Seattle Community Center"
    }

    return (
        <div className='confirmationbody'>
            <Navbar newList ={'null'}></Navbar>
            <div className='successImg center'></div>
            <p className='thankYouMessage'>Thank you for your order!</p>
            <p className='subMessage'>Order details were emailed to 123@gmail.com</p>
            <div className='pickupDetail'>
                <div className='pickupMessage'>Pickup <br></br>Details:</div>
                <div className='pickupConfirmation'>
                    <div className='puDate'><p>{putime}</p></div>
                    <div className='puLocation'><p>{pulocation}</p></div>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;