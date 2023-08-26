import { ReactElement, useEffect, useRef } from "react";
import css from "./style.module.scss";
import Button from "../button";

type props = {
  children: ReactElement;
  show?: boolean;
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ children, show, setShow }: props) => {
  const modelRef = useRef<HTMLDialogElement>(null);

  const closeModel = () => {
    if (!modelRef?.current) return;

    setShow && setShow(false);
    modelRef?.current?.close();
  };

  const click = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    if (!modelRef?.current) return;
    const dialogDimensions = modelRef?.current?.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions?.left ||
      e.clientX > dialogDimensions?.right ||
      e.clientY < dialogDimensions?.top ||
      e.clientY > dialogDimensions?.bottom
    ) {
      closeModel();
    }
  };

  useEffect(() => {
    if (!modelRef) return;

    if (show) modelRef?.current?.showModal();
  }, [modelRef, show]);

  return (
    <dialog ref={modelRef} className={css.model_section} onClick={click}>
      <div className={css.close_button}>
        <Button theme="light" onClick={() => closeModel()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.05716 8.99997L0.528564 1.47137L1.47137 0.528564L8.99997 8.05716L16.5286 0.528564L17.4714 1.47137L9.94278 8.99997L17.4714 16.5286L16.5286 17.4714L8.99997 9.94278L1.47137 17.4714L0.528564 16.5286L8.05716 8.99997Z"
              fill="#FF868E"
            />
          </svg>
        </Button>
      </div>
      <div className={css.container}>{children}</div>
    </dialog>
  );
};

export default Modal;
