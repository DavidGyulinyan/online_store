import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {SHOP_ROUTE} from "../utils/constants";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)

    return (
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Link style={{color: 'white'}} to={SHOP_ROUTE}>Buy Device</Link>
                    {user.isAuth ?
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button variant={'outline-light'}>Admin panel</Button>
                            <Button variant={'outline-light'} style={{marginLeft:"20px"}}>Log in</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button
                                variant={'outline-light'}
                                onClick={() => user.setIsAuth(true)}>Authorization</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
    );
})

export default NavBar;
