import React from 'react';
import {Dropdown, Icon, Label} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

function CartSummary() {

    const {cartItems} = useSelector(state => state.cart)

    return (
        <div>
            <Dropdown style={{marginTop: '0.5em',marginRight: '1em'}} item text='Your Cart'>
                <Dropdown.Menu>

                    {
                        cartItems.map((cartItem) => (

                            <Dropdown.Item>
                                {cartItem.product.productName}
                                <Label
                                    style={{marginLeft: "1.5em"}}>{cartItem.quantity}
                                </Label>
                            </Dropdown.Item>

                        ))
                    }

                    <Dropdown.Divider></Dropdown.Divider>


                    <Dropdown.Item as={NavLink} to="/cart-detail"> <Icon name='shopping cart'/> Go To Cart</Dropdown.Item>


                </Dropdown.Menu>
            </Dropdown>

        </div>
    );
}

export default CartSummary;