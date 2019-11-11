const authState={
    isAuth:!!sessionStorage.getItem("access-token")
}
export const authReducer=(state = authState , action)=>{
    return state;    
}


export const cabReducer = (state = [] , action)=>{
    switch(action.type){
       case "Get_Cabs" : return action.payload
      
       default : return state;         
    }
}


const bookings=[]
export const bookingReducer = (state = bookings , action)=>{
    switch(action.type){
       case "Get_Bookings" : return action.payload
       default : return state;         
    }
}

const liveBooking={}

export const livebookingReducer = (state = liveBooking , action)=>{
    switch(action.type){
        case "Get_Live_Booking": return action.payload[0]
       default : return state;         
    }
}