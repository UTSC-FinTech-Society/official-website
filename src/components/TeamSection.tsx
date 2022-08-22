import React, { useRef } from 'react';
import ExecutiveCard from './ExecutiveCard';
import TeamGroup from './TeamGroup';
import KatelynTam from '../assets/team/katelyn-tam.png';
import QueenieWong from "../assets/team/queenie-wong.png";
import CassieXu from "../assets/team/cassie-xu.png";
import EdisonLiem from '../assets/team/edison-liem.png';
import DarrenCheng from "../assets/team/darren-cheng.jpg";
import DionChi from "../assets/team/dion-chi.jpg";
import ElsonLeung from "../assets/team/elson-leung.jpg";
import GloriaWu from "../assets/team/gloria-wu.jpeg";
import JekyllChen from "../assets/team/jekyll-chen.jpeg";
import RyanMok from "../assets/team/ryan-mok.jpeg";
import AdrianaWong from "../assets/team/adriana-wong.png";

const TeamSection: React.FC = () => {
    const whiteBoardRef = useRef<HTMLDivElement>(null);

    window.addEventListener('scroll', () => {
        if (whiteBoardRef.current)  {
            whiteBoardRef.current.style.marginTop = -window.scrollY/5 + 'px';
        }
    });

    return (
       <section className='team-section-container'>
            <div className="white-board" ref={whiteBoardRef} >
                <TeamGroup name='President' >
                    <ExecutiveCard name='Katelyn Tam' position='Co-President' profilePic={KatelynTam}  />
                    <ExecutiveCard name='Queenie Wong' position='Co-President' profilePic={QueenieWong}  />
                </TeamGroup>
                <TeamGroup name='Vice Presidents' >
                    <ExecutiveCard name='Cassie Xu' position='Vice President of Operations' profilePic={CassieXu}  />
                    <ExecutiveCard name='Edison Liem' position='Vice President of Technology' profilePic={EdisonLiem}  />
                    <ExecutiveCard name='Darren Cheng' position='Vice President of External Affairs' profilePic={DarrenCheng}  />
                </TeamGroup>
                <TeamGroup name='Directors' >
                    <ExecutiveCard name='Dion Chi' position='Director of Operations' profilePic={DionChi}  />
                    <ExecutiveCard name='Elson Leung' position='Director of Operations' profilePic={ElsonLeung}  />
                    <ExecutiveCard name='Gloria Wu' position='Director of Finance' profilePic={GloriaWu}  />
                    <ExecutiveCard name='Jekyll Chen' position='Director of Marketing' profilePic={JekyllChen}  />
                    <ExecutiveCard name='Ryan Mok' position='Director of External Affairs' profilePic={RyanMok}  />
                    <ExecutiveCard name='Adriana Wong' position='Director of External Affairs' profilePic={AdrianaWong}  />
                </TeamGroup>
            </div>
       </section>
    )
};

export default TeamSection;