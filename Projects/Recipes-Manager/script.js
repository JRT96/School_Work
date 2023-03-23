let recipe = {};

const output = document.getElementById("output");
const imageContainer = document.getElementById("imageContainer");

document.getElementById("recipePicture").addEventListener("change", (event) => {
    imageContainer.src = "";
    output.textContent = "";
    const file = event.target.files[0];
    if (!file.type) {
        output.textContent = "File not supported";
        return;
    }
    if (!file.type.match("image.*")) {
        output.textContent = "File not supported";
        return;
    }
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
        imageContainer.src = event.target.result;
        recipe.picture = event.target.result;
        console.log(recipe.picture);
    });
    reader.readAsDataURL(file);

});



function recipeBtn() {
    recipe.name = document.getElementById("recipeName").value;
    recipe.instructions = document.getElementById("recipeInstructions").value;
    recipe.cookTime = document.getElementById("cookTime").value;
    recipe.id = Math.floor(Math.random() * 10000);

    if(recipe.name == "" || recipe.instructions == "" || recipe.cookTime == "" || recipe.picture == undefined) {
        alert("Please fill out all fields");
        return;
    } else {
        alert("Recipe added");
    }

    let recipes = JSON.parse(window.localStorage.getItem("recipes"));
    if (!recipes) {
        recipes = [];
    }

    recipes.push(recipe);
    window.localStorage.setItem("recipes", JSON.stringify(recipes));

}

function showRecipes() {
    const recipes = JSON.parse(window.localStorage.getItem("recipes"));
    let table = '';
    recipes.forEach(r => {
        table += `<tr>
        <td >${r.name}</td>
        <td width="30%">${r.instructions}</td>
        <td >${r.cookTime}</td>
        <td><img src="${r.picture}" alt="recipe picture"></td>
        <td><button onclick="deleteRecipe(${r.id})"><span class="material-symbols-outlined">delete</span></button></td>
        </tr>`;
    });

    document.getElementById("recipeList").innerHTML = table;

    if (recipes.length == 0) {
        document.getElementById("recipeList").innerHTML =`<tr><td id="no-recipes" colspan="5">No recipes added</td></tr>`; 
    }
}

function newRecipes() {
    document.getElementById("recipeName").value = "";
    document.getElementById("recipeInstructions").value = "";
    document.getElementById("cookTime").value = "";
    imageContainer.src = " ";
}

function deleteRecipe(id) {
    let recipes = JSON.parse(window.localStorage.getItem("recipes"));
    recipes = recipes.filter(r => r.id !== id);
    window.localStorage.setItem("recipes", JSON.stringify(recipes));
    showRecipes();
}






