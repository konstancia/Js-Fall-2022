let count = 0;

function loginSystem(userName, passWord){
    let expectedUN = 'Techno';
    let expectedPW = 'abcd';

    if(userName === expectedUN && passWord === expectedPW){
        console.log("Welcome to homepage");
    } else {
        if(count === 2){
            console.log("locked for 30 min");
        } else {
        console.log("Try again");
        }
        count++;
    }
}

loginSystem("Techno", "abcde");
loginSystem("Techno", "abcde");
loginSystem("Techno", "abcde");