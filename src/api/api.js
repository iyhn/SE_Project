import history from '../history';

const call = (endpoint, req) => {
    // action = action ? action : ()=>{console.log('sadskdfdjdnfjid')};
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
        // .then(
        //     res => {console.log(res);res.json()
        //     .then(
        //         body => {
        //             console.log(body)
        //             if(body === 'jwt expired'){
        //                 redirectLogin();
        //             }
        //             else if(res.ok) action(body)
        //             else alert(body)
        //         }
        //     )}
        // )
};

const api = {};

api.redirectLogin = () => {
    localStorage.removeItem('token');
    history.push('/login');
}

api.authAction = (body) => {
    localStorage.setItem('token',body.token);
    localStorage.setItem('id', body.id)
    history.push('/');
}

api.login = (body) => (
    call('/auth/login', {
        method: 'POST',
        body: body
    })
)

api.signup = (body) => (
    call('/auth/signup', {
        method: 'POST',
        body: body
    })
)

api.profile = (id) => (
    call(`/profile/?id=${id}`,{
        method: 'GET'
    })
)

api.editProfile = (id,body) => (
    call(`/profile/?id=${id}`,{
        method: 'PUT',
        body: body
    })
)

api.postTask = (body) => (
    call(`/task`, {
        method: 'POST',
        body: body
    })
)

api.fetchTask = () => (
    call('/task/all', {
        
    })
)

api.search = (keyword) => (
    call(`/task/search/?keyword=${keyword}`)
)

api.like = (body) => (
    call(`/task/like`, {
        method: 'POST',
        body: body
    })
)

api.unlike = (body) => (
    call(`/task/unlike`, {
        method: 'POST',
        body: body
    })
)

api.accept = (body) => (
    call('/task/accept',{
        method: 'POST',
        body: body
    })
)

api.review = (body) => (
    call('/profile/review',{
        method: 'POST',
        body: body
    })
)

api.delete = (body) => (
    call('/task/delete',{
        method: 'POST',
        body: body
    })
)

api.getTask = (id) => (
    call(`/task/?id=${id}`,{
        
    })
)
export default api;