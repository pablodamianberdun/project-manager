import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";

export const Aside = styled.aside`
    position: fixed;
    z-index: 9999;
`;

export const Container = styled.div`
    height: 100vh;
    width: 300px;
    padding-bottom: 60px;
    background-color: ${(props) => props.theme.colors.darkBlue};
    text-align: center;
    position: relative;
    overflow-y: auto;
`;

export const Title = styled.h1`
    color: lightblue;
    padding-top: 40px;
`;

export const Heading = styled.h2`
    color: white;
    margin-top: 50px;
    margin-bottom: 20px;
`;

export const List = styled.ul`
    text-align: center;
`;

export const ListItemButton = styled.button`
    background-color: ${(props) => props.theme.colors.darkBlue};
    color: white;
    display: block;
    margin: 0 auto 15px auto;
    border: none;
    font-size: 16px;
    &:hover {
        cursor: pointer;
    }
`;

export const Form = styled.form`
    width: 80%;
    margin: 20px auto;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: none;
    outline: none;
    margin-bottom: 10px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 20px;
    border: none;
    background-color: ${(props) => props.theme.colors.lightBlue};
    color: white;
    &:hover {
        cursor: pointer;
    }
`;

export const MenuIcon = styled(MdMenu)`
    font-size: 40px;
    color: ${(props) => props.theme.colors.darkBlue};
    &:hover {
        cursor: pointer;
    }
    position: absolute;
    top: 10px;
    left: 10px;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const CloseIcon = styled(MdClose)`
    font-size: 40px;
    &:hover {
        cursor: pointer;
    }
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    @media (min-width: 768px) {
        display: none;
    }
`;

export const NoProjectsMessage = styled.p`
    color: white;
`;
