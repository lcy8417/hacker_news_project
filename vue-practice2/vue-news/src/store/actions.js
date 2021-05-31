import { 
    fetchUserInfo,
    fetchUserItem,
    fetchList,
    fetchNewsList
    } from '../api/index.js'
export default {
    async FETCH_NEWS(context){
        try{
            const response = await fetchNewsList();
            context.commit('SET_NEWS', response.data);
            return response;
        }catch(error){
            console.log(error);
        }
    },
    async FETCH_JOBS(context){
        try{
            const response = await fetchJobsList();
            context.commit('SET_JOBS', response.data);
            return response;
        }catch(error){
            console.log(error);
        }
    },
    async FETCH_ASK(context){
        try{
            const response = await fetchAskList();
            context.commit('SET_ASK', response.data);
            return response;
        }catch(error){
            console.log(error);
        }
    },
    async FETCH_USERS(context, name){
        try{
            const response = await fetchUserInfo(name);
            context.commit('SET_USERS', response.data);
            return response;
        }catch(error){
            console.log(error);
        }
    },
    async FETCH_ITEMS(context, id){
        try{
            const response = await fetchUserItem(id);
            context.commit('SET_INTES', data);
            return response;
        }catch(error){
            console.log(error);
        }
    },
    async FETCH_LIST(context, pageName){
        try{
            const response = await fetchList(pageName);
            context.commit('SET_LIST', response.data);
            return response;
        }catch(error){
            console.log(error);
        }
    }
}