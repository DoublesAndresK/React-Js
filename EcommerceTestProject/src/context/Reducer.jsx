const reducer=(state, action)=>{
    switch(action.type){
        case 'getProducts':
            return{...state, products: action.payload }
    }
}
export default reducer;