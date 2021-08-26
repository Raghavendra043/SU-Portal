import prajwal from './prajwal.jpeg';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SocialmediaIcons from '../../components/Icons/SocialmediaIcons';


const Home = () => {

    return (
        <>
            <section>
                <h1>Lorem, ipsum dolor.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, libero!</p>
            </section>

            <section class="bubble">
                <h1>Lorem, ipsum dolor.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, libero!</p>
            </section>

            <section class="dark">
                <h1>Lorem, ipsum dolor.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, libero!</p>
            </section>

            <section class="red">
                <h1>Lorem, ipsum dolor.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, libero!</p>

                <div class="wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            class="shape-fill"
                        ></path>
                    </svg>
                </div>
            </section>

            <section>
                <h1>Lorem, ipsum dolor.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, libero!</p>
            </section>

            <section>
                <div className="container">
                    <div className="card">
                        <div className="imgBx">
                            <img src={prajwal} alt="" srcset="" />
                        </div>
                        <div className="content">
                            <div className="contentBx">
                                <h3>
                                    Krishna Prajwal 
                                    <br />
                                    <span>President</span>
                                </h3>
                            </div>
                            <ul className="sci">
                                <li style><a href="facebook.com"><FacebookIcon /></a></li>
                                <li><a href="instagram.com"><InstagramIcon /></a></li>
                                <li><a href="twitter.com"><TwitterIcon /></a></li>
                                <li><a href="linkedin.com"><LinkedInIcon /></a></li>
                            </ul>
                            <ul>
                                <SocialmediaIcons />
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );

}

export default Home;


/* section*6>(h1>{Curves})+p>lorem20 */
/* https://haikei.app */
/* https://www.shapedivider.app */