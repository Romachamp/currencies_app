import React, {useEffect, useState} from 'react';
import HomeImg from '../../assets/img/home.png';

function Home(props) {
    return (
        <div className="home">
            <div className="home-container">
                <div className="home-img">
                    <img src={HomeImg} alt=""/>
                </div>
                <div className="home-content">
                    <h1 className="home-title">Budget app</h1>
                    <div className="home-text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi, consequatur
                            deleniti distinctio ducimus esse in minus molestiae nihil omnis optio quod tempora ullam.
                            Error ipsum minima qui reiciendis rem.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;