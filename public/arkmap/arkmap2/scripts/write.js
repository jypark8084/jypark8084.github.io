import { db } from './firebase-init.js';
import { addDoc, collection } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

const writeForm = document.getElementById("writeForm");

writeForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const message = document.getElementById("message").value;
    const x = document.getElementById("x").value;
    const y = document.getElementById("y").value;

    try {
        await addDoc(collection(db, "wishes"), {
            username,
            message,
            x,
            y
        });
        alert("작성 완료!");
        window.location.href = "/index.html";
    } catch (error) {
        console.error("Error writing document: ", error);
    }
});
