export default function Form() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];
  const ingredientsList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <>
      <main>
        <form className="addForm">
          <input
            className="textbar"
            type="text"
            placeholder="tomato"
            aria-label="Add ingredient"
          />
          <button className="addBtn">+ Add ingrident</button>
        </form>
        <ul>{ingredientsList}</ul>
      </main>
    </>
  );
}
