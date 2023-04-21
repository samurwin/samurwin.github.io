import rwiThumbnail from './RWI-Labs-thumbnail.jpg'
import rwiLogoMain from './rwi/RWI-Logo_Colour-Small.png';
import rwiLogoSecondary from './rwi/RWI-Wordmark_Partial-Colour-Small.png';
import rwiColourCombos from './rwi/RWI_Logo-colour-combinations.png';
import webdesign01 from './rwi/rwi-web-design-01.png'
import webdesign02 from './rwi/rwi-web-design-02.png'
import webdesign03 from './rwi/rwi-web-design-03.png'
import illustration01 from './rwi/illustration01.png'
import illustration02 from './rwi/illustration02.png'
import illustration03 from './rwi/illustration03.png'
import illustration04 from './rwi/illustration04.png'
import alloveusThumbnail from './projects/alloveus-thumbnail.png'
import alloveus01 from './projects/alloveus01.png'
import alloveus02 from './projects/alloveus02.png'
import alloveus03 from './projects/alloveus03.png'
import alloveus04 from './projects/alloveus04.png'
import devDiariesThumbnail from './projects/dev-diaries-thumbnail.png'
import devDiaries01 from './projects/dev-diaries01.jpeg'
import savouryThumbnail from './projects/savoury-thumbnail.png'
import savoury01 from './projects/savoury01.png'
import savoury02 from './projects/savoury02.png'
import savoury03 from './projects/savoury03.png'
import francaisthumbnail from './projects/cahier-de-francias-thumbnail.png'
import francaisHomeLight from './projects/home-lightMode.png'
import francaisHomeDark from './projects/home-darkMode.png'
import francaisContentLight from './projects/content-lightMode.png'
import francaisContentDark from './projects/content-darkMode.png'


const rwiImgs = {
    bannerImg: rwiThumbnail,
    logos: [
        {
            img: rwiLogoMain,
            alt: 'RWI Labs primary logo design'
        },
        {
            img: rwiLogoSecondary,
            alt: 'RWI Labs secondary logo design'
        }, 
        {
            img: rwiColourCombos,
            alt: 'RWI Labs logo colour combinations'
        }
    ],
    webDesign: [
        {
            img: webdesign01,
            alt: 'RWI website designs displayed in tablet and phone mockup'
        },
        {
            img: webdesign02,
            alt: 'RWI website home page design'
        },
        {
            img: webdesign03,
            alt: 'RWI website about page design'
        }
    ],
    illustrations: [
        {
            img: illustration01,
            alt: 'Screenshot of service page for custom web apps on rwi website. Includes illustration.'
        },
        {
            img: illustration02,
            alt: 'Screenshot of service page for shopify development on rwi website. Includes illustration.'
        },
        {
            img: illustration03,
            alt: 'Screenshot of service page for brand strategy on rwi website. Includes illustration.'
        },
        {
            img: illustration04,
            alt: 'Screenshot of service page for digital strategy on rwi website. Includes illustration.'
        }
    ]
}

const alloveusImgs = {
    bannerImg: alloveusThumbnail,
    webDesign: [
        {
            img: alloveus01,
            alt: 'Alloveus Home Page Design'
        }, 
        {
            img: alloveus02,
            alt: 'Alloveus About Us Page Design'
        },
        {
            img: alloveus03,
            alt: 'Alloveus Event Page Design'
        },
        {
            img: alloveus04,
            alt: 'Alloveus Contact Page Design'
        }
    ]
}

const devDiariesImgs = {
    bannerImg: devDiariesThumbnail,
    images: [
        {
            img: devDiaries01,
            alt: 'Dev Diaries User Feed'
        }
    ]
}

const savouryImgs = {
    bannerImg: savouryThumbnail,
    images: [
        {
            img: savoury01,
            alt: 'Screenshot of Savoury Subscriptions Home Page'
        }, 
        {
            img: savoury02,
            alt: 'Screenshot of Savoury Subscription Meals Page'
        },
        {
            img: savoury03,
            alt: 'Screenshot of Savoury Subscription Account Page'
        }
    ]
}

const francaisImgs = {
    bannerImg: francaisthumbnail,
    homeImgs: [
        {
            img: francaisHomeLight,
            alt: "Light mode home page design for french learning website"
        },
        {
            img: francaisHomeDark,
            alt: "Dark mode home page design for french learning website"
        }
    ],
    contentImgs: [
        {
            img: francaisContentLight,
            alt: "Light mode page design for content on french learning website"
        },
        {
            img: francaisContentDark,
            alt: "Dark mode page design for content on french learning website"
        }
    ]
}

export { rwiImgs, alloveusImgs, devDiariesImgs, savouryImgs, francaisImgs } 