	const nameEl = document.getElementById("name")
    const userNameEl = document.getElementById("user-name")
    const locationEl = document.getElementById("location")
    const avatarEl = document.getElementById("avatar")
    const postEl = document.getElementById("post")
    const commentEl = document.getElementById("comment")
    const likesEl = document.getElementById("likes")
    const likeBtnEl = document.getElementById("like-btn")
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    }
,{
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


for (let i = 0; i < posts.length; i++){
    nameEl.innerHTML = `${posts[i].name}`
    userNameEl.innerHTML = `${posts[i].username}`
    locationEl.innerHTML = `${posts[i].location}`
    avatarEl.src = `${posts[i].avatar}`
    postEl.src = `${posts[i].post}`
    commentEl.innerHTML = `${posts[i].comment}`
    likesEl.innerHTML = `${posts[i].likes}`
    var elem = document.querySelector('#general');
    var clone = elem.cloneNode(true);
    clone.id = 'general'+i;
	if (i != posts.length-1) {
		elem.after(clone);
	}
    
}

likeBtnEl.addEventListener("dblclick", function(){
    let likeCount = Number(likesEl.innerHTML)
    likeCount += 1
    likesEl.innerHTML = likeCount
    
})
