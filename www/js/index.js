
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // plugins go here

        var options={
            quality: 80, //default is 50
            destinationType: Camera.DestinationType.FILE_URI //this is the default
        }

        $("#takePhoto").on("click", takePic);

        function takePic(){
            navigator.camera.getPicture(onSuccess, onError, options)
        }
        function onSuccess(imageData){
            console.log(imageData);

            resolveLocalFileSystemURL(imageData, function (fileEntry) {
                var myNewImage = fileEntry.toURL()
                console.log(myNewImage);
                // do something with URL, assign to src or create an html 
                $("#takePhoto").after("<div class='photoDisplay'><img src='"+ myNewImage + " '></div>")
            }, onError);
        }

        function onError(message){
            alert("Photo not taken because" + message)
        }
}
