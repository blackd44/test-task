import css from "./style.module.scss";
import { ReactElement, useId } from "react";

type OptionType = {
  text: string;
  value: string;
};

type props = {
  options?: OptionType[] | string[];
  children?: ReactElement;
  label: string;
};

const Select = ({ options, children, label }: props) => {
  const id = useId();

  return (
    <label htmlFor={id} className={css.box}>
      {label && <p className={css.label}>{label}</p>}
      <select id={id} className={css.input}>
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
