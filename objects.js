class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }

    login(){
        console.log(this.email,' just logged in');
    }

    logout(){
        console.log(this.email, ' just logged out');
    }
    
}

var userOne = new User('amer@gmail.com','Amer');
var userTwo = new User('hanad@hotmail.com','Hanad');

userOne.login();
userTwo.logout();

