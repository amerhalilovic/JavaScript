var userOne = {
    email: 'amer.halilovic@stu.ibu.edu.ba',
    name: 'Amer',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email,'has logget out');
    }
};

userOne.name='Amerinho';