app.controller('NewCardController', function ($scope, FlashCardsFactory) {

	$scope.categories = FlashCardsFactory.categories;

    $scope.newCard = {
    	question: null,
    	category: null,
    	answers: [
	    	{ text: null, correct: false },
	    	{ text: null, correct: false },
	    	{ text: null, correct: false }
    	]
    }

    $scope.addCard = function (newCard) {
      FlashCardsFactory.addFlashCard(newCard).then(function(card){
        
     }).catch(function(err){
        $log.error('error adding card:', err);
      });
    };

    // $scope.setQuestion = function(text) {
    // 	$scope.newCard.question = text;
    // 	return $scope.newCard.question;
    // }

    // $scope.setCategory = function(text) {
    // 	$scope.newCard.category = text;
    // 	return $scope.newCard.category;
    // }
    
    // $scope.setAnswer = function(text, i) {
    // 	$scope.newCard.answers[i].text = text;
    // }
    // $scope.setCorrect = function(check, i) {
    // 	$scope.newCard.answers[i].correct = check ? true : false;
    // }

    // $scope.sendCard = function(newCard) {
    //     $.ajax({
    //       type: "POST",
    //       url: '/cards',
    //       data: {
    //         question: newCard.question,
    //         category: newCard.category,
    //         answers: newCard.answers
    //       },
    //       success: function() {console.log("success")},
    //       error: function(err) { throw err;}
    //     });
    // }

});
