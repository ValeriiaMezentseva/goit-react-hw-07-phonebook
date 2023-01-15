import { LoaderBox, ThreeDotsBtn, SpinnerBtn  } from './Loader.styled';

export const Loader = () => {
    return (
        <LoaderBox>
            <ThreeDotsBtn color='#4287f5'/>
        </LoaderBox>
    )
};

export const LoaderSpinner = () => {
    return (
        <LoaderBox>
            <SpinnerBtn color='#4287f5' />
        </LoaderBox>
    )
};