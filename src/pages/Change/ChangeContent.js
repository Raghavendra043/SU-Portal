/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fade } from "react-awesome-reveal";
import './ChangeContent.css'


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
        marginBottom: '20vh',
    },
}));

export default function () {
    const classes = useStyles();

    return (
        <div className={classes.root} id="change-content">
            <section className="change-section">
                <Fade direction="up" delay={300} triggerOnce>
                    <h2 className="change-content-heading"><span>SUC</span> BPHC</h2>

                </Fade>
                <div className="main">
                    <Fade direction="left" delay={300} triggerOnce>
                        <div className="change-text">
                            <h5>Make A Change</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ab qui voluptatem sapiente, mollitia beatae, voluptatibus iste illum architecto sed ipsum earum minus molestias reiciendis laborum veritatis dignissimos nostrum. Tempora! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, voluptatum maiores veritatis omnis illo incidunt vitae quaerat, sed vel, nobis eos deleniti at adipisci ea? Totam sed facilis quas. Quo explicabo numquam provident blanditiis! Assumenda suscipit minima dolorem repudiandae labore!</p>
                        </div>
                    </Fade>
                    <div className = "vertical" />
                    <Fade direction="right" delay={300} triggerOnce>
                        <div className="change-text">
                            <ul className="list-items">
                                <li>Student Administrative Bodies</li>
                                <li>Elections</li>
                                <li>Liberation</li>
                                <li>Have Your Say</li>
                                <li>Leadership Race</li>
                                <li>Your Elected Leaders</li>
                                <li>Donate For A Cause</li>
                            </ul>
                        </div>
                    </Fade>
                </div>
            </section>
        </div>
    );
}
