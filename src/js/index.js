const handleClickOnPlansButton = () => {
  document.querySelector("#plans-button-link").click();
};

const handleClickOnChampionsButton = () => {
  document.querySelector("#champions-button-link").click();
};

const handleClickOnDevButton = () => {
  if (document.querySelector("#dev-collapse").classList.contains("active")) {
    document.querySelector("#dev-collapse").classList.remove("active");
  } else {
    document.querySelector("#dev-collapse").classList.add("active");
  }
};

document
  .querySelector("#plans-button")
  .addEventListener("click", handleClickOnPlansButton);
document
  .querySelector("#champions-button")
  .addEventListener("click", handleClickOnChampionsButton);
document
  .querySelector("#dev-button")
  .addEventListener("click", handleClickOnDevButton);
