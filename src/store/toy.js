import i18n from '../locale/i18n';
import { db } from '../main'

const toy = {
  namespaced: true,
  state: {
    toys: [],
    items: [],
    searchToys: []
  },
  actions: {
    getToys({commit}) {
      db.collection('toys')
        .orderBy('created_date')
        .onSnapshot((snapshot) => {
          let toys = []
          snapshot.forEach((doc) => {
            const item = {...doc.data(), id: doc.id};
            toys.push(item);
          })
          commit('setToys', toys);
        })
    },

    getToysByQrcode({commit}, qrcode) {
      console.log('qrcode: ', parseInt(qrcode));
      db.collection('toys')
        .where("qrcode", "==", parseInt(qrcode))
        .onSnapshot((snapshot) => {
          let toys = []
          snapshot.forEach((doc) => {
            const item = {...doc.data(), id: doc.id};
            toys.push(item);
          })
          commit('setSearchToys', toys);
        })
    },

    addToy({commit}, data) {
      console.log('data: ', data);
      db.collection('toys')
        .add(data)
        .then((response) => {
          if (response) {
            console.log('response: ', response);
          }
        })
        .catch((error) => {
          console.log(error);
        })
    },
  },
  mutations: {
    setToys(state, toys) {
      state.toys = toys;
    },

    setSearchToys(state, toys) {
      state.searchToys = toys;
    },

  },
  getters: {
    getAll: (state) => {
      return state.toys
    },
    getZoids: (state) => {
      return state.toys.filter(toy => toy.catogort === 'zoids');
    }
  }
};

export default toy;
