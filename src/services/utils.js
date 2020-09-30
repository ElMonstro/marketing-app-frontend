import { notification } from 'antd';
import forge from 'node-forge';

export const requestHeaderDetails = () => {
    const localStorage = window.localStorage;
    const accessToken = JSON.parse(localStorage.getItem('tokens')).access;
    const config = {
        headers: { Authorization: `Bearer ${accessToken}` }
    };
    return config;
}


export const getProfile = () => {
    const localStorage = window.localStorage;
    const profile = JSON.parse(localStorage.getItem('profile'));
    
    return profile;
}

export const fireNotification = (type, message, description) => {
    notification[type]({
      message,
      description,
    });
  };


export const notificationHandler = (response, message) => {
    switch (response.status){
        case 200:
            fireNotification('success', 'Success', message);
            break;
        case 201:
            fireNotification('success', 'Success', message);
            break;
        case 204:
            fireNotification('success', 'Success', message);
            break;
        case 400:
            fireNotification('error', 'Error', message?message:response.data.detail)
            break;      
        case 401:
            fireNotification('error', 'Error', 'Authentication Error');
            break;
        case 403:
        fireNotification('error', 'Error', 'Authentication Error');
            break;
        case 404:
                fireNotification('error', 'Error', message);
                break;
        default:
            

    }
} 

export function truncate( str, n, useWordBoundary ){
    if (str.length <= n) { return str; }
    const subString = str.substr(0, n-1); // the original check
    return (useWordBoundary 
      ? subString.substr(0, subString.lastIndexOf(" ")) 
      : subString) + "...";
  };


  String.format = function() {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {       
        var reg = new RegExp("\\{" + i + "\\}", "gm");             
        s = s.replace(reg, arguments[i + 1]);
    }
    return s;
}


export function encryptData( publicKey, string){
    const pubKey = forge.pki.publicKeyFromPem(publicKey);
    const encrypted = pubKey.encrypt(string, "RSA-OAEP", {
        md: forge.md.sha256.create(),
        mgf1: forge.mgf1.create()
    });
    const base64 = forge.util.encode64(encrypted);
    return base64;

}
