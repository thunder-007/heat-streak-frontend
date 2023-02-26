import {Button, Container} from 'react-bootstrap';

function LoginWithGithub() {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=Iv1.453d62a00cdd585c&redirect_uri=http://localhost:3000/auth/github/';
}

function IndexPage() {
    return (
        <>
            <h1>Home Page</h1>
            <p>Some content</p>
            <Container>
                <Button variant="primary" onClick={LoginWithGithub}>Login</Button>
            </Container>
        </>
    );
}

export default IndexPage;