import React,{useEffect} from 'react'
import './Feg.css';
import {ReactComponent as LeftBoxImage} from "./Group 89.svg"
import {ReactComponent as RightBoxImage} from "./Group 90.svg"
import ModalFgp from './ModalFgp'

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
            <section>
                <ModalFgp />
                <LeftBoxImage className='left-boxes' />
                <RightBoxImage className='right-boxes' />
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
        </div>
    )
}

export default FegComponent
