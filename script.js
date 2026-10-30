const profileImage = document.getElementById("profile-image");
const profilePlaceholder = document.getElementById("profile-placeholder");
function showProfilePlaceholder() {
    if (profileImage && profilePlaceholder) {
        profileImage.style.display = "none";
        profilePlaceholder.style.display = "flex";
    }
}
if (profileImage) {
    profileImage.addEventListener("error", showProfilePlaceholder);
if (profileImage.complete && profileImage.naturalWidth === 0) {
        showProfilePlaceholder();
    }
}
const liveWebsiteURL = "";
const liveProjectLink = document.getElementById("live-project-link");
if (liveProjectLink) 
    {
        if (liveWebsiteURL.trim() !== "") {
        liveProjectLink.href = liveWebsiteURL;
        liveProjectLink.textContent = "Visit Live Website";
    }
    else {
        liveProjectLink.removeAttribute("href");
        liveProjectLink.style.textDecoration = "none";
        liveProjectLink.style.cursor = "default";
    }
}
