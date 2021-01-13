import axios from "axios"

const API_URL = 'https://rfranca-sds2-back.herokuapp.com'
// não funciona com localhost use 'http://192.168.0.13:8080'

export function fetchOrders() {
    return axios(`${API_URL}/orders`)
}

export function confirmDelivery(orderId: number) {
    return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}