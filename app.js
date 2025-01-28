import Github from "./github.js";
import UI from "./ui.js";

const github = new Github();
const ui = new UI();

const searchUser = document.getElementById("search-user");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", getInput);
searchUser.addEventListener("keypress", (e) => {
  if (e.code == "Enter") {
    getInput();
  }
});
function getInput() {
  //eger inputun ici doluysa api istegi at
  if (searchUser.value !== "") {
    github.getUser(searchUser.value).then((data) => {
      if (data.profile.message === "Not Found") {
        //hata mesaji gonder
        ui.showAlert("User not Found", "alert alert-danger");
      } else {
        //kullaniciyi goster
        ui.showProfile(data.profile);
        ui.showAlert("User  Found", "alert alert-success");
        ui.showRepos(data.repos);
      }
    });
  } else {
    //eger input bossa uyari ver
    ui.showAlert("form area cannot be empty", "alert alert-info");
    ui.clearProfile();
  }
  searchUser.value = "";
}
//theme
const themeBtn = document.getElementById("theme");
themeBtn.addEventListener("click", changeTheme);

function changeTheme() {
  const body = document.querySelector("body");
  body.classList.toggle("bg-dark");
  body.classList.toggle("text-bg-dark");
}
