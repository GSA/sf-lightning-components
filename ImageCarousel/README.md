# Standalone component of Rediforce Picture Functionality

User can select a specific image as the primary image and user will have ability to select an image which should be the first image displayed in an image carousel and as the thumbnail . 

# Installation Instructions
1. Deploy package via ANT, `ant deployCode`

# Usage Instructions

- Now upload images and click on featured Image button and refresh the page.

![Config Menu](config2.png)

- Once refreshed, user can see the featured image on Gallery card as first image  and first image will be displayed as Thumbnail.

![Config Menu](config3.png)

## Configure Component
- Open Lightning Record Page editor for the desired object.
- Place component anywhere on the page.
- Save and/or activate

![Config Menu](config1.png)

# Pre-Deployment Step

- Insert Content Version in Anonymous window as shown in below image.

![Config Menu](config4.PNG)

# Background
- Created a custom checkbox field(IsFirstImage) in ContentVersion object which will identify if the file is the first on on the pictureGallery.

- Component Generic_ImageUploader was updated to add the new checkbox field that will determine if the image will be the first one.

- Added functionality on the JS Controller and Helper class to verify if the check box was checked and if yes update the contentVersion record after the file is uploaded.

- On the FileUploadUtility created a  method to update the new field in ContentVersion.

- Javascript on Component Generic_GalleryCard will  sort the Files with the new field that is checked coming on top of the list and hence will be the first image displayed in the Carousel.

- Generic_Thumbnail component will display the first image from Generic_GalleryCard files
