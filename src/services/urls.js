import baseUrl from './baseURL';

const mediumQueryParam = '?medium=email'

function createUrlMappingObject(defaultUrl){
    return { sms: defaultUrl,
        get email(){
            return this.sms + mediumQueryParam;
        }
    
    }
}


export const groupsUrlMappingObject = createUrlMappingObject(`${baseUrl()}/messages/groups/`);
export const messageUrlMappingObject = createUrlMappingObject(`${baseUrl()}/messages/`);
export const templatesURL = `${baseUrl()}/messages/template/`;
