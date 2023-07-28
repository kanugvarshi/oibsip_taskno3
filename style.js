$(".txtb").on("keyup",function(e){
    if(e.keyCode==13 && $(".txtb").val != ""){
        var task= $("<div class='task'></div>").text($(".txtb").val());
        var del = $("<i class='fa-solid fa-trash'></i>").click(function(){
            var p= $(this).parent();
            p.fadeOut(function(){
                p.remove();
            });
        });
        var check= $("<i class='fa-solid fa-check'></i>").click(function(){
            var p= $(this).parent();
            p.fadeOut(function(){
                $(".comp").append(p);
                p.fadeIn();
            });
            $(this).remove();
        });


        task.append(del,check);
        $(".notcomp").append(task);
        //to clear text in text box
        $(".txtb").val("");



    }
});
