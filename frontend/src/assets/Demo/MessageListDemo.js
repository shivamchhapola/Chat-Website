import EchidnaImg from './echidna.jpg';
import CSMImg from './csm.jpg';
import PikaImg from './pika.jpg';
import HikiImg from './hikigaya.jpg';

const Messages = [
  {
    _id: 'barbox',
    name: 'Barbox',
    message: { text: 'Hi' },
    profilepic: EchidnaImg,
    time: '11/05/2022 8:16PM',
    SendByMe: false,
  },
  {
    _id: 'bunj',
    name: 'Bunj',
    message: { text: 'HI' },
    profilepic: PikaImg,
    time: '11/05/2022 8:17PM',
    SendByMe: false,
  },
  {
    _id: 'shivam',
    name: 'Shivam',
    message: { text: 'Bruh' },
    profilepic: HikiImg,
    time: '11/05/2022 8:17PM',
    SendByMe: true,
  },
  {
    _id: 'vishal',
    name: 'Vishal',
    message: { text: 'Hey' },
    profilepic: CSMImg,
    time: '11/05/2022 8:18PM',
    SendByMe: false,
  },
];

export default Messages;
