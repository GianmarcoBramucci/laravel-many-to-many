import "./bootstrap";
import "~resources/scss/app.scss";
import * as bootstrap from "bootstrap";
import.meta.glob(["../img/**", "../fonts/**"]);

const deleteSubmitButtons = document.querySelectorAll(".delete-button");

deleteSubmitButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        const dataTitle = button.getAttribute("data-item-title");
        const dataId = button.getAttribute("data-item-id");
        const modal = document.getElementById("deleteModal");
        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();
        const modalItemTitle = modal.querySelector("#modal-item-title");
        modalItemTitle.textContent = dataTitle;
        const buttonDelete = modal.querySelector("button.btn-danger");
        buttonDelete.addEventListener("click", () => {
            button.parentElement.submit();
        });
    });
});