'use strict';

import {
  createMirage
} from './index.js';

function initMirage() {

  const mirageObj = {};



  // mirageObj.initializeComponent = mirageComponent();

  mirageObj.begin = createMirage().startApp;

  // mirageObj.stores = [
  // roomStore,
  // filterStore,
  // mediaStore,
  // animeStore,
  // rtcStore
  // ];

  //should probably make click listener arrays for each event,
  //which can take listeners within particular rtc events/functions

  //initiate webRTC
  //video and canvas setup  

  //initiate messaging

  //initiate room function
  //server needs to be initiated first

  //initiate filter option

  //initiate emojis

  //initiate animations

  //initiate tracking

  return mirageObj;
}



const mirage = initMirage();
mirage.begin();


// export default { Mirage };
