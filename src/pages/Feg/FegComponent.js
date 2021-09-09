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

 
                <ModalFgp />

                <div className="fgp-container">

                    <div className='content'>
                        <div className='fgp-titles'>
                            FGP
                        </div>
                        <div className='fgp-text'>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                            <br></br>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
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
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                            <br></br>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
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
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                            <br></br>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
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
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                            <br></br>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
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
