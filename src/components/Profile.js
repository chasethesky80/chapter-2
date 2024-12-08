import { useState, useEffect } from 'react'
import "./Profile.css"
import Link from './Link'
import List from './List'

export default function Profile({ userName }){
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({})
    const items = [
        {
            field: 'html_url',
            value: <Link url={profile.html_url} title={profile.html_url}/>
        },
        {
            field: 'repos_url',
            value: <Link url={profile.repos_url} title={profile.repos_url}/>
        },
        {
            field: 'name',
            value: profile?.name
        },
        {
            field: 'company',
            value: profile?.company
        },
        {
            field: 'location',
            value: profile?.location
        },
        {
            field: 'email',
            value: profile?.email
        },
        {
            field: 'bio',
            value: profile?.bio
        },
    ]

    useEffect(() => {
        async function fetchData() {
            const profile = await fetch(`https://api.github.com/users/${userName}`)
            const result = await profile.json()

            if (result) {
                setProfile(result)
                setLoading(false)
            }
        }
        fetchData().then(() => {})
    }, [userName])

    return (
        <div className='profile-container'>
            <h2>About me</h2>
            {loading ? (
                <span>Loading...</span>
            ) : (
                <div className='profile-content'><img className='profile-avatar' src={profile?.avatar_url} alt={profile?.name}/>
                   <List items={items}/>
                </div>)
            }
        </div>
    )
}