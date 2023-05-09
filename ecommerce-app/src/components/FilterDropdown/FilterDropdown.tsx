import Slider from "@mui/material/Slider";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../redux/actions/filterAction";
import { useSelector } from "react-redux";
import { StateType, FilterType } from "../../interfaces/interface";
import { FilterDropdownWrapper } from "./FilterDropdown.styles";

function FilterDropdown() {
  const dispatch = useDispatch();
  const filter = useSelector(
    (state: StateType) => state.filterReducer
  ) as FilterType;

  function handlePriceChanges(event: any, newValue: any) {
    dispatch(
      updateFilter({
        maxPrice: newValue[1],
        minPrice: newValue[0],
        minRating: filter.minRating,
        maxRating: filter.maxRating,
      })
    );
  }

  function handleRatingChanges(event: any, newValue: any) {
    dispatch(
      updateFilter({
        maxPrice: filter.maxPrice,
        minPrice: filter.minPrice,
        minRating: newValue[0],
        maxRating: newValue[1],
      })
    );
  }

  return (
    <FilterDropdownWrapper data-testid="FilterDropdown">
      <h2>Price</h2>
      <Slider
        data-testid = "PriceSlider"
        defaultValue={10000}
        step={1000}
        marks
        min={1000}
        max={10000}
        value={[filter.minPrice, filter.maxPrice]}
        onChange={handlePriceChanges}
        valueLabelDisplay="auto"
      />
      The selected range is {filter.minPrice} - {filter.maxPrice}
      <h2>Rating</h2>
      <Slider
        data-testid = "RatingSlider"
        defaultValue={5}
        step={1}
        marks
        min={1}
        max={5}
        value={[filter.minRating, filter.maxRating]}
        onChange={handleRatingChanges}
        valueLabelDisplay="auto"
      />
      The selected range is {filter.maxRating} - {filter.minRating}
    </FilterDropdownWrapper>
  );
}

export default FilterDropdown;
