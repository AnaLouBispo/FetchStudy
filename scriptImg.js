const title = document.getElementById('title')
const image = document.getElementById('image');
const content = document.getElementById('content');
const token = localStorage.getItem('token')
const submit = document.getElementById('submit');
 
submit.addEventListener("click", function(event){
    event.preventDefault();
   
const UserData = new FormData();
    UserData.append("title", title.value),
    UserData.append("content", content.value),
    UserData.append("image", image.files[0]),
 
fetch("http://10.92.198.38:8080/feed/post", {
        method: "POST",
        body: UserData,
        headers: {'Authorization': `Bearer ${token}`}
    })
    .then((result) => {
        return result.json();
    })
    .then((data) => console.log(data))
    .catch((err) => {
        console.log(err)
    });
 
console.log(title.value);
console.log(content.value);
console.log(image.files[0]);
 
})
