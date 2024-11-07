export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }


  get houseCard() {
    return (`
<div class="col-md-4">
        <div class="card shadow-sm mb-3">
          <img class="card-img p-2"
            src="${this.imgUrl}"
            alt="">
          <div class="card-body">
            <p class="text-center fw-bold fs-3">
             $ ${this.price}
            </p>
            <p>
            sqft:  ${this.sqft}
            </p>
            <p>
             Built in:  ${this.year}
            </p>
            <p>Bedrooms:  ${this.bedrooms}  Bathrooms:  ${this.bathrooms}</p>
            <p>
            ${this.description}
            </p>
            <div class="text-end">
            <button onclick="app.HouseController.deleteHouseListing('${this.id}')" class="mdi mdi-trash-can text-danger fs-4 rounded-3" title="delete"></button>
            </div>
          </div>
        </div>
      </div>

  `)
  }


}