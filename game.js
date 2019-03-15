//By Angel Murillo
// Demo code for the Archaeology game
//
// Loaded by game.html
// Uses GameBoard object defined in board.js
//

// Warning! The function tryDig and the variable board are global variables!

$(function () {

   var digCount = 0;
   var successCount = 0;
   var excavatedCount = 0;

   board = new GameBoard();
   board.setBoard();

   $(".square").css("cursor","pointer");

     $(".square").click(function(){
         var elem, qelem, sub, targetObj;
         elem = this.id;
         qelem = $(this);
         sub = elem.substr(4,2);

         digCount +=1;
         $("#digCounter").html(digCount);

         var pRate = (successCount / digCount) * 100;
         $("#performance").html("Your success rate is " + pRate.toFixed(2) + "%");

         if(successCount===18){
              alert("GAMEOVER! You found all runis! "+ " your Success dig rate is "+ pRate.toFixed(2) +"%" +  " Click ok to start a new game!");
             location.reload();
            }

    targetObj = board.dig(sub);

    if (targetObj) {

      $("#result").html('Success finding the ' + targetObj.name);
      $("#result").css({
				"background-color": "#5cd65c",
				"color" : "#f2f2f2",
				"display" : "block",
				"border-radius" : "20px"
			});

      qelem.html(targetObj.picture);

      successCount += 1;
        $("#successCounter").html(successCount);

      }
      else{
        qelem.html("<img src='images/emptyhole.jpg' style = 'width: 25px; height: 25px;'\>");
        $("#result").css('display', 'none');
      }

    if(targetObj.size === targetObj.successes){

        excavatedCount +=1;
        $("#excavatedCounter").html(excavatedCount);

        $("#complete").html('Completly Excavated ' + targetObj.name);
        $("#complete").css({
				"background-color": "#ff3333",
				"color" : "#f2f2f2",
				"display" : "block",
				"border-radius" : "20px"
			});

      setTimeout(function() { $("#complete").hide(); }, 3000);

    }

  });
});
