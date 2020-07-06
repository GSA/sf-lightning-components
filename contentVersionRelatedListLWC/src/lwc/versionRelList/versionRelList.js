import { LightningElement, api, track, wire} from 'lwc'
import { getRecord } from 'lightning/uiRecordApi';
import getDocVersions from '@salesforce/apex/documentVersionController.getDocVersions';
const DOCFIELDS = ['ContentDocument.Title'];
export default class VersionRelList extends LightningElement {
    @api recordId;
    @wire(getRecord, {recordId: '$recordId',DOCFIELDS})
    document;

    @track columns = [{
        label: 'Version',
        fieldName: 'VersionNumber',
        tooltip:'Normal text',
        type: 'text',
        sortable: true
    },
    {
        label: 'Title',
        fieldName: 'VersionUrl',
        typeAttributes: {
            label: {
                fieldName: 'Title'
            },
            target: '_blank'
        },
        type: 'url',
        sortable: true
    },
    {
        label: 'Comment',
        fieldName: 'reasonForChange',
        type: 'text',
        sortable: true
    },
    {
        label: 'Uploaded By',
        fieldName: 'CreatedByName',
        type: 'text',
        sortable: true
    },
    {
        label: 'Modified By',
        fieldName: 'LastModifiedByName',
        type: 'text',
        sortable: true
    },
    {
        label: 'Created Date',
        fieldName: 'CreatedDate',
        type: 'date',
        typeAttributes: {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          },
        sortable: true
    },
    {
        label: 'Last Modified Date',
        fieldName: 'LastModifiedDate',
        type: 'date',
        typeAttributes: {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
          },
        sortable: true
    },
    {
        label: 'Minor Edits By',
        fieldName: 'MinorEdits',
        type: 'text',
        sortable: true
    },
];
    @track error;
    @track data; 
    @wire(getDocVersions,{docId:'$recordId'})
    wiredVersions({
        error,data
    }) {
        if(data) {
            this.data = data
           // console.log(data);
           // console.log(JSON.stringify(data, null, '\t'));
        }
        else if (error) {
           // console.log(error);
        }
    }
    
}