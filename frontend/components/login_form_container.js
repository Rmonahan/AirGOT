import { connect } from "react-redux";
import SessionForm from "./session_form";
import React from "react";
import {openModal, closeModal} from "../actions/modal_actions";
import {receiveSessionErrors} from "../actions/session";

const msp = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Log in',
});

const mdp = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: (
    <button className="link" onClick={() => { dispatch(openModal('signup')); dispatch(receiveSessionErrors([]))}}>
      Sign up
      </button>
  ),
  closeModal: () => { dispatch(closeModal()); dispatch(receiveSessionErrors([])) }
});

export default connect(msp, mdp)(SessionForm);