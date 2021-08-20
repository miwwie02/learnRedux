import React from "react";
import { connect } from 'react-redux';
import * as actions from '../actions/Hello';



class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "Nama",
      lname: "Chocolate",
      age: 20,
    };
  }

  changeName = () => {
    this.props.addHello("Miwwieeieie");
    // this.setState({
    //   fname: "miw",
    //   lname: "wie",
    //   age: 21,
    // });
  };

  render() {
    return (
      <div>
        <h1>
          <i>Hello {this.props.name}</i>
        </h1>
        สวัสดี {this.state.fname} {this.state.lname} ({this.state.age})
        <button type="button" onClick={this.changeName}>
          เปลี่ยน
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({hello}) => {
    return {
        hello,
    };
  };
  const mapDispatchToProps = {
    ...actions,
  };

  
  export default connect(mapStateToProps, mapDispatchToProps)(Hello);
