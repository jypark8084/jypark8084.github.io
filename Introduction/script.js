// 스크롤 시 섹션이 나타나도록 설정
document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll(".content-section");
    const scrollPos = window.innerHeight / 1.2;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < scrollPos) {
            section.classList.add("visible");
        }
    });
});
