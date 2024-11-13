const users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {},
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {},
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {},
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {},
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {},
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {},
    }
  ];

  for(let objs of users){
    console.log(objs.username);
  }

  for(let objs in users){
    console.log(users[objs].username);
  }

  users.forEach((user) => {
    console.log(user.username);
  })

    //I just discovered that you can return objects
    function createPerson(name, age, isDeveloper) {
      return {
        name: name,
        age: age,
        isDeveloper: isDeveloper
      };
    }