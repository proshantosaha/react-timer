import React from 'react'
import './timer.css'


class Timer extends React.Component{
    state={
        count:0,
        color:'',
    }
   clear= null

    handleIncrement=()=>{
        this.setState({
            count:this.state.count+1,
            
            

        })
        console.log(this.state.count);
        
    }

    handleDecrement=()=>{
        if(this.state.count>0){
            this.setState({
                count:this.state.count-1
            })
        }
    }
    startCount =()=>{
         if(this.state.count>0 && this.clear == null){
            this.clear= setInterval(()=>{
             this.setState({
            count:this.state.count-1
                },()=>{
                    if(this.state.count===0){
                        clearInterval(this.clear)
                       this.clear=null
                    }
                });
            },1000)
        }
    }

  stopCunt =()=>{
      if(this.clear){
          clearInterval(this.clear)
          this.clear=null
      }

  }

  resetCount = () =>{
   this.setState({count:0})
   clearInterval(this.clear)
   this.clear=null

  }
    render(){

        return(
            <div className="timer">
                <p>timer</p>
                <span>{this.state.count}</span>
                <br />
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>

                <div>
                    <button onClick={this.startCount}>start</button>
                    <button onClick={this.stopCunt}>stop</button>
                    <button onClick={this.resetCount}>reset</button>
                </div>

            </div>
        )
    }
}

export default Timer
