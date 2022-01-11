import nitelife from '../static/nitelife.png';
import ev7 from '../static/ev7.png';
import ev7_2 from '../static/ev7-2.png';
import darkroom from '../static/darkroom.png';

const links = [
  {
    id: "1",
    title: "NiteLife",
    info: "that's because no matter what you'll always lose it in the end.",
    img: nitelife,
    link: "https://nitellife.herokuapp.com/registration/signup/",
  },
  {
    id: "2",
    title: "EV7",
    info: "A minimal design e-comm website. utilizing Stripe API for payment and built in django",
    img: ev7,
    alt_img: ev7_2,
    link: "https://e7vintage.herokuapp.com/",
  },
  {
    id: "3",
    title: "DarkRoom",
    info: "A horror point and click escape room game. find the keys to escape, but beware your not alone.",
    img: darkroom,
    link: "https://jameschandler1.github.io/DarkRoom/",
  },
];

export default links