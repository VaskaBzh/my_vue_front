<script>
import anime from "animejs/lib/anime.es.js";

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let change = {
        changeValue: "0",
      };
      anime({
        targets: change,
        changeValue: entry.target.innerText.split(" ").join(""),
        easing: "linear",
        round: 1,
        update: function () {
          entry.target.innerHTML = change.changeValue;
        },
      });
      animationObserver.unobserve(entry.target);
    }
  });
});

export default {
  mounted(el) {
    setTimeout(() => {
      animationObserver.observe(el);
    }, 100);
  },
};
</script>
