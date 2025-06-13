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
                <p>Built a bank loan management application using Python and TypeScript that automates loan application assessments and manages loan transactions. Implemented Slowly Changing Dimension Type 2 (SCD2) data modeling to support efficient transaction updates and enable analytical querying for administrators.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Pawieee/dlt-dbt-pipeline" target="_blank" rel="noreferrer"><img src={dbt} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Pawieee/dlt-dbt-pipeline" target="_blank" rel="noreferrer"><h2>Evaluation Pipeline</h2></a>
                <p>Designed and implemented an automated ETL pipeline using Python, dbt, and PostgreSQL (Docker) to handle form evaluation workflows based on data from Google Sheets. This solution improved the efficiency of DOUM’s evaluation process by up to 90%.</p>
            </div>
            <div className="project">
                <a href="https://bigimbob.flutterflow.app/" target="_blank" rel="noreferrer"><img src={bigimbob} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://bigimbob.flutterflow.app/" target="_blank" rel="noreferrer"><h2>Bigimbob</h2></a>
                <p>Developed and deployed an online sales and order management system for a Korean restaurant using Flutter. Leveraged FlutterFlow for rapid UI development and integrated Supabase for data storage and support for OLAP queries.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Pawieee/MyCollegeStats" target="_blank" rel="noreferrer"><img src={intellistats} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Pawieee/MyCollegeStats" target="_blank" rel="noreferrer"><h2>Intellistats</h2></a>
                <p>Developed a web-based educational application that dynamically calculates final grades based on individual course scores. Built using HTML, CSS, JavaScript, and PHP, the app allows users to track subject performance and receive real-time grade updates as data changes.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Pawieee/PHPay" target="_blank" rel="noreferrer"><img src={phpay} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Pawieee/PHPay" target="_blank" rel="noreferrer"><h2>PHPay</h2></a>
                <p>Developed a virtual wallet application using Java through the use of Windows Builder for quick development with MySQL database integration, supporting core financial operations including fund transfers, deposits, withdrawals, bill payments, and tuition transactions.</p>
            </div>
           
        </div>
    </div>
    );
}

export default Project;