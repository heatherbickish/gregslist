import { AppState } from "../AppState.js"
import { House } from "../models/House.js"

class HouseSevice {



  createHouseListing(houseData) {
    const createdHouseCard = new House(houseData)
    AppState.houses.push(createdHouseCard)
    this.saveHouse()
  }

  deleteHouseListing(houseId) {
    const houseToDelete = AppState.houses.find(house => house.id = houseId)
    const indexToRemove = AppState.houses.indexOf(houseToDelete)
    AppState.houses.splice(indexToRemove, 1)
    this.saveHouse()
  }

  saveHouse() {
    let stringyData = JSON.stringify(AppState.houses)
    localStorage.setItem('gregslist_houses', stringyData)
  }

  loadHouse() {
    let stringyData = localStorage.getItem('gregslist_houses')
    console.log(' house data', stringyData)
    let housesData = JSON.parse(stringyData)
    console.log('house sparkle')
    if (housesData == null) return
    const houses = housesData.map(houseData => new House(houseData))
    AppState.houses = houses
  }



}




export const houseSevice = new HouseSevice()