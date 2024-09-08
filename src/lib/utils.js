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
export async function FetchUser(id, token) {
    let user = {};
    try {
        const response = await fetch(`http://localhost:8000/api/person/user-info?user_id=${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }

        user = await response.json();
        console.log(user);
    } catch (err) {
        console.error(err.message); 
    }
    return user;
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
export async function FetchClubId(id, token) {
    console.log(token);
    console.log(id);
    let club;
    try {
        const response = await fetch(`http://localhost:8000/api/social/club-info/${id}`, {
            headers: {'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'}
        });
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
// src/routes/clubs/[club_id]/change.js
export async function changeClub(club_id, description = null, isprivate = null, token) {
    try {
        const response = await fetch('http://localhost:8000/api/social/clubs/change', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                club_id: club_id,
                description: description,
                isprivate: isprivate
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.detail || 'Something went wrong');
        }

        return await response.json();
    } catch (err) {
        console.error(err.message);
        throw err;
    }
}
export async function inviteToClub(club_id, user_id) {
    try {
        const response = await fetch('http://localhost:8000/api/social/clubs/invite_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                club_id: club_id,
                user_id: user_id
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.detail || 'Something went wrong');
        }

        return await response.json();
    } catch (err) {
        console.error(err.message);
        throw err;
    }
}
export async function delInviteToClub(club_id, user_id) {
    try {
        const response = await fetch('http://localhost:8000/api/social/clubs/delete_invation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                club_id: club_id,
                user_id: user_id
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.detail || 'Something went wrong');
        }

        return await response.json();
    } catch (err) {
        console.error(err.message);
        throw err;
    }
}
export async function acceptInvite(club_id) {
    try {
        const response = await fetch('http://localhost:8000/api/social/clubs/accept_invation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                club_id: club_id,
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.detail || 'Something went wrong');
        }

        return await response.json();
    } catch (err) {
        console.error(err.message);
        throw err;
    }
}
export async function declineInvite(club_id) {
    try {
        const response = await fetch('http://localhost:8000/api/social/clubs/decline_invation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                club_id: club_id,
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.detail || 'Something went wrong');
        }

        return await response.json();
    } catch (err) {
        console.error(err.message);
        throw err;
    }
}
