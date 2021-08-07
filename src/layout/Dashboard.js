import React from 'react';
import {Button, Container, Grid, GridColumn, GridRow, Icon, Label} from "semantic-ui-react";
import Categories from "./Categories";
import Navi from "./Navi";
import ProductList from "../pages/ProductList";

function Dashboard() {
    return (
        <div>

            <Navi></Navi>

            <Container className="main">
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories></Categories>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <ProductList></ProductList>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>

        </div>
    );
}

export default Dashboard;