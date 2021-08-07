// var members = ['matt', 'cindy', 'kim'];

// var i = 0;
// while(i < members.length) {
//     console.log(members[i])
//     i = i + 1;
// }








var roles = {
    'programmer' : 'matt',
    'designer' : 'cindy',
    'manager' : 'kim'
}

for (var name in roles) {
    console.log(name, roles[name]);
}