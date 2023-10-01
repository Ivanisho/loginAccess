function registerUser(name, email, password) {
    validatetext(name, 'name')
    validatetext(email, 'email')
    validatetext(password, 'password')

    var user = findUserByEmail(email)

    if (user)
    throw new Error('User already registered')

    createUser(name, email, password)
}

function authenticateUSer(email, password) {
    validatetext(email, 'email')
    validatetext(password, 'password')

    var user = findUserByEmail(email)

    if (!user || user.password !== password)
    throw new Error ('Wrong credentials')
}

function retrieveUser(email) {
    validatetext(email, 'email')

    var user = findUserByEmail(email)

    if (!user)
    throw new Error ('User not found')

    return user
}