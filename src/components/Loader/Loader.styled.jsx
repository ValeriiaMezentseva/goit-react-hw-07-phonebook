import styled from "@emotion/styled";
import { ThreeDots } from 'react-loader-spinner';
import {FiLoader} from 'react-icons/fi';

export const LoaderBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 80px;
height: 20px;
`;

export const ThreeDotsBtn = styled(ThreeDots)`
    width: 100%;
    height: 100%;
`

export const SpinnerBtn = styled(FiLoader)`
    width: 40px;
    height: 25px;
`