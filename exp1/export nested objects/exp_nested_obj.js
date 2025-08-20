//Exporting nested objects and function from Module using exports Object.//
module.exports = {
    user: {
      name: 'Abc',
      age: 20,
      greet: function() {
        return `Hello, I'm ${this.name}. How are you?`;
      }
    },
    getUserAge: function() {
      return this.user.age;
    }
  };
  