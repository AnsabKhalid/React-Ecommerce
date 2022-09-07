import React, { Component } from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Filter from "../../stateless/filter/Filter"
import Cars from "../../stateless/cars/Cars"
import Cart from "../../stateless/cart/Cart"
import Button from "../../stateless/button/Button"
import Form from "../../stateless/form/Form"
import data from "../../../data.json"
import styles from "../home/Home.module.css"

class Home extends Component {

    state = {
        items: data.items,
        brand: "",
        sort: "",
        cartItems : localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
        isFormOpen : false
    }

    filterItemHandler = (event) => {
        // console.log(event.target.value)
        
        const brand = event.target.value
        if (brand === "") {
            this.setState({
                brand,
                items : data.items
            })
        } else {
            this.setState({
                brand,
                items : data.items.filter(
                    item => item.brand.indexOf(brand) >= 0
                )
            })
        }
    }

    sortItemHandler = (event) => {
       // console.log(event.target.value)

       const sort = event.target.value

       this.setState({
           sort,
           items : this.state.items.slice().sort((a, b) => (
               sort === "Lowest-rate"
                    ? a.price > b.price 
                    ? 1 : -1
                : sort === "Highest-rate"
                    ? a.price < b.price 
                    ? 1 : -1
                : a._id > b._id
                    ? 1 : -1
           ))
       })

       // another method of sort in react
    //    this.setState({
    //     sort,
    //     items : this.state.items.slice().sort((a, b) => (
    //         sort === "Lowest-rate"
    //              ? a.price - b.price
    //          : sort === "Highest-rate"
    //              ? b.price - a.price
    //          : a._id > b._id
    //              ? 1 : -1
    //     ))
    // })
    }

    addToCartHandler = (item) => {
        // console.log(`the id of selected element is ${item._id} and brand is ${item.brand}`)

        const cartItems = this.state.cartItems.slice();

        let insideCart = false;

        cartItems.forEach(pieces => {
            if (pieces._id === item._id) {
                pieces.count++;
                insideCart = true
            }
        })

        if (!insideCart) {
            cartItems.push({...item, count : 1})
        }

        this.setState({cartItems})

        console.log(cartItems)

        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }

    removeFromCartHandler = (item) => {
        // console.log(`remove ${item.brand}`)

        const index = this.state.cartItems.findIndex(index => {
            return index._id === item._id   
        })

        const cartItems = [...this.state.cartItems]

        cartItems.splice(index, 1)

        this.setState({cartItems})

        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }
    
    render() {
        return (
            <Container>
                <Row>
                    {
                        this.state.cartItems.length > 0 ? 
                        (
                            <>
                                <Col lg="8">
                        
                                    <Filter
                                        brand = {this.state.brand}
                                        sort = {this.state.sort}
                                        count = {this.state.items.length}
                                        sortItemHandler = {this.sortItemHandler}
                                        filterItemHandler = {this.filterItemHandler}
                                    />
            
                                    <hr/> 
            
                                    <Row>
                                        <Cars 
                                            items={this.state.items} 
                                            addToCartHandler = {this.addToCartHandler}
                                            lg = {4} 
                                        />
                                    </Row>
                                
                                </Col>
                                <Col lg="4">
                                    <hr className={styles.margin}/>
            
                                    <Row>
                                        <Col md={{span :8, offset:2}}>
                                            <h6 className={styles.margincart}>{`You have ${this.state.cartItems.length} product (s) in cart`}</h6>
                                        </Col>
                                    </Row>
            
                                    <hr />
            
                                    <Row>
                                        {
                                            this.state.cartItems.map(item => {
                                                return(
                                                    <Cart 
                                                        key={item._id} 
                                                        image={item.image} 
                                                        price={item.price} 
                                                        count={item.count}
                                                        removeFromCartHandler = {() => this.removeFromCartHandler(item)}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                    <hr/>
            
                                    <Row>
                                        <Col md={12} sm={12} xs={12}>
                                            <div className="product-price">
                                                <div>Total : {" $ "}
                                                    {
                                                        this.state.cartItems.reduce((a, b) => 
                                                            a + b.price*b.count, 0)
                                                    }
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={12} sm={12} xs={12}>
                                            <div className="product-price">
                                                {/* <button className="btn btn-success w-100"> Order </button> */}
                                                <Button 
                                                    typebtn="btn-success w-100"
                                                    clic = {() => this.setState(prevState => ({
                                                        isFormOpen : !prevState.isFormOpen
                                                    }))}>
                                                        Order
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
            
                                    <hr/>
                                    <Row>
                                    {
                                        this.state.isFormOpen && <Form />
                                    }
                                    </Row>
                                </Col>
                            </>
                        ) : (
                            <Col lg="12">
                        
                                <Filter
                                    brand = {this.state.brand}
                                    sort = {this.state.sort}
                                    count = {this.state.items.length}
                                    sortItemHandler = {this.sortItemHandler}
                                    filterItemHandler = {this.filterItemHandler}
                                />
        
                                <hr/> 
        
                                <Row>
                                    <Cars 
                                        items={this.state.items} 
                                        addToCartHandler = {this.addToCartHandler} 
                                        lg = {3}
                                    />
                                </Row>
                            
                            </Col>
                        )
                    }
                </Row>
            </Container>
        )
    }
}

export default Home
