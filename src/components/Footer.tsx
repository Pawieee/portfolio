import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DataCampIcon from '../assets/images/datacamp.png';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://https://github.com/Pawieee" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/pawieee/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://www.datacamp.com/portfolio/pawieee" target="_blank" rel="noreferrer"><img src={DataCampIcon} alt="DataCamp" width="24"/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://https://github.com/Pawieee/portfolio" target="_blank" rel="noreferrer">Paulo Agujitas</a> with 💜</p>
    </footer>
  );
}

export default Footer;