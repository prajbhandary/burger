//this file is for the ajax calls


  $(function () {
    $(".update-form").on("click", function (event) {
       // event.preventDefault();
        console.log("YO!")
        var id = $(this).data("id");
        console.log(id);
        var burgernameState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgernameState
        }).then(
            function () {
                console.log("changed burger to DEVOURED");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
  });
 





  $(function(){
    $(".add-form").on("click",function(event){
        console.log("new");
        var newBurger = {
            burger_name :$(add-name).val()
        }
    

        $.ajax("api/burgers",{
            type :"POST",
            data : newBurger
        }).then ( function(){
            console.log("adding new burger.....")
            location.reload();
        }
        )
    })
})