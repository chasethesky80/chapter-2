import { useState, useEffect } from 'react'
import "./Profile.css"
import Link from './Link'
import List from './List'

export default function Projects({ userName }){
    const [loading, setLoading] = useState(false);
    const [projects, setProjects] = useState([])

    useEffect(() => {
        async function fetchData() {
            const profile = await fetch(`https://api.github.com/users/${userName}/repos`)
            const result = await profile.json()

            if (result) {
                setProjects(result)
                setLoading(false)
            }
        }
        fetchData().then(() => {})
    }, [userName])

    return (
        <div className='projects-container'>
            <h2>Projects</h2>
            {loading ? (
                <span>Loading...</span>
            ) : (
                <div className='projects-content'>
                   {projects && <List items={projects.map((project) => ({
                     field: project.name,
                     value: <Link url={project.html_url} title={project.html_url}/>
                   }))}/>}
                </div>)
            }
        </div>
    )
}