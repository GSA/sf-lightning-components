# Official US Website Banner

This component mimics functionality available in the [US Web Design System](https://designsystem.digital.gov) where a banner is included at the top of each page to denote that the site is an official website of the United States government. All code is self-contained so that it can be deployed to externally-facing Salesforce sites.

![US Web Design System Banner for Salesforce Community](banner-on-community.png)

## Installation Instructions

1. Copy USWebsiteBanner folder to root of your org sandbox folder.
1. Run ANT `ant deployCode -Dsrc=uswdsUSABanner`
1. Update Community Header Markup (found in Builder) to include link to USWDS javascript. `<script src="https://designsystem.digital.gov/assets/js/vendor/uswds.min.js"></script>`

## Usage
Drag the component to the top of your Lightning Community and voila!
