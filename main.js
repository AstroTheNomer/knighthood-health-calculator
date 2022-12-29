$(() => {
  const BASE_HEALTH = 37856;
  const GAUNTLET_HEALTH_BONUS = 1.20;

  function getTotalCharms() {
    const common = +$("#common").val();
    const rare = +$("#rare").val();
    const epic = +$("#epic").val();
    const legendary = +$("#legendary").val();
    const unique = +$("#unique").val();

    const totalCharms = +((common * 10 + rare * 20 + epic * 30 + legendary * 40 + unique * 50) / 100).toFixed(2);
    return totalCharms;
  }

  function getBaseArmor() {
    const helmet = +$("#helmet").val();
    const shoulders = +$("#shoulders").val();
    const arms = +$("#arms").val();
    const body = +$("#body").val();
    const legs = +$("#legs").val();

    const baseArmor = helmet + shoulders + arms + body + legs;
    return baseArmor;
  }

  function getTotalHealth(totalArmor, totalCharms) {
    const totalArmorCharms = +((totalArmor / getBaseArmor()) - 1).toFixed(2);
    let totalHealthCharms = +(totalCharms - totalArmorCharms).toFixed(2);
    // assume upgraded gauntlet => 120% health bonus
    const totalHealth = Math.floor(BASE_HEALTH * (1 + GAUNTLET_HEALTH_BONUS + totalHealthCharms));
    return totalHealth;
  }

  function calcHealth() {
    const totalArmor = $("#totalArmor").val();
    const totalCharms = getTotalCharms();
    const totalHealth = getTotalHealth(totalArmor, totalCharms);
    $("#result").val(totalHealth);
  }

  $("#calcBtn").on("click", calcHealth);


  $("#helmet, #shoulders, #arms, #body, #legs").each(function () {
    $(this).on("change", function () {
      const rarity = $(this).children("option:selected").text();
      $(this).removeClass("border-common border-rare border-epic border-legendary border-unique border-mythic");
      switch (rarity) {
        case "Mythic":
          $(this).addClass("border-mythic");
          break;

        case "Unique":
          $(this).addClass("border-unique");
          break;

        case "Legendary":
          $(this).addClass("border-legendary");
          break;

        case "Epic":
          $(this).addClass("border-epic");
          break;

        case "Rare":
          $(this).addClass("border-rare");
          break;
      }
    }).trigger("change");
  });

});
