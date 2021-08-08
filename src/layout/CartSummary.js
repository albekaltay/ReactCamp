import React from 'react';
import {Button, Dropdown, DropdownItem, Icon, Label} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

function CartSummary() {
    return (
        <div>
            <Dropdown style={{marginTop: '0.5em'}} item text='Sepetiniz'>
                <Dropdown.Menu>
                    <Dropdown.Item>Acer Laptop</Dropdown.Item>
                    <Dropdown.Item>Asus Laptop</Dropdown.Item>

                    <Dropdown.Divider></Dropdown.Divider>


                    <Dropdown.Item as={NavLink} to="/cart-detail"> <Icon name='shopping cart'/> Sepete
                        Git</Dropdown.Item>


                </Dropdown.Menu>
            </Dropdown>

        </div>
    );
}

export default CartSummary;