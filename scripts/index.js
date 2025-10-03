const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editprofilenameInput = editProfileModal.querySelector(
  "#profile-name-input"
);

const editprofileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const editCardNameInput = document.querySelector("#post-title-input");
const editCardLinkInput = document.querySelector("#post-link-input");

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

editProfileForm = editProfileModal.querySelector(".modal__form");
newPostForm = newPostModal.querySelector(".modal__form");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const addCardFormEl = document.querySelector("#add-card-form");

editProfileBtn.addEventListener("click", function () {
  editprofilenameInput.value = profileNameEl.textContent;
  editprofileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal_is-opened");
});
editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  editCardNameInput.value = addCardFormEl.textContent;
  editCardLinkInput.value = addCardFormEl.textContent;
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleProfilesubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editprofilenameInput.value;
  profileDescriptionEl.textContent = editprofileDescriptionInput.value;
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const titleInput = addCardFormEl.querySelector("#post-title-input");
  const imageInput = addCardFormEl.querySelector("#post-image-input");
  console.log(titleInput.value, imageInput.value);
}

addCardFormEl.addEventListener("submit");
editProfileForm.addEventListener("submit");
