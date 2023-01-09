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
  const totalArmorCharms = +((totalArmor / getBaseArmor()) - 1).toFixed(2);
  baseHealth = getBaseHealthPerLevel(level);
  let totalHealthCharms = +(totalCharms - totalArmorCharms).toFixed(2);
  // assume upgraded gauntlet
  const totalHealth = Math.floor(baseHealth * (1 + gauntletHealthBonus + totalHealthCharms));
  return totalHealth;
}

function calcHealth() {
  const knightLevel = +$("#knightLevel").val();
  const totalArmor = +$("#totalArmor").val();
  const totalCharms = getTotalCharms();
  const totalHealth = getTotalHealth(totalArmor, totalCharms, knightLevel);
  return totalHealth;
}
