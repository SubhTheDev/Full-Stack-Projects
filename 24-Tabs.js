//selects all elements with the tab-btn class
const tabButtons = document.querySelectorAll(".tab-btn");
//selects all elements with tab-panel class
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;

    //deactivate all buttons and hide all panels
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabPanels.forEach((panel) => (panel.hidden = true));

    //activate the clicked button and reveal its content
    button.classList.add("active");
    const targetPanel = document.getElementById(targetId);
    if (targetPanel) {
      targetPanel.hidden = false;
    }
  });
});
