$( document ).ready(function(){ 

  //get shirt.json
  function getShirtAttire() {
    return $.getJSON("./shirt.json").then(function (data) {
        return data.shirt;
    });
  }

  //populate item of shirt
  getShirtAttire().done(function (items) {
      if(items.length > 0){
      populateShirtSection(items);
    }
  });

  //structure html for shirt section
  function populateShirtSection(AttireArray){
    var arrayLength = AttireArray.length;
    for (var i = 0; i < arrayLength; i++) {
      if(i==0)
      {
        $('.shirt').append($("<img src='"+ AttireArray[0].imageUrl +"'alt='"+ name +"'/>"));
      }
      else 
      {    
        $('#clickAbleOption').append("<div class='option'> <img class ='shirt-attr' src='"+ AttireArray[i].imageUrl +"'alt='"+ name +"'/></div>");
      }
    };  
  };
});