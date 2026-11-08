const axios = require('axios')

async function igstalk(username) {
    try {

        const url = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`

        const res = await axios.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0",
                "X-IG-App-ID": "936619743392459"
            }
        })

        const user = res.data.data.user

        return {
            username: user.username,
            fullname: user.full_name,
            bio: user.biography,
            followers: user.edge_followed_by.count,
            following: user.edge_follow.count,
            post: user.edge_owner_to_timeline_media.count,
            profile: user.profile_pic_url_hd,
            private: user.is_private,
            verified: user.is_verified
        }

    } catch (err) {
        throw "User tidak ditemukan"
    }
}

module.exports = igstalk