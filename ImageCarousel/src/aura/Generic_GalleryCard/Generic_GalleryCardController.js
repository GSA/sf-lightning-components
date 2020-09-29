({
    doInit : function(component) {
    	
    	var recId = component.get("v.recordId");
    	
        

        var action2 = component.get("c.getFiles");
        action2.setParams({ 
            recordIds : recId
        });
        action2.setCallback(this, function(response) {
             var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var files = response.getReturnValue();
                files.Image.forEach((value, index, self) => {
                  Object.keys(value).forEach(function(key) {
                      var currObj = value[key];
                      currObj.sort(function(a, b) {
                    			console.log('a.IsFirstImage'+a.IsFirstImage);
                    			console.log('b.IsFirstImage'+b.IsFirstImage);
                            	return  b.IsFirstImage - a.IsFirstImage;
                        	});
                      component.set("v.content",currObj);
                      console.log('=======> Content'+ JSON.stringify(currObj));
                  });
                });
            } else {
               
            }

        });
        var action = component.get("c.getAttachments");
        console.log(recId);
        action.setParams({ 
            recordIds : recId
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var attachments = response.getReturnValue();    
                attachments.Image.forEach((value, index, self) => {
                  Object.keys(value).forEach(function(key) {
                      var currObj = value[key];
                      component.set("v.attachments",currObj);
                  });
                });  
            } else {}
        });
        var action3 =component.get("c.getBaseUrl");
        action3.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var baseUrl  = response.getReturnValue();
                component.set("v.baseUrl",baseUrl);
                console.log('***'+baseUrl);
            } else {
               
            }

        });
        
        $A.enqueueAction(action);
        $A.enqueueAction(action2);
        $A.enqueueAction(action3);

    },

	fullScreen : function(component) {
        component.set("v.fullScreen", true);
	},

	closeDialog : function(component) {
        component.set("v.fullScreen", false);
	}

})