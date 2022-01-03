import React,{useEffect} from 'react'
import './Feg.css';
import {ReactComponent as LeftBoxImage} from "./Group 90.svg"
import {ReactComponent as RightBoxImage} from "./Group 90.svg"
import ModalFgp from './ModalFgp'
import FegHeader from './FegHeader'
import Footer from "./../../components/Footer/Footer"
import background from "../../assets/images/footer.png"
import {ReactComponent as ClipBox} from "./../../assets/images/clipartbox.svg"
import {ReactComponent as Zig1} from "./../../assets/images/zigzag2.svg"
import {ReactComponent as Zig2} from "./../../assets/images/zigzag1.svg"

function FegComponent() {

    useEffect(() => {
        const accordion = document.getElementsByClassName('context-box');
        for(var i=0;i<accordion.length;i++){
            accordion[i].addEventListener('click',function(e){
                this.classList.toggle('active');
            })
        }
    },[]);

    return (
        <div>
          
          <FegHeader />
          <LeftBoxImage className='left-boxes' />
            <RightBoxImage className='right-boxes' />
            <Zig1 className="fgp-zig1"/>
            <Zig2 className="fgp-zig2"/>
            <ClipBox className="fgp-lined-box"/>
            <section>

 
                {/* <ModalFgp /> */}

                <div className="fgp-container">

                    <div className='content'>
                        <div className='fgp-titles'>
                            Freshers Guidence Program
                        </div>
                        <div className='fgp-text'>
                        The Freshers Guidance Program(FGP) is the first taste of Bitsian culture the incoming batch receives every year. This unique initiative aims to help our juniors seamlessly acclimatise to campus life and culture. The chief objective of this program is to facilitate lasting friendships and nurture our vibrant campus culture.As a part of this program, sophomores who volunteer are allotted mentees from the incoming class. These mentors help their juniors identify opportunities and provide insights into all our campus offers: academics, co-curricular, or extra-curricular activities.
                            {/* <br></br>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, */}
                        </div>
                        <div className='fgp-button-cover'>
                            <button className="fgp-button" data-toggle="modal" data-target="#fgp-modal">
                                Get Involved!
                            </button>
                        </div>
                    </div>

                    <div className='content'>
                        <div className='fgp-titles'>
                            Orientations
                        </div>
                        <div className='fgp-text'>
                        The fondest memories of campus will always be of the numerous clubs, assocs, sports teams, and departments, the people you meet there and the memories you make together. Our campus has a myriad number of bodies catering to every interest imaginable, from music to machine learning!

Keeping track of the 90+ bodies and finding your interests can be daunting. That’s why the Recreational Activities Forum(RAF) puts together a three-day orientation to introduce the incoming batch to all the organisations on campus.
                            {/* <br></br>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, */}
                        </div>
                        <div className='fgp-button-cover'>
                            <button className="fgp-button" data-toggle="modal" data-target="#fgp-modal">
                                Get Involved!
                            </button>
                        </div>
                    </div>

                    <div className='content'>
                        <div className='fgp-titles'>
                            Fervor
                        </div>
                        <div className='fgp-text'>
                        The SU organized a Fresher's week for the 2021 batch. The week was filled with game based events meant for interaction and relaxation as well club workshops and events. The week proved to be fruitful in creating bonds between the freshers.The SU organized a Fresher's week for the 2021 batch. The week was filled with game based events meant for interaction and relaxation as well club workshops and events. The week proved to be fruitful in creating bonds between the freshers.
                            {/* <br></br>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, */}
                        </div>
                        <div className='fgp-button-cover'>
                            <button className="fgp-button" data-toggle="modal" data-target="#fgp-modal">
                                Get Involved!
                            </button>
                        </div>
                    </div>

                    <div className='content'>
                        <div className='fgp-titles'>
                            Batch Representatives
                        </div>
                        <div className='fgp-text'>
                        The batch representatives of each batch are the point of contact for any and every concern students of their respective batch staying on campus may face. They will be in constant touch with the administration and SUC to ensure all pertaining issues are dealt with as quickly as possible. 
Below are the contacts of this year’s batch representatives. <br/><br/>
2019 Batch:<br/><br/>

Rahul Kishore P.H. - 2019B2AA1479H<br/>
Contact number : +91 91761 80515<br/><br/>

2020 Batch:<br/><br/>

Vinay Chandra   - 2020A3PS1780H<br/>
Contact number : +91 86867 77725<br/><br/>

Swastik Ranjan  - 2020A4PS0990H<br/>
Contact number : +91 80095 61901<br/>

                            {/* <br></br>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, */}
                        </div>
                        <div className='fgp-button-cover'>
                            <button className="fgp-button" data-toggle="modal" data-target="#fgp-modal">
                                Get Involved!
                            </button>
                        </div>
                    </div>

                    <div className='accordion'>
                        <div className='fgp-titles'>
                            FAQS
                        </div>
                        <div className='context-box'>
                            <div className="accordion-label">What does SU do?</div>
                            <div className='accordion-text'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                            </div>
                        </div>
                        <div className='context-box'>
                            <div className="accordion-label">How do I contribute to the tech?</div>
                            <div className='accordion-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,</div>
                        </div>
                        <div className='context-box'>
                            <div className="accordion-label">What are the pre-requisites to contest in SU elections?</div>
                            <div className='accordion-text'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                            </div>
                        </div>
                        <div className='context-box'>
                            <div className="accordion-label">How to get the customised merch?</div>
                            <div className='accordion-text'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer background={background}/>
        </div>
    )
}

export default FegComponent
