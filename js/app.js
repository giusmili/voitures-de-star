import { newControllerCar } from "./controller.js"
import { Dates } from "./controllerDate.js"

document.addEventListener("DOMContentLoaded", e =>{
  const print_out = newControllerCar.loadContent()
  Dates.dateTime()

})