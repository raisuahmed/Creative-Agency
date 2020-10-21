import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="back-color">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="p-5 info-text">
                            <h3 style={{fontSize:"40px"}}> Let Us Handle Your  <br /> Project, Professionally</h3>
                            <p>With well written, we build amazing apps for all platforms,   <br /> mobile and web apps in general. </p>

                        </div>
                    </Col>
                    <Col md={6}>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Your Email Address" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Your Name/ Company Name" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows="8" placeholder="Your Message" />
                            </Form.Group>
                            <Button variant="dark">Send</Button>
                        </Form>
                    </Col>
                </Row>
                <p className="text-center pt-5"><small>Copyright © Rais U Ahmed 2020</small></p>
            </Container>
        </div>
    );
};

export default Footer;