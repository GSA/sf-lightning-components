({
    onInit : function(component, event, helper) {
        helper.loadPictures(component);
    },
    
	onUploadFinished: function (component, event, helper) {
        helper.loadPictures(component);
        helper.uploadFinish(component,event);
    },
    activeCall: function(component, event, helper){
        helper.imageUpload(component,event,helper);
    },
    recordChangeHandler: function (component, event, helper) {
        component.set("v.recordId", event.getParam("recordId"));
        helper.loadPictures(component);
    },
    handleUploadFinished: function (cmp, event) {
        // Get the list of uploaded files
         if(IsFirstImage==true){
            var uploadedFiles = event.getParam("files");
        
        // Get the file name 
         }
        //var uploadedFiles = event.getParam("files");
        //alert("Files uploaded : " + uploadedFiles.length);
        // Get the file name
       // uploadedFiles.forEach(file => console.log(file.name));
    },
     /* mouseOver : function(component, event){
                        var selectedItem = event.currentTarget;
                        var Name = selectedItem.dataset.record;
          alert(Name);
                        console.log('file Name = '+ Name);
                    },*/

})