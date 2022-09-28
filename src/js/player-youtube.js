const loadObserver = new IntersectionObserver(
(entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      const idYoutube = video.dataset.id;

      if (entry.isIntersecting) {
        // creeate freame
        const iframe = document.createElement("iframe");
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute(
          "allow",
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        );
        iframe.setAttribute(
          "src",
          `https://www.youtube.com/embed/${idYoutube}?rel=0&showinfo=0&autoplay=1`
        );

        video.innerHTML = "";
        video.appendChild(iframe);
      }else{
        video.innerHTML = "";
      }
    });
  },
  { threshold: 0 }
);

const videos = document.querySelectorAll('.js-youtube-player')

export function playerYoutubeStart(){
  if(videos) videos.forEach(video => loadObserver.observe(video))
}