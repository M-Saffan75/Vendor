import axios from "axios";
import { BASE_URL } from "../config/api";
import { launchImageLibrary } from "react-native-image-picker";

// createdata api start here

// const create_data = async (age, name, profession, experience, navigation) => {

//     const apiUrl = BASE_URL + '/create/crud'

//     const postData = {
//         age: age,
//         name: name,
//         profession: profession,
//         experience: experience,
//     };

//     await axios.post(apiUrl, postData)
//         .then(response => {
//             console.log(response.data);
//             let code = response.data.status;
//             if (code === 200) {
//                 navigation.replace('User_Data')
//             }
//             else {
//                 console.log(response.data)
//             }
//         })
//         .catch(error => {
//             console.error(error);
//         });
// }


// createdata api end here


const create_data = async (age, name, profession, experience, checkimage) => {
    const apiUrl = BASE_URL + '/create/crud';
    try {
        const response = await axios.post(apiUrl, {
            image: checkimage.base64,
            imageName: checkimage.fileName,
            age,
            name,
            profession,
            experience
        }, {
            headers: {
                'Accept': 'application/json',
            }
        });
        console.log(response.data)
        return response;
    } catch (error) {
        const er = JSON.parse(JSON.stringify(error));
        throw er;
    }
};



const get_single_data = async (id) => {
    try {
        const response = await axios.get(BASE_URL + '/get/single/crud/' + id);
        const result = response.data.data;
        console.log('>>>' , result)
        return result;
    } catch (error) {
        console.error(error);
    }
}

// delete api start here

const data_delete = async (id, navigation) => {
    try {
        const response = await axios.post(BASE_URL + '/delete/single/crud/' + id);
        console.log(response.data);
        setTimeout(() => {
            navigation.replace('User_Data');
        }, 100);
    } catch (error) {
        console.error(error);
    }
}

// delete api end here

// update api start here

const update_data = async (uid, age, name, profession, experience, navigation) => {
    const apiUrl = `${BASE_URL}/update/single/crud/${uid}`;

    const postData = {
        age,
        name,
        profession,
        experience,
    };

    try {
        const response = await axios.post(apiUrl, postData);
        console.log(response.data);
        navigation.replace('User_Data');
    } catch (error) {
        console.error(error);
    }
};

// update api end here

// get single prefill data start here

const Prefill_Data = async (uid) => {
    const apiUrl = BASE_URL + '/get/single/crud/' + uid;
    try {
        const response = await axios.get(apiUrl);
        const result = response.data.data;
        return result;
    } catch (error) {
        console.error(error);
    }
};

// get single prefill end here

// get user all data start here

const get_All_Data = async () => {
    try {
        const response = await axios.get(BASE_URL + '/get/crud/data');
        const result = response.data.data;
        return result;
    } catch (error) {
        console.error(error);
    }
}

// get user all data end here

// search user all data start here

const SearchData = async (event) => {
    if (event) {
        const response = await axios.get(BASE_URL + `/search_crud_data/${event}`);
        const data = response.data.data;
        if (data) {
            return data
        }
    } else {
        get_All_Data()
    }
}


const Image_upload = async (setGalleryPhoto, setCheckImage) => {

    let options = {
        saveTophotos: true,
        quality: 0.8,
        maxWidth: 800,
        maxHeight: 800,
        mediatype: 'photo',
        includeBase64: true,
        compressImageQuality: 0.6,
        compressImageMaxWidth: 800,
        compressImageMaxHeight: 800,
    };

    try {
        const images = await launchImageLibrary(options);
        const imageAsset = images.assets[0];
        setGalleryPhoto(imageAsset.uri);
        setCheckImage(images.assets[0])
        // console.log(images);
    } catch (error) {
        console.log(error);
    }


    // const formdata = new FormData()
    // formdata.append('image', {
    //     uri: images.assets[0].uri,
    //     type: images.assets[0].type,
    //     name: images.assets[0].fileName
    // });

    // try {
    //     const response = await fetch(BASE_URL + '/crud/image/upload/' + id, {
    //         method: 'POST',
    //         body: formdata,
    //         headers: { 'Content-Type': 'multipart/form-data', },
    //     });
    //     const result = await response.json();
    //     console.log(result);
    // } catch (error) {
    //     console.log(error);
    // }
}


// search user all data end here

export { create_data, Prefill_Data, update_data, data_delete, get_All_Data, get_single_data, SearchData, Image_upload }