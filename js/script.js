const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchBtn')

const githubCard = {
    name: document.getElementById('github-username'),
    profileImage: document.getElementById('github-profile'),
    profileLink: document.getElementById('github-profile-link'),
    followers: document.getElementById('github-followers'),
    following: document.getElementById('github-following'),
    gist: document.getElementById('github-gist'),
    bio: document.getElementById('github-bio'),
    portfolio: document.getElementById('github-portfolio')
}

searchBtn.addEventListener('click', () => {
    const searchInputText = searchInput.value
    const xhr = new XMLHttpRequest()
    xhr.addEventListener('readystatechange', (searchInputText) => {
        if (xhr.readyState === 4 && xhr.status === 200) {


            const data = JSON.parse(xhr.responseText)
            console.log(data)

            githubCard.name.innerHTML = data.login
            githubCard.profileImage.src = data.avatar_url
            githubCard.profileLink.href = data.html_url
            githubCard.profileLink.innerText = data.login
            githubCard.gist.href = data.gists_url
            githubCard.bio.innerText = data.bio
            githubCard.portfolio.href = data.blog
            githubCard.portfolio.innerText = data.name
            githubCard.followers.href = "https://github.com/" + data.login + "?tabs=followers"
            githubCard.following.href = data.following_url

        }
    })

    xhr.open('GET', 'https://api.github.com/users/' + searchInputText, true)
    xhr.send()
})