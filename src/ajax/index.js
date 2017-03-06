import axios from 'axios';

const ERR_OK = 0;

export default {
  getSeller: (cb) => {
    axios.get('/api/seller')
      .then((res) => {
        if (res.data.errno === ERR_OK) {
          cb(res.data.data);
        }
      });
  },
  getRatings: (cb) => {
    axios.get('/api/ratings')
      .then((res) => {
        if (res.data.errno === ERR_OK) {
          cb(res.data.data);
        }
      });
  },
  getGoods: (cb) => {
    axios.get('/api/goods')
      .then((res) => {
        if (res.data.errno === ERR_OK) {
          cb(res.data.data);
        }
      });
  }
};

// import data from './data.json';

// export default {
//   getSeller: (cb) => {
//     cb(data.seller);
//   },
//   getRatings: (cb) => {
//     cb(data.ratings);
//   },
//   getGoods: (cb) => {
//     cb(data.goods);
//   }
// };
