import React from "react";
import JobsListContainer from "../containers/JobsListContainer";
import "../../css"; // eslint-disable-line no-unused-vars

function JobsLayout() {
  return (
    <div>
      <div>
        <JobsListContainer />
      </div>
    </div>
  );
}

export default JobsLayout;
