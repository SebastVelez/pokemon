let teamTitle = document.querySelector(".team__title");
let teamButton = document.querySelector(".team__button");
let popup = document.querySelector(".popup");
let popupCloseButton = document.querySelector(".popup__close");
let formInput = document.querySelector(".form__input-text");
let formTeamTitle = document.querySelector(".form");

function handleOpenPopup() {
  popup.classList.add("popup_opened");
}
function closePopup() {
  popup.classList.remove("popup_opened");
}

function handleChangeTitle(evt) {
  evt.preventDefault();
  teamTitle.textContent = formInput.value;
  closePopup();
}

teamButton.addEventListener("click", handleOpenPopup);
formTeamTitle.addEventListener("submit", handleChangeTitle);
popupCloseButton.addEventListener("click", closePopup);
