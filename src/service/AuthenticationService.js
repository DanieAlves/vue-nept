export default {
    
    setAuthenticated(isAuthenticated) {
        localStorage.setItem('auth', isAuthenticated)
    },

    isAuthenticated() {
        return JSON.parse(localStorage.getItem('auth'));
    }
};

