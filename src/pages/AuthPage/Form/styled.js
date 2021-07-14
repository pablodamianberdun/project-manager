import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0.125rem 0.625rem 0 rgb(0 0 0 / 20%);
    padding: 20px;
    border-radius: 1rem;
`;

export const FormContainer = styled.div``;

export const Title = styled.h3`
    text-align: center;
    margin-bottom: 20px;
`;

export const FormElement = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 80%;
    width: 300px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: solid 2px #ccc;
    outline: none;
    margin-bottom: 20px;
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    border-radius: 20px;
    font-weight: bold;
    background-color: ${(props) => props.theme.colors.darkBlue};
    color: ${(props) => props.theme.colors.light};
    padding: 10px;
    &:hover {
        cursor: pointer;
    }
`;

export const Text = styled.p`
    margin-bottom: 10px;
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.colors.blue};

    &:hover {
        color: ${(props) => props.theme.colors.darkBlue};
        text-decoration: underline;
    }
`;
