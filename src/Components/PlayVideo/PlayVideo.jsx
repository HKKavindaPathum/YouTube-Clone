import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import slow_motion from '../../assets/Slow Motion.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>Woman Dancing on the Beach in Slow Motion</h3>
        <div className="play-video-info">
            <p>4.4K Views &bull; 4 days ago</p>
            <div>
                <span><img src={like} alt="" />125</span>
                <span><img src={dislike} alt="" />2</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={slow_motion} alt="" />
            <div>
                <p>Slow Motion</p>
                <span>633K Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>🕒 Slow motion (commonly abbreviated as slo-mo or slow-mo) is an effect 
                in film-making whereby time appears to be slowed down.</p>
            <p>🕒 What is slow motion for? <br />
            Slow Motion is the name given to the slow motion effect, widely 
            used in cinema to create tension or amplify moments of climax. In addition,
             it is also used as a language and cinematographic tool by super cameras capable
              of recording images that our eyes cannot capture.</p>
            <hr />
            <h4>130 Comments</h4>

            <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Emma Johnson <span>3 hours ago</span></h3>
                    <p>This is so mesmerizing! The slow motion captures every graceful move.😍</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        <span>3</span>
                    </div>
                </div>
            </div>

            <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Michael Lee <span>1 day ago</span></h3>
                    <p>This feels like a dream! 🌅💫</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>320</span>
                        <img src={dislike} alt="" />
                        <span>5</span>
                    </div>
                </div>
            </div>

            <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Sophia Brown <span>2 days ago</span></h3>
                    <p>This gave me chills! The way each move flows with the waves in the background is stunning.💃</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>200</span>
                        <img src={dislike} alt="" />
                        <span>2</span>
                    </div>
                </div>
            </div>

            <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Daniel Kim <span>3 days ago</span></h3>
                    <p>The vibes are unreal!</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>145</span>
                        <img src={dislike} alt="" />
                        <span>1</span>
                    </div>
                </div>
            </div>

            <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Olivia Green <span>4 days ago</span></h3>
                    <p>Elegance meets the ocean.🌊💃</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>310</span>
                        <img src={dislike} alt="" />
                        <span>6</span>
                    </div>
                </div>
            </div>

            <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Lucas Walker <span>5 days ago</span></h3>
                    <p>So peaceful and beautiful. 🕊️</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>250</span>
                        <img src={dislike} alt="" />
                        <span>4</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default PlayVideo
