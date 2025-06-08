import express from 'express';
import cors from 'cors';
import admin from 'firebase-admin';

const app = express();
app.use(cors());
app.use(express.json());

// initialize firebase admin sdk with service account credentials (downloaded json)
admin.initializeApp({
  credential: admin.credential.cert(require('./serviceAccountKey.json')),
  databaseURL: "https://nvcpd-database.firebaseio.com"
});

const db = admin.firestore();

// your routes here

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
