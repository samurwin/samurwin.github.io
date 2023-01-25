import { alloveusImgs, devDiariesImgs, savouryImgs } from './images';

import { FaReact, FaShopify, FaNodeJs, FaGitAlt, FaWordpressSimple } from 'react-icons/fa'
import { DiMongodb, DiMysql } from 'react-icons/di'
import { SiTypescript, SiNextdotjs, SiGraphql, SiFigma, SiAdobecreativecloud } from 'react-icons/si'

const projectInfo = [
    {
        title: 'Alloveus',
        subtitle: 'Events and Community',
        tags: [
            "Web Design",
            "Development"
        ],
        bannerImg: alloveusImgs.bannerImg,
        overview: 'Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
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
        overview: 'Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
        link: {
            url: '',
            linkTitle: 'Deployed Website'
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
        overview: 'Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
        link: {
            url: '',
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

export { projectInfo };