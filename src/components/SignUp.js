import { useState } from "react"
import { Col, Form, Row, Button } from "react-bootstrap"
import { supabase } from "../config/supabaseClient"

function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUpUser = async (email, password) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        })
        if (error) {
            console.error('Sign Up error:', error.message)
        } else {
            console.log('Sign Up success:', data.user)
        }
    }
    return (
        <>
            <Row>
                <Col>
                    <Form>
                        <h2>Sign Up</h2>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={() => signUpUser(email, password)}>
                            Sign Up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default SignUp;