import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="September 2026 - November 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack / Python Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">PulseTheta - Munich, Bavaria, Germany (Remote)</h4>
            <p>
              Built and maintained Python data pipelines in Prefect that loaded trading data into Supabase (PostgreSQL), using AI-assisted development with Claude Code. Ran scheduled flows with retries and failure alerts, fixed failed runs, and opened and reviewed pull requests on GitHub. Set up GitHub Actions workflows with Claude for automated code review, and built n8n workflows for WhatsApp messages and Deluge scripts for customer billing.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="July 2025 - August 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analytics Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Globe Telecom</h4>
            <p>
              Built ETL workflows and a web application that ingest and validate daily CSV files, cutting manual data processing time by 40% and improving data accuracy for outage alert reporting by over 30%. Cleansed and normalized raw network data, contributing to a 25% improvement in mobile and broadband optimization decisions. Built dashboards from KPIs across 1,000+ daily network activity logs, helping teams prioritize infrastructure upgrades 2x faster.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="August 2024 - July 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Analytics Head</h3>
            <h4 className="vertical-timeline-element-subtitle">Data Owls of the University of Mindanao</h4>
            <p>
              Designed the PostgreSQL database schema and built ETL pipelines with dlt, reducing form evaluation time by 90%. Verified report data for accuracy before each periodic release and improved documentation workflows by 25%.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="August 2022 - 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Mindanao - Main</h4>
            <p>
              Studied CS fundamentals, Data Structures, Algorithms, and Software Engineering through hands-on projects. Summa Cum Laude and Dean's Lister, 1st - 3rd Year.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;