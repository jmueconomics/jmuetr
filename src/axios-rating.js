import axios from "axios";


const instance = axios.create({
    baseURL: "https://jmu-econ-alumni-ratings.firebaseio.com/"
});


export default instance;