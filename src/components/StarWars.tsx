import {starWarsInfo} from "../utils/constants.ts";
import {herroWrapper} from "../utils/hoc.tsx";

const StarWars = () => {
    return (
        <div className={'text-[2em] text-justify tracking-[.2em] leading-normal'}>
            {starWarsInfo}
        </div>
    )
};

export default herroWrapper(StarWars);