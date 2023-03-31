import React from "react";
import "./classStyle.css";

import SearchEngine from "./SearchEngine";
import RenderListComponent from "./RenderListComp";
import ShowImage from "./ShowImage";
class MainClassSearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      result: [],
      data: [],
      condition: false,
    };
    this.changeInput = this.changeInput.bind(this);
    this.handleAndSetApiData = this.handleAndSetApiData.bind(this);
    this.setCondition = this.setCondition.bind(this);
  }

  handleAndSetApiData(data) {
    if (data && data.length) {
      this.setState({ data: data });
    }
  }

  setCondition(conditions) {
    this.setState({ condition: conditions });
  }

  changeInput(values) {
    this.setState((prevState) => ({
      ...prevState,
      inputValue: values,
      condition: false,
    }));
    let searchData =
      this.state.inputValue &&
      this.state.inputValue.length &&
      this.state.data &&
      this.state.data.length > 0 &&
      this.state.data.filter((item) =>
        item.title.trim().split(" ").join("").toLowerCase() ===
        this.state.inputValue.trim().split(" ").join("").toLowerCase()
          ? item.title.trim().split(" ").join("").toLowerCase() ===
            this.state.inputValue.trim().split(" ").join("").toLowerCase()
          : item.title
              .trim()
              .split(" ")
              .join("")
              .toLowerCase()
              .includes(
                this.state.inputValue.trim().split(" ").join("").toLowerCase()
              )
      );
    this.setState({ result: searchData });
  }

  //  Here we cant pass this.setState in other component just like we can can pass useState method in other component
  //  if we are having  state and inside that state some properties like result,inputValue  in one component then
  // we can only set that state property here only,can cant use  this.setState  method to set one other component property.
  // here we created a function and passed that function to another component and we are getting our data to set.
  render() {
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
            {!this.state.condition &&
              this.state.result &&
              this.state.inputValue.length > 0 &&
              this.state.result.length > 0 && (
                <RenderListComponent
                  result={this.state.result}
                  functionInput={this.changeInput}
                  setCondition={this.setCondition}
                  condition={this.state.condition}
                />
              )}

            <div className="imageRenderClass">
              {this.state.inputValue &&
              this.state.inputValue.length > 0 &&
              this.state.result &&
              this.state.result.length > 0
                ? this.state.result.map((item, index) => {
                    return (
                      <div key={index} className="showImage">
                        <ShowImage item={item} />
                      </div>
                    );
                  })
                : this.state.data &&
                  this.state.data.length > 0 &&
                  this.state.data.map((item, index) => {
                    return (
                      <div key={index} className="showImage">
                        <ShowImage item={item} />
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default MainClassSearchPage;
