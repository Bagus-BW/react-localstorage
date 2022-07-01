import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      record: [],
      list_post: []
    }
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       name: "Bagus"
  //     })
  //   }, 2000);
  // }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
      .then(data => this.setState({ 
        list_post: data 
      })
    )
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.counter !== this.state.counter){
      this.setState({
        record: [...this.state.record, prevState.counter]
      })
    }
  }

  handleDecrease = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  handleIncrease = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    console.log('Render')
    return (
      <div>
        <h1>{this.state.counter}</h1>

        <button onClick={() => this.handleDecrease()}>Decrease</button>
        <button onClick={() => this.handleIncrease()}>Increase</button>

        <ul>
          {this.state.list_post.map((item, index) => {
              <li key={index}>{item.title}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default Counter;