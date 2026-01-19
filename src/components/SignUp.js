import { Col, Form, Row } from "react-bootstrap"

function signUp() {
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
                        <Text>Sign Up</Text>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
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

export default signUp;