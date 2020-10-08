const queryString = window.location.search;

if (!queryString) {
  alert("Não foi introduzido um valor. Volte e tente novamente.");
}

const urlParams = new URLSearchParams(queryString);

if (!urlParams) {
  alert("Não foi introduzido um valor. Volte e tente novamente.");
}

const plan = urlParams.get("plan");

if (!plan) {
  alert("Não foi introduzido um valor. Volte e tente novamente.");
}

const saveItem = () => {
  const actualPlans = JSON.parse(localStorage.getItem("plans"));

  const name = document.querySelector("#name-input").value;
  const description = document.querySelector("#description-input").value;
  const bans = [];
  document.querySelectorAll(".column.bans #select-bans").forEach((ban) => {
    bans.push(ban.value);
  });
  const picks = [];
  document.querySelectorAll(".column.picks #select-picks").forEach((pick) => {
    picks.push(pick.value);
  });
  const side = document.querySelector("#select-side").value;

  actualPlans[plan] = {
    name,
    description,
    bans,
    picks,
    side,
  };

  localStorage.setItem("plans", JSON.stringify(actualPlans));
  document.querySelector("#back-button-link").click();
};

const loadSelectableChampions = () => {
  const options = [];

  data.champions.forEach((champion) => {
    const selectableOption = document.createElement("option");
    selectableOption.setAttribute("value", champion.value);
    selectableOption.textContent = champion.name;

    options.push(selectableOption);
  });

  return options;
};

const loadPlan = (index) => {
  const plans = JSON.parse(localStorage.getItem("plans"));

  const actualPlan = plans[index];

  if (!actualPlan) {
    alert(
      "Não existe um planejamento com esse valor. Volte e tente novamente."
    );
  }

  document.querySelector("#name-input").value = actualPlan.name;
  document.querySelector("#description-input").value = actualPlan.description;

  document.querySelectorAll(".column.bans #select-bans").forEach((ban, i) => {
    ban.value = actualPlan.bans[i];
  });
  document
    .querySelectorAll(".column.picks #select-picks")
    .forEach((pick, i) => {
      pick.value = actualPlan.picks[i];
    });

  document.querySelector("#select-side").value = actualPlan.side;
};

window.addEventListener("load", () => {
  document.querySelectorAll(".select-champions").forEach((select) => {
    loadSelectableChampions().forEach((option) => {
      select.appendChild(option);
    });
  });

  loadPlan(plan);
});

document.querySelector(".icon-back").addEventListener("click", () => {
  document.querySelector("#back-button-link").click();
});

document.querySelector(".confirm-button").addEventListener("click", saveItem);