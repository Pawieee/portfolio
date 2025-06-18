import React from "react";
import cs50 from '../assets/images/certs/cs50.jpg';
import data_analyst from '../assets/images/certs/data_analyst.png';
import data from '../assets/images/certs/data.png';
import db_ds from '../assets/images/certs/db_ds.png';
import db_essen from '../assets/images/certs/db_essen.png';
import de_essen from '../assets/images/certs/de_essen.png';
import de from '../assets/images/certs/de.png';
import de_associate from '../assets/images/certs/de_associate.png';
import ds_ai from '../assets/images/certs/ds_ai.png';
import de_proj from '../assets/images/certs/de_proj.png';
import it_jav from '../assets/images/certs/it_jav.png';
import shell from '../assets/images/certs/shell.png';
import sql from '../assets/images/certs/sql.png';
import '../assets/styles/Certifications.scss';

function Certification() {
    return(
    <div className="certifications-container" id="certifications">
        <h1>Certifications</h1>
        <div className="certifications-grid">
            <div className="certification">
                <a href="https://www.datacamp.com/certificate/DE0015731820594" target="_blank" rel="noreferrer"><img src={de} className="zoom" alt="thumbnail" width="100%"/></a>
                {/* <p>Built a bank loan management application using Python and TypeScript that automates loan application assessments and manages loan transactions. Implemented Slowly Changing Dimension Type 2 (SCD2) data modeling to support efficient transaction updates and enable analytical querying for administrators.</p> */}
            </div>
            <div className="certification">
                <a href="https://www.datacamp.com/certificate/DAA0015237376641" target="_blank" rel="noreferrer"><img src={data_analyst} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="certification">
                <a href="https://www.datacamp.com/certificate/SQA0013196605498" target="_blank" rel="noreferrer"><img src={sql} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="certification">
                <a href="https://www.datacamp.com/certificate/DEA0015339632055" target="_blank" rel="noreferrer"><img src={de_associate} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="certification">
               <img src={cs50} className="zoom" alt="thumbnail" width="100%"/>
            </div>
            <div className="certification">
                <a href="https://www.datacamp.com/skill-verification/DL0036763431106" target="_blank" rel="noreferrer"><img src={data} className="zoom" alt="thumbnail" width="100%"/></a>
            </div>
            <div className="certification">
                <a href="https://www.credly.com/badges/bfd9cc29-fc22-429b-b534-cddf97858c5d" target="_blank" rel="noreferrer"><img src={ds_ai} className="zoom" alt="thumbnail" width="80%"/></a>
            </div>
            <div className="certification">
                <a href="https://www.credly.com/badges/f796815e-36d8-4a90-b945-6eb77ce04f50" target="_blank" rel="noreferrer"><img src={db_ds} className="zoom" alt="thumbnail" width="80%"/></a>
            </div>
            <div className="certification">
                <a href="https://www.credly.com/badges/7ad56ac7-fd4a-4cf1-819d-145781a5560a" target="_blank" rel="noreferrer"><img src={shell} className="zoom" alt="thumbnail" width="80%"/></a>
            </div>
            <div className="certification">
                <a href="https://www.credly.com/badges/dc7b0123-4dd9-436b-a418-58acc1957712" target="_blank" rel="noreferrer"><img src={de_proj} className="zoom" alt="thumbnail" width="80%"/></a>
            </div>
            <div className="certification">
                <a href="https://www.credly.com/badges/fe9088a5-0bf3-49a4-92e8-78d0b714d34c" target="_blank" rel="noreferrer"><img src={de_essen} className="zoom" alt="thumbnail" width="80%"/></a>
            </div>
           
            <div className="certification">
                <a href="https://www.credly.com/badges/4fd4703f-e265-4e86-b210-f3ed40875055" target="_blank" rel="noreferrer"><img src={db_essen} className="zoom" alt="thumbnail" width="80%"/></a>
            </div>
           
            <div className="certification">
                <a href="https://www.credly.com/badges/419eca11-d6f9-4279-9198-8dc1a0abb440" target="_blank" rel="noreferrer"><img src={it_jav} className="zoom" alt="thumbnail" width="80%"/></a>
            </div>
           
        </div>
    </div>
    );
}

export default Certification;