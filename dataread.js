
dataOrb = null; //** Contains information from the coordinates.csv
var legendOnly = false;
/*
$(function() {
  Papa.parse("Pokemon.csv", {
    //header: true,
    download: true,
    complete: function(results) {
      console.log("Remote file parsed!", results.data);
      $.each(results.data, function(i, el) {
        var row = $("<tr/>");
        row.append($("<td/>").text(i));
        $.each(el, function(j, cell) {
          //if (cell !== "")
            row.append($("<td/>").text(cell));
            //console.log(el.Legendary);
            //row.setAttribute("id", el.Legendary);
            //row.id = el.Legendary;
        });
        $("#results tbody").append(row);
      });
    }
  });
});//*/

//*
$(function() {
Papa.parse("Pokemon.csv", {
    //header: true,
    download: true,
    dynamicTyping: true,
    complete: function(results) {
      dataOrb = results.data;
      console.log("Remote file parsed!", dataOrb);
      createTable();
      }
    });
});//*/

function createTable(){
  var tbl = document.getElementById('results');
  var tblBody = document.createElement("tbody");
  console.log(dataOrb[0].length)

  for (var i = 0; i < dataOrb.length-1; i += 1)
  {
    var row = document.createElement("tr");
    row.className = dataOrb[i][12];
    for (var j = 0; j < dataOrb[i].length; j += 1)
    {
      var cell = document.createElement("td");    
      var cellText = document.createTextNode(dataOrb[i][j]); 
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
}


function toggleStats() {
  if (legendOnly == true){
    for (var i = 0; i < dataOrb.length-1; i += 1)
    {
      showRow("False");
    }
    legendOnly = false;
  } else {
    for (var i = 0; i < dataOrb.length-1; i += 1)
    {
      hideRow("False");
    }
    legendOnly = true;
  }
}

function showRow(id) {
  //for (var i = 0; i < dataOrb.length-1; i += 1)
  //{
    var row = document.getElementById(id);
    row.style.display = '';
  //}
}

function hideRow(id) {
  //for (var i = 0; i < dataOrb.length-1; i += 1)
  //{
    var row = document.getElementById(id);
    row.style.display = 'none';
  //}
}

function ShowHide() {
  var trid = document.getElementsByClassName("False");
  if (trid != null) {
    for (var i = 0; i < trid.length; i += 1)
    {
      if (trid[i].style.display == '') {
        trid[i].style.display = 'none';
      } else {
        trid[i].style.display = '';
      }
    }
  }
}

/*This is a function thats uses Papa Parse to read .csv files and load them
function handleFileSelect(evt) {
  console.log(evt.target.files[0]);
  var file = evt.target.files[0];

  Papa.parse(file, {
    header: true,
    dynamicTyping: true,
    complete: function(results) {
      dataOrb = results.data;
      }
    });
}

//**** This function works in line with the previous function to ask for user input to load in a .csv file
$(document).ready(function(){
  $("#csv-file").change(handleFileSelect);
});
//*/