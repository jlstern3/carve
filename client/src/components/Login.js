import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import firebase from "firebase/app"


export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, googleLogin, user, provider, facebookLogin } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            return navigate("/")
        } catch {
            setError("Failed to log in.")
        }

        setLoading(false)
    }

    // Can use this following function without having anything to do with AuthContext
    // function handleGoogleSubmit(e) {
    //     const provider = new firebase.auth.GoogleAuthProvider();

    //     firebase.auth().signInWithPopup(provider)
    //         .then(result => {
    //             const user = result.user;
    //             console.log("First console.log in Login.js")
    //             console.log("2nd console.log in Login.js")
    //             navigate('/')
    //             console.log(user)

    //         })
    //         .catch(console.log)

    // }


    async function handleGoogleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await googleLogin(provider)
            console.log("First console.log in Login.js")
            console.log("2nd console.log in Login.js")
            navigate("/")
            console.log("3rd console.log in Login.js.  Should have navigated to dash by now.")
        } catch {
            setError("Failed to log in with Google.")
        }

        setLoading(false)

    }

    async function handleFacebookSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await facebookLogin(provider)
            console.log("First FB console.log in Login.js")
            console.log("2nd FB console.log in Login.js")
            navigate("/")
            console.log("3rd FB console.log in Login.js.  Should have navigated to dash by now.")
        } catch {
            setError("Failed to log in with Facebook.")
        }

        setLoading(false)
    }



    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        {/* disable button when loading so user can't resubmit form and create multiple accounts */}
                        <Button disabled={loading} type="submit" className="w-100 mt-3">Log In</Button>
                    </Form>
                    <div className="text-center">
                        <h3 className="mt-3 mb-3">OR</h3>
                        <Button type="submit" disabled={loading}
                            className="w-40 mb-2 mt-2"
                            onClick={handleGoogleSubmit}>Sign in with Google</Button>
                        <Button type="submit"
                            disabled={loading}
                            className="w-40 mb-2 mt-2 mr-2"
                            onClick= {handleFacebookSubmit}>Sign in with Facebook</Button>
                    </div>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need to create an account? <Link to="/signup">Sign up here. </Link>
            </div>
        </div>
    )
}
