import edupanda from "../assets/projects/edupanda.png";
import spacelogo from "../assets/projects/SpaceLogo.png";
import timetable from "../assets/projects/timetable.png";

export const PROJECTS = [
  {
    title: "EduPanda",
    image: edupanda,
    description: [
      "Contributed to the full-stack development of EduPanda, an educational platform built onservice-oriented architecture.",
      "-Worked on the learner-service.",
      "-Integrated a payment gateway using Stripe.",
      "-Developed the email-service.",
      "-Contributed to the development of the SMS-service."],
    technologies: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "NasaAPIs",
    image: spacelogo,
    description: [
      "Executed frontend development for a responsive website utilizing NASA's APOD and Mars Rover Photos APIs.",
      "-Integrated user and theme context.",
      "-Ensured compatibility across various devices and screen sizes.",
      "-Employed Tailwind CSS for streamlined styling and efficient UI/UX design."],
    technologies: ["HTML", "TailwindCSS", "React.js", "Node,js", "Express.js", "MongoDB"],
  },
  {
    title: "University Timetable Management System",
    image: timetable,
    description:[ 
        "Executed backend development for a University Timetable Management System.",
        "-Focused on implementing a secure RESTful API using Express JS (Node.js) and MongoDB.",
        "-Developed and integrated role-based authentication and authorization for Admins, Faculty, and Students.",
        "-Ensured data integrity and compliance with industry best practices."
      ],
    technologies: ["Node.js", "Express.js", "MongoDB", "Postman"],
  }
];

export const CONTACT = {
  address: "332, Kothalawala, Kaduwela",
  phoneNo: "+94720706833 ",
  email: "ashensavindagunasekara@gmail.com",
};
