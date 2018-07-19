import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Headertop } from './children/header/header';
import { BodyComponent } from './children/bodyComponent/BodyComponent';

class App extends Component {
  constructor(){

    super();
    this.addData = this.addData.bind(this);
    this.state = {mobiles:[],cart:[]}
    
  }
  addToCart(){

  }
  loadData(){
     var url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';
    fetch(url).then(
      response => {
        response.json().then(data=>{
          console.log(data)
          this.setState({...this.state,mobiles:[...this.state.mobiles,...data.mobiles]})
        })
      }
    )
  }
  // getData(){
  //   this.mobile = getIN=
  // }
  callAddData(){

  }
  addData(mobile){
    // var id = this.refs.id.value;
    // console.log(id);
    console.log(mobile)
    this.setState({...this.state,mobiles:[...this.state.mobiles,mobile]})
  }
  render() {
    return (
      <div>
        {/* {headertop} */}
        <Headertop/>
        <BodyComponent addContent={this.addData.bind(this)} loadContent={this.loadData.bind(this)} displayData={this.state.mobiles}/>
      </div>
    );
  }
}

export default App;
