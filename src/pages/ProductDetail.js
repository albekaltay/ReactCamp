import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from "../services/productService";


function ProductDetail() {
    let {id} = useParams()

    const [product , setProduct] = useState({});

    useEffect(() => {
            let productService = new ProductService()
            productService.getProductsById(id).then(result => setProduct(result.data.data))
        },[]

    )

    return (
        <div>

            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>{product.productName}</Card.Header>
                        <br/>
                        <Card.Meta >Price: {product.unitPrice} $</Card.Meta>
                        <br/>
                        <Card.Description style={{marginRight: '3em'}}> <strong>{product.unitsInStock + " "}</strong>
                             Left In Stock!!
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>


            </Card.Group>
        </div>
    );
}

export default ProductDetail;