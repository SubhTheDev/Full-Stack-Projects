userWelcome = document.querySelector("#userWelcome");
cookiesAccept = document.querySelector("#cookiesAccept");
cookiesReject = document.querySelector("#cookiesReject");
cookiesMessage = document.querySelector("#cookiesMessage");

//prompt window to take the user name and display on screen
const userName = window.prompt("Please enter your name:", "Guest");
if (userName !== null && userName.trim() !== "") {
  userWelcome.textContent = `Welcome, ${userName.trim()}`;
}

//prompt window to accept/reject the cookies and display a message based on the choice
const userAgreed = window.confirm("Do you accept the cookies?");
if (userAgreed) {
  cookiesMessage.textContent = `You accepted the cookies`;
} else {
  cookiesMessage.textContent = `You rejected the cookies`;
}
