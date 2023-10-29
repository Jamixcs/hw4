 function checkvalid(){
     var password = document.getElementById("password").value;
     var password2 = document.getElementById("password2").value;
     var name = document.getElementById("name").value;

      if(password != password2){
      alert("請確認密碼是否相同");
      return false;
      }
      alert(`您好${name}! 歡迎加入會員`);
      return true;
  }


  //
  var formvalue = document.forms['register'] 
  var password = formValue.elements.password.value;
  //