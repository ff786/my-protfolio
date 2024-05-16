import React from 'react'
import NavBar from '../common/navBar'
import './IndexPage.css'
import Linkedin from '../../assets/Linkedin.png'

const IndexPage = () => {

    const SocialLinks = [
        {
            href: 'https://www.linkedin.com/in/farsith-fawzer-b7051120a/',
            imgSrc: '../../assets/Linkedin.png',
            alt: 'Linkedin',
        }
    ];

    const socialLink = ({href, imgSrc, alt}) => (
        <a href={href} className="bg-zinc-800 p-2 rounded-full">
            <img src={imgSrc} alt="Linkedin" className="w-6 h-6" />
        </a>
    );

    return (

        <div className="inxpg">
            <div>
                <div><label>Farsith Fawzer</label></div>
                <div><span>Software Engineering Undergraduate from Sri Lanka</span> </div>

                <NavBar />
                <div className="flex space-x-4 bg-black p4">
                    {SocialLinks.map((link, index) => (
                        <socialLink key={index} {...link} />
                    ))}
                </div>
            </div>
        </div>
    );

}

export default IndexPage;