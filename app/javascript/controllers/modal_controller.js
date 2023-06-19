import { Controller } from "@hotwired/stimulus";
import { enter } from "el-transition";

export default class extends Controller {
  connect() {
//    console.log('Hello, We are inside the modal controller')
   enter(document.getElementById('modal-wrapper'));
   enter(document.getElementById('modal-backdrop'));
   enter(document.getElementById('modal-panel'));
  }


}
