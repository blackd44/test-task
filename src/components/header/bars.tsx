import { ReactElement } from "react";

type iconProps = {
  type?: "heart" | "like" | "happy" | "sad" | "custom";
  icon?: ReactElement;
};

export const Icon = ({ type = "happy", icon }: iconProps) => {
  return (
    <div>
      {["happy"].includes(type) && (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="60" height="60" rx="20" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 30C15 21.7157 21.7157 15 30 15C38.2843 15 45 21.7157 45 30C45 38.2843 38.2843 45 30 45C21.7157 45 15 38.2843 15 30ZM30 17C22.8203 17 17 22.8203 17 30C17 37.1797 22.8203 43 30 43C37.1797 43 43 37.1797 43 30C43 22.8203 37.1797 17 30 17ZM25 27H23V25H25V27ZM37 27H35V25H37V27ZM24.2 31.6L24.8 32.4C27.4 35.8667 32.6 35.8667 35.2 32.4L35.8 31.6L37.4 32.8L36.8 33.6C33.4 38.1333 26.6 38.1333 23.2 33.6L22.6 32.8L24.2 31.6Z"
            fill="#FF868E"
          />
        </svg>
      )}
      {["heart", "like"].includes(type) && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <rect width="60" height="60" rx="20" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.0711 19C19.7181 19 17 21.7181 17 25.0711C17 26.6812 17.6396 28.2254 18.7782 29.364L30 40.5858L41.2218 29.364C42.3604 28.2254 43 26.6812 43 25.0711C43 21.7181 40.2819 19 36.9289 19C35.3188 19 33.7746 19.6396 32.636 20.7782L30.7071 22.7071C30.3166 23.0976 29.6834 23.0976 29.2929 22.7071L27.364 20.7782C26.2254 19.6396 24.6812 19 23.0711 19ZM15 25.0711C15 20.6135 18.6135 17 23.0711 17C25.2116 17 27.2646 17.8503 28.7782 19.364L30 20.5858L31.2218 19.364C32.7354 17.8503 34.7884 17 36.9289 17C41.3865 17 45 20.6135 45 25.0711C45 27.2116 44.1497 29.2646 42.636 30.7782L30.7071 42.7071C30.3166 43.0976 29.6834 43.0976 29.2929 42.7071L17.364 30.7782C15.8503 29.2646 15 27.2116 15 25.0711Z"
            fill="#FF868E"
          />
        </svg>
      )}
      {["sad"].includes(type) && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <rect width="60" height="60" rx="20" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 30C15 21.7157 21.7157 15 30 15C38.2843 15 45 21.7157 45 30C45 38.2843 38.2843 45 30 45C21.7157 45 15 38.2843 15 30ZM30 17C22.8203 17 17 22.8203 17 30C17 37.1797 22.8203 43 30 43C37.1797 43 43 37.1797 43 30C43 22.8203 37.1797 17 30 17ZM25 27H23V25H25V27ZM37 27H35V25H37V27ZM22.6 35.2L23.2 34.4C26.6 29.8667 33.4 29.8667 36.8 34.4L37.4 35.2L35.8 36.4L35.2 35.6C32.6 32.1333 27.4 32.1333 24.8 35.6L24.2 36.4L22.6 35.2Z"
            fill="#FF868E"
          />
        </svg>
      )}
      {["custom"].includes(type) && icon}
    </div>
  );
};

const HeaderIcons = () => {
  return (
    <>
      <Icon type="happy" />
      <Icon type="heart" />
      <Icon type="sad" />
    </>
  );
};

export default HeaderIcons;
