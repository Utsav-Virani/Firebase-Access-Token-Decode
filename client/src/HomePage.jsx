import React from 'react'
import firebase from 'firebase';
import config from './config/Firebase';
import axios from 'axios'


const HomePage = () => {

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const { email, pass } = event.target.elements;
        console.log(email.value);
        console.log(pass.value);
        try {
            await config
                .auth()
                .createUserWithEmailAndPassword(email.value, pass.value);
            console.log(firebase.auth().currentUser.refreshToken);
            firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
                axios.post('http://localhost:4000/login', {
                    authToken: idToken,
                    refToken: firebase.auth().currentUser.refreshToken,
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }).catch(function (error) {
                // Handle error
            });




        } catch (error) {
            alert(error);
        }
    }

    return (
        <div>
            <form method="post" onSubmit={handleFormSubmit}>
                <input type="text" name="email" id="email" />
                <input type="password" name="pass" id="pass" />
                <input type="submit" value="SignIn" />
            </form>
        </div>
    )
}

export default HomePage
