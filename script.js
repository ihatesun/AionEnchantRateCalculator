fillUpItemLevels();
fillUpEnchantmentLevels();

document.getElementById('btnChance').addEventListener('click', () => {
    let itemType = document.querySelector('input[name="item-type"]:checked');
    let itemLevel = document.getElementById('slItemLevel');
    let itemEnchantmentLevel = document.getElementById('slEnchLevel');

    generateTable(itemType.value, itemLevel.value, itemEnchantmentLevel.value);
});

function generateTable(itemType, itemLevel, enchantmentLevel) {
    let table = document.getElementById('calculator-output-content');

    table.innerHTML = "";

    let typeValue;

    //typeValue = itemType === 'eternal' ? 40 : 50;

    switch (itemType) {
        case 'eternal':
            typeValue = 40;
            break;
        case 'mythical':
            typeValue = 50;
            break;
        default:
            break;
    }

    maxStone = Number(itemLevel) + typeValue + Number(enchantmentLevel);

    for (let difference = 40; difference >= 0; difference--) {
        table.innerHTML += `<div class="calculator-output-content-row">
                                <div>L${maxStone--}</div>
                                <div>${difference * 2}%</div>
                            </div>`;
    }
}

function fillUpItemLevels() {
    let selectItemLevel = document.getElementById('slItemLevel');

    for (let i = 65; i > 0; i--) {
        selectItemLevel.innerHTML += `<option value="${i}">${i}</option>`;
    }
}

function fillUpEnchantmentLevels() {
    let selectEnchantmentLevel = document.getElementById('slEnchLevel');

    for (let i = 0; i < 15; i++) {
        selectEnchantmentLevel.innerHTML += `<option value="${i}">${i}</option>`;
    }
}