import '../../index.css';
import Navbar from '../NavBar/navbar';
import { useEffect, useState } from 'react';
import { useNavigate ,useSearchParams } from 'react-router-dom';

function About() {
    const [ params ] = useSearchParams()
    const [newList ,setNewList] = useState([])
    const [initList,setInitList] = useState([])
    return (
        <div className='aboutbody'>
             <Navbar newList={newList}></Navbar>
            <div className='coverImage'></div>

            <div className='mission'>
                <p className='titleText'>Our Mission</p>
                <p className='bodyText missionDes'>Increase access to healthy and affordable produce in low-income, urban communities, focusing on our own local communities within King County in Washington State.</p>
                <button className='button-3'><a href="https://www.un.org/sustainabledevelopment/hunger/">Explore</a></button>
            </div>

            <div className='impacts'>
                <div className='impact1'>
                    <div className='impact1img center'></div>
                    <div className='subtitleText'>Impact 1</div>
                    <p className='bodyText'>Reduce your carbon footprint</p>
                </div>

                <div className='impact2'>
                    <div className='impact2img center'></div>
                    <div className='subtitleText'>Impact 2</div>
                    <p className='bodyText'>Support sustainability sourced, ethical farming practices </p>
                </div>

                <div className='impact3'>
                    <div className='impact3img center'></div>
                    <div className='subtitleText'>Impact 3</div>
                    <p className='bodyText'>Invest into local farmers and your community</p>
                </div>
            </div>

            <div className='source'>
                <p className='titleText'>Where Does the Produce Come From?</p>
                <div className='sourceContainer'>
                    <div className='bodyText item1'>“Welcome to the farm outreach team! 
                        Our goal is to visit both private and public farms in King County to understand the needs of local farmers, test the quality of their produce, and ensure food security for our community. 
                        <br></br><br></br>We will be helping these farmers post their produce on our website to connect them with consumers. We are excited to work with the local farming community and help support their efforts to provide fresh and high-quality food to our community.”
                    </div>
                    <div className='sourceImg'></div>
                </div>
            </div>

            <p className='titleText'>How To Order</p>
            <div className='howToOrder'>
                <div className='search'>
                    <div className='searchImg'></div>
                    <div className='bodyText'>1. Search for produce</div>
                </div>
                <div className='compare'>
                    <div className='compareImg'></div>
                    <div className='bodyText'>2. Compare & Select</div>
                </div>
                <div className='select'>
                    <div className='selectImg'></div>
                    <div className='bodyText'>3. Select  times & location</div>
                </div>
                <div className='send'>
                    <div className='sendImg'></div>
                    <div className='bodyText'>4. Send order</div>
                </div>
            </div>

            <div>
                <p className='titleText'>Related Resources</p>
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/98UZ-Sltr9Y" title="The many benefits of local food">
                </iframe>
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/4doYb2d2sTg" title="How to make produce last longer">
                </iframe>
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/0VAIHZ-54dc" title="Food Insecurity in the US">
                </iframe>
            </div>
        </div>
    )
}

export default About;