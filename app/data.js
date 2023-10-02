var users =[
    {
        name: 'Ivan Vallejos',
        email: 'ivanvallejos@hotmail.com',
        password: '123456'
    },
    {
        name: 'Sebastian Vallejos',
        email: 'sebastian@hotmail.com',
        password: '654321'
    }    
]

function createUser(name, email, password) {
    var user = {}

    user.name = name
    user.email = email
    user.password = password

    user.push(user)
}

function findUserByEmail(email) {
    for (var i = 0; i < users.length; i++){
        var user = user[i]

        if (user.email === email)
        return user
    }

    return null
}