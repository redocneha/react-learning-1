import { BUY_CAKE } from "./types"

const initialState={
    cakes : 10
}


export const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
      case BUY_CAKE: return {
        ...state,
        cakes: state.cakes - 1
          }
  
      default: return state
    }
  }
  
export default cakeReducer