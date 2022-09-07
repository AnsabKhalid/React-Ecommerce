import React, {Component} from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import styles from "../../../statefull/home/Home.module.css";
import Button from "../../button/Button"
import Zoom from 'react-reveal/Zoom'
import Modal from 'react-modal'

class Car extends Component {

    state = {
        car : null
    }

    openModalHandler = (car) => {
        this.setState({
            car,
        })
    }

    closeModalHandler = (event) => {
        if(event.target.innerHTML === "Add To Cart") {
            this.state.car.addToCartHandler()
            this.setState({
                car : null
            })
        } else {
            this.setState({
                car : null
            })
        }
    }

    render() {
        return (
            <>
                <Col lg={this.props.lg} md={6} sm={6} xs={6} className={styles.margin}>
                    <Zoom>
                        <Image src={this.props.image} thumbnail id="cursor" onClick={() => this.openModalHandler(this.props)} />
                        <div className="product-price">
                            <div>$ {this.props.price}</div>
                            <Button clic={this.props.addToCartHandler} typebtn="btn-success">+ cart</Button>
                        </div>
                    </Zoom>

                    {
                        this.state.car && (
                            <Modal isOpen={true} onRequestClose={this.closeModalHandler}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Button typebtn="btn-danger close-modal" clic={this.closeModalHandler}>X</Button>
                                            <div className="row">
                                                <Image src={this.state.car.image} />
                                            </div>
                                            <div id="center">
                                                <h3>{`price : $ ${this.state.car.price}`}</h3>
                                                <h6>{`Modal Description : ${this.state.car.description}`}</h6>
                                            </div>
                                            <Button typebtn="btn-success w-100" clic={this.closeModalHandler}>Add To Cart</Button>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        )
                    }
                </Col>
            </>
        )
    }
}

export default Car
