import { useEffect } from "react";
import Cocktail from "./Cocktail";
import { reset } from "../features/cocktail/cocktailSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../features/cocktail/cocktailActions";
import Loader from "./Loader";

function ListCocktails() {
  const { listCocktails, loading, error, message } = useSelector(
    (state) => state.cocktail
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCocktails());
    if (error) {
      console.log(message);
    }
    return () => {
      dispatch(reset());
    };
  }, [dispatch, error, message]);

  if (loading) {
    return <Loader />;
  }

  if (!listCocktails) {
    return <h2 className="msg">no cocktails matched your search criteria</h2>;
  }

  if (error) {
    return <h2 className="msg">{message}</h2>;
  }

  return (
    <div className="section cocktails">
      {listCocktails.map((e) => {
        return <Cocktail key={e.idDrink} {...e} />;
      })}
    </div>
  );
}

export default ListCocktails;
