import axios from 'axios';

const sunriseMeditaionUrl = "http://localhost:8080/meditation";

class MeditationServices {

    saveMeditation(meditation){
        console.log("I am  services", meditation);
        return axios.post(sunriseMeditaionUrl,meditation);
    }
}

export default new MeditationServices();