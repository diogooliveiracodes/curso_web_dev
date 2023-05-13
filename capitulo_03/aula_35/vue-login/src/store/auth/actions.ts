const AuthActions = {
    login(context: any, payload: any) {
        const saveLocal = payload;

        fetch('http://localhost:3000/login')
            .then(response => response.json())
            .then(data => {
                if(saveLocal) {
                    localStorage.setItem('token', data[0].token)
                } else {
                    sessionStorage.setItem('token', data[0].token)
                }
            })
    }
}

export default AuthActions

// fetch('http://localhost:3000/login',
//         {
//             method: 'POST',
//             header: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//                 'token': '123456789'
//             },
//             body: {
//                 username: payload.username,
//                 password: payload.password
//         }
//     })