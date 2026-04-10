import React from 'react'
import heroImg from '../assets/IMG_0094.JPG'

export default function hero() {
    return (
        <div className="hero flex flex-col items-center justify-center 
        width-full">
            <div className="heroAbout">
                <h4>AVAILABLE FOR HIRE</h4>
                <div className="heroName">
                    <h1 className='first'>Cyprian</h1>
                    <h1 className='last'>Kiprop.</h1>
                </div>
                <h4 className='heroCreds'>Product Designer & Developer</h4>
                <p>
                    I design and build digital products that people actually enjoy using. Based in Nairobi — working with teams worldwide.
                </p>

                <div className="ctaBtns">
                    <button className='heroWork px-2 py-2 text-white border border-[#2E2E2E]
                    ml-4'>
                        See My Work
                    </button>
                    <button className='heroCv px-2 py-2 text-white border border-[#2E2E2E]
                    ml-6 mr-auto'>
                        Download CV
                    </button>
                </div>
            </div>

            <div className="heroCard">
                <div className="nestCard">
                    <img src={heroImg} alt="CyprianKiprop" 
                    className='heroImage'/>
                    <div className="nestDetails">
                        <h4 className='nestName'>Cyprian Kiprop</h4>
                        <h5 className='nestRegion'>Nairobi, Kenya</h5>
                    </div>
                    <div className="nestInfo">
                        <div className="nestExp">
                            <h3 className='nestStats'>4+</h3>
                            <h5 className='nestStatsDescp'>Years exp.</h5>
                        </div>
                        <div className="nestExp">
                            <h3 className='nestStats'>15</h3>
                            <h5 className='nestStatsDescp'>Projects Shipped.</h5>
                        </div>
                        <div className="nestExp">
                            <h3 className='nestStats'>12</h3>
                            <h5 className='nestStatsDescp'>happy Clients.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
