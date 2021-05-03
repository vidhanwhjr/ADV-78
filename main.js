var imgs = ["https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg" , 
"https://miro.medium.com/max/12000/1*PgIo7r6qQXem8BmWd-vksQ.jpeg", 
"https://content.fortune.com/wp-content/uploads/2018/07/gettyimages-961697338.jpg"];
 var namess = ["Vikas", "vinay" , "Member"];
 var count = 0;
 function ds(){
     count++;

     var number_of_family_members_in_array =5;
     if (count> number_of_family_members_in_array){
         count=0;
     }
     var Updated_namess = namess[count];
     var Updated_img = imgs[count];
     document.getElementById("img11").src=Updated_img;
     document.getElementById(names_showing_label).innerHTML= Updated_namess;
    }
