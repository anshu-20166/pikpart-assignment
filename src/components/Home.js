import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      entries: [],
      text: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      entries: this.state.entries,
      text: e.target.value,
    });

    console.log(this.state);
  };
  handleClick = () => {
    var arr = this.state.entries;
    arr.push(this.state.text);
    console.log(arr);
    this.setState({
      entries: arr,
      text: "",
    });
  };
  render() {
    const { entries } = this.state;
    console.log(entries);
    return (
      <div className="div">
        <textarea
          rows="5"
          columns="20"
          placeholder="Post Something ....."
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button
          type="button"
          id="btn"
          class="btn btn-secondary"
          onClick={this.handleClick}
        >
          POST
        </button>

        <div>
          {entries.map((post) => (
            <div>
              <h3>{post}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
