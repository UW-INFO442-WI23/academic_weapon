import cart from '../../cart.svg';
function Navbar() {
    return (
        <div className='topButton'>
        <div className='tittle'>      
        <text  className='fontNo'>Nourish</text>
        <text className='fontNo' style={{color:'black'}}>King</text>        
        </div>
        <div className='rTittle'> <text className='fontTop'>About us</text></div>
        <div className='rTittle'> <text className='fontTop' >Shopping</text></div>
        <div className='cart' ><img  className='cartImg' src={cart} width='30px' height= '30px' ></img></div>
        </div>
    )
}

export default Navbar;