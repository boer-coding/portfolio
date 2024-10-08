/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [

  {
    icon: "/images/icon-dev.svg",
    title: "Software Development",
    description:
      "Crafting software that's not just efficient but scalable, designed to perfectly fit your needs.",
  },
  {
    icon: "/images/icon-app.svg",
    title: "Database Management",
    description:
      "Designing rock-solid database solutions that keep your data safe, sound, and running at peak performance.",
  },
  {
    icon: "/images/icon-design.svg",
    title: "API Development",
    description:
      "Building lightning-fast, secure APIs that make integration smooth and data exchange effortless. ",
  },
  {
    icon: "/images/icon-design.svg",
    title: "Web Design",
    description:
      "Crafting sleek, modern, and fully responsive websites, all with a focus on delivering top-notch user experience and performance.",
  }
];

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTestimonials(data);
      });
  }, []);
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          🎓 Hey there! I’m Boer Liu, a software engineer with a serious passion
          for all things web and full-stack development. Right now, I’m deep
          into my MSc in Computer and Information Technology at the University
          of Pennsylvania, aiming to graduate by December 2025. So far, I’ve
          been crushing courses like Intro to Software Development, Data
          Structures & Software Design, and Database & Info Systems. Can’t wait
          to see where this journey takes me! 🌍🖥️
        </p>

        <p>
          👩‍💻 I’m all about diving into open-source projects and getting hands-on
          with an awesome blend of tech like Java, Python, JavaScript, HTML/CSS,
          and C++. When it comes to frameworks and tools, I’ve got solid
          experience with React.js, Node.js, Express.js, MongoDB, and Docker.
          Crafting intricate systems? That’s my sweet spot—and improving them
          step by step is what keeps me hyped! ✨ Always on the lookout for
          new knowledge and ready to explore every corner of the tech world.
          🌐📚 
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>
      {/* <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <Skill title="Backend Development" imgs={images.backend}></Skill>
        <Skill
          title="Databases & Data Management"
          imgs={images.database}
        ></Skill>

        <Skill title="DevOps & Cloud Tools" imgs={images.dev}></Skill>
        <Skill
          title="Data Science & Machine Learning"
          imgs={images.data}
        ></Skill>
        <Skill
          title="Data Visualization & Other Tools"
          imgs={images.other}
        ></Skill>

        <br />
      </div> */}
     
    </article>
  );
};

export default About;
