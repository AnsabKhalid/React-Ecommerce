import React from 'react'
import Col from "react-bootstrap/Col"
import styles from "../../statefull/home/Home.module.css"
import Button from "../button/Button"
import Fade from 'react-reveal/Fade'

export default function form() {
    return (
        <>
             <Col md={12} sm={12} xs={12}>
                <Fade right cascade>
                    <form>
                        <div className="form-group">
                            <label className={styles.formstyle}>Name</label>
                            <input className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className={styles.formstyle}>Email</label>
                            <input className="form-control" name="email" />
                        </div>
                        <div className={styles.formstyle}>
                            <Button typebtn="btn btn-info" type="submit">Validate</Button>
                        </div>
                    </form>
                </Fade>
            </Col>
        </>
    )
}
