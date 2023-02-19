import '../../index.css';

function About() {
    return (
        <div className='aboutbody'>
            <div className='coverImage'></div>

            <div className='mission'>
                <p className='titleText'>Our Mission</p>
                <p className='bodyText missionDes'>Increase access to healthy and affordable produce in low-income, urban communities, focusing on our own local communities within King County in Washington State.</p>
                <button className='button-3'>explore</button>
            </div>

            <div className='impacts'>
                <div className='impact1'>
                    <div className='impact1img center'></div>
                    <div className='subtitleText'>Impact 1</div>
                    <p className='bodyText'>Impacting ...</p>
                </div>

                <div className='impact2'>
                    <div className='impact2img center'></div>
                    <div className='subtitleText'>Impact 2</div>
                    <p className='bodyText'>Impacting ...</p>
                </div>

                <div className='impact3'>
                    <div className='impact3img center'></div>
                    <div className='subtitleText'>Impact 3</div>
                    <p className='bodyText'>Impacting ...</p>
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
                <p><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></p>
            </div>
        </div>
    )
}

export default About;