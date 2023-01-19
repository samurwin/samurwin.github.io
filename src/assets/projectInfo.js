import { alloveusImgs, devDiariesImgs, savouryImgs } from './images';

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
                icon: 'FaShopify'
            },
            {
                id: 1,
                name: 'Adobe CC',
                icon: 'SiAdobecreativecloud'
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
                icon: 'FaReact'
            },
            {
                id: 1,
                name: 'GraphQL',
                icon: 'SiGraphql'
            },
            {
                id: 2,
                name: 'NodeJS',
                icon: 'FaNodeJs'
            },
            {
                id: 3,
                name: 'MongoDB',
                icon: 'DiMongodb'
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
                icon: 'DiMysql'
            },
            {
                id: 1,
                name: 'NodeJS',
                icon: 'FaNodeJs'
            }
        ],
        path: '/portfolio/dev-diaries'
    },
]

export { projectInfo };