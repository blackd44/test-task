import SearchInput from "../search";
import HeaderIcons from "./bars";

const Header = () => {
  return (
    <header className="right_header">
      <SearchInput />
      <HeaderIcons />
    </header>
  );
};

export default Header;
