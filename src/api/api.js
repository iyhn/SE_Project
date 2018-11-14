import history from '../history';

const call = (endpoint, req, action) => {
    action = action ? action : ()=>{console.log('sadskdfdjdnfjid')};
    if(req && req.body){
        req.body = JSON.stringify(req.body);
    }

    const token = localStorage.getItem('token');

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };

    return fetch(endpoint, {...req, headers})
        .then(
            res => res.json()
            .then(
                body => {
                    if(body === 'jwt expired'){
                        redirectLogin();
                    }
                    else if(res.ok) action(body)
                    else alert(body)
                }
            )
        )
};

const api = {};

const redirectLogin = () => {
    localStorage.removeItem('token');
    history.push('/login');
}

const authAction = (body) => {
    localStorage.setItem('token',body.token);
    history.push('/');
}

api.login = (body) => (
    call('/auth/login', {
        method: 'POST',
        body: body
    }, authAction)
)

api.signup = (body) => (
    call('/auth/signup', {
        method: 'POST',
        body: body
    }, authAction)
)

api.logout = () => (
    redirectLogin()
)

api.profile = () => (
    call('/profile/',{
        method: 'GET'
    })
)

export default api;