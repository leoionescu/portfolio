import React from "react";
import AnimatedText from "./AnimatedText";
import Card from "./Card";

const Portfolio = () => {
  return (
    <div className="py-16">
      <div className="justify-center mx-4 md:mx-20 lg:mx-40">
        <div className="flex justify-center">
          <AnimatedText
            classProps="text-6xl font-mono font-semibold text-center text-white pb-16"
            text="Portfolio"
            animation="slide-up"
          ></AnimatedText>
        </div>
        <div className="flex flex-col items-center">
          <Card
            classProps="opacity-0 slide-right w-full"
            time="2022"
            title="Business Video Conference Application"
            technologies="React Node.js Express.js Socket.io PostgreSQL REST"
            text="Developed a working peer to peer video conference app.\n
            The app allows for the following functionality: creating an account, creating new contacts and adding them to your personal contact list where you can call them at any time, creating video conference rooms, joining a room by accessing its URL, screen sharing.\n
            The app consists of two parts:\n
            ◦ frontend application built using React\n
            ◦ server application built using Node.js.\n
            All data such as: accounts and contact lists is stored in a PostgreSQL database on the server and accessed through a REST APIs.\n
            All of the video and audio data is sent from peer to peer without any of it reaching the server. The server is only used to establish the WebSocket connections between peers. For communication, the Socket.io library is used.\n
            Github repository: https://github.com/leoionescu/licenta
            "
          ></Card>
          <Card
            classProps="opacity-0 slide-right w-full"
            time="2023"
            title="Implemented a Public Blockchain System"
            technologies="Java MongoDB Maven"
            text="◦ Established the fundamental structure of blocks, including unique block hashes, referencing previous block hashes, timestamps, transactions with sender and recipient addresses, nonces, and Merkle roots.\n
            ◦ Used cryptographic hashing algorithms, particularly SHA-256, to calculate block and transaction hashes. These algorithms served as the foundation for security, verification, and consensus within the network.\n
            ◦ Included a proof-of-work mechanism to secure the network, control block creation rates, and achieve consensus. We defined target difficulties, crafted block headers, and employed the SHA-256 hash function to validate mined blocks, enhancing the decentralization and security of the blockchain.\n
            ◦ Detailed the steps involved in executing transactions within the blockchain, including creation, verification, propagation, inclusion in blocks, and validation. \n
            ◦ Designed a local network for nodes to interact, exchange transactions, blocks, and synchronize their blockchain versions.\n 
            ◦ Developed a synchronization mechanism to ensure new nodes join the network with the latest valid blockchain version.\n
            Github repository: https://github.com/leoionescu/Public-Blockchain"
          ></Card>
          <Card
            classProps="opacity-0 slide-left w-full"
            time="2020 - 2021"
            title="Music Streaming App for Android (Spotify Clone)"
            technologies="Android Java Firebase"
            text="◦ Leveraging the Deezer API, the app pulls real-time chart data, providing users with a wide range of music options.\n
            ◦ The integration of YouTube functionality allows seamless song playback with or without video.\n
            ◦ The app's playlist creation, recommendation, shuffle, repeat, and queue management features ensure a tailored music experience.\n
            Github repository: https://github.com/leoionescu/Spotify-Clone-Android\n
            Live Demo available at: https://appetize.io/app/w5iuqq7xxu56x5am2iijgnrjxq?device=pixel4&osVersion=11.0&scale=75"
          ></Card>
          <Card
            classProps="opacity-0 slide-right w-full"
            time="2023"
            title="Portfolio"
            technologies="React Tailwind CSS"
            text="This is the page that you are currently browsing.\n
            Github repository: https://github.com/leoionescu/portfolio"
          ></Card>
          <Card
            classProps="opacity-0 slide-right w-full"
            time="2021"
            title="JavaScriptMusicPlayer"
            technologies="JavaScript HTML CSS"
            text="This app is built using vanilla javascript, html and css and its main goal is to play different songs. You can play, skip, shuffle, change the volume or go to the previous song. If ran in Google Chrome, the app shows a sinewave graph of the audio currently playing.\n
            Github repository: https://github.com/leoionescu/JavaScriptMusicPlayer\n
            Live Demo available at: https://festive-kowalevski-d3642a.netlify.app/\n"
          ></Card>
          <Card
            classProps="opacity-0 slide-right w-full"
            time="2021"
            title="ChartsForEuropeanCountries"
            technologies="JavaScript HTML CSS"
            text="This app shows bar charts and bubble charts for GDP, Life Expectancy and Population in European
            Countries between 2005 and 2019 and the evolution of these indicators through an animated bubble chart.\n
            Github repository: https://github.com/leoionescu/ChartsForEuropeanCountries\n
            Live Demo available at: https://goofy-jang-dae835.netlify.app\n
            The app fetches data from: https://ec.europa.eu/eurostat\n"
          ></Card>
          <Card
            classProps="opacity-0 slide-right w-full"
            time="2018"
            title="Taka's Adventure"
            technologies="Java Greenfoot"
            text="This is a 2D platformer game, built in Java using Greenfoot, where you will help Taka collect all the diamonds and get home, while
            surviving the angry skeletons that attack him every time he gets near them.\n
            Github repository: https://github.com/leoionescu/Taka-s-Adventure\n
            Live Demo available at: https://www.greenfoot.org/scenarios/29255"
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
