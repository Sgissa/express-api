const path = require("path");
const express = require("express");
const app = require("./api");
app.use(
  express.static(
    path.join(__dirname, "views") // keep format
  )
);
async function refreshFriends() {
  const allFriendsRef = document.querySelector("#allfriends");
  allFriendsRef.innerHTML = "";

  const friendsDataRaw = await fetch(`/api/friends`);
  const { friends } = await friendsDataRaw.json();

  friends.forEach((friend) => {
    allFriendsRef.innerHTML += `<li>${friend}</li>`;
  });
}

async function joinFriends() {
  const myFriendNameRef = document.querySelector("#myName");

  const friendsDataRaw = await fetch(`/api/friends/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ myName: myFriendNameRef.value }),
  });

  myFriendNameRef.value = "";

  refreshFriends();
}
