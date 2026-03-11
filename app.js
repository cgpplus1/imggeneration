const API = "https://dall-e.ahsanlabs.workers.dev/?prompt="

async function generateImage(){

const prompt = document.getElementById("prompt").value

if(!prompt) return alert("Enter prompt")

document.getElementById("loading").style.display="block"

const url = API + encodeURIComponent(prompt)

const gallery = document.getElementById("gallery")

const card = document.createElement("div")
card.className="image-card"

const img = document.createElement("img")
img.src = url

img.onload = () => {
document.getElementById("loading").style.display="none"
}

card.appendChild(img)

const download = document.createElement("a")
download.href = url
download.download="ai-image.png"
download.innerText="Download"

card.appendChild(download)

gallery.prepend(card)

}

function randomPrompt(){

const prompts = [
"cyberpunk samurai",
"futuristic city",
"dragon flying over castle",
"anime girl with blue hair",
"robot warrior",
"alien planet landscape"
]

document.getElementById("prompt").value =
prompts[Math.floor(Math.random()*prompts.length)]

}