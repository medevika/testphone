 function changeImage(element) {
         var right = "http://i.imgur.com/6enLqgn.jpg";
         var left = "http://i.imgur.com/dBIRe8n.jpg?1?4649";
         element.src = element.bln ? right : left;
         element.bln = !element.bln;
     }