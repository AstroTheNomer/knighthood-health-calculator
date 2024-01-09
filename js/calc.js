function getTotalCharms() {
  const common = +$("#common").val();
  const rare = +$("#rare").val();
  const epic = +$("#epic").val();
  const legendary = +$("#legendary").val();
  const unique = +$("#unique").val();

  const totalCharms = +((common * 10 + rare * 20 + epic * 30 + legendary * 40 + unique * 50) / 100).toFixed(2);
  return totalCharms;
}

function getBaseArmorByPiece(piece) {
  const rarity = $(`#${piece}-rarity`).val();
  const level = +$(`#${piece}-level`).val();
  return getArmorPieceHP(piece, rarity, level);
}

function getBaseArmor() {
  const helmet = getBaseArmorByPiece("helmet");
  const shoulders = getBaseArmorByPiece("shoulders");
  const arms = getBaseArmorByPiece("arms");
  const body = getBaseArmorByPiece("body");
  const legs = getBaseArmorByPiece("legs");

  const baseArmor = helmet + shoulders + arms + body + legs;
  return baseArmor;
}

function getTotalHealth(totalArmor, totalCharms, level) {
  const gauntletHealthBonus = +$("#gauntletBonus").val();
  const base_armor = getBaseArmor();
  if (totalArmor < base_armor) {
    // totalArmor wrong
    totalArmor = base_armor
    $("#totalArmor").val(totalArmor)
  }
  const totalArmorCharms = +(totalArmor / getBaseArmor()) * 100
  baseHealth = getBaseHealthPerLevel(level);
  let totalHealthCharms = (totalCharms + 100 - Math.floor(totalArmorCharms)) / 100;
  // assume upgraded gauntlet
  const totalHealthMin = Math.floor(baseHealth * (1 + 0.3 + totalHealthCharms));
  const totalHealthMax = Math.floor(baseHealth * (1 + 1.2 + totalHealthCharms));
  return [totalHealthMin, totalHealthMax];
}

function calcHealth() {
  const knightLevel = +$("#knightLevel").val();
  const totalArmor = +$("#totalArmor").val();
  const totalCharms = getTotalCharms();
  const totalHealth = getTotalHealth(totalArmor, totalCharms, knightLevel);
  return totalHealth;
}
