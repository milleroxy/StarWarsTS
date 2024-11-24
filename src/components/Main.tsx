import Home from "./Home.tsx";
import AboutMe from "./AboutMe.tsx";
import StarWars from "./StarWars.tsx";
import Contact from "./Contact.tsx";
import {navItems} from "../utils/constants.ts";
import {useContext, useState} from "react";
import {HeroNameContext, SWContext} from "../utils/context.ts";
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import aboutMe from "./AboutMe.tsx";
import Header from "./Header.tsx";


const Main = () => {
return (
    <>
    <Routes>
        {['/', `/${navItems[0].path}`].map(path =>
            <Route path={path} key={path} element={<Home/>}/>)
        }
        {[`/${navItems[1].path}`, `/${navItems[1].path}/:heroID`].map(path =>
            <Route path={path} key={path} element={<AboutMe/>}
            />)
        }
        <Route path={`/${navItems[2].path}`} element={<StarWars/>}/>
        <Route path={`/${navItems[3].path}`} element={<Contact/>}/>
            <Route path={'*'} element={<ErrorPage/>}/>

    </Routes>
     </>
)
}

export default Main;