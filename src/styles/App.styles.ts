import styled from "styled-components";
import BackgroundImage1 from '../images/signin/image.png';
import BackgroundImage2 from '../images/signin/image2.png';
import LogoImg from '../images/logo.png';
import LogoImgMobile from '../images/logo2.png';


type SpaceInterface = {
    height?: string;
};
export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 0 1px 50px;
    @media (max-width: 796px) {
       flex-direction: column;
       padding: 30px 0 0;
    } 
`;



export const SigninFormWrapper = styled.div`
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 796px) {
        width: 50%;
        align-items: flex-start;
    } 
`;

export const SigninBackgroundImage = styled.div`
    width: 100%;
    height: 600px;
    background-image: url(${BackgroundImage2});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat; 
    @media (min-width:  796px) {
        background-image: url(${BackgroundImage1}); 
        width: 50%;
        height: auto;
    } 
`;

export const Logo = styled.div`
    background-image: url(${LogoImg});
    width: 199px;
    height: 43px;
    margin: 50px 395px 108px 0;
    object-fit: contain;
    @media (max-width:  796px) {
        background-image: url(${LogoImgMobile});
        width: 97.2px;
        height: 21px;
        margin: 0  auto 50px;
        object-fit: contain;
    } 
`;

export const SignInTitle = styled.h1`
    max-width: 544px;
    width: 100%;
    height: 75px;
    margin: 0 0 60px;
    font-size: 64px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #51565a;
    @media (max-width: 796px) {
        margin: 0 0 29.5px;
        font-size: 32px;
        height: 38px;
    }
`;

export const FormSection = styled.form`
     width: 100%;
     max-width: 544px;
     
`

export const Space = styled.div<SpaceInterface>`
    height: ${({ height }) => `${height}px` || "10px"};
`;

export const SubmitButton = styled.button`
    width: 100%;
    margin: 50px 0 228px 0;
    padding: 27px 0 25px;
    border-radius: 8px;
    background-color: #00b303;
    font-family: Roboto;
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    border: none;
    cursor: pointer;
    @media (max-width:  796px) {
        height: 40px;
        margin: 25px 0;
        padding: 13.5px 0 12.5px;
        border-radius: 4px;
        font-size: 12px;
    }
`

export const ForgotPassord  = styled.p`
    width: 100%;
    height: 16px;
    margin: 16px 0 0;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #8299b0;
    @media (max-width:  796px) {
        font-size: 7px;
    }
`