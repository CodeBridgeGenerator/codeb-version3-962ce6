import React from "react";
import ProjectLayout from "../../Layouts/ProjectLayout";
import { connect } from "react-redux";
import WorkflowsPage from "./WorkflowsPage";

const WorkflowProjectLayoutPage = (props) => {
  return (
    <ProjectLayout>
      <WorkflowsPage />
    </ProjectLayout>
  );
};

const mapState = (state) => {
  const { user, isLoggedIn } = state.auth;
  return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(WorkflowProjectLayoutPage);