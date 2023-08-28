/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Button from "../button";
import DragInput from "./dragInput";

// const API_KEY = "";
const API_KEY = import.meta.env.VITE_CAT_API_KEY;

const UploadForm = () => {
  const [file, setFile] = useState<any>(null);
  const [status, setStatus] = useState<{
    uploading: boolean;
    error: Error | null;
  }>({
    uploading: false,
    error: null,
  });

  useEffect(() => {
    setStatus({
      uploading: false,
      error: null,
    });
  }, [file]);

  const upload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus((p) => ({
      ...p,
      uploading: true,
    }));
    const data = new FormData();
    data.append("file", file);
    data.append("sub_id", "");
    data.append("breed_ids", "");

    const { error } = await fetch(
      "https://api.thecatapi.com/v1/images/upload",
      {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "multipart/form-data",
          "x-api-key": API_KEY,
        },
      }
    )
      .then((res) => {
        if (res.status >= 100 && res.status < 300) return { data: res.body };
        return { error: res.body };
      })
      .catch((e) => ({ error: e }));

    setStatus((p) => ({
      ...p,
      uploading: false,
    }));

    if (error)
      setStatus((p) => ({
        ...p,
        error: error,
      }));
  };

  return (
    <form className="upload_form" onSubmit={upload}>
      <DragInput file={file} setFile={setFile} />
      {!file ? (
        <p className="grey_color">No file selected</p>
      ) : (
        <>
          <p className="grey_color">
            Image File Name: <span>{file.name}</span>
          </p>
          {status.error ? (
            <div className="item_not_found white_back">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM9.05719 10L5.5286 6.4714L6.4714 5.5286L10 9.05719L13.5286 5.5286L14.4714 6.4714L10.9428 10L14.4714 13.5286L13.5286 14.4714L10 10.9428L6.4714 14.4714L5.5286 13.5286L9.05719 10Z"
                  fill="#FF868E"
                />
              </svg>
              <span className="grey_color" style={{ marginLeft: "0.63rem" }}>
                No Cat found - try a different one
              </span>
            </div>
          ) : (
            <Button
              formType="submit"
              type="large"
              theme="active"
              style={{ margin: "auto" }}
              disabled={status.uploading}
            >
              {status.uploading ? (
                <>
                  <span
                    className="spinner"
                    style={{ width: "1rem", height: "1rem" }}
                  >
                    {" "}
                  </span>
                  <span>Uploading</span>
                </>
              ) : (
                <>UPLOAD PHOTO</>
              )}
            </Button>
          )}
        </>
      )}
    </form>
  );
};

export default UploadForm;
