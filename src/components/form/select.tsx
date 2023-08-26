import css from "./style.module.scss";
import { ReactElement, useId } from "react";

type OptionType = {
  text: string;
  value: string;
};

type props = {
  defaultValue?: string;
  options?: OptionType[] | string[];
  children?: ReactElement;
  label?: string;
  theme?: "normal" | "gray" | "inverse";
  fill?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLSelectElement>,
    value: string
  ) => unknown;
};

const Select = ({
  defaultValue,
  options,
  children,
  label,
  theme = "normal",
  fill,
  onChange,
  ...props
}: props) => {
  const id = useId();

  const change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (typeof onChange == "function") onChange(e, e.target.value);
  };

  return (
    <label
      htmlFor={id}
      className={`${css.box} ${css[theme]}`}
      style={{ flex: fill ? 1 : 0, width: fill ? "100%" : "" }}
    >
      {label && <p className={css.label}>{label}</p>}
      <select
        id={id}
        className={css.input}
        {...props}
        onChange={change}
        defaultValue={defaultValue}
      >
        {options && Array.isArray(options) && options.length > 0
          ? options.map((option: OptionType | string) => (
              <option
                value={typeof option == "string" ? option : option.value}
                key={typeof option == "string" ? option : option.value}
              >
                {typeof option == "string" ? option : option.text}
              </option>
            ))
          : children}
      </select>
    </label>
  );
};

export default Select;
