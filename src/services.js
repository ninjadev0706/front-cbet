import axios from "axios"
const axiosApiInstance = axios.create();

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use((response) => {
    return response
}, async function (error) {
    const originalRequest = error.config;
    if (error.response.data && (error.response.data.code == "token_not_valid") && !originalRequest._retry) {
        originalRequest._retry = true;
        const res = await refreshToken();
        const accessToken = res.data.access
        localStorage.setItem("accessToken",accessToken)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
        window.location.reload()
        return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error);
});


const BASE_URL = "https://api-dev.jomduit88.com"

export const login = (payload) => {
    return axiosApiInstance.post(`${BASE_URL}/app/api/token/`, payload)
}

export const refreshToken = () => {
    return axiosApiInstance.post(`${BASE_URL}/app/api/token/refresh/`, {
        refresh: localStorage.getItem("refreshToken")
    })
}

export const signup = (payload) => {
    return axiosApiInstance.post(`${BASE_URL}/app/api/signup/`, payload)
}

export const getOtp = ({ id, ...payload }) => {
    return axiosApiInstance.post(`${BASE_URL}/app/api/signup/${id}/get-tac/`, payload)
}

export const verifyOtp = ({ id, ...payload }) => {
    return axiosApiInstance.post(`${BASE_URL}/app/api/signup/${id}/verify-tac/`, payload)
}

export const getBanks = () => {
    return axiosApiInstance.get(`${BASE_URL}/api/banks/`, {})
}

export const addAccount = ({ id, ...payload }) => {
    return axiosApiInstance.post(`${BASE_URL}/app/api/signup/${id}/activate/`, payload)
}

export const getWallet = () => {
    return axiosApiInstance.get(`${BASE_URL}/app/api/wallet/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
}

export const getNotificationCount = () => {
    return axiosApiInstance.get(`${BASE_URL}/app/api/notifications/count`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
}

export const getPromotions = () => {
    return axiosApiInstance.get(`${BASE_URL}/app/api/promotions/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
}

export const productCategories = () => {
    return axiosApiInstance.get(`${BASE_URL}/app/api/products/categories`)
}

export const getCategoryDetail = ({ category }) => {
    return axiosApiInstance.get(`${BASE_URL}/app/api/products/?category=${category}`)
}

export const productStart = ({ id }) => {
    return axiosApiInstance.post(`${BASE_URL}/app/api/products/${id}/start`, {}, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
}

export const depositPg = (payload) => {
    return axiosApiInstance.post(`${BASE_URL}/app/api/deposit/pg/`, payload, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
}

export const getDepositTypes = () => {
    return axiosApiInstance.get(`${BASE_URL}/app/api/deposit/reloadcard/types/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
}

export const depositReloadCard = (payload) => {
    return axiosApiInstance.post(`${BASE_URL}/app/api/deposit/reloadcard/`, payload, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
}

export const depositOnline = (payload) => {
    return axiosApiInstance.post(`${BASE_URL}/app/api/deposit/online/`, payload, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
}

export const withdraw = (payload) => {
    return axiosApiInstance.post(`${BASE_URL}/app/api/withdraw/`, payload, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
}

export const claimPromotion = ({ id, ...payload }) => {
    return axiosApiInstance.post(`${BASE_URL}/app/api/promotions/${id}/claim/`, payload, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
}