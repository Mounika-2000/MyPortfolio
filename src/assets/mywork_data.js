import project1_img from "../assets/omnifood_snapshot.png";
import project2_img from "../assets/shades_pallete.png";
import project3_img from "../assets/dharmavaram_whether.png";
import capturem from "../assets/capturem.png";
// import project4_img from "../assets/project_4.svg";
// import project5_img from "../assets/project_5.svg";
// import project6_img from "../assets/project_6.svg";

const mywork_data = [
  {
    w_no: 1,
    w_name: "Web design",
    w_img: capturem,
    w_link: "https://mern-capturem.onrender.com",
    w_desc: {
      name: "Capturem",
      desc: "Notes Application – Built and deployed a full-stack notes app using MongoDB, Express.js, React, and Node.js with CRUD functionality. Implemented rate limiting with Upstash Redis for security and designed a responsive UI for cross-device use.",
      technology: ["MERN Stack"],
    },
  },
  {
    w_no: 1,
    w_name: "Web design",
    w_img: project1_img,
    w_link: "https://omnifood-mounika.netlify.app/",
    w_desc: {
      name: "Omnifood",
      desc: "A modern, responsive website for a fictional AI-powered meal subscription service. It highlights a clean layout, engaging visuals, and user-friendly sections and sign up.",
      technology: ["HTML", "CSS", "JavaScript"],
    },
  },
  {
    w_no: 2,
    w_name: "Web design",
    w_img: project2_img,
    w_link: "",
    w_desc: {
      name: "Hues and shades generator",
      desc: "For any given color, generates different shades of that color, has some color suggestions to match your current mood. You can save your favorite palettes",
      technology: ["React"],
    },
  },
  {
    w_no: 3,
    w_name: "Web design",
    w_img: project3_img,
    w_link: "",
    w_desc: {
      name: "SkyCast",
      desc: "A weather application using JavaScript and OpenWeather API with real-time updates, error handling, and dynamic UI changes.",
      technology: ["JavaScipt", "REST API"],
    },
  },
  //   {
  //     w_no: 4,
  //     w_name: "Web design",
  //     w_img: project4_img,
  //   },
  //   {
  //     w_no: 5,
  //     w_name: "Web design",
  //     w_img: project5_img,
  //   },
  //   {
  //     w_no: 6,
  //     w_name: "Web design",
  //     w_img: project6_img,
  //   },
];

export default mywork_data;
