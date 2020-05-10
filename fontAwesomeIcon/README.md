# Font Awesome Icon

[Salesforce Lightning Design System](https://www.lightningdesignsystem.com/icons/) includes a large number of icons but lacks social media icons and some others that are prevalent across the web. This Lightning Component allows developers to leverage icons offered by Font Awesome to fill this need.

![Example of Font Awesome Icons in action, Twitter, Facebook, Facebook Square, RSS, YouTube, Adobe](fontAwesomeIconPreview.png)

## Dependencies

* Register with Font Awesome to create icon kits, [https://fontawesome.com/start](https://fontawesome.com/start).
* Copy javascript snippet from Font Awesome and include in page header of your Salesforce community.

## Installation Instructions

1. Navigate to the directory where this repository is cloned into. Copy `build.properties` and `build.xml` files as appropriate.
1. Deploy package via ANT, `ant deployCode`

## Usage Instructions

Component can be leveraged independently as a stand alone icon on a community page. Or, include the component within another component such as a footer and use it to render icons for various social media site. See uswdsFooter for an example of the latter.

## License

This component is dependent upon Font Awesome to function. See [https://fontawesome.com/license](https://fontawesome.com/license) for more information.
