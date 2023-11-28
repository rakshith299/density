import * as React from "react";
import Navbar from "../components/navbar.js";
import "../../styles/global.css";
import "../../styles/page1.css";
import "../../styles/page2.css";
import "../../styles/page3.css";
import "../../styles/page4.css";
import "../../styles/page5.css";
import "../../styles/page6.css";
import "../../styles/page7.css";
import "../../styles/page8.css";
import "../../styles/pagegra.css";

import Group from "../../static/Group.png";
import Group1 from "../../static/group1.png";
import Group2 from "../../static/group2.png";
import Group3 from "../../static/group3.png";
import Group4 from "../../static/group4.png";
import Group5 from "../../static/group5.png";
import Page51l from "../../static/page5-1-l.png";
import Page51r from "../../static/page5-1-r.png";
import Page52l from "../../static/page5-2-l.png";
import Page52r from "../../static/page5-2-r.png";
import Page53l from "../../static/page5-3-l.png";
import Page53r from "../../static/page5-3-r.png";
import Page61 from "../../static/page61.png";
import Page62 from "../../static/page62.png";
import Page63 from "../../static/page63.png";
import Page8mob from "../../static/page-8-mob.png";
import Footer from "../../static/footer.png";

import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Home() {

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  const images = data.allFile.nodes;

  console.log(images);


  return (
      <div>
        <Navbar/>
        <div className="page-1">
          <div className="page-1-width">
              <h1>It's time to trade, the <span className="future">future.</span></h1>
              <p>Trade BTC, ETH Futures With 125x Leverage And Earn Rewards.</p>

              <div className="img-cont">  
                <div className="page-1-img-cont"></div>
                <img src = {Group} alt = "mobile" className="page-1-img"/>
              </div>
              

              <div className="page-1-box-cont">
                <div className="each-box"><span className="each-box-top">00%</span><span className="each-box-bottom">Conversion Fee</span></div> <span className="page-1-line"> </span>
                <div className="each-box"><span className="each-box-top">500 Mn+</span><span className="each-box-bottom" >Lifetime Volume Traded</span></div><span className="page-1-line"></span>
                <div className="each-box"><span className="each-box-top">250+</span><span className="each-box-bottom">Total Tradable Pairs</span></div><span className="page-1-line"></span>
                <div className="each-box"><span className="each-box-top">15,000+</span><span className="each-box-bottom">Traders</span></div>
              </div>
          </div>
        </div>

        <div className="page-2">
          <div className="page-2-width">
            <img src = {Group1} alt = "mob-1" className="page-2-img"/>
            <img src = {Group2} alt = "mob-1" className="page-2-img"/>
            <img src = {Group3} alt = "mob-1" className="page-2-img"/>
          </div>
        </div>

        <div className="page-3"> 
          <div className="page-3-width">
            <h1>Explore the Markets like it is your <span className="future">Playground.</span></h1>
            <p>Search for your favorite coins and stay ahead of the market</p>

            <img src = {Group4} alt = "mob" className="page-3-img"/>

            <button className="page-3-btn">EXPLORE MARKETS</button>
          </div>
        </div>

        <div className="page-4"> 
          <div className="page-4-width">
            <h1><span className="unlock">Unlock</span> New Frontiers.</h1>
            <p>Are you a stock trader looking for new oppurtunities to make money?We got you covered!</p>

            <div className="page-4-cont"> 
              <div className="page-4-each-box">
                <span className="page-4-top">Same</span>
                <span className="page-4-bottom">Strategies</span>
              </div>

              <div className="page-4-line"></div>

              <div className="page-4-each-box">
                <span className="page-4-top">Same</span>
                <span className="page-4-bottom">Indicators</span>
              </div>

              <div className="page-4-line"></div>

              <div className="page-4-each-box">
                <span className="page-4-top">Better</span>
                <span className="page-4-bottom">Leverage</span>
              </div>

              <div className="page-4-line"></div>

              <div className="page-4-each-box">
                <span className="page-4-top">24x7</span>
                <span className="page-4-bottom">Trading</span>
              </div>

            </div>

            <img src = {Group5} alt = "mob" className="page-4-img"/>
          </div>
        </div>


        <div className="page-5">
          <div className="page-5-width">
            <h1>Derivates made simple in <span className="unlock">3 Easy </span>Steps</h1>

            <div className="page-5-cont">
              <div className="page-5-each-cont">
                <div className="page-5-left">
                  <img src = {Page51l} alt = "mob" className="page-5-img"/>
                </div>
                <div className="page-5-right">
                  <img src = {Page51r} alt = "user" className="page-5-small-pic"/>
                  <p className="page-5-right-heading"> Create an Account</p>

                  <p className="page-5-right-para"> Register & Complete your Verification in less than 2 minutes</p>

                  <button className="page-5-btn">TRADE NOW</button>
                </div>
              </div>

              <div className="page-5-each-cont">
                <div className="page-5-left">
                  <img src = {Page52l} alt = "mob" className="page-5-img"/>
                </div>
                <div className="page-5-right">
                  <img src = {Page52r} alt = "user" className="page-5-small-pic"/>
                  <p className="page-5-right-heading"> Deposit Funds</p>

                  <p className="page-5-right-para"> Add funds quickly using a variety of payment methods</p>

                  <button className="page-5-btn">TRADE NOW</button>
                </div>
              </div>

              <div className="page-5-each-cont">
                <div className="page-5-left">
                  <img src = {Page53l} alt = "mob" className="page-5-img"/>
                </div>
                <div className="page-5-right">
                  <img src = {Page53r} alt = "user" className="page-5-small-pic"/>
                  <p className="page-5-right-heading"> Become a Trader</p>

                  <p className="page-5-right-para"> Choose your Trading pair and Trading Seamlessly</p>

                  <button className="page-5-btn">TRADE NOW</button>
                </div>
              </div>


            </div>
          </div>
        </div>

        <div className="page-6">
          <div className="page-6-width">
            <h1>Don't take our word for it.</h1>
            <p>Here it from our expert community of traders who have made insane amounts in a short amount of time</p>

            <div className="page-6-cont">
              <img src = {Page61} alt = "trader" className="page-6-pic"/>
              <img src = {Page62} alt = "trader" className="page-6-pic"/>
              <img src = {Page63} alt = "trader" className="page-6-pic"/>
            </div>
          </div>
        </div>


        <div className="page-7">
          <div className="page-7-bg"></div>

          <div className="page-7-width">
            <h1 className="page-7-heading">Trade Together. <span className="unlock">Thrive Together.</span></h1>
            <p className="page-7-para">Join the fun filled community on our platform.</p>

            <div className="page-7-cont"> 
                <div className="page-7-each-box">
                  <span className="page-4-top">10,000+</span>
                  <span className="page-4-bottom">Traders</span>
                </div>

                <div className="page-4-line"></div>

                <div className="page-7-each-box">
                  <span className="page-4-top">100Mn</span>
                  <span className="page-4-bottom">Daily Volume Traded</span>
                </div>

                <div className="page-4-line"></div>

                <div className="page-7-each-box">
                  <span className="page-4-top">Daily</span>
                  <span className="page-4-bottom">Trade Analysis</span>
                </div>

                <div className="page-4-line"></div>

                <div className="page-7-each-box">
                  <span className="page-4-top">Live</span>
                  <span className="page-4-bottom">Signals</span>
                </div>

              </div>

              <button className="page-7-btn">JOIN</button>
          </div>

          
        </div>

        <div className="page-gra">
          <div className="page-gra-density">
              <h1 className="page-gra-heading">Meet the visionaries behind <span className="future">Density.</span></h1>

              <div className="page-gra-pic-cont">
              {images.map((image, index) => (
                <GatsbyImage
                  key={index}
                  image={getImage(image)}
                  alt={`Image ${index + 1}`}
                />
              ))}
              </div>
          </div>

        </div>


        <div className="page-8">
          <div className="page-8-width">
            <div className="page-8-cont">
              <h1 className="page-8-heading">Get Started now.</h1>
                <img src = {Page8mob} alt = "page8mob" className="page-8-pic"/>
                <button className="page-8-btn">START TRADING!</button>
            </div>

            <div className="footer-cont">
              <img src= {Footer} alt = "footer" className="footer"/>
            </div>
          </div>
        </div>
      </div>
    )
}
