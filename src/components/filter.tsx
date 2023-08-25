import Select from "./form/select";

const FilterBar = () => {
  return (
    <div className="gallery_filter">
      <Select label="ORDER" options={["Random", "Desc", "Asc"]} />
      <Select label="TYPE" options={["All", "Static", "Animated"]} />
      <Select
        label="BREED"
        options={[
          "None",
          "Abyssinian",
          "Bengal",
          "Agean",
          "American Bobtail",
          "American Shorthair",
          "American Wirehair",
        ]}
      />
      <div className="inline">
        <Select
          label="LIMIT"
          options={[
            "5 items per page",
            "10 items per page",
            "15 items per page",
            "20 items per page",
          ]}
        />
        <button className="btn1">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="10" fill="white" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.4819 12.4999L17.934 10.953L18.8863 10L22.0577 13.1693L18.8863 16.3387L17.9339 15.3858L19.4723 13.8483C15.5124 13.9981 12.3473 17.255 12.3473 21.2478C12.3473 25.3361 15.6655 28.6527 19.7574 28.6527C23.8494 28.6527 27.1676 25.3361 27.1676 21.2478V20.5742H28.5149V21.2478C28.5149 26.081 24.5927 30 19.7574 30C14.9222 30 11 26.081 11 21.2478C11 16.5068 14.7741 12.6454 19.4819 12.4999Z"
              fill="#FF868E"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
