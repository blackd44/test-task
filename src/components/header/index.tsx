import MenuButton from "../leftSection/menu";
import SearchInput from "../search";
import HeaderIcons from "./bars";

const Header = () => {
  return (
    <header className="right_header">
      <MenuButton />
      <SearchInput />
      <HeaderIcons />
    </header>
  );
};

export default Header;
