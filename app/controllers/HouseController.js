import { AppState } from "../AppState.js"

export class HouseController {
  constructor() {
    console.log('draw house')
    const houseListingElm = document.getElementById('house-listings')
    houseListingElm.innerHTML = ''
    AppState.houses.forEach(house => houseListingElm.innerHTML += house.houseCard)
  }
}