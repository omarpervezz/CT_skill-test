
const mountain_1 = document.getElementById('mountain-1');
const mountain_2 = document.getElementById('mountain-2');
const tab_1 = document.getElementById("tab-1");
const tab_2 = document.getElementById("tab-2");

function switchTab(tabToShow, tabToHide, activeMountain, inactiveMountain) {
    tabToShow.style.display = 'block';
    tabToHide.style.display = 'none';
    activeMountain.classList.add('active');
    inactiveMountain.classList.remove('active');
}

mountain_1.addEventListener('click', () => {
    switchTab(tab_1, tab_2, mountain_1, mountain_2);
});

mountain_2.addEventListener('click', () => {
    switchTab(tab_2, tab_1, mountain_2, mountain_1);
});
