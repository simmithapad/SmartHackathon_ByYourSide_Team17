let qrContentInput = document.getElementById("qr-content");
	let qrGenerationForm =
	document.getElementById("qr-generation-form");
	let qrCode;
	
	function generateQrCode(qrContent) {
	return new QRCode("qr-code", {
		text: qrContent,
		width: 240,
		height: 240,
		colorDark: "#000000",
		colorLight: "#ffffff",
		correctLevel: QRCode.CorrectLevel.H,
	});
	}
	
	// Event listener for form submit event
	qrGenerationForm.addEventListener("submit", function (event) {
	// Prevent form submission
	event.preventDefault();
	let qrContent = qrContentInput.value;
	if (qrCode == null) {
		
		// Generate code initially
		qrCode = generateQrCode(qrContent);
	} else {
		
		// If code already generated then make
		// again using same object
		qrCode.makeCode(qrContent);
	}
	});


// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//     apiKey: "AIzaSyCfeAht8hGZjenP7TKrd4ecC9gKrjSDqVs",
//     authDomain: "by-your-side-ab88f.firebaseapp.com",
//     databaseURL: "https://by-your-side-ab88f-default-rtdb.firebaseio.com",
//     projectId: "by-your-side-ab88f",
//     storageBucket: "by-your-side-ab88f.appspot.com",
//     messagingSenderId: "952966334602",
//     appId: "1:952966334602:web:3886e43063aa4d257d0573",
//     measurementId: "G-RTBZRK9RM6"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);
//   const database = getDatabase(app);

//   createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

