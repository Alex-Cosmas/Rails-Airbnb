import {Controller} from "@hotwired/stimulus";


export default class extends Controller {

    static targets = ['email', 'submit']

    connect() {
        this.submitTarget.addEventListener('click', (e) => {
                e.preventDefault();
                if (this.emailTarget.value.length === 0) {
                    //email is empty
                    console.log('Show this if email field is empty',)
                } else {
                    //email is filled, do something
                }
            }
        )
    }
}