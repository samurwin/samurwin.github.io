import React from 'react'

import { altitudeApparel } from '../assets/projectInfo'
import ProjectHeading from '../components/ProjectHeading'
import './projects.css'

export default function Altitude() {

  return(
    <div className="wrapper">
      <ProjectHeading title={altitudeApparel.title} subtitle={altitudeApparel.subtitle} 
      tags={altitudeApparel.tags} image={altitudeApparel.bannerImg} overview={altitudeApparel.overview} link={altitudeApparel.link} />

      {/* BRAND DESIGN */}
      <section className="max1000 container sectionSpacing">
        <h2 className="text-light text-center subheading"> <span className="text-primary mr-1">/01 </span>Brand Design</h2>
        <div className="my-5">
          {altitudeApparel.images.brand.map(image => (
              <img
              key={image.alt}
              src={image.img}
              alt={image.alt}
              className="slideImg my-2"
              />
          ))}
        </div>
      </section>

      {/* WEB DESIGN */}
      <section className="max1000 container sectionSpacing">
        <h2 className="text-light text-center subheading"> <span className="text-primary mr-1">/02 </span>Web Design</h2>
        <div className="my-5">
          {altitudeApparel.images.desktop.map(image => (
              <img
              key={image.alt}
              src={image.img}
              alt={image.alt}
              className="slideImg my-2"
              />
          ))}
        </div>

        <div className="my-5">
            <h3 className="text-light text-center subheading">Mobile Designs</h3>
            <div className="mobileGrid">
              <div>
                <img
                alt={altitudeApparel.images.columnOne.alt}
                src={altitudeApparel.images.columnOne.img}
                className="slideImg"
                />
              </div>
              <div className="flex-column justify-space-between">
                {altitudeApparel.images.columnTwo.map(image => (
                  <img
                  key={image.alt}
                  src={image.img}
                  alt={image.alt}
                  className="slideImg my-2"
                  />
                ))}
              </div>
              <div className="flex-column justify-space-between">
                {altitudeApparel.images.columnThree.map(image => (
                  <img
                  key={image.alt}
                  src={image.img}
                  alt={image.alt}
                  className="slideImg my-2"
                  />
                ))}
              </div>
            </div>
        </div>
      </section>

    </div>
  )
}