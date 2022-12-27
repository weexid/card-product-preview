import styled from "styled-components";
import Imagedesktop from '../../assets/img/img-desktop.jpg';
import ImageMobile from '../../assets/img/img-mobile.jpg';
export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const Card = styled.div`
    width: 600px;
    height: auto;
    /* border: 1px solid hsl(228, 20%, 90%); */
    margin: 20px auto;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 375px) {
        flex-direction: column;
        width: 300px;
        height: 600px;
    }
    
`;


export const ImageContainer = styled.div`
    width: 300px;
    height: 100%;
    background-image: url(${Imagedesktop});
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 375px) {
        background-image: url(${ImageMobile});
        width: 100%;
    }
`;


export const ContentContainer = styled.div`
    width: 300px;
    padding: 30px;
`;

export const CardCategory = styled.h2`
    font-family: var( --montserrat-font-family);
    font-size: .75rem;
    letter-spacing: .2rem;
    color: var(--dark-grayish-blue);
    font-weight: normal;
    margin-top: .5rem;
`;

export const CardTitle = styled.h1`
    margin-top: .9rem;
    font-family: var(--fraunces-font-family);
    color: var(--very-dark-blue)
`;

export const CardDescription = styled.p`
    margin-top: .9rem;
    font-size: var(--body-p-fs);
    font-family: var( --montserrat-font-family);
    color: var(--dark-grayish-blue);

`;

export const ProductPriceContainer = styled.div`
    margin-top: 1.2rem;
    display: flex;
    align-items:center;
    justify-content: start;
    gap: 1rem;
`;

export const RealPrice = styled.span`
    font-family: var(--fraunces-font-family);
    font-size: 1.8rem;
    color: var(--dark-cyan);
`;

export const FakePrice = styled.span`
    font-size: .7rem;
    font-family: var( --montserrat-font-family);
    color: var(--dark-grayish-blue);
    text-decoration: line-through;
`;

export const CardButton = styled.button`
    margin-top: 1.3rem;
    background: var(--dark-cyan);
    width: 100%;
    height: 50px;
    outline: none;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: .8rem;
    color: var(--white);
    font-weight: bold;
    font-family: var( --montserrat-font-family);

    &:hover{
        background-color: hsl(156, 42%, 18%);
    }

`;