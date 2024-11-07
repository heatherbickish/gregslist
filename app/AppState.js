import { Car } from './models/Car.js'
import { House } from "./models/House.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  houses = [

    new House({
      type: 'Snug Closet',
      year: '2023',
      bedrooms: 1,
      bathrooms: 0,
      sqft: 50,
      price: 713000,
      description: 'Newly renovated modern home',
      imgUrl: 'https://images.unsplash.com/photo-1571661652889-f04601312797?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNoZWR8ZW58MHx8MHx8fDA%3D'
    }),

    new House({
      type: 'Single Famiy',
      year: '2000',
      bedrooms: 2,
      bathrooms: 1,
      sqft: 900,
      price: 1239000,
      description: 'Single story home with lots of land ',
      imgUrl: 'https://images.unsplash.com/photo-1469401258206-4e0cc14e9358?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8fDB8fHww'
    }),

    new House({
      type: 'Fixer Upper',
      year: '1998',
      bedrooms: 1,
      bathrooms: .5,
      sqft: 440,
      price: 960000,
      description: 'Rustic single family home',
      imgUrl: 'https://images.unsplash.com/photo-1515121124382-33ae0bf9417c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hlZHxlbnwwfHwwfHx8MA%3D%3D'
    }),

  ]




  cars = [
    new Car({
      make: 'Jaguar',
      model: 'XE',
      year: 2017,
      color: 'silver',
      imgUrl: 'https://images.unsplash.com/photo-1630045698264-a0e3396c2cb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGphZ3VhciUyMHhlfGVufDB8fDB8fHww'
    }),
    new Car({
      make: 'Honda',
      model: 'Civic',
      year: 2020,
      color: 'red',
      imgUrl: 'https://images.unsplash.com/photo-1636915873177-a0c1a48d84eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbmRhJTIwY2l2aWN8ZW58MHx8MHx8fDA%3D',
      mileage: 500
    }),
    new Car({
      make: 'Tonka',
      model: 'Truck',
      year: 1993,
      color: 'yellow',
      imgUrl: 'https://images.unsplash.com/photo-1677372191857-f596af525205?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG9ua2ElMjB0cnVja3xlbnwwfHwwfHx8MA%3D%3D'
    }),
  ]

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())