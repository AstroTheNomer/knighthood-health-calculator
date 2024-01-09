const armorData = {
  helmet: {
    baseArmor: {
      "Rare": 68,
      "Epic": 93,
      "Legendary": 134,
      "Unique": 204,
      "Mythic": 5532
    },
    difference: {
      "Rare": 17.5,
      "Epic": 21,
      "Legendary": 24.5,
      "Unique": 28,
      "Mythic": 31.5
    }
  },
  shoulders: {
    baseArmor: {
      "Rare": 41,
      "Epic": 56,
      "Legendary": 80,
      "Unique": 122,
      "Mythic": 3319
    },
    difference: {
      "Rare": 10.5,
      "Epic": 12.6,
      "Legendary": 14.7,
      "Unique": 16.8,
      "Mythic": 18.9
    }
  },
  arms: {
    baseArmor: {
      "Rare": 27,
      "Epic": 37,
      "Legendary": 53,
      "Unique": 82,
      "Mythic": 2213
    },
    difference: {
      "Rare": 7,
      "Epic": 8.4,
      "Legendary": 9.8,
      "Unique": 11.2,
      "Mythic": 12.6
    }
  },
  body: {
    baseArmor: {
      "Rare": 81,
      "Epic": 112,
      "Legendary": 160,
      "Unique": 245,
      "Mythic": 6638
    },
    difference: {
      "Rare": 21,
      "Epic": 25.2,
      "Legendary": 29.4,
      "Unique": 33.6,
      "Mythic": 37.8
    }
  },
  legs: {
    baseArmor: {
      "Rare": 54,
      "Epic": 74,
      "Legendary": 107,
      "Unique": 163,
      "Mythic": 4426
    },
    difference: {
      "Rare": 14,
      "Epic": 16.8,
      "Legendary": 19.6,
      "Unique": 22.4,
      "Mythic": 25.2
    }
  }
};

function getArmorPieceHP(type, rarity, level) {
  const difference = armorData[type].difference[rarity];
  let totalArmor = armorData[type].baseArmor[rarity];
  const startLevel = rarity === "Mythic" ? 41 : 1;

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
    totalArmor += (difference * multiplier);
  }
  return Math.floor(totalArmor);
}
