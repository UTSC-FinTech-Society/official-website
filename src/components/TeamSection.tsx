import React, { useRef } from 'react';
import ExecutiveCard from './ExecutiveCard';
import TeamGroup from './TeamGroup';
import KatelynTam from '../assets/team/katelyn-tam.png';
import QueenieWong from "../assets/team/queenie-wong.jpeg";
import CassieXu from "../assets/team/cassie-xu.png";
import DionChi from "../assets/team/dion-chi.jpg";
import EdisonLiem from '../assets/team/edison-liem.png';
import KyleLam from '../assets/team/kyle-lam.jpg';
import ElsonLeung from "../assets/team/elson-leung.jpg";
import MarioGarciaCampo from "../assets/team/mario-garcia-campo.jpeg";
import JanneyTran from "../assets/team/janney-tran.jpeg";
import KianTadjbakhsh from "../assets/team/kian-tadjbakhsh.jpg";
import LuisAntonioSalvador from "../assets/team/luis-antonio-salvador.jpeg";
import GloriaWu from "../assets/team/gloria-wu.jpeg";
import RyanMok from "../assets/team/ryan-mok.jpeg";
import AdrianaWong from "../assets/team/adriana-wong.png";
import KatherineChen from "../assets/team/katherine-chen.jpeg";
import JekyllChen from "../assets/team/jekyll-chen.jpeg";
import BrianJiang from "../assets/team/brian-jiang.jpg";
import JiajingZhao from "../assets/team/jiajing-zhao.jpg";
import SurachartCharaspitayakul from "../assets/team/surachart-charaspitayakul.jpg";
import SepehrGhiasi from "../assets/team/sepehr-ghiasi.jpg";
import DarrenCheng from "../assets/team/darren-cheng.jpg";
import MorrisHo from "../assets/team/morris-ho.jpg";
import KodyChik from "../assets/team/kody-chik.jpg";
import RobertFung from "../assets/team/robert-fung.png";
import AdityaKumar from "../assets/team/aditya-kumar.jpeg";

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
                <TeamGroup name='Presidents' >
                    <ExecutiveCard name='Katelyn Tam' position='Co-President' profilePic={KatelynTam}  />
                    <ExecutiveCard name='Queenie Wong' position='Co-President' profilePic={QueenieWong}  />
                </TeamGroup>
                <TeamGroup name='Vice Presidents' >
                    <ExecutiveCard name='Cassie Xu' position='Vice President of Operations' profilePic={CassieXu}  />
                    <ExecutiveCard name='Edison Liem' position='Vice President of Technology' profilePic={EdisonLiem}  />
                    <ExecutiveCard name='Dion Chi' position='Vice President of Research' profilePic={DionChi}  />
                    <ExecutiveCard name='Kyle Lam' position='Vice President of External Affairs' profilePic={KyleLam}  />
                </TeamGroup>
                <TeamGroup name='Directors' >
                    <ExecutiveCard name='Elson Leung' position='Director of Operations' profilePic={ElsonLeung}  />
                    <ExecutiveCard name='Mario Garcia Campo' position='Director of Operations' profilePic={MarioGarciaCampo}  />
                    <ExecutiveCard name='Janney Tran' position='Director of External Affairs' profilePic={JanneyTran}  />
                    <ExecutiveCard name='Kian Tadjbakhsh' position='Director of Marketing' profilePic={KianTadjbakhsh}  />
                    <ExecutiveCard name='Luis Antonio Salvador' position='Director of External Affairs' profilePic={LuisAntonioSalvador}  />
                    <ExecutiveCard name='Gloria Wu' position='Director of Finance' profilePic={GloriaWu}  />
                    <ExecutiveCard name='Ryan Mok' position='Director of Marketing' profilePic={RyanMok}  />
                    <ExecutiveCard name='Adriana Wong' position='Director of Marketing' profilePic={AdrianaWong}  />
                    <ExecutiveCard name='Katherine Chen' position='Director of Human Resources' profilePic={KatherineChen}  />
                    <ExecutiveCard name='Jekyll Chen' position='Director of Marketing' profilePic={JekyllChen}  />
                </TeamGroup>
                <TeamGroup name='Research Team' >
                    <ExecutiveCard name='Brian Jiang' position='Analyst' profilePic={BrianJiang}  />
                    <ExecutiveCard name='Jiajing Zhao' position='Analyst' profilePic={JiajingZhao}  />
                    <ExecutiveCard name='Surachart Charaspitayakul' position='Analyst' profilePic={SurachartCharaspitayakul}  />
                    <ExecutiveCard name='Sepehr Ghiasi' position='Analyst' profilePic={SepehrGhiasi}  />
                </TeamGroup>
                <TeamGroup name='Associates' >
                    <ExecutiveCard name='Darren Cheng' position='External Affairs Associate' profilePic={DarrenCheng}  />
                    <ExecutiveCard name='Morris Ho' position='Developer' profilePic={MorrisHo}  />
                    <ExecutiveCard name='Kody Chik' position='Developer' profilePic={KodyChik}  />
                    <ExecutiveCard name='Robert Fung' position='Finance Associate' profilePic={RobertFung}  />
                    <ExecutiveCard name='Aditya Kumar' position='Operations Associate' profilePic={AdityaKumar}  />
                </TeamGroup>
            </div>
       </section>
    )
};

export default TeamSection;