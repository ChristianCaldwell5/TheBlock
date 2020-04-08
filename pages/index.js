import React from 'react';
import Head from 'next/head';
import Panel from '../components/login/loginPanel';
import Slogan from '../components/login/slogan';

export default function Index() {
    return (
      <div>
        <Head>
          <title>The Block</title>
          <link href="/static/general.css" rel="stylesheet" />
          <link href="/static/the-block-login.css" rel="stylesheet" />
	  
        </Head>
        <img id="tb-logo" src="../static/assets/TB - FlameLogo.png" alt="logo"></img>
        <div id="login-container">
          <Panel></Panel>
          <Slogan></Slogan>
        </div>
        <script src="/static/utility_script/login.js"></script>
        <script src="/static/utility_script/utility.js"></script>
	<script src="/static/spotify/functions/login.js"></script>
	<script src="/static/spotify/functions/app.js"></script>
      </div>
    );
}
