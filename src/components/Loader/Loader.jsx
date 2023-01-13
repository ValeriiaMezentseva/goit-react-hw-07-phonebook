import { ThreeDots } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

const Loader = () => {
    return (
        <LoaderBox>
            <ThreeDots color="#4287f5" height={80} width={80} />
        </LoaderBox>
    )
};

export default Loader; 