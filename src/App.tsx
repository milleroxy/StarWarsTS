import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {HeroNameContext} from "./utils/context.ts";


function App() {
    const [heroName, setHeroName] = useState('Star Wars');

    return (
        <HeroNameContext.Provider value={{heroName, setHeroName }}>
            <Header/>
            <Main/>
            <Footer/>
        </HeroNameContext.Provider>
    )
}

export default App