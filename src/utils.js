export async function FetchMe() {
    const token = localStorage.getItem('token');
    let user = {};
    try {
        const response = await fetch("http://localhost:8000/api/users/me", {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
        if (!response.ok) {
            throw new Error("Failed to fetch user info");
            
        }
        user = await response.json();
    } catch (err) {
        // @ts-ignore
        console.log(err.message);
    }
    return user 
}
export async function FetchClubs() {
    const token = localStorage.getItem('token');
    let clubs = [];
    try {
        const response = await fetch('http://localhost:8000/api/social/my-clubs', {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch clubs');
        }
        const data = await response.json();
        clubs = data.clubs;
    } catch (err) {
        // @ts-ignore
        console.log(err.message);
        }
    return clubs
}
export async function FetchFriends() {
    const token = localStorage.getItem('token');
    let friends = [];
    try {
        const response = await fetch("http://localhost:8000/api/social/friends", {
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
        if (!response.ok) {
            throw new Error("Failed to fetch friends");
        }
        const data = await response.json();
        friends = data.friends
    } catch (err) {
        // @ts-ignore
        console.log(err.message);
    }
    return friends
}