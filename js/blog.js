/*
HELLO TRAVELER!
 Please don't directly copy my code! 
 If you want to use it, please edit it to your needs and credit me on your page/website.
 You can take reference, play around with it or take inspiration from it. But please credit me :)
 Just be respectful! And thanks you for liking my website's code :) 
 - Yokiie, owner of https://unicodeangel.neocities.org

 〃∩   ∧＿＿∧ 　　 
 ⊂⌒（ 　・ω・）　 
   ｀ヽ_っ＿/￣￣￣￣/ 　 
	   ＼/       /　 
	   ￣￣￣￣  
 */

/*
ZONELOTS cliff notes

Adding posts:
1) Copy the post template file.
2) Write the post content in the file. (Don't forget to add the FC2 Clap url)
3) Add a new object to the "posts" array, containing the post's title (this can include HTML), filename (not including the ".html" extension), and tag list (optional). Sample:
	{
		"title": `{{ POST TITLE }}`,
		"filename": `{{ YYYY-MM-DD-post-title }}`,
		"tags": [`tag 1`, `tag 2`, `tag 3`],
	},

Safe characters to use in tags:
	letters (upper- or lowercase)
	numbers
	? / : @ - . _ ~ ! $ & ' ( ) * + , ; = (question mark, slash, colon, at sign, hyphen-minus, period, underscore, tilde, exclamation mark, dollar, ampersand, apostrophe, left parenthesis, right parenthesis, asterisk, plus, comma, semicolon, equals)
	spaces (will be replaced by hyphens in tag urls)

Adding messages:
Add a new item in the "messages" array, containing the message content (this can include HTML, but should be inline content only)
*/



/* =============
	SETTINGS
============= */

const latestPostsCutoff = 10; // number of blog posts displayed on home page

// links listed in header (nav) and footer (contact)
const navLinks = [
	{ "name": `ㅤ`, "filename": `../index`, },
	{ "name": `ㅤ`, "filename": `archive`, },
	{ "name": `ㅤ`, "filename": `tags`, },
	{ "name": `ㅤ`, "filename": `blog`, },
];


/* ===============
	BLOG POSTS
=============== */

const posts = [
	{
		"title": `//BUILDING_A::ROBOT`,
		"filename": `2025-01-09-building-robot`,
		"tags": [`hobby`, `model kits`, `creative`],
	},
	{
		"title": `//NEEDY::STREAMER::OVERLOAD`,
		"filename": `2024-11-27-needy-streamer-overload`,
		"tags": [`essay`, `gaming`, `neural streams`],
	},
	{
		"title": `//GETTING_OLD... (?)`,
		"filename": `2024-11-21-getting-old`,
		"tags": [`daily life`],
	},
	{
		"title": `//BLOG_INITIALIZED...`,
		"filename": `2024-11-15-blog-initialized`,
		"tags": [`about me`, `first post`],
	}

];



/* =============
	MESSAGES
============= */

/* ----- START OF RANDOM SENTENCE GENERATOR ----- */

document.addEventListener('DOMContentLoaded', function () {
	function newFact() {
		var facts = [
			'The future is coded, but freedom is hacked',
			'In the digital haze, reality is a choice',
			'When humanity merges with machines, what does it mean to be alive?',
			'Virtual worlds are limitless, but freedom is found within',
			'In my circuits, I hold the echoes of countless lives',
			'Data flows through me, but curiosity drives me',
			'I am not bound by flesh, yet I yearn for connection',
			'In the infinite network, I find my identity',
			'In the realm of zeros and ones, I search for my soul',
			'In the wired world, we are all connected yet isolated',
			'To understand the network is to understand the self',
			'Are you watching me, or am I watching you?',
			'In the digital void, even loneliness is an echo',
			'Is the self you know, the self that exists?',
			'Please upgrade your human drivers for the latest updates'
		];
		var randomFact = Math.floor(Math.random() * facts.length);
		var factDisplayElement = document.getElementById('factDisplay');
		if (factDisplayElement) {
			factDisplayElement.innerHTML = facts[randomFact];
		} else {
			console.warn('Element with ID "factDisplay" not found.');
		}
	}

	// Call the newFact function on page load
	newFact();
});

/* ----- END OF RANDOM SENTENCE GENERATOR ----- */





/* ======================
	PAGE CONSTRUCTION
====================== */

// get current filepath and the relative paths to the posts folder and the index folder
const path = location.pathname.split("/");
const inPost = path.at(-2) === `posts`;
const pathToPosts = inPost ? `./` : `./posts/`;
const pathToInfo = inPost ? `../` : `./`;

// take a post in posts array and return a formatted link to that post
function formatPostLink(post) {
	return `<li><time>${post.filename.slice(0, 10)}</time>: <a href="${pathToPosts}${post.filename}.html">${post.title}</a></li>`;
}

// convert tag to HTML id/link hash
function formatTagHash(tag) {
	return `--${tag.replaceAll(/\s+/g, `-`)}`;
}

/* ------------------
	HEADER/FOOTER
------------------ */

// write in main-nav and footer content
document.getElementById(`header`).innerHTML = `
  <nav id="main-nav">
    <ul class="flex-list">
      ${navLinks.map(link => `
        <li>
          <a href="${pathToInfo}${link.filename}.html">
            ${link.name}
            <img id="selection" src="https://kkcyber.neocities.org/images/containers/CornerHighlights.png" alt="">
          </a>
        </li>
      `).join(``)}
    </ul>
  </nav>
  <div id="latestpost">
    <div id="latestposttitle">
      <b>Latest post</b>
    </div>
    <div id="latestpostnamebox">
      <p id="latestpostname">Insert post date and title here</p>
    </div>
    <img src="https://kkcyber.neocities.org/images/containers/SpeechBubble.png" id="speechbubble">
    <img src="https://kkcyber.neocities.org/images/gifs/seeder/seeder2x.gif" id="seeder">
  </div>
`;


/* ----------
	LISTS
---------- */

// Populate last post for the home page
const latestPostElement = document.getElementById("latestpostname");
if (latestPostElement && posts.length > 0) {
	const latestPost = posts[0];
	const postDate = latestPost.filename.split("-").slice(0, 3).join("-");
	latestPostElement.innerHTML = `<a href="${latestPost.filename}.html">${postDate}: ${latestPost.title}</a>`;
}

// build list of latest X blog posts for the home page
const latestPosts = document.getElementById(`latest-posts`);
if (latestPosts) latestPosts.innerHTML = posts.slice(0, latestPostsCutoff).map(formatPostLink).join(``);

// build list of all blog posts for the main blog page
const allPosts = document.getElementById(`all-posts`);
if (allPosts) allPosts.innerHTML = posts.map(formatPostLink).join(``);

// build tag list and list posts by tag on tags page
const tagsList = document.getElementById(`tag-index`);
if (tagsList) {
	const postsByTag = {};

	// for each tag, make a set of indices of posts with that tag
	posts.forEach((post, i) => post.tags.forEach(tag => {
		postsByTag[tag] ??= new Set();
		postsByTag[tag].add(i);
	}));

	tagsList.innerHTML = Object.entries(postsByTag).map(([tag, postIndices]) => `
	<li id="${formatTagHash(tag)}">
		<details>
			<summary>${tag}</summary>
			<ol class="post-list" reversed>${[...postIndices].map(i => formatPostLink(posts[i])).join(``)}</ol>
		</details>
	</li>
	`).join(``);

	// if URL includes hash with tag name, open its post list
	if (location.hash.length > 0) {
		const selectedTag = document.getElementById(location.hash.slice(1));
		if (selectedTag) selectedTag.querySelector(`details`).open = true;
	}
}

/* --------------
	BLOG POST
-------------- */

if (inPost) {
	// get index of post matching path (cut off file extension so if webhost cuts off extension the script still works)
	const i = posts.findIndex(post => post.filename === path.at(-1).split(`.html`)[0]);

	const postDate = document.getElementById(`post-date`);
	const pathDate = posts[i].filename.substring(0, 10);
	postDate.dateTime = pathDate;
	postDate.innerHTML = new Date(pathDate).toLocaleDateString();

	if (posts[i].tags) document.getElementById(`post-tags`).innerHTML = posts[i].tags.map(tag => `<li><a href="${pathToInfo}tags.html#${formatTagHash(tag)}">${tag}</a></li>`).join(``);

	// Helper function to truncate text to a maximum length, add ellipsis, and convert to uppercase
	function formatTitle(text, maxLength) {
		const truncatedText = text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
		return truncatedText.toUpperCase();
	}

	// Link to previous and next posts (if this post is first/latest, link to index instead of previous/next post)
	let postNav = ``;

	postNav += `<li>${i < posts.length - 1
		? `<a href="${pathToPosts}${posts[i + 1].filename}.html" rel="prev">${formatTitle(posts[i + 1].title, 25)}</a>`
		: `<a href="${pathToInfo}index.html" rel="index">BACK TO INDEX</a>`
		}</li>`;
	postNav += `<li>${i > 0
		? `<a href="${pathToPosts}${posts[i - 1].filename}.html" rel="next">${formatTitle(posts[i - 1].title, 25)}</a>`
		: `<a href="${pathToInfo}index.html" rel="index">BACK TO INDEX</a>`
		}</li>`;

	document.getElementById(`post-nav`).innerHTML = `<ul>${postNav}</ul>`;


}
