import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios, { AxiosError } from "axios";
import Logo from "../assets/utsc-fts-logo2.png";
import Loading from '../components/Loading';

const MembershipForm = () => {

    const modalFormRef = useRef<HTMLDivElement>(null);

    const [formData, setFormData] = useState({ first_name: '', last_name: '', student_number: '', email_address: '', year_of_study: '', program: '', campus: '' });

    const { first_name, last_name, student_number, email_address, year_of_study, program, campus } = formData;

    useEffect(() => {
        window.scrollTo(0, 0);
        const lsMembershipFormData = localStorage.getItem('membershipFormData');
        if (lsMembershipFormData) setFormData(JSON.parse(lsMembershipFormData));
    }, []);

    const [isSubmiting, setIsSubmiting] = useState(false);
    const [applicationStatus, setApplicationStatus] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(previousData => ({ ...previousData, [e.target.name]: e.target.value }));
        localStorage.setItem('membershipFormData', JSON.stringify(formData));
    };

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();

        if (first_name === '' || last_name === '' || student_number === '' || email_address === '' || year_of_study === '' || program === '' || campus === '') {
            alert('Please fill in all the required fields');
            return;
        }

        if (!(/^\w+([.-]?\w+)*@mail.utoronto.ca/.test(email_address))) {
            alert('Please provide a valid UofT email address');
            return;
        }

        try {
            setIsSubmiting(true);
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/members`, { ...formData, student_number: Number(student_number) });
            setApplicationStatus('success');
            setIsSubmiting(false);
            localStorage.removeItem('membershipFormData');
        } catch (error: AxiosError | any) {
            alert(error.response.data.error);
            setIsSubmiting(false);
        }
    }

    return (
        <div className="membership-form-page-container">
            {applicationStatus !== 'success' ? (
                <>
                    <div className="membership-form-container">
                        <header className="header-container">
                            <h1 className='title'>2022-2023 FTS Membership Application Form</h1>
                            <p>Joining our free membership will give you access to all of our events throughtout the year. As a member, you will get the opportunity to not only learn more about the Fintech industry but you will also meet lots of like-minded, talented and dedicated individuals.</p>
                            <p>Visit our instagram page <a href='https://www.instagram.com/utscfintech/' target='_blank'>@utscfintech</a> to learn more about our team and our upcoming events. We look forward to reading your responses and welcoming you to UTSC FinTech Society!!</p>
                        </header>
                        <form onSubmit={submitForm}>
                            <div className="input-container first_name">
                                <p className='description'>First Name <span>*</span></p>
                                <input type="text" name="first_name" id="first_name" value={first_name} onChange={onChange} placeholder='Your answer' autoComplete='off' required/>
                            </div>
                            <div className="input-container last_name">
                                <p className='description'>Last Name <span>*</span></p>
                                <input type="text" name="last_name" id="last_name" value={last_name} onChange={onChange} placeholder='Your answer' autoComplete='off' required/>
                            </div>
                            <div className="input-container student_number">
                                <p className='description'>UofT Student Number <span>*</span></p>
                                <input type="number" name="student_number" id="student_number" value={student_number} onChange={onChange} placeholder='Your answer' autoComplete='off' required/>
                            </div>
                            <div className="input-container email_address">
                                <p className='description'>UofT Email Address <span>*</span></p>
                                <input type="email" name="email_address" id="email_address" value={email_address} onChange={onChange} placeholder='Your answer' autoComplete='off' required/>
                            </div>
                            <div className="input-container year_of_study">
                                <p className='description'>Year of Study <span>*</span></p>
                                <div className="radio-btns-container">
                                    <div className="radio-btn-container">
                                        <input type="radio" name="year_of_study" id="1st" value='1st' checked={year_of_study === '1st'} onChange={onChange} required/>
                                        <label htmlFor="1st">1st</label>
                                    </div>
                                    <div className="radio-btn-container">
                                        <input type="radio" name="year_of_study" id="2nd" value='2nd' checked={year_of_study === '2nd'} onChange={onChange} />
                                        <label htmlFor="2nd">2nd</label>
                                    </div>
                                    <div className="radio-btn-container">
                                        <input type="radio" name="year_of_study" id="3rd" value='3rd' checked={year_of_study === '3rd'} onChange={onChange} />
                                        <label htmlFor="3rd">3rd</label>
                                    </div>
                                    <div className="radio-btn-container">
                                        <input type="radio" name="year_of_study" id="4th" value='4th' checked={year_of_study === '4th'} onChange={onChange}/>
                                        <label htmlFor="4th">4th</label>
                                    </div>
                                    <div className="radio-btn-container">
                                        <input type="radio" name="year_of_study" id="5th" value='5th' checked={year_of_study === '5th'} onChange={onChange}/>
                                        <label htmlFor="5th">5th</label>
                                    </div>
                                </div>
                            </div>
                            <div className="input-container program">
                                <p className='description'>Program of Study <span>*</span></p>
                                <input type="text" name="program" id="program" value={program} onChange={onChange} placeholder='Your answer' autoComplete='off' required/>
                            </div>
                            <div className="input-container campus">
                                <p className='description'>Campus <span>*</span></p>
                                <div className="radio-btns-container">
                                    <div className="radio-btn-container">
                                        <input type="radio" name="campus" id="UTSC" value='UTSC' checked={campus === 'UTSC'} onChange={onChange} required/>
                                        <label htmlFor="UTSC">UTSC</label>
                                    </div>
                                    <div className="radio-btn-container">
                                        <input type="radio" name="campus" id="UTSG" value='UTSG' checked={campus === 'UTSG'} onChange={onChange} />
                                        <label htmlFor="UTSG">UTSG</label>
                                    </div>
                                    <div className="radio-btn-container">
                                        <input type="radio" name="campus" id="UTM" value='UTM' checked={campus === 'UTM'} onChange={onChange} />
                                        <label htmlFor="UTM">UTM</label>
                                    </div>
                                </div>
                            </div>
                            <div className="button-container">
                                <button type="submit" className='submit-btn' onClick={submitForm}>{!isSubmiting ? 'Submit' : <Loading border='2px' color='white' size='18px' />}</button>
                                <p className='clear-form-btn' onClick={() => {if (modalFormRef.current) modalFormRef.current.style.display = 'flex'}} >Clear form</p>
                            </div>
                        </form>
                        <footer className='footer-container'>
                            <img src={Logo} alt="UTSC FTS LOGO" />
                        </footer>
                    </div>
                    <div className="modal-form-container" ref={modalFormRef} >
                        <div className="modal-form">
                            <h3 className='description'>Clear form?</h3>
                            <p>This will remove your answers from all questions and cannot be undone.</p>
                            <div className="button-container">
                                <button className="cancel-btn" onClick={() => {if (modalFormRef.current) modalFormRef.current.style.display = 'none'}} >Cancel</button>
                                <button type="submit" className="clear-form-btn" onClick={() => {
                                    if (modalFormRef.current) modalFormRef.current.style.display = 'none';
                                    setFormData({ first_name: '', last_name: '', student_number: '', email_address: '', year_of_study: '', program: '', campus: '' });
                                    localStorage.setItem('membershipFormData', JSON.stringify(formData));
                                }}>Clear form</button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="membership-form-container">
                    <div className="successful-application-message-container">
                        <h1 className='title'>Thank you</h1>
                        <p>We have received your application and will get back to you soon.</p>
                        <p>Meanwhile you can follow us on <a href='https://www.instagram.com/utscfintech/' target='_blank'>@utscfintech</a> for updates.</p>
                        <Link to='/' style={{textDecoration: 'none'}} ><button className='go-back-btn'>Go Back</button></Link>
                    </div>
                </div>
            )}
        </div>
    )
};

export default MembershipForm;