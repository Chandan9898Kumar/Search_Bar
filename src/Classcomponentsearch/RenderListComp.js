import React, { memo } from "react";
import "./classStyle.css";
import ShowList from "../Classcomponentsearch/ShowingListItem";
class RenderListComponent extends React.Component {
  render() {
// eslint-disable-next-line
    return (
      <>
        <div className="renderListMainCom">
        
          {this.props.result &&
            this.props.result.length > 0 &&
            this.props.result.map((item, index) => {
              return (
                <div key={index} className="showListComp">
                  <ShowList
                    item={item}
                    functionInput={this.props.functionInput}
                    setCondition={this.props.setCondition}
                    condition={this.props.condition}
                  />
                </div>
              );
            })}
        </div>
      </>
    );
  }
}
export default memo(RenderListComponent);
