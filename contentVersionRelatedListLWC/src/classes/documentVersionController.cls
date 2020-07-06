public with sharing class documentVersionController {
/******************************************************************************************
*  Description: Contoller used for documentVersion Lightning Web Component
*
* Modification Log:
* -----------------------------------------------------------------------------------------
* Mod ID      |   Date       | Mod Author       | Brief Mod Description 
* -----------------------------------------------------------------------------------------
* 0001        |  3/1/2019    | Cary Archiere   | Initial code creation.
*                         
* -----------------------------------------------------------------------------------------
*******************************************************************************************/
@AuraEnabled(Cacheable=true)

    // passing in a document Id, return the list of version records  
    public static List <versionWrapper> getDocVersions(Id docId){


          List<versionWrapper> versionList = new List<versionWrapper>();
          List<ContentVersion> versions= [SELECT Id, ContentDocumentId,CreatedBy.Name,CreatedDate,LastModifiedDate,reasonforchange
          ,Owner.Name, LastModifiedBy.Name, Title,VersionNumber 
          FROM ContentVersion where ContentDocumentId= :docId ORDER BY VersionNumber LIMIT 50];
          for (ContentVersion c : versions) {
              versionWrapper ver = new versionWrapper(c);
              system.debug(ver.OwnerName);
              versionList.add(ver);
          }
          return versionList;
    }
   
   // due to an issue with the data table component, a wrapper class is needed.  Data table component will not
   // display field values from a parent record.  
    public class versionWrapper{
        @AuraEnabled public Id Id {get;set;}
        @AuraEnabled public String VersionNumber {get;set;}
        @AuraEnabled public String Title {get;set;}
        @AuraEnabled public String OwnerName {get;set;}
        @AuraEnabled public String CreatedByName {get;set;}
        @AuraEnabled public String LastModifiedByName {get;set;}
        @AuraEnabled public Datetime CreatedDate {get;set;}
        @AuraEnabled public Datetime LastModifiedDate {get;set;}
        @AuraEnabled public String VersionUrl {get;set;}
        @AuraEnabled public String MinorEdits {get;set;}
        @AuraEnabled public String reasonForChange {get;set;}
        
        public versionWrapper(ContentVersion version){  

              this.Id = version.Id;
              this.VersionNumber = version.VersionNumber;
              this.Title = version.Title;
              this.OwnerName = version.Owner.Name;
              this.CreatedByName = version.CreatedBy.Name;
              this.LastModifiedByName = version.LastModifiedBy.Name; 
              this.CreatedDate = version.CreatedDate;
              this.LastModifiedDate = version.LastModifiedDate; 
              this.VersionUrl = URL.getSalesforceBaseUrl().toExternalForm() +'/' + version.Id;
              
                if (version.LastModifiedDate != version.CreatedDate){
                    this.minorEdits= version.LastModifiedBy.Name;
                }
                else this.minorEdits= null;
             this.reasonForChange = version.reasonforchange;
        }
             
        }


    }