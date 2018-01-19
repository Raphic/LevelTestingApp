

function sendDataToFirebase(data) {
  var firebaseUrl = "https://reminderbooking-5364b.firebaseio.com/";
  var secret = "URnaMZGfJuuC7UwF9qq5xnrNtTY9xX3iByD2YEiT";
  delete data.nameList;
  var base = FirebaseApp.getDatabaseByUrl(firebaseUrl, secret);
  base.setData(data.center +"/"+data.date, data);
}


function getCenterData(center, date) {
  Logger.log(center)
  Logger.log(date)
  var firebaseUrl = "https://reminderbooking-5364b.firebaseio.com/"+center+"/date"+ date;
  var base = FirebaseApp.getDatabaseByUrl(firebaseUrl);
  var data = base.getData();
  return data;
}

