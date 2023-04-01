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
    // Here we have bind these functions because,if we send these function in other components without binding then these function will not get the reference to this object
    //  and cause errors. but if we used arrow function there like this :-

    //     setCondition=(conditions)=> {
    //     this.setState({ condition: conditions });
    // }

    //  then it will not create any error,this keyword will reference to the MainClassSearchPage object and we explicitly not need to use bind method in constructor.

    //  Example  below 🔽.
  }

  handleAndSetApiData(data) {
    if (data && data.length) {
      this.setState({ data: data });
    }
  }

  // if we used arrow function here then,it means that
  //   the arrow function is enclosed inside the MainClassSearchPage class — or constructor function — so the context is the component instance, which is what we want.
  //   hence this keyword reference to the MainClassSearchPage class.
  //     setCondition=(conditions)=> {
  //     this.setState({ condition: conditions });
  // }

  setCondition(conditions) {
    // console.log(this,'this') check this.
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
              //    if we are using arrow function here 🔽 then we don't need to use it above and don't need to use bind method in constructor function.
              // since we have not used any arrow functions,so we had to use bind method in constructor function,so that this keyword could refer to MainClassSearchPage object.
              //   functionInput={()=>this.changeInput()}
              //   The reason is that in the case of arrow functions, this keyword is bound lexically.
              // This means that it uses the context of the enclosing function — or global — scope as its this value.
              fetchingData={this.handleAndSetApiData}
              data={this.state.data}
            />
            {/* Note-
                In the case of the arrow function as callback example, the arrow function is enclosed inside the render() method, 
                which is invoked by React in the context of the component instance. This is why the arrow function will also capture this same context,
                and the this value inside it will properly point to the component instance.
            
             */}
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

// class Foo {
//     constructor(name){
//       this.name = name
//     }

//     display(){
//       console.log(this.name);
//     }
//   }

//   var foo = new Foo('Saurabh');
//   foo.display(); // Saurabh

// The assignment operation below simulates loss of context
// similar to passing the handler as a callback in the actual
// React Component
//   var display = foo.display;
//   display(); // TypeError: this is undefined

// We are not simulating actual events and handlers, but instead we are using synonymous code.
// As we observed in the React Component example, the this value was undefined as the context was lost after passing the handler as a callback — synonymous
// with an assignment operation. This is what we observe here in this non-React JavaScript snippet as well.

// So, to prevent the error, we need to bind the this value like this:

// class Foo {
//   constructor(name){
//     this.name = name
//     this.display = this.display.bind(this);
//   }

//   display(){
//     console.log(this.name);
//   }
// }

// var foo = new Foo('Saurabh');
// foo.display(); // Saurabh

// var display = foo.display;
// display(); // Saurabh





// In short  -

// In Class Components in React, when we pass the event handler function reference as a callback like this

// <button type="button" onClick={this.handleClick}>Click Me</button>
// the event handler method loses its implicitly bound context. When the event occurs and the handler is invoked,
//  the this value falls back to default binding and is set to undefined , as class declarations and prototype methods run in strict mode.

// When we bind the this of the event handler to the component instance in the constructor, we can pass it as a callback without worrying about it losing its context.

// Arrow functions are exempt from this behavior because they use lexical this binding which automatically binds them to the scope they are defined in.
