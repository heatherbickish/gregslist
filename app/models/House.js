export class House {
  constructor(data) {
    // this.id = data.id || generateId()
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
        <div class="card shadow-sm">
          <img class="card-img p-2"
            src="${this.imgUrl}"
            alt="">
          <div class="card-body">
            <p class="text-center fw-bold mb-0">
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
          </div>
        </div>
      </div>



  
  `)
  }


}