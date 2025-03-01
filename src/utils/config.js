export const hashRoutes = [
  ["Home", "/#home"],
  ["About", "/#about"],
  ["Projects", "/#projects"],
  ["Contact", "/#contact"],
  ["Resume", "/resume.pdf"],
];

export const sections = hashRoutes.map((route) => route[0].toLowerCase());

export const introAnimatedText = [
  "Developer",
  "Programmer",
  "Tech Enthusiast",
  "Gamer",
];
export const myName = "Kaushik Dutta";
export const shortDescription = "MERN and Full Stack Developer";

export const socialMediaDetails = [
  {
    name: "GitHub",
    url: "https://github.com/kaushik1230",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/kaushik-dutta-a19b67352/",
  },
  {
    name: "Email",
    url: "mailto:kaushik199906@gmail.com",
  },
];

export const skills = [
  {
    name: "Languages",
    items: ["C", "C++", "HTML/CSS", "Javascript", "Typescript"],
  },
  {
    name: "Web Development",
    items: [
      "ReactJs",
      "NextJs",
      "Node",
      "Redux",
      "Bootstrap",
      "tailwindcss",
      "RestAPI",
      "ExpressJs",
      "SocketIO",
      "MUI",
      "Recoil",
    ],
  },
  {
    name: "Database",
    items: ["MySQL", "MongoDB", "Redis", "PostgreSQL"],
  },
  {
    name: "Tools/Software/Others",
    items: [
      "Git",
      "Github",
      "VSCode",
      "IntellijIdea",
      "Docker",
      "Postman",
      "kubernetes",
      "Babel",
      "Webpack",
      "Grafana",
    ],
  },
];

export const projectsData = [
  {
    title: "Online-Judge",
    desciption:
      "Build a platform that remotely runs and compiles user submitted code for a programming problem securely and judges if the code is correct/wrong",
    tech: ["Nodejs", "React", "Docker", "Redis", "MongoDB", "Expressjs", "JWT"],
    github: "https://github.com/kaushik1230/online-Judge",
    external: "https://oj.amanarya.com",
    image: "/projects/oj-front.png",
  },
  {
    title: "Portfolio",
    desciption:
      "Crafted an engaging portfolio site with ReactJS and Three.js, enhancing user interaction through a serverless feedback system powered by a custom API",
    tech: [
      "Nodejs",
      "React",
      "Threejs",
      "Nodemailer",
      "MUI",
      "Bootstrap",
      "drei",
    ],
    github: "https://github.com/Am4nn/Portfolio-Website",
    external: "https://www.amanarya.com",
    image: "/projects/portfolio-front.png",
  },
];

export const contactData = {
  imagesrc: "/stars/StarBackground.png",
  imagealt: "Star Background Image",
};
