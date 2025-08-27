import React, { useRef } from 'react';
import ExecutiveCard from './ExecutiveCard';
import TeamGroup from './TeamGroup';
import JanneyTran from '../assets/team/2024-2025/janney-tran.jpeg';
import KyleLam from '../assets/team/2024-2025/kyle-lam.jpg';
import EdisonLiem from '../assets/team/2024-2025/edison-liem.png';
import KatelynTam from '../assets/team/2024-2025/katelyn-tam.png';
import SurachartCharaspitayakul from '../assets/team/2024-2025/surachart-charaspitayakul.jpg';
import YaminahMeka from '../assets/team/2024-2025/yaminah-meka.jpg';
import NikiAlizadehSaghati from '../assets/team/2024-2025/niki-alizadeh-saghati.jpg';
import JuhiShah from '../assets/team/2024-2025/juhi-shah.jpeg';
import EthanZhao from '../assets/team/2024-2025/ethan-zhao.png';
import JaceLu from '../assets/team/2024-2025/jace-lu.jpg';
import VincePersaud from '../assets/team/2024-2025/vince-persaud.jpg';
import IshikaMadanpotra from '../assets/team/2024-2025/ishika-madanpotra.jpg';
import PeetishaMangal from '../assets/team/2024-2025/peetisha-mangal.jpeg';
import PriscillaSimanjuntak from '../assets/team/2024-2025/priscilla-simanjuntak.png';
import RingoWu from '../assets/team/2024-2025/ringo-wu.jpg';
import HannahYang from '../assets/team/2024-2025/hannah-yang.jpg';

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
                    <ExecutiveCard name='Janney Tran' position='Co-President' profilePic={JanneyTran}  />
                    <ExecutiveCard name='Kyle Lam' position='Co-President' profilePic={KyleLam}  />
                </TeamGroup>
                <TeamGroup name='Vice Presidents' >
                    <ExecutiveCard name='Edison Liem' position='Vice President of Technology' profilePic={EdisonLiem}  />
                    <ExecutiveCard name='Katelyn Tam' position='Vice President of Research' profilePic={KatelynTam}  />
                    <ExecutiveCard name='Surachart Charaspitayakul' position='Vice President of Research' profilePic={SurachartCharaspitayakul}  />
                    <ExecutiveCard name='Yaminah Meka' position='Vice President of External Affairs' profilePic={YaminahMeka}  />
                    <ExecutiveCard name='Niki Alizadeh Saghati' position='Vice President of Operations and Finance' profilePic={NikiAlizadehSaghati}  />
                </TeamGroup>
                <TeamGroup name='Directors' >
                    <ExecutiveCard name='Juhi Shah' position='Director of Business Development' profilePic={JuhiShah}  />
                    <ExecutiveCard name='Ethan Zhao' position='Director of Business Development' profilePic={EthanZhao}  />
                    <ExecutiveCard name='Jace Lu' position='Director of Operations' profilePic={JaceLu}  />
                    <ExecutiveCard name='Vince Persaud' position='Director of Operations' profilePic={VincePersaud}  />
                    <ExecutiveCard name='Ishika Madanpotra' position='Director of Marketing' profilePic={IshikaMadanpotra}  />
                    <ExecutiveCard name='Peetisha Mangal' position='Director of Marketing' profilePic={PeetishaMangal}  />
                </TeamGroup>
                <TeamGroup name='Associates' >
                    <ExecutiveCard name='Priscilla Simanjuntak' position='Research Analyst' profilePic={PriscillaSimanjuntak}  />
                    <ExecutiveCard name='Ringo Wu' position='Financial Analyst' profilePic={RingoWu}  />
                    <ExecutiveCard name='Hannah Yang' position='Financial Analyst' profilePic={HannahYang}  />
                </TeamGroup>
            </div>
       </section>
    )
};

export default TeamSection;