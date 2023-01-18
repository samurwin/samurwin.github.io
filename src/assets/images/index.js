import rwiLogoMain from './rwi/RWI-Logo_Colour-Small.png';
import rwiLogoSecondary from './rwi/RWI-Wordmark_Partial-Colour-Small.png';
import rwiColourCombos from './rwi/RWI_Logo-colour-combinations.png';
import webdesign01 from './rwi/rwi-web-design-01.png'
import webdesign02 from './rwi/rwi-web-design-02.png'
import webdesign03 from './rwi/rwi-web-design-03.png'


const rwiImgs = {
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
    ]
}

export { rwiImgs } 