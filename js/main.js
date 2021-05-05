import posts from '/data/posts.js'

let div = document.querySelector('div')
let search = new URLSearchParams(location.search)
let post = search.get('post')

if (posts[post]) import('https://jspm.dev/micromark')
.then(async micromark => {
	let res = await fetch(`data/posts/${post}.md`)

	if (!res.ok) {
		alert(`${res.url}: ${res.statusText}`)
		return location = '/'
	}

	let body = await res.text()

	document.title = posts[post].title
	div.innerHTML = micromark.default(body)

	let a = document.createElement('a')
	a.href = '/'
	a.textContent = 'return home'

	div.append(a)
})
else for (let i in posts) {
	let post = posts[i]
	let content = document.createElement('div')
	let title = document.createElement('p')
	let a = document.createElement('a')
	let description = document.createElement('p')

	a.href = `?post=${i}`
	a.textContent = post.title || 'a blog post'
	description.textContent = post.description

	title.append(a)
	content.append(title)
	content.append(description)
	div.append(content)
}