import {
        fetchNewsList,
        fetchAskList,
        fetchJobsList,
        fetchUserInfo, 
        fetchCommentItem,
        fetchList} from '../api/index.js'
export default{
    async FETCH_NEWS(context){
        try{
            const response = await fetchNewsList();
            context.commit('SET_NEWS', response.data);
            return response;
        }
        catch(error){
            console.log(error);
        }
    },
    async FETCH_JOBS(context){
        try{
            const response = await fetchJobsList();
            context.commit('SET_JOBS', response.data);
            return response;
        }
        catch(error){
            console.log(error);
        }
    },
    async FETCH_ASK(context){
        const response = await fetchAskList();
        context.commit('SET_ASK', response.data);
        return response;
    },
    async FETCH_USER(context, name){
        try{
            const response = await fetchUserInfo(name);
            context.commit('SET_USER', response.data);
            return response;
        }
        catch(error){
            console.log(error);
        }
    },
    async FETCH_ITEM(context, id){
        try{
            const response = await fetchCommentItem(id);
            context.commit('SET_ITEM', response.data);
            return response;
        }
        catch(error){
            console.log(error);
        }
    },
    async FETCH_LIST(context, pageName){
        try{
            const response = await fetchList(pageName);
            context.commit('SET_LIST', response.data);
            return response;
        }
        catch(error){
            console.log(error);
        }
    },
}
