import React from 'react'
import './app.css'

import Timer from './timer'


class App extends React.Component{


    render(){

        return(
            
          <div className='Container my-4'>
              <div className='row '>
            
               <Timer/> 
              
              </div>
          </div>
        
        )
    }
}


export default App