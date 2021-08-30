import React from 'react'
import './SocialmediaIcons.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SocialmediaIcons = () => {
    return (
        <>
            <a href="instagram.com"><i class="fab fa-instagram fa-2x" /></a>
            <a href="facebook.com"><i class="fab fa-facebook fa-2x" /></a>
            <a href="twitter.com"><i class="fab fa-twitter fa-2x" /></a>
            <a href="linkedin.com"><i class="fab fa-linkedin fa-2x" /></a>
        </>
    )
}

export default SocialmediaIcons;