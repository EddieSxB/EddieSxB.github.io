var oLi=document.getElementsByTagName("li");
var oModule=document.getElementsByClassName("module");
for(var i=0;i<oLi.length;i++){
	oLi[i].index=i;
	oLi[i].onmousemove=function(){
		for(var j=0;j<oModule.length;j++){
			oModule[j].style.display="none";
		}
		oModule[this.index].style.display="block";
	}
}
