import React from 'react';
import Head from 'next/head';
import Navbar from '../components/nav';
import Spacer from '../components/spacer';
import Charts from '../components/home/charts';
import Footer from '../components/footer';

export default function About() {
  return (
    <div>
      <Head>
        <title>The Block - Home</title>
        <link href="/static/css/general.css" rel="stylesheet" />
        <link href="/static/css/the-block-login.css" rel="stylesheet" />
        <link href="/static/css/the-block-nav.css" rel="stylesheet" />
        <link href="/static/css/home.css" rel="stylesheet" />
        <link href="/static/css/charts.css" rel="stylesheet" />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      </Head>
      <Spacer></Spacer>
      <Navbar></Navbar>
      <div id="home-info">
        <img id="home-infoimg" src="../static/assets/studio.v1.jpg" alt="studio"></img>
        <div id="info-wrapper">
          <h1 id="home-header">The Block</h1>
          <span id="home-header-secondary">- Where music discovery happens -</span>
          <div id="banner">
            <div className="banner-element-l">
              <i className="fa fa-search banner-icon"></i>
              <span className="banner-title">Advanced Search</span>
              <hr></hr>
              <p className="banner-desc">
                The Block is proud to offer advanced search filters which provide our users to find music they will be most interested in.
              </p>
            </div>
            <div className="banner-element-m">
              <i className="banner-hide"></i>
              <i className="fa fa-music banner-icon"></i>
              <span className="banner-title">Find New Music</span>
              <hr></hr>
              <p className="banner-desc">
                Thousands of users find new music daily. From our top charts, to our advanced filters, it is impossible not to find new music. Jump in!
              </p>
            </div>
            <div className="banner-element-r">
              <i className="fa fa-users banner-icon"></i>
              <span className="banner-title">Personalized Touch</span>
              <hr></hr>
              <p className="banner-desc">
                The Block incorporates a substantial amount of account settings to fine tune your search experience. Try setting them today!
              </p>
            </div>
          </div>
          <h2 id="top-charts">Our Music Charts</h2>
          <span id="bouncy-wrap"><i className="fa fa-arrow-down bouncy-arrow"></i></span>
        </div>
      </div>
      <span id='top-ten'>TOP 10 SONGS</span>
      <Charts></Charts>
      <Footer></Footer>
      <script src="/static/utility_script/utility.js"></script>
    </div>
  );
}