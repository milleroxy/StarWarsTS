import {characters, defaultHero} from "./constants.ts";
import {useParams} from "react-router-dom";
import {ComponentType, useContext, useEffect} from "react";
import {SWContext} from "./context.ts";
import ErrorPage from "../components/ErrorPage.tsx";

interface Props {
    heroId: string
}

export const herroWrapper = (WrappedComponent: ComponentType<Props>) => (props: object) => {
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


