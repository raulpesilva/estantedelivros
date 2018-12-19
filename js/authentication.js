var iputUsuario = document.querySelector("#inputUsuario");
var inputSenha = document.querySelector("#inputSenha");
var botaoLogin = document.querySelector("#botaoLogin");
var botaoRegistrar = document.querySelector("#botaoRegistrar");
var botaoSair = document.querySelector("#botaoSair");



// botaoSair.addEventListener("click", function () {
//     firebase.auth().signOut();

// });

botaoRegistrar.addEventListener("click", function (event) {
    event.preventDefault();

    console.log("fui clicado");
    if (inputUsuario.value.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (inputSenha.value.length < 4) {
        alert('Please enter a password.');
        return;
    }
    // Sign in with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(inputUsuario.value, inputSenha.value)
        .then(function () {
            alert('bem vindo ' + inputUsuario.value);
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            // [END_EXCLUDE]
        });
    // [END createwithemail]
});

botaoLogin.addEventListener("click", function (event) {
    event.preventDefault();

    firebase.auth().signInWithEmailAndPassword(inputUsuario.value, inputSenha.value)
        .then(function () {
            alert("logado com sucesso" + inputUsuario.value);
            document.querySelector("h1").textContent = "logado " + inputUsuario.value;
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
});
// arrumar essa parte 
// function initApp() {
//     // Listening for auth state changes.
//     // [START authstatelistener]
//     firebase.auth().onAuthStateChanged(function (user) {
//         // [START_EXCLUDE silent]
//         document.getElementById('quickstart-verify-email').disabled = true;
//         // [END_EXCLUDE]
//         if (user) {
//             // User is signed in.
//             var displayName = user.displayName;
//             var email = user.email;
//             var emailVerified = user.emailVerified;
//             var photoURL = user.photoURL;
//             var isAnonymous = user.isAnonymous;
//             var uid = user.uid;
//             var providerData = user.providerData;
//             // [START_EXCLUDE]
//             document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
//             document.getElementById('quickstart-sign-in').textContent = 'Sign out';
//             document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
//             if (!emailVerified) {
//                 document.getElementById('quickstart-verify-email').disabled = false;
//             }
//             // [END_EXCLUDE]
//         } else {
//             // User is signed out.
//             // [START_EXCLUDE]
//             document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
//             document.getElementById('quickstart-sign-in').textContent = 'Sign in';
//             document.getElementById('quickstart-account-details').textContent = 'null';
//             // [END_EXCLUDE]
//         }
//         // [START_EXCLUDE silent]
//         document.getElementById('quickstart-sign-in').disabled = false;
//         // [END_EXCLUDE]
//     });
//     // [END authstatelistener]
//     document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
//     document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
//     document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
//     document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
// }
window.onload = function () {
    initApp();
};