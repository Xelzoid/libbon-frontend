// @ts-ignore
export async function FetchMe() {
    const token = localStorage.getItem('token');
    let user = {};
    try {
        const res = await fetch(`http://localhost:8000/api/user/me`, {
            headers: {'Authorization': `Bearer ${token}`},
        });
        if (!res.ok) {
            throw new Error('Failed to fetch clubs');
        }
        user = await res.json();
    } catch (err) {
        // @ts-ignore
        console.error(err.message);
    }
    return user
}
export async function FetchClubs() {
    const token = localStorage.getItem('token');
    let clubs = [];
    try {
        const res = await fetch('http://localhost:8000/api/social/my-clubs', {
            headers: {'Authorization': `Bearer ${token}` },
        });
        if (!res.ok) {
            throw new Error('Failed to fetch clubs');
        }
        clubs = await res.json();
    } catch (err) {
        // @ts-ignorea
        console.error(err.message);
        }
    return clubs
}
export async function FetchFriends() {
    const token = localStorage.getItem('token');
    let friends = [];
    try {
        const res = await fetch("http://localhost:8000/api/social/friends", {
            headers: {'Authorization': `Bearer ${token}`}
        });
        if (!res.ok) {
            throw new Error("Failed to fetch friends");
        }
        friends = await res.json();
    } catch (err) {
        // @ts-ignore
        console.error(err.message);
    }
    return friends
}
export async function FetchClubId(id) {
    let club;
    try {
        const response = await fetch(`http://localhost:8000/api/social/club-info?club_id=${id}`);
        if (!response.ok) {
        throw new Error("Failed to fetch data");
        }
        club = await response.json();
    } catch (err) {
        // @ts-ignore
        console.error(err.message)
    }
    return club
};
// export async function JoinClub() {
//     let club;
//     try {
//         const response = await fetch(`http://localhost:8000/api/social/club-info?club_id=${id}`);
//         if (!response.ok) {
//         throw new Error("Failed to fetch data");
//         }
//         club = await response.json();
//     } catch (err) {
//         // @ts-ignore
//         console.error(err.message)
//     }
//     return club
// };
export async function FetchClubInvites(id) {
    let club;
    try {
        const response = await fetch(`http://localhost:8000/api/social/club-info?club_id=${id}`);
        if (!response.ok) {
        throw new Error("Failed to fetch data");
        }
        club = await response.json();
    } catch (err) {
        // @ts-ignore
        console.error(err.message)
    }
    return club
};