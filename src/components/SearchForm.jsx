import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../features/cocktail/cocktailSlice";
import { getCocktailByName } from "../features/cocktail/cocktailActions";
import { useEffect, useState } from "react";

function SearchForm() {
  const { searchValue, error, message } = useSelector(
    (state) => state.cocktail
  );

  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      dispatch(getCocktailByName(searchValue));
    } 
  };
  useEffect(() => {
    if (inputValue) {
      dispatch(setSearchValue(inputValue.toLowerCase()));
    } else {
      dispatch(setSearchValue("a"));
    }

    if (error) {
      console.log(message);
    }
  }, [dispatch, inputValue, searchValue, error, message]);
  return (
    <div className="form-container">
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="btn-search">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
