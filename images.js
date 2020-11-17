$(document).ready(function () {

    $("button").click(runLoops);


    function runLoops() {
        // Clear out all existing images
        $(".imageHolder").empty();

        // Get the number from the box
        var num = parseInt($("#numPics").val());

        // Print the desired number of images for each loop
        $("#while-num").text(num + 1);
        $("#do-while-num").text(num - 1);
        $("#for-num").text(num);


        /*
         Create a while loop that runs "num + 1" times.


         The body of the loop should contain the statement:
         addImageToDiv("#while-loop");
        */



        while (num.length) {

            addImageToDiv("#while-loop");

           num--;

        }






            /*
             Create a do-while loop that runs "num - 1" times.

             The body of the loop should contain the statement:
             addImageToDiv("#do-while-loop");
            */

        do{


            addImageToDiv("#do-while-loop");
            num--;

        }   while (num.length);



        /*
         Create a for loop that runs exactly "num" times.

         The body of the loop should contain the statement:
         addImageToDiv("#for-loop");
        */

        for (var x =0; x<num.length; x++){

            addImageToDiv("#for-loop");

        }




    }

    function addImageToDiv(divId) {
        var fileName = $(":radio[name='pictureSelect']:checked").val();
        // Create a new image element
        var imageElement = $("<img>");
        // Set its source attribute
        imageElement.attr("src", `img/${fileName}`);
        // Add it as a child of another element
        $(divId).append(imageElement);
    }

});