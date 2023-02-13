import '../../index.css';

function About() {
    return (
        <div className='mainbody'>
            <div className='coverImage'></div>

            <div className='mission'>
                <p>Our Mission</p>
                <p>Increase access to healthy and affordable produce in low-income, urban communities, focusing on our own local communities within King County in Washington State.</p>
                <button>explore</button>
            </div>

            <div className='impacts'>
                <div className='impact1'>
                    <div className='impact1img'></div>
                    <div className='impact1name'>Impact 1</div>
                    <p>Impacting ...</p>
                </div>
                <div className='impacts'>
                    <div className='impact2'>
                        <div className='impact2img'></div>
                        <div className='impact2name'>Impact 2</div>
                        <p>Impacting ...</p>
                    </div>
                </div>
                <div className='impacts'>
                    <div className='impact3'>
                        <div className='impact3img'></div>
                        <div className='impact3name'>Impact 3</div>
                        <p>Impacting ...</p>
                    </div>
                </div>
            </div>

            <div className='source'>
                <div>Where Does the Produce Come From?</div>
                <div>“Welcome to the farm outreach team! 
                    Our goal is to visit both private and public farms in King County to understand the needs of local farmers, test the quality of their produce, and ensure food security for our community. 
                    We will be helping these farmers post their produce on our website to connect them with consumers. We are excited to work with the local farming community and help support their efforts to provide fresh and high-quality food to our community.”
                </div>
                <div className='sourceImg'></div>
            </div>

            <div className='howToOder'>
                <div>How To Order</div>
                <div className='search'>
                    <div className='searchImg'></div>
                    <div className='orderText'>1. Search for produce</div>
                </div>
                <div className='compare'>
                    <div className='compareImg'></div>
                    <div className='orderText'>2. Compare & Select</div>
                </div>
                <div className='select'>
                    <div className='selectImg'></div>
                    <div className='orderText'>3. Select  times & location</div>
                </div>
                <div className='send'>
                    <div className='sendImg'></div>
                    <div className='orderText'>4. Send order</div>
                </div>
            </div>
        </div>
    )
}

export default About;