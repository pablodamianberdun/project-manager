import styled from "styled-components";
import { MdEdit, MdDelete } from "react-icons/md";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        margin-left: 0;
    }
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto 30px auto;
    text-align: center;
    padding: 20px;
    margin-top: 80px;
    width: 40%;
    border: solid 1px #eee;
    box-shadow: 0 2px 2px #ccc;
    border-radius: 10px;

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;

export const Label = styled.label`
    width: 20%;
`;

export const Input = styled.input`
    width: 50%;
    padding: 10px;
    border-radius: 20px;
    border: 2px solid #ccc;
    outline: none;
`;

export const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.darkBlue};
    color: white;

    &:hover {
        cursor: pointer;
    }
`;

export const Heading = styled.h3`
    margin-bottom: 20px;
`;

export const List = styled.ul`
    width: 80%;

    @media screen and (min-width: 768px) {
        width: 60%;
    }
`;

export const ListItem = styled.li`
    list-style: none;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: ${(props) => props.theme.colors.blue};
    color: white;
    display: flex;
    justify-content: space-between;
`;

export const Flex = styled.div`
    display: flex;
`;

export const Text = styled.p`
    margin-left: 10px;
`;

export const EditIcon = styled(MdEdit)`
    margin-right: 10px;
    &:hover {
        cursor: pointer;
        color: dodgerblue;
    }
`;

export const DeleteIcon = styled(MdDelete)`
    &:hover {
        cursor: pointer;
        color: red;
    }
`;

export const CheckBoxStyles = {
    fontSize: "20px",
    cursor: "pointer",
};
