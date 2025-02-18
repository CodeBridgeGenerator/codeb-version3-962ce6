import React from "react";
import ProjectLayout from "../../Layouts/ProjectLayout";
import { connect } from "react-redux";
import GitRepositoriesPage from "./GitRepositoriesPage";

const GitRepositoryProjectLayoutPage = (props) => {
  return (
    <ProjectLayout>
      <GitRepositoriesPage />
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

export default connect(mapState, mapDispatch)(GitRepositoryProjectLayoutPage);