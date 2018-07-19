import React, { Component } from 'react'

export default class InputArea extends Component {
  comstructor(){
    // super(props);
  }
  getInput(){
    var id = this.refs.id.value;
    var name = this.refs.name.value;
    var price = this.refs.price.value;
    var url = this.refs.url.value;
    this.props.addContent({id,name,price,url});

  }
  render() {
    return (
      <div>
       <div className="row justify-content-between container marginTop">
            <button onClick={this.getInput.bind(this)} className="btn btn-primary" id="addButton">Add</button>
            <button onClick={this.props.loadContent} className="btn btn-primary" id="loadButton">Load</button>
        </div>
        <div className="marginTop form-group">
        <label htmlFor="id">ID</label> 
        <input type="text" ref="id" className="form-control" id="id" placeholder="Enter productID"/>
        <label htmlFor="name">Name</label> 
        <input type="text" ref="name" name=""  className="form-control" id="name" placeholder="Enter Name"/>
        <label htmlFor="price">Price</label> 
        <input type="number" ref="price" className="form-control" name="" id="price" placeholder="Enter price"/>
        <label htmlFor="url">Image URL</label> 
        <input type="text" ref="url" className="form-control" name="" id="url" placeholder="Enter Image URL"/>
        </div>
        </div>
    )
  }
}
