const BASE_HEALTH = 84;
const HEALTH_DIFFERENCE = 28;


function getBaseHealthPerLevel(level) {
  let healthPerLevel = BASE_HEALTH;
  const startLevel = 1;

  for (let i = startLevel + 1; i <= level; i++) {
    let multiplier;

    switch (true) {
      case i <= 10:
        multiplier = 2 ** 0;
        break;

      case i <= 20:
        multiplier = 2 ** 1;
        break;

      case i <= 30:
        multiplier = 2 ** 2;
        break;

      case i <= 40:
        multiplier = 2 ** 3;
        break;

      case i <= 45:
        multiplier = 2 ** 4;
        break;

      case i <= 50:
        multiplier = 2 ** 5;
        break;

      case i <= 55:
        multiplier = 2 ** 6;
        break;

      case i <= 60:
        multiplier = 2 ** 7;
        break;
    }
    healthPerLevel += (HEALTH_DIFFERENCE * multiplier);
  }
  return (healthPerLevel);
}
