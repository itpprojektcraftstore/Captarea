// Initialize Firebase
      var config = {
        apiKey: "AIzaSyDnML32e89uzQhFhWT7o9jjAklib4Oja1E",
        authDomain: "captarea-da734.firebaseapp.com",
        databaseURL: "https://captarea-da734.firebaseio.com",
        projectId: "captarea-da734",
        storageBucket: "captarea-da734.appspot.com",
        messagingSenderId: "956111985082"
      };
      firebase.initializeApp(config);

      var gl_game = 0;
      var gl_players = 1;
      var gl_player_array = ["Player1", "Player2", "Player3", "Player4"];
      var gl_player_index;
      var gl_is_admin = false;
      var gl_game_start = false;

/*
      document.addEventListener('DOMContentLoaded', function() {
        // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
        // // The Firebase SDK is initialized and available here!
        //
        // firebase.auth().onAuthStateChanged(user => { });
        // firebase.database().ref('/path/to/ref').on('data', snapshot => { });
        // firebase.messaging().requestPermission().then(() => { });
        // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
        //
        // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

        try {
          let app = firebase.app();
          let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
          document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
        } catch (e) {
          console.error(e);
          document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
        }
      });
*/