
export const addProduct =(product)=>{
    return{
        type:"ADD_PRODUCT", 
        payload:product
    }

}

export const editProduct=(product_id,updated_product)=>{
    return{
        type:"EDIT_PRODUCT",
        product_id:product_id,
        updated_product:updated_product
    }
}

export const editPastries=(pastries_id,updated_pastries)=>{
    return{
        type:"EDIT_PASTRIES",
        pastries_id:pastries_id,
        updated_pastries:updated_pastries
    }
}