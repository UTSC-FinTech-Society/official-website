import React, { useRef } from 'react';
import ExecutiveCard from './ExecutiveCard';
import TeamGroup from './TeamGroup';
import KyleLam from '../assets/team/kyle-lam.jpg';
import AarushiDoshi from '../assets/team/aarushi-doshi.jpeg';
import SiyaGrover from '../assets/team/siya-grover.jpg';
import EdisonLiem from '../assets/team/edison-liem.png';
import KatelynTam from '../assets/team/katelyn-tam.png';
import JanneyTran from '../assets/team/janney-tran.jpeg';
import SurachartCharaspitayakul from '../assets/team/surachart-charaspitayakul.jpg';
import SyedMuntasirTashdid from '../assets/team/syed-muntasir-tashdid.jpeg';
import SanskritiKanagala from '../assets/team/sanskriti-kanagala.jpg';
import AniketDuggal from '../assets/team/aniket-duggal.png';
import AddyArulkumar from '../assets/team/addy-arulkumar.png';
import OmarElOud from '../assets/team/omar-el-oud.jpeg';
import SiddhiSuranaMahaveer from '../assets/team/siddhi-surana-mahaveer.jpeg';
import AmanVishwanath from '../assets/team/aman-vishwanath.jpg';
import KatherineChen from '../assets/team/katherine-chen.jpeg';
import NikiAlizadehSaghati from '../assets/team/niki-alizadeh-saghati.jpg';
import JovitaAu from '../assets/team/jovita-au.jpg';
import BrianJiang from '../assets/team/brian-jiang.jpg';
import GabrielBarwicz from '../assets/team/gabriel-barwicz.jpeg';
import RobertFung from '../assets/team/robert-fung.png';
import AaravRoyChowdhury from '../assets/team/aarav-roy-chowdhury.jpg';
import BrianNg from '../assets/team/brian-ng.jpg';
import JessicaZhu from '../assets/team/jessica-zhu.jpeg';
import MorrisHo from '../assets/team/morris-ho.jpg';
import ArishaAhmed from '../assets/team/arisha-ahmed.jpg';
import AmnaTariq from '../assets/team/amna-tariq.png';
import SaumyaSoni from '../assets/team/saumya-soni.jpg';
import AaryaPrakash from '../assets/team/aarya-prakash.jpg';
import MuhammadIrtiza from '../assets/team/muhammad-irtiza.jpg';

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
                    <ExecutiveCard name='Kyle Lam' position='Co-President' profilePic={KyleLam}  />
                    <ExecutiveCard name='Aarushi Doshi' position='Co-President' profilePic={AarushiDoshi}  />
                </TeamGroup>
                <TeamGroup name='Vice Presidents' >
                
                    <ExecutiveCard name='Siya Grover' position='Vice President of Finance' profilePic={SiyaGrover}  />
                    <ExecutiveCard name='Edison Liem' position='Vice President of Technology' profilePic={EdisonLiem}  />
                    <ExecutiveCard name='Katelyn Tam' position='Vice President of Research' profilePic={KatelynTam}  />
                    <ExecutiveCard name='Janney Tran' position='Vice President of Operations' profilePic={JanneyTran}  />
                    <ExecutiveCard name='Surachart Charaspitayakul' position='Vice President of Research' profilePic={SurachartCharaspitayakul}  />
                    <ExecutiveCard name='Syed Muntasir Tashdid' position='Vice President of Business Development' profilePic={SyedMuntasirTashdid}  />
                    <ExecutiveCard name='Sanskriti Kanagala' position='Vice President of Marketing' profilePic={SanskritiKanagala}  />
                </TeamGroup>
                <TeamGroup name='Directors' >
                    <ExecutiveCard name='Aniket Duggal' position='Director of Operations' profilePic={AniketDuggal}  />
                    <ExecutiveCard name='Addy Arulkumar' position='Director of Operations' profilePic={AddyArulkumar}  />
                    <ExecutiveCard name='Omar El Oud' position='Director of Finance' profilePic={OmarElOud}  />
                    <ExecutiveCard name='Siddhi Surana Mahaveer' position='Director of Finance' profilePic={SiddhiSuranaMahaveer}  />
                    <ExecutiveCard name='Aman Vishwanath' position='Director of Business Development' profilePic={AmanVishwanath}  />
                    <ExecutiveCard name='Katherine Chen' position='Director of Finance' profilePic={KatherineChen}  />
                    <ExecutiveCard name='Niki Alizadeh Saghati' position='Director of Marketing' profilePic={NikiAlizadehSaghati}  />
                    <ExecutiveCard name='Jovita Au' position='Director of Marketing' profilePic={JovitaAu}  />
                </TeamGroup>
                <TeamGroup name='Research Team' >
                    <ExecutiveCard name='Brian Jiang' position='Analyst' profilePic={BrianJiang}  />
                    <ExecutiveCard name='Gabriel Barwicz' position='Analyst' profilePic={GabrielBarwicz}  />
                    <ExecutiveCard name='Robert Fung' position='Analyst' profilePic={RobertFung}  />
                    <ExecutiveCard name='Aarav Roy Chowdhury' position='Analyst' profilePic={AaravRoyChowdhury}  />
                    <ExecutiveCard name='Brian Ng' position='Analyst' profilePic={BrianNg}  />
                    <ExecutiveCard name='Jessica Zhu' position='Analyst' profilePic={JessicaZhu}  />
                </TeamGroup>
                <TeamGroup name='Associates' >
                    <ExecutiveCard name='Morris Ho' position='Developer' profilePic={MorrisHo}  />
                    <ExecutiveCard name='Arisha Ahmed' position='Operations Associate' profilePic={ArishaAhmed}  />
                    <ExecutiveCard name='Amna Tariq' position='Finance Associate' profilePic={AmnaTariq}  />
                    <ExecutiveCard name='Saumya Soni' position='Business Development Associate' profilePic={SaumyaSoni}  />
                    <ExecutiveCard name='Aarya Prakash' position='Developer' profilePic={AaryaPrakash}  />
                    <ExecutiveCard name='Muhammad Irtiza' position='Business Development Associate' profilePic={MuhammadIrtiza}  />
                </TeamGroup>
            </div>
       </section>
    )
};

export default TeamSection;