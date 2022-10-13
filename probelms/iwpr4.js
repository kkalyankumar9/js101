//Given stored username and password and input username and password, Print if the user can login or not.

let Reg_user_name="kalyan010@gmail.com";
let Reg_password="kalyan99";
let log_username="kalyan010@gmail.com";
let login_password="kalyan9";
if(Reg_user_name==log_username){
  if(Reg_password==login_password){
    console.log("Login Successfully");
  }else{
    console.log("Check once Password");
  }
}else{
    console.log("Check once username")
  }
