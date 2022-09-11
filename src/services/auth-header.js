export const authHeader = () => {

    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.jwt) {
        return { Authorization: `Bearer ${user.jwt}` };
    }

}

export const authJWT = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.jwt) {
        return `Bearer ${user.jwt}`;
    }
}
