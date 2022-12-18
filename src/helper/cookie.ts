export function createCookie(username: string) {
    document.cookie = `username=${username}`;
}

export function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length ===  2) {
        return parts.pop()?.split(';').shift();
    }
  }