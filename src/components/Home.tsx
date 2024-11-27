import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import FarGalaxy from "./FarGalaxy.tsx";
import {herroWrapper} from "../utils/hoc.tsx";

const Home = () => {
    return (
        <main>
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    )
};

export default herroWrapper(Home);