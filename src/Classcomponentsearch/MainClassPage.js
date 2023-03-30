import React from "react";
import "./classStyle.css";

import SearchEngine from "./SearchEngine";

class MainClassSearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "hello",
      result: [],
      data: [],
      condition: false,
    };
    this.changeInput = this.changeInput.bind(this);
  }


handleAndSetApiData(data) {
    console.log(data,'data');

    if(data && data.length){
        this.setState({data: data});
    }

}

  changeInput(values) {
    this.setState({ inputValue: values });
  }

  //  Here we cant pass this.setState in other component just like we can can pass useState method in other component
  //  if we are having  state and inside that state some properties like result,inputValue  in one component then
  // we can only set that state property here only,can cant use  this.setState  method to set one other component property.
  render() {
    console.log(this.state.inputValue, "input values",this.state.data);
    return (
      <>
        <div className="headingClass">
          <div className="searchBarClass">
            <SearchEngine
              inputValue={this.state.inputValue}
              functionInput={this.changeInput}
              fetchingData={this.handleAndSetApiData}
              data={this.state.data}

            />

            <div className="imageRenderClass"></div>
          </div>
        </div>
      </>
    );
  }
}
export default MainClassSearchPage;
