import axios from 'source/lib/axios';
import eventBus from 'source/lib/event-bus';

const state = {};

const getters = {};

const mutations = {};

const actions = {
    fetchTweets(context) {
        return axios.get('/api/tweets/');
    },

    fetchUserTweets(context, username) {
        return axios.get(`/api/users/${username}/tweets/`);
    },

    async createTweet(context, data) {
        const tweet = await axios.post('/api/tweets/', data);
        eventBus.$emit('tweets:actions:create', tweet);
        return tweet;
    },

    async deleteTweet(context, id) {
        const tweet = await axios.delete(`/api/tweets/${id}/`);
        eventBus.$emit('tweets:actions:delete', id);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
