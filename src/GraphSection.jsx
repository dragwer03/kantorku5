import React from "react";

const GraphSection = () => {
  return (
    <div className="row my-5">
      <div className="col-md-6">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Statistics</h5>
            <div style={{ height: "200px", backgroundColor: "#f8f9fa" }}>Graph Placeholder</div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Employee Earnings</h5>
            <div style={{ height: "200px", backgroundColor: "#f8f9fa" }}>Graph Placeholder</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphSection;
