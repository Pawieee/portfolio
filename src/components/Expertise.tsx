import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// Data Processing
const labelsFirst = [
    "Python",
    "Pandas",
    "dbt",
    "dlt",
    "SQL",
    "Flask",
    "Bash/Shell Scripting",
    "SCD",
    "Data Modeling",
    "Data Transformation",
];
// Data Modelling
const labelsSecond = [
    "Git",
    "GitHub",
    "Docker",
    "Azure",
    "PostgreSQL",
    "MySQL",
    "Terraform",
];

const labelsThird = [
    "ETL",
    "ELT",
    "Data Warehousing",
    "Data Governance",
    "Query Optimization",
    "Data Lifecycle Management",
    "Batch vs Stream Processing",
    "Data Quality",
    "Data Visualization",
    "Data Analytics",
    "Data Pipelines",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Engineering</h3>
                    <p>Skilled in building end-to-end data-driven web applications using modern technologies such as Python and SQL, with a strong foundation in Data Engineering practices. Experienced in Data Modeling, ETL pipelines, and Data Transformation to support scalable analytics and workflow automation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>Core Data & Business Concepts</h3>
                    <p>Apply data-driven thinking to design ETL workflows, craft business-oriented queries, and develop logic that powers insightful visualizations and decision-making tools.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;