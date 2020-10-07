import baseUrl from './baseURL';

const mediumQueryParam = '?medium=email';


function createUrlMappingObject(defaultUrl){
    return { sms: defaultUrl,
        get email(){
            return this.sms + mediumQueryParam;
        }
    
    };
}

function createSingleObjectActionUrlFunction(baseURL) {

    return (id) => {
        const url = baseURL + id + '/';
        return createUrlMappingObject(url);
    };
}

export const groupsUrlMappingObject = createUrlMappingObject(`${baseUrl()}/messages/groups/`);
export const messageUrlMappingObject = createUrlMappingObject(`${baseUrl()}/messages/`);
export const templatesURL = `${baseUrl()}/messages/template/`;
export const singleGroupURL = createSingleObjectActionUrlFunction(`${baseUrl()}/messages/groups/`);
export const groupMembersCsvUrlMappingObject = createUrlMappingObject(`${baseUrl()}/messages/group-members/upload/`);
export const newgroupMemberMappingObject = createUrlMappingObject(`${baseUrl()}/messages/groups/members/`);
export const ratesUrl = `${baseUrl()}/payments/rates/`
export const payMpesaUrl =  `${baseUrl()}/payments/pay/`;
export const publicKeyUrl = `${baseUrl()}/auth/public-key/`;
export const refreshTokenUrl = `${baseUrl()}/auth/refresh/token/`;
