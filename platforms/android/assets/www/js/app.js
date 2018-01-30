// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('emojiFilter', function ($scope) {
   

    $scope.message = "Please type your message here.";
    
    $scope.message_result = '';

    //This will be called on button click to replace Emojis with #- and shows result
        $scope.filterEmojisBtn = function(){
       
          var str = $scope.message;
            
            //This covers as much as possible set of Emojis but few of them are not been replace by this
           str = str.replace(/([#0-9]\u20E3)|[\xA9\xAE\u203C\u2047-\u2049\u2122\u2139\u3030\u303D\u3297\u3299][\uFE00-\uFEFF]?|[\u2190-\u21FF][\uFE00-\uFEFF]?|[\u2300-\u23FF][\uFE00-\uFEFF]?|[\u2460-\u24FF][\uFE00-\uFEFF]?|[\u25A0-\u25FF][\uFE00-\uFEFF]?|[\u2600-\u27BF][\uFE00-\uFEFF]?|[\u2900-\u297F][\uFE00-\uFEFF]?|[\u2B00-\u2BF0][\uFE00-\uFEFF]?|(?:\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDEFF])[\uFE00-\uFEFF]?/g, '#-');

          $scope.message_result = str;
        }
        
        //This method gets called as you type in textarea and filter the message at the same time
        $scope.filterInput = function () 
        {
            
            //1.***Way without RegEx: the normal one comparing character by character***
            
            var result = '';
            if ($scope.message.length == 0)
                return $scope.message;
            for (var indexOfInput = 0, lengthOfInput = $scope.message.length; indexOfInput < lengthOfInput; indexOfInput++) {
                var charAtSpecificIndex = $scope.message[indexOfInput].charCodeAt(0);
                
                if (charAtSpecificIndex == 13) //Tried for enter key but not working
                    result += $scope.message[indexOfInput];
                
                //normally the max range is 126 but now 255 for including all special characters
                if((32 <= charAtSpecificIndex) && (charAtSpecificIndex <= 225))  { 
                    
                    result += $scope.message[indexOfInput];
                }
            }
            $scope.message = result;
            
            
            //***new way with RegEx***
            
            //2.**This will return only matching string array from match
            
//            var re = new RegExp(/^[\x20-\x7E]\x0D[\xA1-\xFF]*$/)
//            $scope.message_result = $scope.message.match(re);
            
            //3.**This Test is within supporting range and tell user if the message is supported or not**
            
//             var re = /^[\x20-\x7E\x0D]*$/
//            if (re.test($scope.message)) 
//            {
//                $scope.message_result = 'Valid Text';
//            }else
//            {
//                $scope.message_result = 'In-Valid Text';
//            }
            
            
            //4.***Replacing Emojis on the fly.. i.e. while User is typing: This case user will understand you don't support Emojis and skip adding them to their message.***
            
  //            $scope.message = $scope.message.replace(/([#0-9]\u20E3)|[\xA9\xAE\u203C\u2047-\u2049\u2122\u2139\u3030\u303D\u3297\u3299][\uFE00-\uFEFF]?|[\u2190-\u21FF][\uFE00-\uFEFF]?|[\u2300-\u23FF][\uFE00-\uFEFF]?|[\u2460-\u24FF][\uFE00-\uFEFF]?|[\u25A0-\u25FF][\uFE00-\uFEFF]?|[\u2600-\u27BF][\uFE00-\uFEFF]?|[\u2900-\u297F][\uFE00-\uFEFF]?|[\u2B00-\u2BF0][\uFE00-\uFEFF]?|(?:\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDEFF])[\uFE00-\uFEFF]?/g, '#-');
        };
        
});