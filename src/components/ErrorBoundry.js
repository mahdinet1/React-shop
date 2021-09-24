import React, { Component } from 'react'


 class ErrorBoundry extends Component {
   constructor(){
       super()
       this.state={
           hasError:false,
       }
   }
   static getDerivedStateFromError(error){
       return {hasError:true}
   }
   

    render() {
        if(this.state.hasError){
            return (<h2>Error happend!!</h2>)
        }
        else{
            return this.props.children
        }
    }
}

export default ErrorBoundry
