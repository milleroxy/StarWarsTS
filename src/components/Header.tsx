import Navigation from "./Navigation.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {characters} from "../utils/constants.ts";

const Header = () => {
    const{hero} = useContext(SWContext);
    const heroName = characters[hero]?.name || 'ERROR';

    return (
        <header className="bg-grey-color rounded-t-2xl">
            <Navigation/>
            <h1 className="text-center py-6 text-3xl">{heroName}</h1>
        </header>
    );
};

export default Header;