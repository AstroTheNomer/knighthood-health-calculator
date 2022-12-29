$(() => {

  $("#calcBtn").on("click", function () {
    $("#result").val(calcHealth());
  });


  $("#helmet-rarity, #shoulders-rarity, #arms-rarity, #body-rarity, #legs-rarity").each(function () {
    $(this).on("change", function () {
      const rarity = $(this).children("option:selected").val();
      $(this).removeClass("border-rare border-epic border-legendary border-unique border-mythic");
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
