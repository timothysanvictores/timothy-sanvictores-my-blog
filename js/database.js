import { createClient } from "https://esm.sh/@supabase/supabase-js";

// NOTE: do not do this in a production environment

const SUPABASE_URL = "https://obiwlqutehhrytedzjaf.supabase.co";
const SUPABASE_KEY = "sb_publishable_44w_Kia2MZs_kl3Np-99Qg_oC3tp5mR";

// --- 

const superbase = createClient(SUPABASE_URL, SUPABASE_KEY);

const form = document.querySelector("#postForm");
const postsDiv = document.querySelector("#posts");

async function loadPosts() {
	const { data } = await superbase
		.from("posts")
		.select("*")
		.order("created_at",{
			ascending: false
		});
	
	postsDiv.innerHTML = "";

	data.forEach((post) => {
		postsDiv.innerHTML += `
			<article class="">
				<section>
					<h4 class="quicksand-regular remove-margin-top">${post.title}</h4>
					<p class="quicksand-light">
						${post.content}
					</p>
					<button onclick="deletePost(${post.id})">Delete</button>
				</section>
				<h3 class="quicksand-regular">${post.title}</h3>
			</article>
		`;
	});
}

form.addEventListener("submit", async (event) => {
	event.preventDefault();
	
	const title = document.querySelector("#title").value;
	const content = document.querySelector("#content").value;
	
	await superbase
	.from("posts")
	.insert({
		title,
		content
	});
	
	form.reset();
	
	loadPosts();
});

window.deletePost = async function(id) {
	await superbase
		.from("posts")
		.delete()
		.eq("id", id);

	loadPosts();
}

loadPosts();