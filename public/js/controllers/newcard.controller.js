app.controller('NewCardController', function ($scope, FlashCardsFactory) {

	$scope.categories = FlashCardsFactory.categories;



    $scope.addCard = function (newCard) {
      FlashCardsFactory.addFlashCard(newCard).then(function(card){
        console.log("front end card:" + card);
     });
    };

    $scope.reset = function() {
        $scope.newCard = {
            question: null,
            category: null,
            answers: [
                { text: null, correct: false },
                { text: null, correct: false },
                { text: null, correct: false }
            ]
        }
    }

    $scope.reset();

});
