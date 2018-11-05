({
    /* doInit performs 3 functions:
     * Updates image names
     * Toggles display of thumbnails if imageName is blank
     * Resizes thumbnails if dynamicWidthImages has been checked
     */
	doInit : function(component) {

        /* Check for characters in filenames that must be converted. Mapping as follows:
         * Input Char  >> Output Char
		 * Space ( )   >>  "_"
		 * Period (.)  >>  ""
		 * Hyphen (-)  >>  ""
		 *
		 * Salesforce does not automatically convert certain characters after upload. For instance,
		 * you upload a file  called "billy bob 11-25-2018 5.25 PM", when you refer to it in the Community
		 * Builder config, you must refer to it as "billy_bob_11252018_525_PM", otherwise it won't render.
		 * Rather than making it hard for users this doInit function updates names for them.
		 */
    	let imgAttributeList = ["thumbImgName1","imgName1","thumbImgName2","imgName2","thumbImgName3","imgName3","thumbImgName4","imgName4"];
        for (let i = 0; i < imgAttributeList.length; i++) {
            let currentName = component.get("v."+imgAttributeList[i]);
            // replace all spaces with _ and periods/hyphens with blank
            let newImageName = currentName.replace(/\s/g, "_").replace(/(\.|\-)/g,"");
            component.set("v."+imgAttributeList[i], newImageName);
        }

        /* Toggle off display of thumbnail if imageName is not entered
         * The output of this function informs the dynamicWidthImages code
         */
        /* See which of the images are not blank
         * if an image is blank, remove it from the array. Doing so in this manner
         * allows someone to remove an image in the middle of the array
         */
        let imgNameList = ["imgName1", "imgName2", "imgName3", "imgName4"];
        for (let i=0; i < imgNameList.length; i++) {
            if (component.get("v."+imgNameList[i]) == "") {
                // if blank, toggle displayImage# variable to false
                let thumbnailIndex = imgNameList[i].substr(-1);
                component.set("v.displayImage"+thumbnailIndex, false);
                imgNameList.splice( i, 1 );
                i--;
            }
        }

        /* resize thumbnails if dynamicWidthImages == true */
        if (component.get("v.dynamicWidthImages")) {
            // remove existing class which informs the size. This array maps to aura:id on outermost div
            let listLength = imgNameList.length;
            let newClass;
            switch(listLength) {
                case 1:
                    newClass = 'slds-size_1-of-1';
                    break;
                case 2:
                    newClass = 'slds-size_1-of-2';
                    break;
                case 3:
                    newClass = 'slds-size_1-of-3';
                    break;
                default:
            }
            for (let i = 0; i < listLength; i++) {
                let cmpTarget = component.find("image"+imgNameList[i].substr(-1));
                $A.util.removeClass(cmpTarget, 'slds-size_1-of-4');
                $A.util.addClass(cmpTarget, newClass);
            }

        }


	},
    hideModal : function(component, event, helper) {
        let id = event.getSource().get("v.name");
        switch(id) {
            case "image1Modal":
                component.set("v.modal1isOpen", false);
                break;
            case "image2Modal":
                component.set("v.modal2isOpen", false);
                break;
            case "image3Modal":
                component.set("v.modal3isOpen", false);
                break;
            case "image4Modal":
                component.set("v.modal4isOpen", false);
                break;
            default:

        }
    },
	showModal : function(component, event, helper) {
        let id = event.currentTarget.id;
        switch(id) {
            case "image1":
                component.set("v.modal1isOpen", true);
                break;
            case "image2":
                component.set("v.modal2isOpen", true);
                break;
            case "image3":
                component.set("v.modal3isOpen", true);
                break;
            case "image4":
                component.set("v.modal4isOpen", true);
                break;
            default:
        }
    }
})
