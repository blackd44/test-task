import { useState } from "react";
import Button from "../button";
import Modal from "../modal";
import UploadForm from "./uploadForm";

const UploadButton = () => {
  const [showModel, setShow] = useState(false);
  return (
    <>
      <Modal show={showModel} setShow={setShow}>
        <div style={{ textAlign: "center" }} className="upload_section">
          <h2>Upload a .jpg or .png Cat Image</h2>
          <p className="grey_color">
            Any uploads must comply with the{" "}
            <a
              className="active_color"
              href="https://thecatapi.com/privacy"
              target="_blank"
            >
              upload guidelines
            </a>{" "}
            or face deletion.
          </p>
          <UploadForm />
        </div>
      </Modal>
      <Button type="large" onClick={() => setShow((p) => !p)}>
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.86601 0L12.2355 4.03339L11.4129 4.92452L8.48919 2.22567V12.3618H7.27645V2.30464L4.67336 4.90772L3.81583 4.05019L7.86601 0ZM1.21274 14.7873V7.51081H0V16H15.7656V7.51081H14.5529V14.7873H1.21274Z"
              fill="#FF868E"
            />
          </svg>
          <span>UPLOAD</span>
        </>
      </Button>
    </>
  );
};

export default UploadButton;
