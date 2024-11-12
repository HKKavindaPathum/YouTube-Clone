import React from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import thumbnail9 from '../../assets/thumbnail9.png'
import thumbnail10 from '../../assets/thumbnail10.png'
import thumbnail11 from '../../assets/thumbnail11.png'
import thumbnail12 from '../../assets/thumbnail12.png'
import thumbnail13 from '../../assets/thumbnail13.png'
import thumbnail14 from '../../assets/thumbnail14.png'
import thumbnail15 from '../../assets/thumbnail15.png'
import thumbnail16 from '../../assets/thumbnail16.png'
import { Link } from 'react-router-dom'

const Feed = () => {
  return (
    <div className="feed">
        <Link to={`video/20/4521`} className='card'>
            <img src={thumbnail1} alt="" />
            <h2>Woman Dancing on the Beach in Slow Motion</h2>
            <h3>Slow Motion</h3>
            <p>4.4K views &bull; 4days ago </p>
        </Link>

        <div className='card'>
            <img src={thumbnail2} alt="" />
            <h2>NEW 3.5 WINTER UPDATE IN PUBG MOBILE! (NEW REDMAGIC TABLET)</h2>
            <h3>Wynnsanity</h3>
            <p>4K views &bull; 2days ago </p>
        </div>

        <div className='card'>
            <img src={thumbnail3} alt="" />
            <h2>මෙච්චර ලොකු Offer එකක් 😋 😁 | Meme React | Adam And VIshu</h2>
            <h3>Adam & Vishu</h3>
            <p>28K views &bull; 2days ago </p>
        </div>

        <div className='card'>
            <img src={thumbnail4} alt="" />
            <h2>Create Online Bus Ticket Booking Website | React & Tailwind CSS</h2>
            <h3>G-Tech Official</h3>
            <p>6.1K views &bull; 2days ago </p>
        </div>

        <div className='card'>
            <img src={thumbnail5} alt="" />
            <h2>Thaala | තාල - Maha Wassak | මහ වැස්සක්...</h2>
            <h3>තාල - Thaala</h3>
            <p>302K views &bull; 2days ago </p>
        </div>

        <div className='card'>
            <img src={thumbnail6} alt="" />
            <h2>Desktop එක ලස්සන කරමු | Customize your desktop with this theme</h2>
            <h3>CTECHLK</h3>
            <p>75K views &bull; 2days ago </p>
        </div>

        <div className='card'>
            <img src={thumbnail7} alt="" />
            <h2>New PC Build for Gaming / Streaming / Editing in Sri Lanka</h2>
            <h3>Chanux Bro</h3>
            <p>276K views &bull; 2days ago </p>
        </div>

        <div className='card'>
            <img src={thumbnail8} alt="" />
            <h2>ASMR Programming - Animated Login Page - No Talking</h2>
            <h3>AsmrProg</h3>
            <p>1.7M views &bull; 2days ago </p>
        </div>

        <div className='card'>
            <img src={thumbnail9} alt="" />
            <h2>Impossible Try Not To Laugh Challenge!</h2>
            <h3>Beast Reacts</h3>
            <p>4.5M views &bull; 2days ago </p>
        </div>

        <div className='card'>
            <img src={thumbnail10} alt="" />
            <h2>Raveen Tharuka - Himi Nathi Adareka (හිමි නැති ආදරේක) Official Music Video</h2>
            <h3>Raveen Tharuka</h3>
            <p>3.2M views &bull; 2days ago </p>
        </div>

        <div className='card'>
            <img src={thumbnail11} alt="" />
            <h2>Tech Sunday Episode 216</h2>
            <h3>pcguide lk</h3>
            <p>13K views &bull; 2days ago </p>
        </div>

        <div className='card'>
            <img src={thumbnail12} alt="" />
            <h2>Please stop using px for font-size.</h2>
            <h3>Coder Coder</h3>
            <p>233K views &bull; 2days ago </p>
        </div>

        <div className='card'>
            <img src={thumbnail13} alt="" />
            <h2>Customize Your VS Code Like a Pro 🔥</h2>
            <h3>Shreyas Sihasane</h3>
            <p>220K views &bull; 2days ago </p>
        </div>

        <div className='card'>
            <img src={thumbnail14} alt="" />
            <h2>Design a Glassmorphism Login Form Using HTML, and CSS Free Source Code</h2>
            <h3>AbdulDev</h3>
            <p>16K views &bull; 2days ago </p>
        </div>

        <div className='card'>
            <img src={thumbnail15} alt="" />
            <h2>Yuki Navaratne & Ravi Jay - Manali ( මනාලි ) ft. WePlus | Live at Hanthane ( හන්තානේ )</h2>
            <h3>WePlus</h3>
            <p>10M views &bull; 2days ago </p>
        </div>

        <div className='card'>
            <img src={thumbnail16} alt="" />
            <h2>Venom: The Last Dance | Trailer</h2>
            <h3>Marvel Entertainment</h3>
            <p>9.7M views &bull; 2days ago </p>
        </div>
        
    </div>
    
  )
}

export default Feed