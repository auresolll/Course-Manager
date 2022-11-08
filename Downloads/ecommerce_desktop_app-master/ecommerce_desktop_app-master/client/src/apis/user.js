import axios from "axios"

export const find = async (query) => {
    const stringQuery = `?page=${query.page}&order=${query.order}&orderBy=${query.orderBy}&filterName=${query.filterName}`
    const response = await axios.get(`http://localhost:5000/user${stringQuery}`);
    return response;
}