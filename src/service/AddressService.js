import axios from 'axios';

export default {
    getCepData(cep) {
        return axios.get(`https://viacep.com.br/ws/${cep}/json`);
    }
}