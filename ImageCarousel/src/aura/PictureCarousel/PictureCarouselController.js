({
    next: function(component) {
    	var slideIndex = component.get("v.slideIndex");
        var con = component.get("v.content");
        var att = component.get("v.attachments");
        var photo = component.get("v.photoarray");
        var totalimages = att.length+con.length+photo.length;
        
        if (slideIndex + 1 < totalimages) {
            slideIndex = slideIndex + 1;
            component.set("v.slideIndex", slideIndex);
        }
	},

    prev: function(component) {
       	var slideIndex = component.get("v.slideIndex");
        if (slideIndex > 0) {
            slideIndex = slideIndex - 1;
	        component.set("v.slideIndex", slideIndex);
        }
    },

    doneRendering : function(component) {
        var photo = component.get("v.photo");
        let elem = document.createElement("div");
        elem.innerHTML = photo;
        let images = elem.getElementsByTagName("img");
        var photoarr = [];
        var content = component.get("v.content");
        for(let i=0; i < images.length; i++){
            let imgSrc = images[i].src;
            let splitArray = imgSrc.split("/");
            var len = splitArray.length;
            let requiredPath = splitArray[len-2]+"/"+splitArray[len-1];
            photoarr.push(requiredPath);
        }
        component.set("v.photoarray",photoarr);
    },

})