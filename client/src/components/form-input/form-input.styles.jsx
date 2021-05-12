import styled, { css } from 'styled-components';


const SubColor = css`
    grey
`;

const MainColor = css`
    black
`;

export const FormInputGroup = styled.div`
    position: relative;
    margin: 45px 0;
`;

const ShrinkLabel = css`
    top: -14px;
    font-size: 12px;
    color: ${MainColor};
`;

const getShrink = props => {
    if (props.value.length) {
        return ShrinkLabel;
    }
}

export const FormInputLabelContainer = styled.label`
    color: ${SubColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    ${getShrink}
`;

const getType = props => {
    if (props.type === 'password') {
        return css`letter-spacing: 0.3em;`;
    }
}

export const FormInputContainer = styled.input`
    background: none;
    background-color: white;
    color: ${SubColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${SubColor};
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ ${FormInputLabelContainer} {
      ${ShrinkLabel}
    }

    ${getType}
`;