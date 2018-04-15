var object=document.getElementById('counter');

function aaa()
{   

var now = new Date(); 
<<<<<<< HEAD
var xmasDay = new Date(1999, 01, 20,00,0,0); // khởi tạo ngày Noel cùng năm với ngày hiện tại 
=======
var xmasDay = new Date(0000, 00, 00,00,0,0); // khởi tạo ngày Noel cùng năm với ngày hiện tại 
>>>>>>> 982d9f701a3976a08812673a8cc73bb884e6d66e
var offset = -xmasDay.getTime() + now.getTime(); // lấy độ lệch của 2 mốc thời gian, đơn vị tính là millisecond 
var totalDays = Math.round(offset / 1000 / 60 / 60 / 24); 
var totalHours = Math.round(offset / 1000 / 60 / 60); 
var totalMinutes = Math.round(offset / 1000 / 60); 
var totalSeconds = Math.round(offset / 1000); 
  object.innerHTML= ' In Love  '+ (totalDays) +' Days '+ ((totalHours-1)%24)+' Hours '+( (totalMinutes-1)%60)+' Minutes '+((totalSeconds-1)% 60)+' Seconds';
  if(totalSeconds%5==0)
    {
        
    }
  var t = setTimeout(function() {aaa(); }, 1000);

}
aaa();
