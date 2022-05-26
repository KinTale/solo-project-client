const storage = {
    saveStorage: (token, adminId, role) => {
        localStorage.setItem(process.env.REACT_APP_USER_TOKEN, token);
        localStorage.setItem('adminId', adminId);
        localStorage.setItem('role', role);
    },

    loadStorage: () => {
        const local = {
            token: localStorage.getItem(process.env.REACT_APP_USER_TOKEN),
            adminId: localStorage.getItem('adminId'),
            role: localStorage.getItem('role'),
        };
        if (!local.token) {
            return false;
        }
        return local;
    },

    clearStorage: () => {
        localStorage.setItem(process.env.REACT_APP_USER_TOKEN, '');
        localStorage.setItem('adminId', '');
        localStorage.setItem('role', '');
    }
};

export default storage;