# US Web Design System Social Media Navigation Menu

Social Media Nav Menu provides extends the forceCommunity:NavigationMenuBase component and displays social media and other web icons. Central to this component is the [fontAwesomeIcon](https://github.com/gsa/sf-lightning-components/tree/master/fontAwesomeIcon) sub-component which handles the rendering of Font Awesome Icons.

To see how this fits together into a larger site footer, see [uswdsFooterBig](https://github.com/gsa/sf-lightning-components/tree/master/uswdsFooterBig).

![US Web Design System social media icons](fontAwesomeIconPreview.png)

## Installation Instructions

See fontAwesomeIcon [dependencies](https://github.com/gsa/sf-lightning-components/tree/master/fontAwesomeIcon#dependencies) to address intial setup.

1. Copy fontAwesomeIcon into `/src` directory along with this component
1. Deploy package via ANT, `ant deployCode`

## Usage Instructions

* Navigate to Community Builder
* Click Settings (cog wheel icon) > Navigation
* Create navigation menus as needed. Note, this component expects a MenuItem Name to match a corresponding icon in Font Awesome.

## Component Reference

Additional component details can be found in the Aura Component reference after deployment. Access by going to `https://{SF Instance Name}/aura`.
