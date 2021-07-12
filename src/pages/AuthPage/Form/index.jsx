import React from "react";
import {
    Container,
    Title,
    FormElement,
    Input,
    Button,
    FormContainer,
    Text,
    Link,
} from "./styled";

const LogIn = ({ setShowForm, user, setUser }) => {
    const { email, password } = user;

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    };

    return (
        <FormContainer>
            <Title>Log in</Title>
            <FormElement onSubmit={handleSubmit}>
                <Input
                    value={email}
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    autoComplete="off"
                />
                <Input
                    value={password}
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <Text>
                    No account?{" "}
                    <Link onClick={() => setShowForm("sign-up")} href="#">
                        Create one!
                    </Link>
                </Text>
                <Button type="submit">Log in</Button>
            </FormElement>
        </FormContainer>
    );
};

const SignUp = ({ setShowForm, newUser, setNewUser }) => {
    const { email, password, verifyPassword } = newUser;

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newUser);
    };

    return (
        <FormContainer>
            <Title>Sign Up</Title>
            <FormElement onSubmit={handleSubmit}>
                <Input
                    value={email}
                    name="email"
                    type="email"
                    placeholder="Email"
                    autoComplete="username"
                    onChange={handleChange}
                />
                <Input
                    value={password}
                    name="password"
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    onChange={handleChange}
                />
                <Input
                    value={verifyPassword}
                    name="verifyPassword"
                    type="password"
                    placeholder="Verify Password"
                    autoComplete="new-password"
                    onChange={handleChange}
                />
                <Text>
                    Are you already registered?{" "}
                    <Link onClick={() => setShowForm("log-in")} href="#">
                        Log in!
                    </Link>
                </Text>
                <Button type="submit">Sign Up</Button>
            </FormElement>
        </FormContainer>
    );
};

const Form = ({ user, setUser, newUser, setNewUser }) => {
    const [showForm, setShowForm] = React.useState("log-in");

    return (
        <Container>
            {showForm === "log-in" ? (
                <LogIn
                    setShowForm={setShowForm}
                    user={user}
                    setUser={setUser}
                />
            ) : null}
            {showForm === "sign-up" ? (
                <SignUp
                    setShowForm={setShowForm}
                    newUser={newUser}
                    setNewUser={setNewUser}
                />
            ) : null}
        </Container>
    );
};

export default Form;
