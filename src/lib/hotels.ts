import axios from 'axios';
import { RAKUTEN_BASE_URL, RAKUTEN_API_ID } from '../rakuten/config';
import { Hotels } from '../types/hotels';

interface SearchHotelsData {
    hotels: Hotels
    pagingInfo: {
        first: number
        last: number
        page: number
        pageCount: number
        recordCount: number
    }
}

export const searchHotels = async (keyword: string): Promise<Hotels> => {
    try {
        const url = `${RAKUTEN_BASE_URL}&applicationId=${RAKUTEN_API_ID}&keyword=${keyword}`
        const res = await axios.get<SearchHotelsData>(url)
        return res.data.hotels
    } catch (error) {
        alert(error.message)
        return []
    }
}