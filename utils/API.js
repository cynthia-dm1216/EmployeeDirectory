import axios from 'axios';

export default {
    getRandomUser: function() {
        return axios.get('https://randomuser.me/api/?results=10&nat=us&inc=gender,name,location,email,phone,id,picture')
    }
};