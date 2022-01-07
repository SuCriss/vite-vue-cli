import { get } from './axios'

export const userService = {
    async search(params){
        return get('/search',params);
    }
}
