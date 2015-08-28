app.factory('FlashCardsFactory', function($http) {

  var categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
  ];

  function getFlashCards (category) {
    var config = {};
    if (category) config.params = { category: category };
    return $http.get('/cards/', config).then(function(response){
      return response.data;
    });
  }
  return {
    getFlashCards: getFlashCards,
    categories: categories
  };


  function addFlashCard (card) {
    return $http.post('/cards', card)
    .then(function(response) {
      console.log(response.data);
    });
  }

});
