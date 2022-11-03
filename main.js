


  const firebaseConfig = {
    apiKey: "AIzaSyDSdfb-mAPqCkQRDrtPNNV6DjXvu-k0geM",
    authDomain: "values-project-3b188.firebaseapp.com",
    projectId: "values-project-3b188",
    storageBucket: "values-project-3b188.appspot.com",
    messagingSenderId: "1343861824",
    appId: "1:1343861824:web:58a27bcd9c508d39ef1ba5",
    measurementId: "G-YBXC2BMKZL"
  };

  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  var info=firebase.database('contactform');
  //listen to submit 
document.getElementById("contactForm").addEventListener("submit", submitForm);
function submitForm(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    //save info into database 
    saveInfo(name,email)
    console.log(name, email);
    }
    //saving to database 
    function saveInfo(name,email){
        var userinfo=info.push();
        userinfo.set({
            name: name,
            email:email
        })
    }