import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
//import RVslider from '../components/RVslider'
import VimeoAutoplay from '../components/vimeoAutoplay'

const IndexPage = ({ data }) => {
  const home = data.contentfulHomePage
  const image = data.contentfulHomePage.homeHeroImage.fluid
  console.log(home.homeHeroImage.description)
  //const slider = data.contentfulHomePage.homeImageSlider

  return (
    <Layout>
      {/* We're here to help. */}
      <section className='centered grid-2'>
        <h1>{home.title}</h1>
        <h2>{home.subtitle}</h2>
      </section>

      <section className='home-hero'>
        {/* <RVslider>
          {slider.map(images => (
            <VimeoAutoplay link={images.description} />
            // <Img fluid={images.fluid} key={images.id} width='100%' />
          ))}
        </RVslider> */}
        <VimeoAutoplay link={home.homeHeroImage.description} />
        <Img fluid={image} alt='' />
      </section>
      {/* Meet your new collaborators */}
      <div className='centered grid-2 type'>
        <div>{documentToReactComponents(home.section01.json)}</div>
        <div>
          {documentToReactComponents(home.section01Body.json)}
          <Link to='/about'>
            <button className='btn-1'>About us</button>
          </Link>
        </div>
      </div>
      {/* Design, Branding & Motion */}
      <section className='home-grey'>
        <div className='centered grid-2 type'>
          <div>{documentToReactComponents(home.section02.json)}</div>
          <div className='home-ul underline'>
            {documentToReactComponents(home.section02Body.json)}
            <Link to='/work'>
              <button className='btn-1'>See our work</button>
            </Link>
          </div>
        </div>
      </section>

      <section className='centered type'>
        <div className='grid-2'>
          <div>{documentToReactComponents(home.section03.json)}</div>
          <div>{documentToReactComponents(home.section03Body.json)}</div>
        </div>
        <div className='client-logos centered'>
          {home.clientLogos.map(logo => (
            <img src={logo.file.url} alt='' key={logo.id} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const indexquery = graphql`
  query indexquery {
    contentfulHomePage {
      title
      subtitle
      homeImageSlider {
        id
        description
      }
      homeHeroImage {
        fluid {
          ...GatsbyContentfulFluid
        }
        description
      }
      section01 {
        json
      }
      section01Body {
        json
      }
      section02 {
        json
      }
      section02Body {
        json
      }
      section03 {
        json
      }
      section03Body {
        json
      }
      clientLogos {
        id
        file {
          url
        }
      }
    }
  }
`

/* 

<RVslider>
          {slider.map(images => (
            <Img fluid={images.fluid} key={images.id} width='100%' />
          ))}
        </RVslider>

*/
