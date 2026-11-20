import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// Data Engineering
const labelsFirst = [
    "Python",
    "SQL (PostgreSQL)",
    "Prefect",
    "dlt",
    "dbt",
    "Polars",
    "Pandas",
    "DuckDB",
    "Parquet",
    "REST API Integration",
    "Data Modeling",
    "Data Transformation",
    "Data Validation & Testing",
    "SCD",
    "Flask",
    "Bash/Shell Scripting",
];
// DevOps & Automation
const labelsSecond = [
    "Git",
    "GitHub (Pull Requests, Code Review)",
    "GitHub Actions",
    "Docker",
    "Azure",
    "n8n",
    "Supabase",
    "PostgreSQL",
    "MySQL",
    "Snowflake",
    "Terraform",
    "AI Tools (Claude Code)",
];
// Core Data & Business Concepts
const labelsThird = [
    "ETL",
    "ELT",
    "Data Pipelines",
    "Data Warehousing",
    "Database Schema Design",
    "Data Quality",
    "Data Cleansing",
    "Pipeline Monitoring & Troubleshooting",
    "Data Governance",
    "Query Optimization",
    "Data Lifecycle Management",
    "Batch vs Stream Processing",
    "Data Visualization (Tableau)",
    "Data Analytics",
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
                    <p>I build and maintain Python data pipelines that pull data from APIs, databases, and flat files into PostgreSQL. I run scheduled Prefect jobs with retries and failure alerts. I write data tests and SQL checks so bad data never reaches reporting.</p>
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
                    <p>I work in a Git/GitHub pull request and code review workflow. I set up GitHub Actions workflows integrated with Claude that automatically review code changes. I containerize PostgreSQL with Docker and build n8n workflows that automate sending WhatsApp messages.</p>
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
                    <p>I apply data-driven thinking to design database schemas and ETL workflows, cleanse and validate data, and troubleshoot failed pipeline runs. I write business-oriented queries and build dashboards that support decision-making.</p>
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