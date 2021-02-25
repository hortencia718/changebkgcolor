function change_colors(){



colors =["red", "orange", "purple", "blue", "pink", "lime", "lightpink","lightblue","white","brown", "black"]
 let randomColor = colors[Math.floor(Math.random() * colors.length)];

 document.body.style.background = randomColor ;

//   alternative option on click blinking 
//  setTimeout(change_colors, 200);
}