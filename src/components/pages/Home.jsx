import SearchForm from "../SearchForm";
import ListCocktails from "../ListCocktails";

function Home() {
  return (
    <section className="page">
      <SearchForm />
      <div className="section">
        <ListCocktails />
      </div>
    </section>
  );
}

export default Home;
