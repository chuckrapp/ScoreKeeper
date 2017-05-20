window.onLoadCallback = function () {
  gapi.load("auth2", () => {
    const auth2 = gapi.auth2.init({
      clientId: "185758844486-1o46o790bivspuhkcp0k9dki7gb5esmu.apps.googleusercontent.com"
    });

    auth2.isSignedIn.listen(status => {
      console.log(status);
    });

    $("#btnLogin").on("click", function () {
      // auth2.signIn();
      console.log("login clicked");
    })
  })
}