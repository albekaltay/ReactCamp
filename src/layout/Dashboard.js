import React from 'react';
import {Button, Container, Grid, GridColumn, GridRow, Icon, Label} from "semantic-ui-react";
import Categories from "./Categories";
import Navi from "./Navi";
import ProductList from "../pages/ProductList";
import {Route} from "react-router";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import {ToastContainer} from "react-toastify";

function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>

            <Navi></Navi>

            <Container className="main">
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Categories></Categories>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Route exact path="/" component={ProductList}></Route>
                            <Route exact path="/products" component={ProductList}></Route>
                            <Route path="/products/:id" component={ProductDetail}></Route>
                            <Route path="/cart-detail" component={CartDetail}></Route>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>

        </div>
    );
}

export default Dashboard;