import { Controller } from "@hotwired/stimulus";


export default class extends Controller {

 static targets = [ 'email', 'submit']
 connect() {
     console.log('emailTarget:', this.emailTarget)
     console.log('submitTarget:', this.submitTarget)
 }
}