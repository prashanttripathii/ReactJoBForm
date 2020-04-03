import React from "react";

class Jbform extends React.Component {
  state = {
    person: { name: "", email: "", design: "" },
    // persons: []
  };
  onChange = e => {
    this.setState({ person: { [e.target.name]: e.target.value } });
  };
  fsubmit = e => {
    e.preventDefault();
    // this.state.persons.push(this.state.person);

    this.props.createCard(this.state.person);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.fsubmit}>
          Name :{" "}
          <input
            type="text"
            name="name"
            onChange={this.onChange}
            placeholder="Enter Your Name"
          />{" "}
          E-mail :{" "}
          <input
            type="email"
            name="email"
            onChange={this.onChange}
            placeholder="Enter Your Email"
          />{" "}
          Designatithis. :{" "}
          <input
            type="text"
            name="design"
            onChange={this.onChange}
            placeholder="Enter Your Position"
          />{" "}
          {""}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Jbform;
