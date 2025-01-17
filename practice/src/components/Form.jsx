export default function Form() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];
  const ingredientsList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleSubmit(event) {
    // is se page refresh nahi hota
    event.preventDefault();
    console.log("Form Submitted");

    //need to learn about current target
    const formdata = new FormData(event.currentTarget);
    const newIngredients = formdata.get("ingredient");
    console.log(newIngredients);
    console.log(newIngredients);
  }
  return (
    <>
      <main>
        <form onSubmit={handleSubmit} className="addForm">
          <input
            className="textbar"
            type="text"
            placeholder="tomato"
            aria-label="Add ingredient"
            // this name element will be shown in the url
            name="ingredient"
          />
          <button className="addBtn">+ Add ingrident</button>
        </form>
        <ul>{ingredientsList}</ul>
      </main>
    </>
  );
}
