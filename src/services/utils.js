import Swal from 'sweetalert2';
export const requestDetails = () => {
    const localStorage = window.localStorage;
    const accessToken = JSON.parse(localStorage.getItem('tokens')).access;
    const config = {
        headers: { Authorization: `Bearer ${accessToken}` }
    };
    return config;
}

export const fireNotification = (title='Success!', icon='success', text='Action succcessful', confirmButtonText='close') => {
    return Swal.fire({
        title,
        text,
        icon,
        confirmButtonText,
      })
}


export const notificationHandler = (response, message) => {
    switch (response.status){
        case 200:
            fireNotification('Success', 'success', message);
            break;
        case 201:
            fireNotification('Success', 'success', message);
            break;
        case 400:
            fireNotification('Error', 'error', response.data.detail)
            break;      
        case 401:
            fireNotification('Error', 'error', 'Authentication Error');
            break;
        case 403:
            fireNotification('Error', 'error', 'Authentication Error');
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
