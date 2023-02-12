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
var relation1 = document.getElementById('relation2').value
  var relname1 = document.getElementById('relname2').value
  var eulogy = document.getElementById('eulogy').value
  var img1text = document.getElementById('img1text').value
  var img2text = document.getElementById('img2text').value
  var img3text = document.getElementById('img3text').value
  var link1 = document.getElementById('link1').value
  var link2 = document.getElementById('link2').value
  var link3 = document.getElementById('link3').value
  var link4 = document.getElementById('link4').value
  var socialtype1 = document.getElementById('socialtype1').value
  var socialtype2 = document.getElementById('socialtype2').value
  var socialtype3 = document.getElementById('socialtype3').value
  var socialtype4 = document.getElementById('socialtype4').value
              //var fname = document.getElementById('fname').value
            var urlqr = "livepage.html";
            urlqr=urlqr+"?fetchname="+fname;
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
    relation1:relation1,
    relname1:relname1,
    img1:img1,
    img2:img1,
    img3:img1,
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
    urlqr:urlqr
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

 const file3 = document.querySelector("#img3").files[0];
        const name3 = +new Date() + "-" + file3.name;
        const metadata3 = {
            contentType: file3.type
        };
        const task3 = ref.child(name3).put(file3, metadata3);
        task3
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                var img3=url;
                var updates = {
                    img3:img3,
                }

            database.ref('users/' + fname).update(updates)
                console.log(url);
                //document.querySelector("#image").src = url;
            })
            .catch(console.error);


  alert('Saved')
}


function get() {
    let urlString = document.URL;
        let paramString = urlString.split('?')[1];
        let queryString = new URLSearchParams(paramString);
        for(let pair of queryString.entries()) {
            console.log("Key is:" + pair[0]);
            console.log("Value is:" + pair[1]);
            var valueuser=pair[1];
    }
  //var username = document.getElementById('fetchfname').value
  var username=valueuser
  var user_ref = database.ref('users/' + username)
  user_ref.on('value', function(snapshot) {
    var data = snapshot.val()
     document.getElementById('fname').innerHTML=data.fname;
     document.getElementById('lname').innerHTML=data.lname;
     document.getElementById('fname1').innerHTML=data.fname;
     document.getElementById('lname1').innerHTML=data.lname;
     //document.getElementById('profilepic').src=data.img1;
     document.querySelector("#profilepic").src = data.img1;
     document.getElementById('dob').innerHTML=data.dob;
     document.getElementById('dod').innerHTML=data.dod;
     document.getElementById('hometown').innerHTML=data.hometown;
     document.getElementById('age').innerHTML=data.age;
     document.getElementById('relation').innerHTML=data.relation;
     document.getElementById('relname').innerHTML=data.relname;
     document.getElementById('eulogy').innerHTML=data.eulogy;
     document.querySelector('#refimg1').src = data.img2;
     document.querySelector('#refimg2').src = data.img3;
     document.querySelector('#refimg3').src = data.img2;
     document.querySelector('#refimg4').src = data.img3;
     document.getElementById('imgtext1').innerHTML=data.img1text;
     document.getElementById('imgtext2').innerHTML=data.img2text;
     document.getElementById('imgtext3').innerHTML=data.img2text;
     document.getElementById('imgtext4').innerHTML=data.img1text;

    let qrCode;
    qrCode = generateQrCode(data.urlqr);

    function generateQrCode(qrContent) {
    return new QRCode("qr-code", {
        text: qrContent,
        width: 150,
        height: 150,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
    });

    }



  })

}