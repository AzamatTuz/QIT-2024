const team = {
    name: 'Barcelona',
    members: [
        { name: 'Bauyrzhan', hobbies: ['Golf', 'Football'] },
        { name: 'Aizhan', hobbies: ['Suret salu', 'Videmaking'] },
        { name: 'Aiganym', hobbies: ['kolik aidau', 'Football'] },
    ],
}


console.log(team.members[1].hobbies[0]);
console.log(team.members.flatMap(member => member.hobbies));



