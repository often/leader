# leader
intuitive and light blog base for the modern web.

## why?
why not?

nowadays, blogs require various back-end software, databases, configuration, etc. to get up and running.

people that just want to spin up a nice and simple blog for themselves suffer there.

well, not anymore. **leader** is 100% client-sided, yet dynamic.

## features
- very simple to use.
- well written, well documented.
- requires no back-end or compilation.
- configurable out of the box.
- built-in themes, with the ability to create custom themes in a couple of seconds.
- performant.
- no tracking or whatsoever.
- based on markdown.

## how-to
1. clone or [download](https://github.com/often/leader/archive/refs/heads/main.zip) this repository.
2. place the files inside of your public website directory.
3. configure it to your liking, for more, see below.
4. that's it.

## configuration

this requires very little javascript and css knowledge.

### adding a blog post

all you need to work with is `data/posts.js` and the `data/posts` directory.

inside of `data/posts.js` we have got an object of posts on our blog, see it like a database.

while inside of the `data/posts` directory we deal with the actual markdown files.

let's say we wanted to add a blog post with the title and description set to `hello world`:

edit `data/posts.js` to:

```js
export default {
	1: {
		title: 'hello world',
		description: 'hello world'
	}
}
```

after we have done this, we want to create a markdown file inside of the `data/posts` directory. in this case, the file will be called `1.md`.

you probably understand the logic behind of it now, the object key is what your markdown file name should be.

the object key can also be a string, if you do not want it to be a number, but once again, this is just a viral example.

you of course can keep on adding blog posts inside of your "database", here is an example of multiple blog posts:

```js
export default {
	1: {
		title: 'hello world',
		description: 'hello world'
	},
	2: {
		title: 'world hello',
		description: 'world hello'
	},
	3: {
		title: 'foo bar',
		description: 'bar foo'
	},
	// and so on!
}
```

this should work just fine knowing you had created the blog markdown files (`1.md`, `2.md`, `3.md`). if for some reason not, when you try to visit your blog post you should get thrown an error so you can figure out stuff from there.

if you aren't so familiar with markdown, it is very easy to learn. [click here for an in-depth tutorial](https://commonmark.org/help/tutorial/)

### removing a blog post

this process is basically equal to adding a blog post.

you just remove the object entry and the markdown file inside of the `data/posts` directory (optional).

### switching themes

by default, **leader** uses the **exodus (sans-serif)** theme.

it comes packed with four themes: **dragon**, **exodus**, **mint** and **rose**.

see the [screenshots](screenshots) directory to have some sort of preview of each theme.

you may also visit the [website](https://leader.sany.one) which uses the default theme.

all themes are located inside of the `css/themes` directory.

to change the theme, simply edit `css/theme.css`.

when you first open it, should look like this:

```css
@import 'themes/sans-serif/exodus.css';
```

now, if you would like to switch it to the **exodus (monospace)** theme, you should edit it like so:

```css
@import 'themes/monospace/exodus.css';
```

use common sense from here.

by the way, every existant **leader** theme respects the users `prefers-color-scheme`. [read more](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

### creating a custom theme

this is very easy and straightforward, perhaps requires a bit better understanding of how css works like. check out the already existant theme files to get a better understanding of how theming in **leader** works like.

if you are looking for a great color scheme/palette website, check out these two:
- [Flat UI Colors](https://flatuicolors.com/)
- [Coolors](https://coolors.co/)

## hosting

since **leader** does not require a back-end, hosting it will not be tricky at all.

there is dozens of ways to host a static website for entirely free, and it is all up on you.

the most easy and quick possible way would probably be to use github pages. you can connect a custom domain, too.

if you prefer to use a server of your own, the least you would require is a static file server.

## contributing

you can contribute whatever you feel like, this includes: ideas, suggestions, themes, etc.

if I think it is worthy to be added, it of course will be!

## thanks
[Mikhail Sharanda](https://github.com/sharanda) for creating the [Manrope font](https://github.com/sharanda/manrope) - modern geometric sans-serif.

[Nikita Prokopov](https://github.com/tonsky) for creating the [Fira Code font](https://github.com/tonsky/FiraCode) - free monospaced font with programming ligatures.

[micromark](https://github.com/micromark) for creating [the smallest commonmark compliant markdown parser](https://github.com/micromark/micromark).

## note
**leader** is 100% free, but if you want to show support and help it grow, consider spreading around a word or two about it. you may also star this repository if you wish, in fact if you do, you're a great person!

## license
[0BSD](LICENSE)
