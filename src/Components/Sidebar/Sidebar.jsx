import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import t_series from '../../assets/T-Series.png'
import mrbeast from '../../assets/MrBeast.png'
import kids_diana_show from '../../assets/Kids Diana Show.png'
import vlad_and_niki from '../../assets/Vlad and Niki.png'
import wwe from '../../assets/WWE.png'
import like_nastya from '../../assets/Like Nastya.png'

const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="sortcut-links">

            <div className="side-link">
                <img src={home} alt="" /><p>Home</p>
            </div>

            <div className="side-link">
                <img src={game_icon} alt="" /><p>Gaming</p>
            </div>

            <div className="side-link">
                <img src={automobiles} alt="" /><p>Automobiles</p>
            </div>

            <div className="side-link">
                <img src={sports} alt="" /><p>Sports</p>
            </div>

            <div className="side-link">
                <img src={entertainment} alt="" /><p>Entertainment</p>
            </div>

            <div className="side-link">
                <img src={tech} alt="" /><p>Tecnology</p>
            </div>

            <div className="side-link">
                <img src={music} alt="" /><p>Music</p>
            </div>

            <div className="side-link">
                <img src={blogs} alt="" /><p>Blogs</p>
            </div>

            <div className="side-link">
                <img src={news} alt="" /><p>News</p>
            </div>

            <hr/>
        </div>
        <div className="subscribed-list">
            <h3>Subscribed</h3>

            <div className="side-link">
                <img src={mrbeast} alt="" /><p>MrBeast</p>
            </div>

            <div className="side-link">
                <img src={t_series} alt="" /><p>T-Series</p>
            </div>

            <div className="side-link">
                <img src={kids_diana_show} alt="" /><p>Kids Diana Show</p>
            </div>

            <div className="side-link">
                <img src={vlad_and_niki} alt="" /><p>Vlad and Niki</p>
            </div>

            <div className="side-link">
                <img src={like_nastya} alt="" /><p>Like Nastya</p>
            </div>

            <div className="side-link">
                <img src={wwe} alt="" /><p>WWE</p>
            </div>
            
        </div>
    </div>
  )
}

export default Sidebar