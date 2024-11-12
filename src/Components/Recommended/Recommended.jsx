import React from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'

const Recommended = () => {
  return (
    <div className='recommended'>
        <div className="side-video-list">
            <img src={thumbnail1} alt="" />
            <div className="vid-info">
                <h4>Woman Dancing on the Beach in Slow Motion</h4>
                <p>Slow Motion</p>
                <p>4.4K Views</p>
            </div>
        </div>

        <div className="side-video-list">
            <img src={thumbnail2} alt="" />
            <div className="vid-info">
                <h4>NEW 3.5 WINTER UPDATE IN PUBG MOBILE! (NEW REDMAGIC TABLET)</h4>
                <p>Wynnsanity</p>
                <p>4K Views</p>
            </div>
        </div>

        <div className="side-video-list">
            <img src={thumbnail3} alt="" />
            <div className="vid-info">
                <h4>මෙච්චර ලොකු Offer එකක් 😋 😁 | Meme React | Adam And VIshu</h4>
                <p>Adam & Vishu</p>
                <p>28K Views</p>
            </div>
        </div>

        <div className="side-video-list">
            <img src={thumbnail4} alt="" />
            <div className="vid-info">
                <h4>Create Online Bus Ticket Booking Website | React & Tailwind CSS</h4>
                <p>G-Tech Official</p>
                <p>6.1K Views</p>
            </div>
        </div>

        <div className="side-video-list">
            <img src={thumbnail5} alt="" />
            <div className="vid-info">
                <h4>Thaala | තාල - Maha Wassak | මහ වැස්සක්...</h4>
                <p>තාල - Thaala</p>
                <p>302K Views</p>
            </div>
        </div>

        <div className="side-video-list">
            <img src={thumbnail6} alt="" />
            <div className="vid-info">
                <h4>Desktop එක ලස්සන කරමු | Customize your desktop with this theme</h4>
                <p>CTECHLK</p>
                <p>75K Views</p>
            </div>
        </div>

        <div className="side-video-list">
            <img src={thumbnail7} alt="" />
            <div className="vid-info">
                <h4>New PC Build for Gaming / Streaming / Editing in Sri Lanka</h4>
                <p>Chanux Bro</p>
                <p>276K Views</p>
            </div>
        </div>

        <div className="side-video-list">
            <img src={thumbnail8} alt="" />
            <div className="vid-info">
                <h4>ASMR Programming - Animated Login Page - No Talking</h4>
                <p>AsmrProg</p>
                <p>1.7M Views</p>
            </div>
        </div>
    </div>
  )
}

export default Recommended