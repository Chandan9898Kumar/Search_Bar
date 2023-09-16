import React from "react";

class ShowImage extends React.Component {
  render() {
    return (
      <>
        <div className="childImages">
          <img src={this.props.item.thumbnail} alt={this.props.item.title} loading="lazy"/>
          <p>{this.props.item.title}</p>
        </div>
      </>
    );
  }
}
export default ShowImage;
