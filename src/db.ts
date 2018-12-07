import admin from 'firebase-admin';
import * as functions from 'firebase-functions';

const serviceAccount = require('./service-account.json');

admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://is-card-transcription-service.firebaseio.com',
});

const db = admin.firestore();
export default db;
