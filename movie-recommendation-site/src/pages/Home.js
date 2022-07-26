import React, { useState, useEffect, Fragment } from 'react';
import Titlebar from "../components/Titlebar";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BoxesBoard from "../components/BoxesBoard";
import background from '../images/phantomthread.png';


export default function App() {
    const [search, setSearch] = React.useState(0);
    return (
        <div>

            <Header search={search} setSearch={setSearch} />
            <Titlebar image={background} firstline={"Find out what movies you're into"}
                secondline={"Look up movie details, cast, crew, reviews and more."}
                movieTitle={"Phantom Thread"} movieYear={2017} top={'0px'} height={'50px'} />
            < Search state={search} setState={setSearch} page={window.location.href} />
            <BoxesBoard />
            <Footer />

        </div>
    );
}