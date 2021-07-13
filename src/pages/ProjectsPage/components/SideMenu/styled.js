import styled from "styled-components";

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

export const List = styled.ul``;

export const ListItem = styled.li`
    color: white;
    margin-bottom: 15px;
`;

export const Form = styled.form`
    width: 80%;
    margin: 20px auto;
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    padding: 0 10px;
    border: none;
    border-radius: 5px;
    outline: none;
`;

export const Button = styled.button`
    width: 100%;
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    border-radius: 5px;
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
    border-radius: 5px;
    padding: 7px 20px;
    font-weight: bold;

    position: absolute;
    bottom: 10px;
    right: 30px;

    &:hover {
        cursor: pointer;
    }
`;
