function createNewPost(input) {
  let newPost = document.createElement("p")
  if (input.value.length <= 0) {
    return null;
  }
  else {
    newPost.innerHTML = input.value;
    input.value = "";
    return newPost;
  }
}

function createDeleteButton() {
  let deleteButton = document.createElement("div");
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = "&times;"
  return deleteButton;
}

function createPosts(makepost, deleteButton) {
  let container = document.createElement("div");
  container.classList.add("post-container");
  container.append(deleteButton);
  container.append(makepost);
  return container;
}

function insertNewPost() {
  let makepost = createNewPost(post);
  if (makepost) {
    let deleteButton = createDeleteButton();
    let container = createPosts(makepost, deleteButton);
    deleteButton.addEventListener("click", function() {
      container.parentNode.removeChild(container);
    })
    posts.prepend(container);
  }
}

let post = document.getElementById("post");
let posts = document.getElementById("posts");

post.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    insertNewPost();
  }
})