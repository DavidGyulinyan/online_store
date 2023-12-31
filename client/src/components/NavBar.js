import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/constants";
import {observer} from "mobx-react-lite";
import {Link, useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Link style={{color: 'white'}} to={SHOP_ROUTE}>Buy Device</Link>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            onClick={() => navigate(ADMIN_ROUTE)}
                            variant={'outline-light'}
                        >
                            Admin panel
                        </Button>
                        <Button
                            onClick={() => logOut()}
                            variant={'outline-light'}
                            style={{marginLeft: "20px"}}
                        >
                            Log out
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={'outline-light'}
                            onClick={() => navigate(LOGIN_ROUTE)}>Login</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
})

export default NavBar;
