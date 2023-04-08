import express from "express"

const PORT = 5000

const app = express()

const data = {
    "login": "mohdriyaan",
    "id": 94759419,
    "node_id": "U_kgDOBaXp-w",
    "avatar_url": "https://avatars.githubusercontent.com/u/94759419?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mohdriyaan",
    "html_url": "https://github.com/mohdriyaan",
    "followers_url": "https://api.github.com/users/mohdriyaan/followers",
    "following_url": "https://api.github.com/users/mohdriyaan/following{/other_user}",
    "gists_url": "https://api.github.com/users/mohdriyaan/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mohdriyaan/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mohdriyaan/subscriptions",
    "organizations_url": "https://api.github.com/users/mohdriyaan/orgs",
    "repos_url": "https://api.github.com/users/mohdriyaan/repos",
    "events_url": "https://api.github.com/users/mohdriyaan/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mohdriyaan/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Mohammed Riyaan",
    "company": null,
    "blog": "https://mrrayaan123.github.io/my_personal_details/",
    "location": "Hyderabad , Telengana , India",
    "email": null,
    "hireable": null,
    "bio": "Geek Of Full Stack Web Development . Student Of Lords Institute Of Engineering And Technology.",
    "twitter_username": "mr_riyaan135",
    "public_repos": 9,
    "public_gists": 7,
    "followers": 7,
    "following": 10,
    "created_at": "2021-11-20T18:27:50Z",
    "updated_at": "2023-03-22T11:40:39Z"
    }

// app.get("*",(req,res)=>{
//     console.log(req.url)
//     console.log(req.method)
//     res.send("Hello")
// })

// app.get("/user/:id",(req,res)=>{
//     console.log(req.params)
//     console.log(req.headers)
//     console.log(req.remoteSocketAddress)
//     res.send("Mr Express")
// })

app.get("/user/mohdriyaan",(req,res)=>{
    res.json(data)
})

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`)
})
