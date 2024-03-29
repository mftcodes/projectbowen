import { useState } from "react";
import Button from "./Button";
import CountyDropdown from "./CountyDropdown";
import CategoryDropdown from "./CategoryDropdown";

const Search = ({ onSearch }) => {
  const [countySelected, setCountySelected] = useState(false);
  const [county, setCounty] = useState("Make Selection");
  const [categorySelected, setCategorySelected] = useState(false);
  const [category, setCategory] = useState("Make Selection");
  const [categoryId, setCategoryId] = useState(-1);

  return (
    <>
      <h2 className="text-center search">Community Resources Search</h2>

      <CountyDropdown
        label={`County: ${county}   `}
        onChoice={(choice) => {
          setCounty(choice);
          setCountySelected(true);
        }}
      />
      <CategoryDropdown
        label={`Category: ${category}   `}
        onChoice={(choice, catId) => {
          setCategory(choice);
          setCategorySelected(true);
          setCategoryId(Number.parseInt(catId));
        }}
      />
      {countySelected && categorySelected && (
        <div className="text-center pt-4">
          <Button
            type="bowen__alt"
            doClick={() => {
              const payload = {
                Is_statewide: true,
                County: county,
                State: "MI",
                Category_id: categoryId,
              };
              onSearch(payload);
            }}
          >
            Search
          </Button>
        </div>
      )}
    </>
  );
};

export default Search;
