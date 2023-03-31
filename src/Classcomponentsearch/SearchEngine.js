import React from "react";

import { FaSearch } from "react-icons/fa";
const URl = "https://dummyjson.com/products?limit=100";
class SearchEngine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchApiData();
  }

  fetchApiData() {
    fetch(URl)
      .then((response) => response.json())
      .then((results) => {
        results &&
          results.products.length &&
          this.props.fetchingData(results.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <div className="searchInputBar">
          <FaSearch id="searchIcon" />
          <input
            className="input-field"
            type="search"
            placeholder="Search Your Queries ..."
            value={this.props.inputValue}
            onChange={(event) => this.props.functionInput(event.target.value)}
          />
        </div>
      </>
    );
  }
}

export default SearchEngine;
