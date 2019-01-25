import React, { Component } from "react";

class DemoBox extends Component {
  state = {
    shownIndex: 1
  };

  clickOpen = i => {
    if (this.state.shownIndex !== i) {
      this.setState({ shownIndex: i });
    }
    if (this.state.shownIndex === i) {
      this.setState({ shownIndex: -1 });
    }
  };

  render() {
    return (
      <div className="reg-form container">
        <h1>EXAMPLE Building your Food Profile</h1>
        <p>
          Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin,
          erat a elementum rutrum, neque sem pretium metus, quis mollis nisl
          nunc et massa. Vestibulum sed metus in lorem tristique ullamcorper id
          vitae erat.
        </p>

        <div className="toggle-container">
          <div className="toggle-section">
            <div onClick={() => this.clickOpen(1)} className="toggle-header">
              Chicken
            </div>
            <div
              className={
                this.state.shownIndex === 1
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              content
            </div>
          </div>

          <div className="toggle-section">
            <div onClick={() => this.clickOpen(2)} className="toggle-header">
              Beef
            </div>
            <div
              className={
                this.state.shownIndex === 2
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              content
            </div>
          </div>

          <div className="toggle-section">
            <div onClick={() => this.clickOpen(3)} className="toggle-header">
              Pork
            </div>
            <div
              className={
                this.state.shownIndex === 3
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              content
            </div>
          </div>

          <div className="toggle-section">
            <div onClick={() => this.clickOpen(4)} className="toggle-header">
              Lamb
            </div>
            <div
              className={
                this.state.shownIndex === 4
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              content
            </div>
          </div>

          <div className="toggle-section">
            <div onClick={() => this.clickOpen(5)} className="toggle-header">
              Seafood
            </div>
            <div
              className={
                this.state.shownIndex === 5
                  ? "toggle-content showing"
                  : "toggle-content"
              }
            >
              content
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DemoBox;
