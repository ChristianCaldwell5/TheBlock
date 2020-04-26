import React from 'react';
import Head from 'next/head';
import Panel from '../components/login/loginPanel';
import Slogan from '../components/login/slogan';

export default function Index() {
    return (
      <div>
        <Head>
          <title>The Block</title>
          <link href="/static/css/general.css" rel="stylesheet" />
          <link href="/static/css/the-block-login.css" rel="stylesheet" />
          <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        </Head>
        <img id="tb-logo" src="../static/assets/TB - FlameLogo.png" alt="logo"></img>
        <div id="login-container">
          <Panel></Panel>
          <Slogan></Slogan>
        </div>
	      <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
        <script src="/static/utility_script/login.js"></script>
        <script src="/static/utility_script/utility.js"></script>
        <script src="https://js-cdn.music.apple.com/musickit/v1/musickit.js"></script>
        <script src="/static/apple-login/appleAuthorize.js"></script>
      </div>
    );
}
