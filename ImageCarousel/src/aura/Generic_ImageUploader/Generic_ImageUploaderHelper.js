({
    loadPictures : function(component) {
        var propertyId = component.get("v.recordId");
        component.set("v.files", []);
        component.set("v.attachments", []);
        if (!propertyId) {
            return;
        }

        this.getFiles(component);
        
        this.getAttachments(component);
       /* var action = component.get("c.getFiles");
        action.setParams({
            recordIds: propertyId
        });
        action.setCallback(this, function (response) {
            var results = response.getReturnValue();
            var files = [];
            var temp;
            results.Image.forEach((value, index, self) => {
			  Object.keys(value).forEach(function(key) {
			      var currObj = value[key];
			      temp = currObj.map(a => a.cvId);
			  });
			});
            for(var i=0;i<temp.length;i++){
            	files.push(temp[i]);
            }
            component.set("v.files", files);
        });*/
        
        /*var action2 = component.get("c.getAttachments");
        action2.setParams({
            recordIds: propertyId
        });
        action2.setCallback(this, function (response) {
            var results = response.getReturnValue();
            var files = [];
            var temp;
            results.Image.forEach((value, index, self) => {
			  Object.keys(value).forEach(function(key) {
			      var currObj = value[key];
			      temp = currObj.map(a => a.Id);
			  });
			});
            for(var i=0;i<temp.length;i++){
            	files.push(temp[i]);
            }

            component.set("v.attachments", files);
        });
        $A.enqueueAction(action);
        $A.enqueueAction(action2);*/
    },

    getFiles :function(component,propertyId){
        var propertyId = component.get("v.recordId");
        
        var action = component.get("c.getFiles");
        action.setParams({
            recordIds: propertyId
        });
        action.setCallback(this, function (response) {
            var results = response.getReturnValue();
            
            var files = [];
           
            var temp =[];
            
            var FirstImageId;
            //console.log(results.Image[0]);
            results.Image.forEach((value, index, self) => {
              Object.keys(value).forEach(function(key) {
                  var currObj = value[key];
                
                  temp = currObj.map(a => a.cvId);
                  //FirstImageId=	currObj.map(a => a.IsFirstImage);
                  console.log(currObj);
                for(var i in currObj){
                if(currObj[i].IsFirstImage){
                component.set("v.FirstImageId",currObj[i].cvId);
                console.log(currObj[i].cvId);
            }
            }
                  
              });
            });
            console.log('temp',temp);
            for(var i=0;i<temp.length;i++){
                files.push(temp[i]);
            }
            component.set("v.files", files);
        });
         $A.enqueueAction(action);

    },
                
   getAttachments :function(component){
        var propertyId = component.get("v.recordId");
        var action2 = component.get("c.getAttachments");
        action2.setParams({
            recordIds: propertyId
        });
        action2.setCallback(this, function (response) {
            var results = response.getReturnValue();
            var files = [];
            var temp =[];
            results.Image.forEach((value, index, self) => {
              Object.keys(value).forEach(function(key) {
                  var currObj = value[key];
                  temp = currObj.map(a => a.Id);
              });
            });
            console.log('atttemp',temp);
            for(var i=0;i<temp.length;i++){
                files.push(temp[i]);
            }

            component.set("v.attachments", files);
        });
       
        $A.enqueueAction(action2);

    },
    uploadFinish:function(component,event){
        var fistImage = component.get("v.IsFirstImage");
        //alert(event);
        if(fistImage==true){
            var uploadedFiles = event.getParam("files");
            
            var fileId = uploadedFiles[0].documentId;
            
            var recId = component.get("v.recordId");
            
            var action = component.get("c.updateFileFirstImage");
            
            action.setParams({
            documentId: fileId,
            propRecId: recId   
        });
            action.setCallback(this, function (response){
                               var state =response.getState();
            if(state === "SUCCESS"){
                //alert(state);
                $A.get('e.force:refreshView').fire();
            }
            
        });
            //alert("Files uploaded : " + uploadedFiles[0].documentId);
            $A.enqueueAction(action);
        }
                    
                },
                
                imageUpload:function(component, event, helper){
                    
                    var f = event.getSource().get('v.value');
                   // alert(f);
                    //var cmpTarget = document.getElementById('file');
                      // alert(cmpTarget);
                     //$A.util.addClass(cmpTarget, 'cvId');
                   // var file=component.get("v.files");
                    // alert(JSON.stringify(event));
                    // var  selectedItem = event.currentTarget; // Get the target object
                     //var index = file.dataset.record; // Get its value i.e. the index
                     //var selectedFile= component.get("v.files")[index];
                     //var file=component.get("v.file");
                    //alert(file);
                    //alert(JSON.stringify(selectedFile));
                   // var fileIds = files[0].documentId;
                    //alert(fileIds);
                    var recordId = component.get("v.recordId");
                    var action = component.get("c.updateFileFirstImage1");
                    var files = component.get("v.files");
                    var toastEvent = $A.get("e.force:showToast");
                    //alert(files);
                    toastEvent.setParams({
            title : 'Success',
            message: 'The selected image is now the featured image for this property on the website. Please refresh this page to view the changes here.',
            duration:' 5000',
            key: 'info_alt',
            type: 'success',
            mode: 'sticky'
           });
        //toastEvent.fire();
                    action.setParams({cvId:f,
                        			  files:files,
                                      propRecId: recordId});
                    action.setCallback(this, function (response){
                               var state =response.getState();
            				if(state === "SUCCESS"){
                				//alert(state);
                				toastEvent.fire();
                				$A.get('e.force:refreshView').fire();
            				}
                        else if(state === "ERROR"){
                            var errors = response.getError();
                            if(errors){
                                if(error[0] && error[0].message){
                                    console.log("Error message: " + error[0].message);
                                }
                            }else{
                                console.log("Unknown error");
                            }
                        }
            
        			});
            $A.enqueueAction(action);    
        
                    
                },
                
                


})