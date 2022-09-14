import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <ul className={"list-group "}>
        <li>
          <Link to={"products"}>get All products</Link>
        </li>
        <li>
          <Link to={"categorie"}>get All Categories</Link>
        </li>
      </ul>
    </>
  );
}
export default Sidebar;
