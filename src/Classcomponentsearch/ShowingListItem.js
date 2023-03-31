import React from "react";

class ShowList extends React.Component {
  render() {
    return (
      <>
        <div
          className="listChildItem"
          onClick={() => {
            this.props.functionInput(this.props.item.title);
            this.props.setCondition(!this.props.condition);
          }}
        >
          {this.props.item &&
            this.props.item.title.length > 0 &&
            this.props.item.title.slice(0, 30)}
          ...
        </div>
      </>
    );
  }
}
export default ShowList;
