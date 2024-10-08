import React from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
// import SkillItem from "./SkillItem";
import TimelineItemSkill from "./TimelineItemSkill.jsx";

const images = {
  languages: [
    {
      src: "https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white",
      alt: "Java",
    },
    {
      src: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
      alt: "JavaScript",
    },
    {
      src: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
      alt: "Python",
    },
    {
      src: "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white",
      alt: "C++",
    },
    {
      src: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
      alt: "TypeScript",
    },
    {
      src: "https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=sql&logoColor=white",
      alt: "SQL",
    },
    {
      src: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
      alt: "HTML5",
    },
    {
      src: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
      alt: "CSS3",
    },
  ],
  frontend: [
    {
      src: "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
      alt: "React",
    },
    {
      src: "https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white",
      alt: "Redux",
    },

    {
      src: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white",
      alt: "Next.js",
    },

    {
      src: "https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white",
      alt: "Bootstrap",
    },
    {
      src: "https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white",
      alt: "MUI",
    },
    {
      src: "https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=black",
      alt: "Babel",
    },
  ],
  backend: [
    {
      src: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
      alt: "Node.js",
    },
    {
      src: "https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white",
      alt: "Express",
    },
    {
      src: "https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white",
      alt: "Jest",
    },
    {
      src: "https://img.shields.io/badge/JUnit-25A162?style=for-the-badge&logo=junit&logoColor=white",
      alt: "JUnit",
    },
    {
      src: "https://img.shields.io/badge/Shell-121011?style=for-the-badge&logo=gnu-bash&logoColor=white",
      alt: "Shell",
    },
  ],
  data: [
    {
      src: "https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white",
      alt: "Pandas",
    },
    {
      src: "https://img.shields.io/badge/Scikit--learn-FF9900?style=for-the-badge&logo=scikit-learn&logoColor=white",
      alt: "Scikit-learn",
    },
    {
      src: "https://img.shields.io/badge/Matplotlib-3776AB?style=for-the-badge&logo=python&logoColor=white",
      alt: "Matplotlib",
    },
  ],
  database: [
    {
      src: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white",
      alt: "MongoDB",
    },
    {
      src: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
      alt: "MySQL",
    },

    {
      src: "https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white",
      alt: "PostgreSQL",
    },
    {
      src: "https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white",
      alt: "SQLite",
    },
    {
      src: "https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white",
      alt: "Oracle",
    },
    {
      src: "https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white",
      alt: "Neo4j",
    },
  ],
  dev: [
    {
      src: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
      alt: "Git",
    },
    {
      src: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
      alt: "Docker",
    },
    {
      src: "https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white",
      alt: "Heroku",
    },
    {
      src: "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white",
      alt: "Vercel",
    },
    {
      src: "https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white",
      alt: "AWS",
    },
  ],
  other: [
    {
      src: "https://img.shields.io/badge/Tableau-E97627?style=for-the-badge&logo=tableau&logoColor=white",
      alt: "Tableau",
    },
    {
      src: "https://img.shields.io/badge/macOS-000000?style=for-the-badge&logo=apple&logoColor=white",
      alt: "macOS",
    },
  ],
};
const upennDes = {
  major: "Master of Science in Computer & Information Technology",
  gpa: "3.86",
  course:
    "Introduction to Computer Systems(C), Data Structures & Software Design(Java), Computer Systems Programming(C), Algorithms & Computation, Database & Information Systems(SQL)",
};

const nyuDes = {
  major: "Master of Science in Database Management and Systems",
  gpa: "3.90",
  course:
    "Information Technology & Data Analytics, Database Design & Management, Database Technologies for Web Applications",
};
const iubDes = {
  major: "Bachelor of Science in Accounting",
  gpa: "3.40",
  course: "The Computer in Business, System Analysis & Project Management",
};
const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="University of Pennsylvania"
            date="2022 — 2025"
            description={upennDes}
            school="upenn"
          />
          <TimelineItem
            title="New York University"
            date="2017 — 2017"
            description={nyuDes}
            school="nyu"
          />
          <TimelineItem
            title="Indiana University"
            date="2012 — 2016"
            description={iubDes}
            school="iub"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Skills</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItemSkill title="Languages" imgs={images.languages} />
          <TimelineItemSkill
            title="Frontend Development"
            imgs={images.frontend}
          ></TimelineItemSkill>
          <TimelineItemSkill
            title="Backend Development"
            imgs={images.backend}
          ></TimelineItemSkill>
          <TimelineItemSkill
            title="Databases & Data Management"
            imgs={images.database}
          ></TimelineItemSkill>

          <TimelineItemSkill
            title="DevOps & Cloud Tools"
            imgs={images.dev}
          ></TimelineItemSkill>
          <TimelineItemSkill
            title="Data Science & Machine Learning"
            imgs={images.data}
          ></TimelineItemSkill>
          <TimelineItemSkill
            title="Data Visualization & Other Tools"
            imgs={images.other}
          ></TimelineItemSkill>
        </ol>
      </div>
    </section>
  );
};

export default Resume;
