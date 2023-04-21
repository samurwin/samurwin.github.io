import { alloveusImgs, devDiariesImgs, savouryImgs, francaisImgs } from './images';

import { FaReact, FaShopify, FaNodeJs } from 'react-icons/fa'
import { DiMongodb, DiMysql } from 'react-icons/di'
import { SiTypescript, SiNextdotjs, SiGraphql, SiFigma, SiAdobecreativecloud } from 'react-icons/si'
import { FaBehance, FaGithub, FaLinkedinIn, FaDribbble } from 'react-icons/fa';

const projectInfo = [
    {
        title: "Cahier de Françias",
        subtitle: "French Learning Website",
        tags: [
            "Web Design",
            "Development"
        ],
        bannerImg: francaisImgs.bannerImg,
        overview: "Cahier de Français is a language learning site, which contains reference materials for French grammar. I started learning French about a year ago, using popular apps to practice and learn. After a while I wanted to find more unique ways to improve my French. Working on this website I was able to practice skills in both the French language, as well as several coding languages! I plan to continue working on this site and update it with more content, quizzes and fun features.",
        link: {
            url: "https://cahier-de-francais.herokuapp.com/",
            linkTitle: "Deployed Website"
        },
        images: {
            homePage: francaisImgs.homeImgs,
            contentPage: francaisImgs.contentImgs
        },
        technologies: [
            {
                id: 0,
                name: 'React',
                icon: <FaReact color='#d6e0ec' className="techIcon"/>
            },
            {
                id: 1,
                name: "Next.Js",
                icon: <SiNextdotjs color='#d6e0ec' className="techIcon" />
            },
            {
                id: 2,
                name: "Typescript",
                icon: <SiTypescript color='#d6e0ec' className="techIcon" />
            },
            {
                id: 3,
                name: "Figma",
                icon: <SiFigma color='#d6e0ec' className="techIcon" />
            }
        ],
        path: "/portfolio/cahier-de-francais"
    },
    {
        title: 'Alloveus',
        subtitle: 'Events and Community',
        tags: [
            "Web Design",
            "Development"
        ],
        bannerImg: alloveusImgs.bannerImg,
        overview: 'ALLOVEUS describes themselves as an artistic wellness community who host events to connect and move with one another. For this project I created the designed the ALLOVEUS website as well as, a custom Shopify theme for the company.',
        link: {
            url: 'https://alloveus.co',
            linkTitle: 'Alloveus.co'
        },
        images: alloveusImgs.webDesign,
        technologies: [
            {
                id: 0,
                name: 'Shopify',
                icon: <FaShopify color='#d6e0ec' className="techIcon"/>
            },
            {
                id: 1,
                name: 'Adobe CC',
                icon: <SiAdobecreativecloud color='#d6e0ec' className="techIcon"/>
            }
        ],
        path: '/portfolio/alloveus'
    },
    {
        title: 'Savoury Subscriptions',
        subtitle: 'Meal-kit Delivery Service',
        tags: [
            'Development'
        ],
        bannerImg: savouryImgs.bannerImg,
        overview: 'Savoury Subscriptions is a food subscription service where a user can signup/login, pick their favourite meals, and filter them by diet preference. The user can also save their diet preferences on their account page. Once they have their meals chosen, they can checkout using Stripe payment.',
        link: {
            url: 'https://github.com/ScalexanderB/Savoury-Subscriptions',
            linkTitle: 'Github Repo'
        },
        images: savouryImgs.images,
        technologies: [
            {
                id: 0,
                name: 'React',
                icon: <FaReact color='#d6e0ec' className="techIcon"/>
            },
            {
                id: 1,
                name: 'GraphQL',
                icon: <SiGraphql color='#d6e0ec' className="techIcon"/>
            },
            {
                id: 2,
                name: 'NodeJS',
                icon: <FaNodeJs color='#d6e0ec' className="techIcon"/>
            },
            {
                id: 3,
                name: 'MongoDB',
                icon: <DiMongodb color='#d6e0ec' className="techIcon"/>
            }
        ],
        path: '/portfolio/savoury-subscriptions'
    },
    {
        title: 'Dev Diaries',
        subtitle: 'Tech Blog',
        tags: [
            'Development'
        ],
        bannerImg: devDiariesImgs.bannerImg,
        overview: 'Dev Diaries is a tech blog forum. Users with an account can create posts and comment on others people’s posts. Made using TailwindCSS and MySQL/Sequelize.',
        link: {
            url: 'https://cryptic-dusk-52607.herokuapp.com/',
            linkTitle: 'Deployed Website'
        },
        images: devDiariesImgs.images,
        technologies: [
            {
                id: 0,
                name: 'MySQL',
                icon: <DiMysql color='#d6e0ec' className="techIcon"/>
            },
            {
                id: 1,
                name: 'NodeJS',
                icon: <FaNodeJs color='#d6e0ec' className="techIcon"/>
            }
        ],
        path: '/portfolio/dev-diaries'
    },
]

const socialLinksAll = [
    {
      url: 'https://github.com/samurwin',
      key: 'github',
      icon: <FaGithub />
    },
    {
      url: 'https://www.linkedin.com/in/samanthaurwin/',
      key: 'linkedin',
      icon: <FaLinkedinIn />
    },
    {
      url: 'https://www.behance.net/samanthaurwin',
      key: 'behance',
      icon: <FaBehance />
    },
    {
      url: 'https://www.dribbble.com/smu-design',
      key: 'dribbble',
      icon: <FaDribbble />
    }
  ];


export { projectInfo, socialLinksAll };