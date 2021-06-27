import styled from 'styled-components';

type InputContainerInterface = {
  bottom?: boolean;
};
export const Label = styled.label`
    width: 100%;
    height: 28px;
    margin: 0 0 16px;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #51565a;
    @media (max-width: 796px) {
      font-size: 12px;
      margin: 0 0 8px;
    }
`

export const InputContainer = styled.div<InputContainerInterface>`
    width: 100%;
    margin: 16px 0;
    margin-bottom: ${({ bottom }) => bottom? "50px" : "16px"}; 
    height: 80px; 
    background: #fff;
    display: flex;
    align-items: center;
    border: solid 3px #b4c5ce;
    border-radius: 8px;
    padding: 26px 10px 26px 27px;
    & > input {
      flex: 1;
      width: 100%;
      border: none;
      font-size: 24px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #51565a;
      caret-color: #00b303;
      &:hover, &:focus {
        outline: none;
        border: none;
      }
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px #fff inset;
      }

      &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: #b4c5ce;
      }
      &::-moz-placeholder { /* Firefox 19+ */
        color: #b4c5ce;
      }
      &:-ms-input-placeholder { /* IE 10+ */
        color: #b4c5ce;
      }
      &:-moz-placeholder { /* Firefox 18- */
        color: #b4c5ce;
      }
    }
    & > svg {
      width: 26px;
      height: 20px;
      margin: 4px 24px 4px 0;
      object-fit: contain;
    }
    &:hover {
      outline: none;
      border: solid 3px #00b303;
      svg {
        & > path {
          fill: #00b303
        }
      }
    }
  @media (max-width:  796px) {
      height: 40px;
      margin-bottom: ${({ bottom }) => bottom? "25px" : "16px"}; 
      & > input {
        font-size: 12px;
        font-weight: 300;
      }
      & > svg { 
        width: 13px;
        height: 13px;
      }
  } 
`;

