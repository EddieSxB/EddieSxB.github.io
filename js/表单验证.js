			function f_validate(){
				var oUsername=document.getElementById("username");
				var oPwd=document.getElementById("pwd");
				if(oUsername.value.length<6 || oUsername.value.length>12){
					alert("用户名在6到12位之间，请重新输入");
					return false;
				}
				if(oPwd.value==""){
					alert("请输入密码");
					return false;
				}
				return true;
			}