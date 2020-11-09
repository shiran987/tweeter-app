const Renderer = function(){
    let updatedPosts=tweeter.getPosts()
  
       $("#posts").empty()
 
       for(let post of updatedPosts){
    let updatedComment=` `
    for(const comment of post.comments){
        updatedComment+=`
        <div class="comment" id='${comment.id}'>
        <div class="delete-comment">X</div>
        <p class="comment-text">${comment.text}</p>
 
    </div>
          
        
        ` 
    }
 
 let updatedPosts= $(`   <div class="post"  id="${post.id}">
 <div class="deletePost">X</div>
            <p class="post-text">${post.text}</p>
 
            <div class="commentsContainer">
                
             ${updatedComment}
                
 
                <input type="text" placeholder="Leave a comment" class="inputComment">
                <button class="commentAdd" >Comment</button>
 
            </div>
            </div>
 `
 
 )
 $("#posts").append(updatedPosts)
 
 
 
 
       
   }
 }
 
 Renderer()