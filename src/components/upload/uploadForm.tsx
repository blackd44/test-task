/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Button from "../button";
import DragInput from "./dragInput";

const UploadForm = () => {
  const [file, setFile] = useState<any>(null);

  return (
    <form className="upload_form" onSubmit={(e) => e.preventDefault()}>
      <DragInput file={file} setFile={setFile} />
      {!file ? (
        <p className="grey_color">No file selected</p>
      ) : (
        <>
          <p className="grey_color">
            Image File Name: <span>{file.name}</span>
          </p>
          <Button
            formType="submit"
            type="large"
            theme="active"
            style={{ margin: "auto" }}
          >
            UPLOAD PHOTO
          </Button>
        </>
      )}
    </form>
  );
};

export default UploadForm;
