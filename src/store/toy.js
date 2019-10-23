import i18n from '../locale/i18n';
import { db } from '../main'

const toy = {
  namespaced: true,
  state: {
    toys: [],
    items: []
  },
  actions: {
    getToys({commit}) {
      db.collection('toys')
        .get()
        .then(querySnapshot => {
          let items = [];
          querySnapshot.forEach(doc => {
            console.log(doc.id, doc.data());

            let item = doc.data();
            item.id = doc.id;

            items.push(item);
          });

          commit('setToys', items)
        })
        .catch((error) => {
          console.log('DB get collection error: ', error);
        })
    }
  },
  mutations: {
    setToys(state, toys) {
      state.toys = toys;
    }
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
