$(document).ready(function () {
  // var gName = "test";

  var profile = "";
  var gName = "";

  gapi.load("auth2", () => {
    const auth2 = gapi.auth2.init({
      clientId: "185758844486-1o46o790bivspuhkcp0k9dki7gb5esmu.apps.googleusercontent.com"
    });



    auth2.isSignedIn.listen(status => {
      console.log(status);
      // console.log(gName);
    });

    var checkSignIn = function () {
      if (auth2.currentUser) {
        $("#menuName").html(gName);
        console.log("user is logged IN")
      } else {
        $("#menuName").html("Login");
        console.log("user is logged OUT")
      };
    };

    // need to add something here to catch line 33. when logged out it shouldnt call it - why is it?!!?
    auth2.currentUser.listen(user => {
      if (auth2.currentUser) {
        console.log("Testing");
        profile = user.getBasicProfile();
        gName = profile.getGivenName();
        checkSignIn();
      }
      // console.log(profile);

    });

    $("#btnLogin").on("click", function () {
      auth2.signIn();
      console.log("login clicked");
      checkSignIn();
    });

    $("#btnLogout").on("click", function () {
      auth2.signOut();
      console.log("logout clicked");
      checkSignIn();
    });
  });
});




