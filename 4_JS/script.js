let group = document.querySelector(".group");
let information = document.querySelectorAll(".group__info");
let checkbox = document.querySelectorAll(".check");
let onOff = document.querySelector(".on-off");
group.onchange = function () {
  for (let i = 0; i < checkbox.length; i++) {
    if (onOff.checked) {
      checkbox[i].checked = true;
    } else if (!onOff.checked) {
      checkbox[i].checked = false;
    }
    if (checkbox[i].checked) {
      information[i].classList.remove("off");
    } else if (!checkbox[i].checked) {
      information[i].classList.add("off");
    }
  }
};
