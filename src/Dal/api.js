import axios from "axios";
import {Igor} from "../Wednesday/Wednesday";


const instance = axios.create({
    baseURL: "https://neko-cafe-back.herokuapp.com/auth/test",
});

const api = {
    submitPost(isDoneChecked) {
        return instance.post(
            "",
            {success: isDoneChecked}
        )
    },
};

export default api

