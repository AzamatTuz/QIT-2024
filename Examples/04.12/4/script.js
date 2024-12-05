const user = {
    name: 'Aijan',
    age: 25,
    profession: 'Mugalim',
    greet: function () {
        return `Salem menin atym ${this.name}! Jasym ${this.age}-te, ${this.profession} b0olyp jumas isteimin`;
    },
    friends: [],
    
    addFriends: function () {
        while (true) {
            let plusFriend = prompt('Dostaryndy engiz');
            if (plusFriend === 'stop') break;
            this.friends.push(plusFriend)
        }
    }
};

// console.log(user.greet());

// user.addFriends()
// console.log(user.friends);



