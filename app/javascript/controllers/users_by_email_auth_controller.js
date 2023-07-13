import { Controller } from "@hotwired/stimulus"
import axios from 'axios'

export default class extends Controller {

    static targets = ['email', 'submit']

    connect() {

        console.log('Controller connected')
        console.log('axios connected successfully:', axios)

        // console.log('This is the email target', this.emailTarget)
        // console.log('This is the submit target', this.submitTarget)

        this.submitTarget.addEventListener('click', (e) => {
            e.preventDefault();
            if (this.emailTarget.value.length === 0) {
                //email is empty
                console.log('Show this if email field is empty',)
            } else {
                //email is filled, do something
                console.log('do something')
                axios.get('/api/users_by_email', {
                    params: {
                        email: this.emailTarget.value
                    },
                    headers: {
                        "ACCEPT" : "application/json"
                    }
                }).then((response) => {
                    Turbo.visit('/users/sign_in')
                }).catch(function (error) {
                    Turbo.visit('/users/sign_up')
                })
            }
        })
    }
}