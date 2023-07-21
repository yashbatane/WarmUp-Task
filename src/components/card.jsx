import React from "react";
import './card.css'
import { AiOutlineStar } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi'
import images from '../download.png'

export const Card = () => {
    return (

        <div className="main-container">
            <div className="Card-container">
                <div className="Card-container1">
                    <img className="Card-img" src={images} alt="Card_Image" />
                    <div className="colors">
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "-10px" }}>
                            <h3 style={{ opacity: 0.5 }}>4.5</h3>
                            <AiOutlineStar />
                        </div>
                        <h3 className="colors">Ratings</h3>
                    </div>
                </div>
                <div className="inner-container">
                    <h1 className="card-name">John Deo,<span style={{ opacity: 0.5, marginRight: "-7px" }}>5</span> <h3 className="inner-card-name">Yrs. Exp.</h3></h1>
                    <h3 className="colors">Details</h3>
                    <p>I am Interesetd in Science and Technology</p>
                    <p>Lorem ipsum dolor sit .</p>
                    <div className="btns">
                        <button>Science</button>
                        <button>Maths</button>
                        <button>Hindi</button>
                        <button style={{ border: "none" }}>+</button>
                    </div>
                </div>
            </div>

            <div>
                <div className="Awards">
                    <div className="first"><AiOutlineStar /></div>
                    <div className="second"><AiOutlineStar /></div>
                    <div className="third"><AiOutlineStar /></div>
                    <div className="fourth"><AiOutlineStar /></div>
                   
                </div>
                <div className="colors" style={{textAlign:"center"}}><p style={{marginTop:"-5px"}}>Awards</p></div>
            </div>

            <div className="profile-button">
                <button><BiEditAlt /> Profile</button>
            </div>
        </div>


    )
}