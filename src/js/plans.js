const defaultPlans = [];

if (!localStorage.getItem("plans")) {
  localStorage.setItem("plans", JSON.stringify(defaultPlans));
}

const removePlan = (index) => {
  const plans = JSON.parse(localStorage.getItem("plans"));

  plans.splice(index, 1);

  localStorage.setItem("plans", JSON.stringify(plans));

  loadPlans();
};

const clearPlans = () => {
  document.querySelector(".column.plans").innerHTML = "";
};

const loadPlans = () => {
  const plans = JSON.parse(localStorage.getItem("plans"));

  clearPlans();

  document.querySelector(
    ".count"
  ).textContent = `Meus planejamentos (${plans.length})`;

  plans.forEach((plan, index) => {
    const element = document.createElement("div");
    element.setAttribute("class", "plan");

    const info = document.createElement("div");
    info.setAttribute("class", "info");

    const deleteModalWrapper = document.createElement("div");
    deleteModalWrapper.setAttribute("class", "delete-modal-wrapper");
    deleteModalWrapper.setAttribute("id", `plan-${index}-delete-modal`);

    const deleteModal = document.createElement("div");
    deleteModal.setAttribute("class", "delete-modal column-center");

    const closeIcon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    closeIcon.setAttribute("class", "close-icon");
    closeIcon.setAttribute("width", "8");
    closeIcon.setAttribute("height", "8");
    closeIcon.setAttribute("viewBox", "0 0 8 8");

    const closePath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    closePath.setAttribute(
      "d",
      "M16.233,15.289l2.857-2.858a.67.67,0,1,0-.947-.947l-2.857,2.858-2.857-2.858a.67.67,0,1,0-.947.947l2.857,2.858-2.857,2.858a.67.67,0,0,0,.947.947l2.857-2.858,2.857,2.858a.67.67,0,0,0,.947-.947Z"
    );
    closePath.setAttribute("transform", "translate(-11.285 -11.289)");
    closePath.setAttribute("fill", "#fff");

    const trashIcon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    trashIcon.setAttribute("class", "trash-icon");
    trashIcon.setAttribute("width", "31.5");
    trashIcon.setAttribute("height", "36");
    trashIcon.setAttribute("viewBox", "0 0 31.5 36");

    const trashPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    trashPath.setAttribute(
      "d",
      "M30.375,2.25H21.938L21.277.935A1.688,1.688,0,0,0,19.765,0H11.728a1.668,1.668,0,0,0-1.5.935L9.563,2.25H1.125A1.125,1.125,0,0,0,0,3.375v2.25A1.125,1.125,0,0,0,1.125,6.75h29.25A1.125,1.125,0,0,0,31.5,5.625V3.375A1.125,1.125,0,0,0,30.375,2.25ZM3.741,32.836A3.375,3.375,0,0,0,7.109,36H24.391a3.375,3.375,0,0,0,3.368-3.164L29.25,9h-27Z"
    );
    trashPath.setAttribute("transform", "translate(0 0)");
    trashPath.setAttribute("fill", "#47cf73");

    trashIcon.appendChild(trashPath);

    closeIcon.appendChild(closePath);
    closeIcon.addEventListener("click", () => {
      document
        .querySelector(`#plan-${index}-delete-modal`)
        .classList.remove("active");
    });

    const deleteSpan = document.createElement("span");
    deleteSpan.setAttribute("class", "text-primary fs-18 span-delete");
    deleteSpan.innerHTML = `Você tem certeza que deseja excluir o planejamento
      <span class="text-secondary">${plan.name}</span>?`;

    const buttonRow = document.createElement("div");
    buttonRow.setAttribute("class", "button-row");

    const confirmButton = document.createElement("button");
    confirmButton.setAttribute("class", "confirm-button");
    confirmButton.textContent = "Excluir";
    confirmButton.addEventListener("click", () => {
      removePlan(index);
      document
        .querySelector(`#plan-${index}-delete-modal`)
        .classList.remove("active");
    });

    const cancelButton = document.createElement("button");
    cancelButton.setAttribute("class", "cancel-button");
    cancelButton.textContent = "Cancelar";
    cancelButton.addEventListener("click", () => {
      document
        .querySelector(`#plan-${index}-delete-modal`)
        .classList.remove("active");
    });

    buttonRow.appendChild(confirmButton);
    buttonRow.appendChild(cancelButton);

    deleteModal.appendChild(closeIcon);
    deleteModal.appendChild(trashIcon);
    deleteModal.appendChild(deleteSpan);
    deleteModal.appendChild(buttonRow);

    deleteModalWrapper.appendChild(deleteModal);

    const updateButton = document.createElement("div");
    updateButton.setAttribute("class", "update-button");

    const svgUpdate = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgUpdate.setAttribute("width", "16");
    svgUpdate.setAttribute("height", "15.999");
    svgUpdate.setAttribute("viewBox", "0 0 16 15.999");

    const pathUpdate = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathUpdate.setAttribute(
      "d",
      "M9.085,2.914l4,4L4.4,15.6.832,16A.75.75,0,0,1,0,15.167L.4,11.6,9.085,2.914Zm6.475-.6L13.681.44a1.5,1.5,0,0,0-2.122,0L9.792,2.207l4,4L15.56,4.44a1.5,1.5,0,0,0,0-2.122Z"
    );
    pathUpdate.setAttribute("transform", "translate(0.001 -0.001)");
    pathUpdate.setAttribute("fill", "#fff");

    const linkUpdate = document.createElement("a");
    linkUpdate.setAttribute("href", `editplan.html?plan=${index}`);
    linkUpdate.setAttribute("class", "invisible-link");
    linkUpdate.setAttribute("id", `update-button-${index}`);

    svgUpdate.appendChild(pathUpdate);
    updateButton.appendChild(linkUpdate);
    updateButton.appendChild(svgUpdate);

    updateButton.addEventListener("click", () => {
      document.querySelector(`#update-button-${index}`).click();
    });

    const deleteButton = document.createElement("div");
    deleteButton.setAttribute("class", "delete-button");

    const svgDelete = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgDelete.setAttribute("width", "13");
    svgDelete.setAttribute("height", "16");
    svgDelete.setAttribute("viewBox", "0 0 13 16");

    const pathDelete = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathDelete.setAttribute(
      "d",
      "M12.536,1H9.054L8.781.416A.693.693,0,0,0,8.157,0H4.84a.685.685,0,0,0-.621.416L3.946,1H.464A.483.483,0,0,0,0,1.5v1A.483.483,0,0,0,.464,3H12.536A.483.483,0,0,0,13,2.5v-1A.483.483,0,0,0,12.536,1ZM1.544,14.594A1.441,1.441,0,0,0,2.934,16h7.133a1.441,1.441,0,0,0,1.39-1.406L12.071,4H.929Z"
    );
    pathDelete.setAttribute("transform", "translate(0 0)");
    pathDelete.setAttribute("fill", "#fff");

    svgDelete.appendChild(pathDelete);
    deleteButton.appendChild(svgDelete);

    deleteButton.addEventListener("click", () => {
      document
        .querySelector(`#plan-${index}-delete-modal`)
        .classList.add("active");
    });

    const name = document.createElement("span");
    name.setAttribute("class", "name text-primary");

    name.textContent = plan.name;

    const pickRow = document.createElement("div");
    pickRow.setAttribute("class", "pick-row");

    plan.picks.forEach((pick, index) => {
      const pickElement = document.createElement("div");
      pickElement.setAttribute("class", "column-center");

      const roleIcon = document.createElement("img");
      roleIcon.setAttribute("class", "role-icon");

      if (index === 0) {
        roleIcon.setAttribute("src", "src/img/roles/top.png");
      } else if (index === 1) {
        roleIcon.setAttribute("src", "src/img/roles/jungle.png");
      } else if (index === 2) {
        roleIcon.setAttribute("src", "src/img/roles/middle.png");
      } else if (index === 3) {
        roleIcon.setAttribute("src", "src/img/roles/bottom.png");
      } else if (index === 4) {
        roleIcon.setAttribute("src", "src/img/roles/support.png");
      }

      const championIcon = document.createElement("img");
      championIcon.setAttribute("class", "champion-icon");
      championIcon.setAttribute("src", `src/img/champions/${pick}.jpg`);

      pickElement.appendChild(roleIcon);
      pickElement.appendChild(championIcon);

      pickRow.appendChild(pickElement);
    });

    const bans = document.createElement("div");
    bans.setAttribute("class", "bans column");

    const bansTitle = document.createElement("span");
    bansTitle.setAttribute("class", "text-primary");
    bansTitle.textContent = "Banimentos:";

    bans.appendChild(bansTitle);

    const bansRow = document.createElement("div");
    bansRow.setAttribute("class", "bans-row");

    plan.bans.forEach((ban) => {
      const banElement = document.createElement("img");
      banElement.setAttribute("class", "ban-icon");
      banElement.setAttribute("src", `src/img/champions/${ban}.jpg`);

      bansRow.appendChild(banElement);
    });

    bans.appendChild(bansRow);

    const preferSide = document.createElement("span");
    preferSide.setAttribute("class", "prefer-side text-primary");
    preferSide.innerHTML = `Preferência por lado <span class="text-secondary">
      ${plan.side}
    </span>`;

    const buttonCollapse = document.createElement("div");
    buttonCollapse.setAttribute("class", "button-collapse");

    const svgCollapse = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgCollapse.setAttribute("width", "32");
    svgCollapse.setAttribute("height", "18");
    svgCollapse.setAttribute("viewBox", "0 0 32 18");

    const svgPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    svgPath.setAttribute(
      "d",
      "M22.193,23.82l12.1-11.913a2.3,2.3,0,0,1,3.23,0,2.243,2.243,0,0,1,0,3.187l-13.71,13.5a2.31,2.31,0,0,1-3.154.066L6.854,15.1a2.237,2.237,0,0,1,0-3.187,2.3,2.3,0,0,1,3.23,0Z"
    );
    svgPath.setAttribute("transform", "translate(-6.188 -11.246)");
    svgPath.setAttribute("fill", "#fff");

    svgCollapse.appendChild(svgPath);

    buttonCollapse.addEventListener("click", () => {
      if (
        document
          .querySelector(`#plan-${index}-collapse`)
          .classList.contains("active")
      ) {
        document
          .querySelector(`#plan-${index}-collapse`)
          .classList.remove("active");
      } else {
        document
          .querySelector(`#plan-${index}-collapse`)
          .classList.add("active");
      }
    });

    buttonCollapse.appendChild(svgCollapse);

    const collapse = document.createElement("div");
    collapse.setAttribute("class", "collapse text-tertiary");
    collapse.setAttribute("id", `plan-${index}-collapse`);

    const collapseSpan = document.createElement("span");
    collapseSpan.textContent = "Descrição:";

    const collapseText = document.createElement("p");
    collapseText.textContent = plan.description;

    collapse.appendChild(collapseSpan);
    collapse.appendChild(collapseText);

    info.appendChild(updateButton);
    info.appendChild(deleteButton);
    info.appendChild(name);
    info.appendChild(pickRow);
    info.appendChild(bans);
    info.appendChild(preferSide);
    info.appendChild(buttonCollapse);

    element.appendChild(info);
    element.appendChild(collapse);
    document.body.appendChild(deleteModalWrapper);

    document.querySelector(".column.plans").appendChild(element);
  });
};

document.querySelector(".icon-back").addEventListener("click", () => {
  document.querySelector("#back-button-link").click();
});

loadPlans();
