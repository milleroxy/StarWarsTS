import {characters, defaultHero} from "./constants.ts";
import {useParams} from "react-router-dom";
import {ComponentType, useContext, useEffect} from "react";
import {SWContext} from "./context.ts";
import ErrorPage from "../components/ErrorPage.tsx";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;

//Дженерик т.к. типизация отложенного типа. мы не знаем какой будет тип

export const herroWrapper = <T extends object>(Component: ComponentType<T>) => (props: T) => {
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        if(!characters[heroId]) {
            changeHero('ERROR');
        }  else {
        changeHero(heroId);
    }}, [heroId, changeHero]);

    return characters[heroId] ? (
        <Component {...props} heroId={heroId} />
    ) :<ErrorPage/>
}


