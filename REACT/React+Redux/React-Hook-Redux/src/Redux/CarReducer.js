
let defaultState={
    cars:[]
}

const Reducer = (state=defaultState,action) =>{
    switch (action.type) {
        case 'add':
            let newCars = {
                id:Date.now(),
                name:action.newCar.name,
                age:action.newCar.age,
                color:action.newCar.color,
                price:action.newCar.price
            }
            
            return {
                ...state,
                cars:[...state.cars,newCars]
            }
            ;
        case 'remove':
                let k = state.cars.filter(car=>{
                   return  car.id!==action.id
                })
                return {
                    ...state,
                    cars:k
                }  
                ;
        default:
            return state;
    }
}

export const addCars = (Car) => ({type:'add',newCar:Car})
export const removeCars = (id) => ({type:'remove',id:id})
export default Reducer