(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: DONE Kaylyn Reveal only the about section! */
    $('#about').fadeIn(500);
    $('#articles').hide();
  };

  module.aboutController = aboutController;
})(window);
