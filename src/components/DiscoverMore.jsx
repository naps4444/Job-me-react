import React from 'react'
import dmimg1 from '../assets/dmimg1.png'
import dmimg2 from '../assets/dmimg2.png'
import { Link } from 'react-router-dom';

const DiscoverMore = () => {
    function ButtonLink({ to, children }) {
        return <Link to={to}><button>{children}</button></Link>;
      }


  return (
    <div className='bghere'>
    <div className='container '>
        <div className='img-text ttwe'>
            <div className="dm-img mt-4">
                <img src={dmimg1} alt="people collaborating" width={400} />
            </div>
            <div className="dm-text mt-4">
                <h3>Find Millions of Job Opportunities Right for You!</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Duis sed ornare adipiscing sed platea integer habitant. Eros quis hac amet dignissim morbi vulputate eriva it commodo mi. Est mauris diam donec magna. Sit cras fringilla integer sed praesent urna amet. Donec suspendisse quis sed placerat lacus eupiii pretium duis semper est ac nec ultricie.</p>
                <div className="bit">
                <ButtonLink to='/joblisting'>
                <button className='btn text-white'>Discover More</button>
                </ButtonLink>
                </div>
                
                

            </div>
        </div>
        <div className='text-img'>
            <div className="dm-text">
                <h3>Looking to be one of the World’s Best Talents?</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Duis sed ornare adipiscing sed platea integer habitant. Eros quis hac amet dignissim morbi vulputate eriva it commodo mi. Est mauris diam donec magna. Sit cras fringilla integer sed praesent urna amet. Donec suspendisse quis sed placerat lacus eupiii pretium duis semper est ac nec ultricie.</p>
               
                <div className="bit">
                <ButtonLink to='/joblisting'>
                <button className='btn text-white'>Discover More</button>
                </ButtonLink>
                </div>
            </div>

            <div className="dm-img">
                <img src={dmimg2} alt="lady working on her pc" width={400} />
            </div>

        </div>
        
    </div>
    </div>
  )
}

export default DiscoverMore