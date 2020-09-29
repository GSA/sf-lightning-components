({
	getFirstImage : function(component,event) {
        var action= component.get("c.getFirstImage");
        action.setParams({
            recordId :component.get("v.recordId") 
        });
        action.setCallback(this,function(response){
            var url=response.getReturnValue();
            console.log(url);
            component.set("v.downloadurl",url);
            
        });
        
        $A.enqueueAction(action);
		
	}
    
})