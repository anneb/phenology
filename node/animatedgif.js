var Gm = require("gm");


Gm().in('-delay', 200).in('1.jpg').in('-delay', 100).in('2.jpg').in('-delay', 300).in('3.jpg').write('output.gif', function(err){});

/* Gm().in('-delay', 100).in("1.jpg").in('-delay', 500).in("2.jpg").resize(600, 600).write("gmoutput.gif", function (err){
  if(err) throw err;
  console.log("image converted");
})*/
