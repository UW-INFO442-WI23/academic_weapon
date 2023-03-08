import '../../index.css';
import Navbar from '../NavBar/navbar';
import Footer from '../Footer/footer';
import { useEffect, useState } from 'react';
import { useNavigate ,useSearchParams } from 'react-router-dom';


function About() {
    const [ params ] = useSearchParams()
    const [newList ,setNewList] = useState([])
    const [initList,setInitList] = useState([])
    return (
        <div className="aboutWhole">
            <div className='aboutbody'>
                <Navbar newList={newList}></Navbar>
                <img src='about.png' alt='Tomatos in a bowl' className='coverImage' width='1280px' height='594px'></img>

                <div className='mission'>
                    <p className='titleText'>Our Mission</p>
                    <p className='bodyText missionDes'>Increase access to healthy and affordable produce in low-income, urban communities, focusing on our own local communities within King County in Washington State.</p>
                    <button className='otherButtons'><a href="https://www.un.org/sustainabledevelopment/hunger/" target="_blank">Explore</a></button>
                </div>

                <div className='impacts'>
                    <div className='impact1'>
                        <img src='vegetables1.png' alt='a basket with vegetables' className='imgOne'></img>
                        <div className='subtitleText'>Impact 1</div>
                        <p className='impactBodyText'>Reduce your carbon footprint</p>
                    </div>

                    <div className='impact2'>
                        <img src='cabbage1.png' alt='a green cabbage' className='imgTwo'></img>
                        <div className='subtitleText'>Impact 2</div>
                        <p className='impactBodyText'>Support sustainability sourced, ethical farming practices </p>
                    </div>

                    <div className='impact3'>
                        <img src='farmer1.png' alt='a farmer in overalls' className='imgThree'></img>
                        <div className='subtitleText'>Impact 3</div>
                        <p className='impactBodyText'>Invest into local farmers and your community</p>
                    </div>
                </div>

                <div className='source'>
                    <p className='titleText'>Where Does the Produce Come From?</p>
                    <div className='sourceContainer'>
                        <div className='bodyText item1'>“Welcome to the farm outreach team! 
                            Our goal is to visit both private and public farms in King County to understand the needs of local farmers, test the quality of their produce, and ensure food security for our community. 
                            <br></br><br></br>We will be helping these farmers post their produce on our website to connect them with consumers. We are excited to work with the local farming community and help support their efforts to provide fresh and high-quality food to our community.”
                        </div>
                        <img src='source.png' alt='Purple grapes in hands' className='sourceCenter' width='383px' height='438px'></img>
                    </div>
                </div>

                <p className='titleText'>How To Order</p>
                <div className='howToOrder'>
                    <div className='search'>
                        <img src='searching1.png' alt='a web interface with a magnifying glass' className='searchImg'></img>
                        <div className='bodyText'>1. Search for produce</div>
                    </div>
                    <div className='compare'>
                        <img src='compare1.png' alt='a person choosing between A and B' className='compareImg'></img>
                        <div className='bodyText'>2. Compare & Select</div>
                    </div>
                    <div className='select'>
                        <img src='flag1.png' alt='a blue flag' className='selectImg'></img>
                        <div className='bodyText'>3. Select  times & location</div>
                    </div>
                    <div className='send'>
                        <img src='distribution1.png' alt='a truck with location icons' className='sendImg'></img>
                        <div className='bodyText'>4. Send order</div>
                    </div>
                </div>

                <div>
                    <p className='titleText'>Related Resources</p>
                    <div className='resourceVideos'>
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
            </div>
            <Footer></Footer>
        </div>

    )
}

export default About;