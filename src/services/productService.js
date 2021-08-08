import axios from "axios";

export default class ProductService{
    getProducts(){
        return axios.get("https://localhost:44314/api/products/getall")


    }
    getProductsById(productId){
        return axios.get("https://localhost:44314/api/products/getbyid?id="+productId)
    }
}