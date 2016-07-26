(function(module) {
  var articleController = {};



  articleController.reveal = function() {
    /* TODO: DONE Reveal only the articles section! */
    $('.tab-content').hide();
    $('#articles').fadeIn();
  };
  module.articleController = articleController;
})(window);
