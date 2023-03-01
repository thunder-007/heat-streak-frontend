import {Button, Container} from 'react-bootstrap';

function LoginWithGithub() {
    const github_auth_url = new URL('http://github.com/login/oauth/authorize');
    const clientId = process.env.REACT_APP_GITHUB_OAUTH_CLIENT_ID;
    const redirection_url = window.location.origin + '/auth/github';

    github_auth_url.searchParams.set('client_id', clientId);
    github_auth_url.searchParams.set('redirect_uri', redirection_url);
    github_auth_url.searchParams.set('scope', 'repo,user');
    console.log(github_auth_url.toString());
    console.log(redirection_url);
    window.location.href = github_auth_url.toString();
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