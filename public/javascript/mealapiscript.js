function getsource(id){
    $.ajax({
        url:"https://api.spoonacular.com/recipes/"+id+"/information?apiKey=7c589221426847a9a6c604a855f094a2",
        success: function(res){
            document.getElementById("sourceLink").innerHTML=res.sourceUrl
            document.getElementById("sourceLink").href=res.sourceUrl
        }
    });
}
function getrecipe(q){
    $.ajax({
        url:"https://api.spoonacular.com/recipes/search?apiKey=7c589221426847a9a6c604a855f094a2&number=1&query="+q,
        success:function(res){
            document.getElementById("output").innerHTML="<h1>"+res.results[0].title+"</h1><br><img src='"+res.baseUri+res.results[0].image+"'width='400' /> <br> ready in "+res.results[0].readyInMinutes+" minutes"
            getsource(res.results[0].id)
        }
    })
    document.querySelector(".meal-img").style.visibility = "hidden"
    document.querySelector(".Pyramid-image").style.visibility = "hidden"

}