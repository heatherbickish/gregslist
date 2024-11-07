import { AppState } from "../AppState.js"
import { houseSevice } from "../services/HouseSevice.js"

export class HouseController {
  constructor() {
    houseSevice.loadHouse()
    this.drawHouse()

  }
  drawHouse() {
    const houseListingElm = document.getElementById('house-listings')
    houseListingElm.innerHTML = ''
    AppState.houses.forEach(house => houseListingElm.innerHTML += house.houseCard)
  }

  createHouseListing() {
    event.preventDefault()
    const formlyElm = event.target
    const formlyData = {
      price: formlyElm.price.value,
      year: formlyElm.year.value,
      type: formlyElm.type.value,
      sqft: formlyElm.sqft.value,
      bedrooms: formlyElm.bedrooms.value,
      bathrooms: formlyElm.bathrooms.value,
      description: formlyElm.description.value,
      imgUrl: formlyElm.imgUrl.value
    }
    console.log(formlyData)
    houseSevice.createHouseListing(formlyData)
    this.drawHouse()
  }

  deleteHouseListing(houseId) {
    const confirmed = confirm('Are you sure you want to delete?')
    if (!confirmed) return
    const forRealConfirmed = confirm('For real for real?? No going back..')
    if (!forRealConfirmed) return
    const justInCaseConfirmed = prompt('Please type "Yessir Boss, I meant it"')
    if (justInCaseConfirmed != 'Yessir Boss, I meant it') return
    houseSevice.deleteHouseListing(houseId)
    this.drawHouse()
  }

}