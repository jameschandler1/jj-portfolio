import nitelife from '../static/images/nitelife.png';
import ev7 from '../static/images/ev7.png';
import ev7_2 from '../static/images/ev7-2.png';
import darkroom from "../static/images/darkroom.png";
import dev from "../static/images/dev.png";

const links = [
  {
    id: "1",
    title: "NiteLife",
    info: "fullstack site using python/django",
    img: nitelife,
    link: "https://nitellife.herokuapp.com/registration/signup/",
    git: "https://github.com/yogesh-naik/Wayfarer",
  },
  {
    id: "4",
    title: "DevConnect",
    info: "A Website to demonstrate crud in node.js ustilizing the MERN stack and fully deployed of course ;).",
    img: dev,
    link: "https://devlconnect.herokuapp.com/",
    git: "https://github.com/jameschandler1/devconnect",
  },
  {
    id: "2",
    title: "EV7",
    info: "A minimal design e-comm website. utilizing Stripe API for payment and built in django",
    img: ev7,
    alt_img: ev7_2,
    link: "https://e7vintage.herokuapp.com/",
    git: "https://github.com/jameschandler1/eseven",
  },
  {
    id: "3",
    title: "DarkRoom",
    info: "A horror point and click escape room game. find the keys to escape, but beware your not alone.",
    img: darkroom,
    link: "https://jameschandler1.github.io/DarkRoom/",
    git: "https://github.com/jameschandler1/DarkRoom",
  },
];


export default links