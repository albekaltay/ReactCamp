import React, {useEffect, useState} from 'react';
import CartSummary from "./CartSummary";
import {Container, Dropdown, Menu} from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import {useHistory} from "react-router";

function Navi() {

    const [isAutenticated, setIsAutenticated] = useState(false);

    const history = useHistory()

    function  handleSignedOut(){

        setIsAutenticated(false)
        history.push("/")
    }

    function  handleSignedIn(){

        setIsAutenticated(true)
    }


    return (
        <div>
            <Menu inverted fixed="top">
                <Container>

                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />

                    <Menu.Menu position='right'>

                        <CartSummary></CartSummary>

                        {
                            isAutenticated?<SignedIn signOut={handleSignedOut}></SignedIn>: <SignedOut signIn={handleSignedIn}></SignedOut>

                        }



                    </Menu.Menu>


                </Container>


            </Menu>
        </div>
    );
}

export default Navi;