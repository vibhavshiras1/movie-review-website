var count = 0;

const changeimg = setInterval(() => {
    if(count%5==0){
    document.getElementById('image1').src = "https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg";
    count++;
    }
    else if(count%5==1){
    document.getElementById('image1').src = "https://cdn.shopify.com/s/files/1/0969/9128/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_a12704bd-2b25-4aa7-8c8d-8f40cf467dc7.jpg?v=1582781089";
    count++;
    }
    else if(count%5==2){
    document.getElementById('image1').src = "https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/baby-driver-rory-hi-res.jpg";
    count++;
    }
    else if(count%5==3){
    document.getElementById('image1').src = "https://cdn.shopify.com/s/files/1/1416/8662/products/titanic_1997_styleA_original_film_art_1200x.jpg?v=1591898438";
    count++;
    }
    else if(count%5==4){
    document.getElementById('image1').src = "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/01/IMG_2893.jpeg";
    count++;
    }
}, 2000);


function myFunction() {
var input, filter, ul, li, a, i, txtValue;
input = document.getElementById("search1");
filter = input.value.toUpperCase();
ul = document.getElementById("myUL");
li = ul.getElementsByTagName("li");
for (i = 0; i < li.length; i++) {
console.log(li[i]);
a = li[i].getElementsByTagName("a")[0];

txtValue = a.textContent || a.innerText;
if (txtValue.toUpperCase().indexOf(filter) > -1) {
    if(document.getElementById("search1").value){
    li[i].style.display = "";}
    else{
    li[i].style.display = "none";}
} else {
    li[i].style.display = "none";
}
}
document.getElementById("myUL").style.visibility = "visible";
}
document.getElementById("myUL").style.visibility = "hidden";
