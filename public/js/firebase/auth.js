var loginButton = document.getElementById('loginBtn');
var logoutButton = document.getElementById('logoutBtn');

logoutButton.style.display = 'none';
var signout = function(){
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  console.log('signed out')
   window.location.replace("index.html");
  })
}

initApp = function() {
   firebase.auth().onAuthStateChanged(function(user) {
     if (user) {

       loginButton.style.display = 'none';

       logoutButton.style.display = 'block';
      //  loginButton.onClick = signout();

       // User is signed in.
       var displayName = user.displayName;
       var email = user.email;
       var emailVerified = user.emailVerified;
       var photoURL = user.photoURL;
       var uid = user.uid;
       var phoneNumber = user.phoneNumber;
       var providerData = user.providerData;
       user.getIdToken().then(function(accessToken) {
         document.getElementById('sign-in-status').textContent = 'Signed in';
         document.getElementById('sign-in').textContent = 'Sign out';
         document.getElementById('account-details').textContent = JSON.stringify({
           displayName: displayName,
           email: email,
           emailVerified: emailVerified,
           phoneNumber: phoneNumber,
           photoURL: photoURL,
           uid: uid,
           accessToken: accessToken,
           providerData: providerData
         }, null, '  ');
       });
     } else {
       // User is signed out.



     }
   }, function(error) {
     console.log(error);
   });
 };

 window.addEventListener('load', function() {
   initApp()
 });
