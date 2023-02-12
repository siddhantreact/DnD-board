
import { createSlice } from "@reduxjs/toolkit"



var initialState = {



   users:[],
   clickedUserName:[],
   source:[],
   tickects:[],
   progress:[],
   complete:[],
   priority:[]

}


const data = createSlice({

   name: "tasks",


   initialState,


   reducers: {


    


      addUsers(state,action){
     
         state.users.push(action.payload)


      },

      addClickedUser(state,action){

         state.clickedUserName.push(action.payload)
      },

      addSource(state,action){

           state.source.push(action.payload)
      },


      addtickects(state,action){

         state.tickects.push(action.payload)
      },

      addItemsToProgress(state,action)
      {

         state.progress.push(action.payload)
      },
      addItemsToComplete(state,action)
      {

         state.complete.push(action.payload)
      },

      removeItemFromTodo(state ,action)
      {
        
    state.tickects=   state.tickects.filter((e)=>{

               return e.task !== action.payload
         })

      },
      removeItemFromProgress(state ,action)
      {
        
    state.progress =   state.progress.filter((e)=>{

               return e.task !== action.payload
         })

      },

      removeItemFromComplete(state ,action)
      {
        
    state.complete =   state.complete.filter((e)=>{

               return e.task !== action.payload
         })

      },


      deleteFromTodo(state,action){

         state.tickects =    state.tickects.filter((e)=>{

                  return e.task !== action.payload
               })


      },


      updateTickectWithPriority(state,action){
      
         const {name ,task , pty} = action.payload
 
       const index =  state.tickects.findIndex((e)=>{


              return e.task == task
         })

           
          state.tickects[index] = action.payload//pr

      },


      priority(state,action){

       state.priority.push(action.payload)

      }

   }





})

//export action n reducer

export const {  deleteFromTodo,updateTickectWithPriority,priority,     addUsers,addClickedUser,addSource,addtickects , addItemsToProgress ,addItemsToComplete ,removeItemFromTodo ,removeItemFromProgress,removeItemFromComplete} = data.actions;

export default data.reducer