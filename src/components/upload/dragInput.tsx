/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useId, useMemo } from "react";
import { useDropzone } from "react-dropzone";

const DragInput = ({ file, setFile }: any) => {
  const inputId = useId();

  const accepted = useMemo(
    () => "image/png, image/gif, image/jpeg".split(", "),
    []
  );

  const onDrop = useCallback(
    (acceptedFiles: any[]) => {
      if (accepted.includes(acceptedFiles[0].type))
        setFile(
          Object.assign(acceptedFiles[0], {
            preview: URL.createObjectURL(acceptedFiles[0]),
          })
        );
    },
    [accepted, setFile]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <label className="drag" htmlFor={inputId} {...getRootProps()}>
      {isDragActive ? (
        <p className="grey_color">
          <b>Drop</b> the files <b>here</b> ...
        </p>
      ) : !file ? (
        <p className="grey_color">
          <b>Drag here</b> your file or <b>Click here</b> to upload
        </p>
      ) : (
        <img className="preview" alt={file.name} src={file.preview} />
      )}

      <input
        id={inputId}
        type="file"
        accept={accepted.join(", ")}
        {...getInputProps()}
      />
    </label>
  );
};

export default DragInput;
