import React from "react";
import { Container } from "./styled";
import Form from "./Form";

const AuthPage = () => {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });
    const [newUser, setNewUser] = React.useState({
        email: "",
        password: "",
        verifyPassword: "",
    });

    return (
        <Container>
            <Form
                user={user}
                setUser={setUser}
                newUser={newUser}
                setNewUser={setNewUser}
            />
        </Container>
    );
};

export default AuthPage;
