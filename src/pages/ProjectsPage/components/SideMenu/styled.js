import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";

export const Aside = styled.aside`
    position: fixed;
`;

export const Container = styled.div`
    height: 100vh;
    width: 300px;
    background-color: ${(props) => props.theme.colors.darkBlue};
    text-align: center;
    position: relative;
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
	&:hover{
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

export const UserName = styled.p`
    color: white;
    position: absolute;
    bottom: 10px;
    left: 30px;
`;

export const LogOutButton = styled.button`
    background-color: darkred;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 7px 20px;
    font-weight: bold;

    position: absolute;
    bottom: 10px;
    right: 30px;

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