import React from 'react';
import Head from 'next/head';
import Navbar from '../components/nav';
import Spacer from '../components/spacer';
import Footer from '../components/footer';
import Echarts from '../components/explore/echarts';

export default function Explore() {
    return(
        <div>
            <Head>
                <title>The Block - Home</title>
                <link href="/static/css/general.css" rel="stylesheet" />
                <link href="/static/css/the-block-login.css" rel="stylesheet" />
                <link href="/static/css/the-block-nav.css" rel="stylesheet" />
                <link href="/static/css/home.css" rel="stylesheet" />
                <link href="/static/css/charts.css" rel="stylesheet" />
                <link href="/static/css/account.css" rel="stylesheet" />
                <link href="/static/css/explore.css" rel="stylesheet" />
                <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            </Head>
            <Spacer></Spacer>
            <Navbar></Navbar>
            <span id='explore-page'>Explore:</span>
            <Echarts></Echarts>
            <Footer></Footer>
        </div>
    )
}
