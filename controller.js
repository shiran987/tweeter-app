const input =$('#input')
const adPost= function(){
    tweeter.addPost(input.val())
    input.val('')

    Renderer()
}
$('#posts').on('click','.commentAdd', function() {
    let pstId=$(this).closest(".post").attr('id')
    let txt=$(this).closest('.post').find('.inputComment').val()
    tweeter.addComment(txt,pstId)
    Renderer()


})

$('#posts').on('click','.delete-comment', function() {
    let pstId=$(this).closest(".post").attr('id')
    let cmntId=$(this).closest('.comment').attr('id')
    tweeter.removeComment(pstId,cmntId)
    Renderer()


})

$('#posts').on('click','.deletePost', function() {
    let pstId=$(this).closest(".post").attr('id')
    tweeter.removePost(pstId)

    Renderer()


})