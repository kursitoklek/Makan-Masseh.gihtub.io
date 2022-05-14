// const WebSocketInitiator = {
//   init(url) {
//     const webSocket = new WebSocket(url);
//     webSocket.onmessage = this._onMessageHandler;
//   },

//   _onMessageHandler(message) {
//     console.log(message.data);
//   },
// };
// export default WebSocketInitiator;

import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const resto = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      title: `${resto.name} is on cinema!`,
      options: {
        body: resto.description.slice(0, 10),
        image: `${CONFIG.BASE_IMAGE_URL + resto.pictureId}`,
      },
    });
  },
};

export default WebSocketInitiator;
