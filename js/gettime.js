			function getTimeString(){
				var now = new Date();
				var year = now.getFullYear();
				var month = now.getMonth() + 1;
				var date = now.getDate();
				var hours = now.getHours();
				var mins = now.getMinutes();
				var seconds = now.getSeconds();
				var timeString = year+"年"+month+"月"+date+"日"+hours+":"+mins+":"+seconds;
				return timeString;
			}
			var oBox = document.getElementById("box");
			oBox.innerHTML = getTimeString();
			window.setInterval(function(){
				oBox.innerHTML = getTimeString();
			},1000);