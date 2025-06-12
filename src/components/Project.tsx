import React from "react";
import microbank from '../assets/images/microbank.png';
import bigimbob from '../assets/images/bigimbob.png';
import phpay from '../assets/images/phpay.png';
import intellistats from '../assets/images/intellistats.png';
import dbt from '../assets/images/dbt.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Pawieee/microbank" target="_blank" rel="noreferrer"><img src={microbank} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Pawieee/microbank" target="_blank" rel="noreferrer"><h2>Microbank</h2></a>
                <p>Developed a bank loan management app that automates loan application assessments and handles loan transactions using Python, and TypeScript.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Pawieee/dlt-dbt-pipeline" target="_blank" rel="noreferrer"><img src={dbt} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Pawieee/dlt-dbt-pipeline" target="_blank" rel="noreferrer"><h2>Evaluation Pipeline</h2></a>
                <p>Developed an ETL pipeline to automate form evaluations from Google Sheet data using Python, dbt, and PostgreSQL (Docker).</p>
            </div>
            <div className="project">
                <a href="https://bigimbob.flutterflow.app/" target="_blank" rel="noreferrer"><img src={bigimbob} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://bigimbob.flutterflow.app/" target="_blank" rel="noreferrer"><h2>Bigimbob</h2></a>
                <p>Developed and released a sales and order management system for a Korean restaurant using Flutter.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Pawieee/MyCollegeStats" target="_blank" rel="noreferrer"><img src={intellistats} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Pawieee/MyCollegeStats" target="_blank" rel="noreferrer"><h2>Intellistats</h2></a>
                <p>This is an educational web app with the purpose of tracking the scores of course subjects and it automatically calculates your respective grade. It uses basic HTML, CSS, JS and Php.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Pawieee/PHPay" target="_blank" rel="noreferrer"><img src={phpay} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Pawieee/PHPay" target="_blank" rel="noreferrer"><h2>PHPay</h2></a>
                <p>A virtual wallet application that handles basic processes like fund transfers, deposits, withdrawals, bill payments, and tuition payments. It uses Java as the main programming language and database integration with MySQL.</p>
            </div>
           
        </div>
    </div>
    );
}

export default Project;