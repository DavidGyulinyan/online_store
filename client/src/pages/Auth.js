import React, {useContext, useState} from 'react';
import {Button, Card, Col, Container, Form, FormControl} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/constants";
import {Link, useLocation} from "react-router-dom";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
        }catch(e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Login" : "Registration"}</h2>
                <Form className="d-flex flex-column">
                    <FormControl
                        className="mt-3"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <FormControl
                        className="mt-3"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Col className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ? <div>
                                No account?
                                <Link className="mx-2" to={REGISTRATION_ROUTE}>
                                    Register now!
                                </Link>
                            </div>
                            :
                            <div>
                                Registered?
                                <Link className="mx-2" to={LOGIN_ROUTE}>
                                    Login now!
                                </Link>
                            </div>
                        }
                        <Button
                            variant="outline-success"
                            onClick={click}
                        >
                            {isLogin ? "Login" : "Register"}
                        </Button>
                    </Col>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
