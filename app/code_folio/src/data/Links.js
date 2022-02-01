import nitelife from '../static/images/nitelife.png';
import ev7_2 from '../static/images/ev7_2.png';
import darkroom from "../static/images/darkroom.png";
import dev from "../static/images/dev.png";

const links = [
  {
    id: "1",
    title: "NiteLife",
    info: "A fullstack social media type site built with a team to demonstrate CRUD, authentication, and templating. created using django/python, tailwind css was used for styling. hosted on heroku, and utilizing their postgresql database option for storing data.",
    img: nitelife,
    link: "https://nitellife.herokuapp.com/registration/signup/",
    git: "https://github.com/yogesh-naik/Wayfarer",
  },
  {
    id: "4",
    title: "DevConnect",
    info: "A fullstack app Developed using the MERN stack. This app demonstates CRUD operations, authentication, and gloabal state management. technologies used include: react, redux, node, express, mongodb, sass, jquery. hosted/deployed using heroku.",
    img: dev,
    link: "https://devlconnect.herokuapp.com/",
    git: "https://github.com/jameschandler1/devconnect",
  },
  {
    id: "2",
    title: "EV7",
    info: "A minimalistic e-commerce site built using django. hosted on heroku. This app utilizes Stripe's API for payment processing. Note this app is in test mode making a purchase will not charge you. technologies used include: django, python, stripe, heroku, postgresql, bootstrap, jquery and javascript. hosted and deployed using heroku.",
    img: ev7_2,
    link: "https://e7vintage.herokuapp.com/",
    git: "https://github.com/jameschandler1/eseven",
  },
  {
    id: "3",
    title: "DarkRoom",
    info: "A horror point and click escape room game. find the keys to escape, but beware your not alone. Simiply made of Vanilla Javascript, HTML5, CSS3, and a few jQuery plugins. hosted on GitHub pages.",
    img: darkroom,
    link: "https://jameschandler1.github.io/DarkRoom/",
    git: "https://github.com/jameschandler1/DarkRoom",
  },
];


export default links