import React from 'react'
import Col from "react-bootstrap/Col"
import styles from "../../statefull/home/Home.module.css"
import Image from "react-bootstrap/Image"
import Button from "../button/Button"
import Fade from 'react-reveal/Fade'

export default function cart(props) {
    return (
        <>
            <Col md={{span: 6, offset :3 }} sm={3} xs={3} className={styles.marginbottom}>
                <Fade left cascade>
                    <Image src={props.image} thumbnail />
                    <div className="product-qty">
                        <div>{`$ ${props.price} X ${props.count}`}</div>
                        <Button 
                            clic = {props.removeFromCartHandler}
                            typebtn="btn-danger"> X 
                        </Button>
                    </div>
                </Fade>
            </Col>
        </>
    )
}
