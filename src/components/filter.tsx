import { useContext, useState } from "react";
import Select from "./form/select";
import { BreedContext } from "./breedsProvider";
import Button from "./button";

interface defaultsType {
  limit?: string | number;
  breed?: string;
  order?: string;
  types?: string;
}
interface props {
  changed?: React.Dispatch<React.SetStateAction<defaultsType>>;
  defaults?: defaultsType;
}

const FilterBar = ({ changed, defaults }: props) => {
  const { data: breedsData } = useContext(BreedContext);

  const [filtered, setParams] = useState<defaultsType>(
    defaults || {
      limit: 10,
      breed: undefined,
      order: "RAND",
      types: "jpg,gif,png",
    }
  );
  const onChange = (
    property: "limit" | "breed" | "order" | "types",
    value: string
  ) => {
    setParams((prev) => {
      prev[property] = value;
      return { ...prev };
    });
  };

  return (
    <div className="gallery_filter">
      <Select
        label="ORDER"
        defaultValue={defaults?.order}
        onChange={(_, val) => onChange("order", val)}
        options={[
          { value: "RAND", text: "Random" },
          { value: "DESC", text: "Desc" },
          { value: "ASC", text: "Asc" },
        ]}
      />
      <Select
        label="TYPE"
        defaultValue={defaults?.types}
        onChange={(_, val) => onChange("types", val)}
        options={[
          { value: "jpg,gif,png", text: "All" },
          { value: "jpg,png", text: "Static" },
          { value: "gif", text: "Animated" },
        ]}
      />
      <Select
        label="BREED"
        defaultValue={defaults?.breed || ""}
        onChange={(_, val) => onChange("breed", val)}
        options={[
          { value: "", text: "None" },
          ...(breedsData
            ? breedsData.map(({ id, name }) => ({ value: id, text: name }))
            : []),
        ]}
      />
      <div className="inline">
        <Select
          fill
          label="LIMIT"
          defaultValue={`${defaults?.limit}` || ""}
          onChange={(_, val) => onChange("limit", val)}
          options={[
            { value: "5", text: "5 items per page" },
            { value: "10", text: "10 items per page" },
            { value: "15", text: "15 items per page" },
            { value: "20", text: "20 items per page" },
          ]}
        />
        <Button theme="light" onClick={() => changed && changed(filtered)}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.4819 12.4999L17.934 10.953L18.8863 10L22.0577 13.1693L18.8863 16.3387L17.9339 15.3858L19.4723 13.8483C15.5124 13.9981 12.3473 17.255 12.3473 21.2478C12.3473 25.3361 15.6655 28.6527 19.7574 28.6527C23.8494 28.6527 27.1676 25.3361 27.1676 21.2478V20.5742H28.5149V21.2478C28.5149 26.081 24.5927 30 19.7574 30C14.9222 30 11 26.081 11 21.2478C11 16.5068 14.7741 12.6454 19.4819 12.4999Z"
              fill="#FF868E"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;
