export function getCurrentYear() {
    return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holbberton School main dashboard';
}

export function getLatestNotification() {
    return ("<strong>Urgent requirement</strong> - complete by EOD")
}
