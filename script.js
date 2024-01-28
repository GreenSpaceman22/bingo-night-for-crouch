function isThirdSaturday(date) {
  const weekOfMonth = Math.floor((date.getDate() - 1) / 7);
  return (date.getDay() === 6 && weekOfMonth === 2) || weekOfMonth === 3;
}

function displayGif() {
  const currentDate = new Date();
  if (isThirdSaturday(currentDate)) {
    document.getElementById("is_bingo_night").innerHTML =
      '<img src="https://i.pinimg.com/originals/16/79/d5/1679d54578da83b15cc67aa6a5e086b0.gif">';
    document.getElementById("its_bingo").innerText =
      "Oh yeah... it's   B I N G O   time";
  } else {
    document.getElementById("is_bingo_night").innerText =
      "Sorry Crouch\n its not bingo night, tonight.... :/";
  }
}
window.onload = displayGif;
