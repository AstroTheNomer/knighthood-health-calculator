const BASE_HEALTH = 84;
const HEALTH_DIFFERENCE = 28;


function getBaseHealthPerLevel(level) {
  let healthPerLevel = BASE_HEALTH;
  const startLevel = 1;

  for (let i = startLevel + 1; i <= level; i++) {
    let multiplier;
    let factor;

    if (i <= 0) {
      return 0
    }
    else if (i <= 40) {
      factor = Math.floor((i - 1) / 10)
    }
    else {
      factor = Math.floor((i - 41) / 5) + 4
    }
    multiplier = 2 ** factor
    healthPerLevel += (HEALTH_DIFFERENCE * multiplier);
  }
  return (healthPerLevel);
}
