var mainApp = {};
const logoutBtn = document.querySelector('.logoutBtn');

(function (){
    var uid = null;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          uid = user.id;
        } else{
            uid = null;
            window.location.replace("login.html")
        }
      });
      function logOut (){
          firebase.auth().signOut();
      }
      
      mainApp.logOut = logOut;

      logoutBtn.addEventListener('click', function(){
        mainApp.logOut();
      })

})();