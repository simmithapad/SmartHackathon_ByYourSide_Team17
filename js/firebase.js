// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAhxoU7tdQUW3eJJ7a2cjRi3mXNRtjJxfk",
    authDomain: "keeplearning-6ae05.firebaseapp.com",
    databaseURL: "https://keeplearning-6ae05-default-rtdb.firebaseio.com",
    projectId: "keeplearning-6ae05",
    storageBucket: "keeplearning-6ae05.appspot.com",
    messagingSenderId: "910953626453",
    appId: "1:910953626453:web:5d29cb2df5cf3b4bb50ddc",
    measurementId: "G-6C3RF9YKPR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()


function save() {
  var fname = document.getElementById('fname').value
  var lname = document.getElementById('lname').value
  var dob = document.getElementById('dob').value
  var dod = document.getElementById('dod').value
  var age = document.getElementById('age').value
  var hometown = document.getElementById('hometown').value
  var relation = document.getElementById('relation').value
  var relname = document.getElementById('relname').value
  var eulogy = document.getElementById('eulogy').value
  var img1text = document.getElementById('img1text').value
  var img2text = document.getElementById('img2text').value
  var link1 = document.getElementById('link1').value
  var link2 = document.getElementById('link2').value
  var link3 = document.getElementById('link3').value
  var link4 = document.getElementById('link4').value
  var socialtype1 = document.getElementById('socialtype1').value
  var socialtype2 = document.getElementById('socialtype2').value
  var socialtype3 = document.getElementById('socialtype3').value
  var socialtype4 = document.getElementById('socialtype4').value
 //var password = document.getElementById('password').value
  //var username = document.getElementById('username').value
  //var say_something = document.getElementById('say_something').value
  //var favourite_food = document.getElementById('favourite_food').value

  
  const ref = firebase.storage().ref();

        const file1 = document.querySelector("#img1").files[0];
        const name1 = +new Date() + "-" + file1.name;
        const metadata1 = {
            contentType: file1.type
        };
        const task1 = ref.child(name1).put(file1, metadata1);
        task1
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                var img1=url;
    database.ref('users/' + fname).set({
    fname : fname,
    lname: lname,
    dob: dob,
    dod: dod,
    age:age,
    hometown:hometown,
    relation:relation,
    relname:relname,
    img1:img1,
    img2:img1,
    eulogy:eulogy,
    img1text:img1text,
    img2text:img2text,
    link1:link1,
    link2:link2,
    link3:link3,
    link4:link4,
    socialtype1:socialtype1,
    socialtype2:socialtype2,
    socialtype3:socialtype3,
    socialtype4:socialtype4,
  })
                console.log(url);
                //document.querySelector("#image").src = url;
            })
            .catch(console.error);

        const file2 = document.querySelector("#img2").files[0];
        const name2 = +new Date() + "-" + file2.name;
        const metadata2 = {
            contentType: file2.type
        };
        const task2 = ref.child(name2).put(file2, metadata2);
        task2
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                var img2=url;
                var updates = {
                    img2:img2,
                }

            database.ref('users/' + fname).update(updates)
                console.log(url);
                //document.querySelector("#image").src = url;
            })
            .catch(console.error);


  alert('Saved')
}