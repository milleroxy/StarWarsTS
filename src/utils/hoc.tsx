import {characters, defaultHero} from "./constants.ts";
import {useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {SWContext} from "./context.ts";
import ErrorPage from "../components/ErrorPage.tsx";

export const herroWrapper =WrappedComponent => props => {
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        if(!characters[heroId]) {
            return;
        }
        changeHero(heroId);
    }, [heroId])
    return characters[heroId] ? (
        <WrappedComponent {...props} heroId={heroId} />
    ) :<ErrorPage/>
}


