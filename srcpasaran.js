  $(document).ready(function () {
    var searchPasaran =
      '<div class="grubsearchPasaran"><img src="https://imagedelivery.net/OdU090E28bZk0bDMMCPIGQ/055ae44c-745d-4e08-6df4-0e91457f3e00/public" alt="search"><input type="text" placeholder="Cari Pasaran..." id="searchPasaran"></div>';

    $(searchPasaran).insertBefore("#slider-hasil");
  });

  $(document).ready(function () {
    $("#searchPasaran").on("input", function () {
      var searchValue = $(this).val().toLowerCase();
      $(".results").hide();
      $(".pool-name").each(function () {
        var poolName = $(this).text().toLowerCase();
        if (poolName.includes(searchValue)) {
          $(this).closest(".results").show();
        }
      });
    });
  });
