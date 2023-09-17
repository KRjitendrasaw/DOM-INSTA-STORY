var arr = [
  {
    dp: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1590926938512-c0d7e5c39abd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    dp: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
  },
  {
    dp: "https://images.unsplash.com/photo-1533973860717-d49dfd14cf64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    dp: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    dp: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  }
];

var clutter = "";
var storyian = document.querySelector("#storyian");
arr.forEach(function (elem, id) {
  clutter += `<div class="story">
    <img id="${id}" src="${elem.dp}" alt="img">
</div>`; // this is a string concatenation, not an array concatenation!
});
storyian.innerHTML = clutter;

storyian.addEventListener("click", function (dets) {
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;

  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none";
  }, 3000);
});
