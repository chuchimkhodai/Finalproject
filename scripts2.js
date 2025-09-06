// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVK76xOZ-cO3I4jSA1r0u2WSJ5p43EYXg",
    authDomain: "fc26-minhphuc.firebaseapp.com",
    projectId: "fc26-minhphuc",
    storageBucket: "fc26-minhphuc.firebasestorage.app",
    messagingSenderId: "705880668674",
    appId: "1:705880668674:web:5297a313fdabbec564c51b",
    measurementId: "G-R9BMG3FWJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
document.addEventListener('DOMContentLoaded', function () {
    
    // Next Button Handler
    document.getElementById('nextBtn').addEventListener('click', function () {
        const email = document.getElementById('email').value;
        const rememberMe = document.getElementById('remember').checked;

        console.log('Email:', email);
        console.log('Remember me:', rememberMe); 

        // Simulate loading
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> PROCESSING';
        this.disabled = true;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
        setTimeout(() => {
            this.innerHTML = 'NEXT';
            this.disabled = false;
        }, 1500);
    });

    // Social Button Handlers
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const service = this.classList.contains('facebook') ? 'Facebook' :
                this.classList.contains('google') ? 'Google' : 'Apple';

            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> CONNECTING WITH ' + service.toUpperCase();
            this.disabled = true;

            setTimeout(() => {
                alert(`Connecting with ${service}... (simulated)`);
                this.innerHTML = `<i class="fab fa-${service.toLowerCase()}"></i> Continue with ${service}`;
                this.disabled = false;
            }, 2000);
        
        });
    });
});