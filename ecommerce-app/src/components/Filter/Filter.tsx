import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FilterDropdown from "../FilterDropdown/FilterDropdown";
import { FilterSection, FilterButton } from "./Filter.styles";

function Filter() {
  const [isHoverOnFilter, setIsHoverOnFilter] = useState(false);
  return (
    <>
      <FilterSection>
        <FilterButton
          onMouseMove={() => setIsHoverOnFilter(true)}
          onMouseLeave={() => setIsHoverOnFilter(false)}
        >
          <h2>Filter</h2>
          <ArrowDropDownIcon className="drop-icon" />
        </FilterButton>
      </FilterSection>
      <div
        onMouseMove={() => setIsHoverOnFilter(true)}
        onMouseLeave={() => setIsHoverOnFilter(false)}
      >
        {isHoverOnFilter && <FilterDropdown />}
      </div>
    </>
  );
}

export default Filter;
