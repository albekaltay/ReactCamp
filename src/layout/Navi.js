import React from 'react';
import CartSummary from "./CartSummary";
import {Button, Container, Dropdown, Menu} from "semantic-ui-react";

function Navi() {
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

                              <Menu.Item>
                                  <Button primary>Sign Up</Button>
                              </Menu.Item>
                          </Menu.Menu>








                </Container>


            </Menu>
        </div>
    );
}

export default Navi;