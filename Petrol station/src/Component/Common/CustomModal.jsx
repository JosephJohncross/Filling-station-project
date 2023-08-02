// "use client";
import React, { useState, useRef } from "react";

import { Modal } from "flowbite-react";
import Button from "./Button";
// import { clearForm } from "../../services/https-request";

export default function CustomModal({
  header,
  component,
  operationAction,
  secondaryOperationAction,
  dispatch,
  button1Text,
  button2Text,
  modalState,
  defaultModalButton = true,
}) {
  const modalForm = useRef();

  return (
    <>
      <Modal
        show={modalState === "default"}
        onClose={() => {
          dispatch({ type: "openEditModal", val: undefined });
          dispatch({type: "clearForm"})
        }}
        className="font-mont"
      >
        <form
          encType="multipart/form-data"
          className=""
          ref={modalForm}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {defaultModalButton && <Modal.Header>{header}</Modal.Header>}
          <div
            className={`my-6 py-6 mini:px-5 ${
              defaultModalButton ? "border border-gray-400" : ""
            } rounded-lg mini:mx-5`}
          >
            {component}
          </div>
          {defaultModalButton && (
            <Modal.Footer>
              <div className="w-full flex items-center justify-end space-x-3">
                <Button
                  clickFunction={() => {
                    secondaryOperationAction ? secondaryOperationAction() : ""
                  }}
                  content={button1Text}
                  shade={"white"}
                />
                <Button
                  clickFunction={() => {
                    operationAction ? operationAction() : "";
                    dispatch({ type: "openEditModal", val: undefined });
                  }}
                  content={button2Text}
                  shade={"blue"}
                />
              </div>
            </Modal.Footer>
          )}
        </form>
      </Modal>
    </>
  );
}
