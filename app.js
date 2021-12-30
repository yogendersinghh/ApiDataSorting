const apiUrl = "https://s3.amazonaws.com/open-to-cors/assignment.json";

const divContainer = document.querySelector(".container");

async function fetchApi(url) {
  const response = await fetch(url);
  const responseData = await response.json();
  const productsData = responseData["products"];

  arr = [];
  for (variable in productsData) {
    arr.push(productsData[variable]);
  }
  arr.sort((a, b) => {
    return a.popularity - b.popularity;
  });
  arr.forEach((arr) => {
    const ul = document.createElement("ul");
    for (k in arr) {
      const li = document.createElement("li");
      li.innerText = arr[k];
      ul.appendChild(li);
    }

    divContainer.appendChild(ul);
  });
}
fetchApi(apiUrl);
