import "./CategoryRow.css";
import Category from "./Category.js";

function CategoryRow() {
  return (
    <div className="categoryLinks">
      <Category name="All" />
      <Category name="Valorant" />
      <Category name="Counter Strike" />
      <Category name="League Of Legends" />
      <Category name="Javascript" />
      <Category name="Python" />
      <Category name="Games" />
    </div>
  );
}

export default CategoryRow;
