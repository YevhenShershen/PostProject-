//1)объявление переменной ersons
//2) получение данных с  помощью actions с бекэнда
//3) ctx.commit("updatePersons", persons); апдейт нашей переменной и присваивание данных которые получили с помощью функции в mutations
//4) с помощью getters мы получаем данные с store
export const persons: any = {
  state: {
    persons: [],
  },
  mutations: {
    //обновления данных в store через мутацию при
    //первый параметр это state, а второу то что передаем
    updatePersons(state: any, persons: any) {
      state.persons = persons;
    },
  },
  actions: {
    //принимаем данные с бекэнда
    //первый параметр в actions это некоторый контектс
    async fetchPersons(ctx: any) {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const persons = await res.json();
      // контекст есть метод commit , первый параметр метода коммит
      //это название мутации которую хотим вызвать
      // а второй параметр это тот который передаем в мутации
      ctx.commit("updatePersons", persons);
    },
  },
  modules: {},
  getters: {
    receivingPersons(state: any) {
      return state.persons;
    },
  },
};
