import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {ChangeEvent, useState} from "react";
import {characters, defaultHero} from "./utils/constants.ts";
import {SWContext} from "./utils/context.ts";


function App() {
    const [hero, setHero] = useState(defaultHero);

    const changeHero = (newHero: string) => {
        if (characters[newHero]) {
            setHero(newHero);
        } else {
            setHero('ERROR');
        }
    };

    return (
        <>
            <SWContext.Provider value ={{
                hero, changeHero: setHero
            }}>
                <Header />
                <Main/>
                <Footer/>
            </SWContext.Provider>
        </>
    )
}

export default App