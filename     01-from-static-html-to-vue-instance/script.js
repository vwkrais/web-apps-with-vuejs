Vue.createApp({
  data() {
    const currentDate = new Date().toLocaleString("en-us");
    return {
      username: "John Doe",
      date: currentDate,
    };
  },
}).mount(".card");
