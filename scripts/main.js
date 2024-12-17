document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const sidebarMenu = document.getElementById("sidebarMenu");
    const closeBtn = document.getElementById("closeBtn");
    const sections = document.querySelectorAll(".content-section");
    const scrollPos = window.innerHeight / 1.2; // 스크롤 위치 기준

    // 사이드 메뉴 토글
    menuBtn.addEventListener("click", () => {
        sidebarMenu.classList.toggle("active");
    });

    closeBtn.addEventListener("click", () => {
        sidebarMenu.classList.remove("active");
    });

    // 업데이트 목록 추가
    const updates = [
        { title: "아크 출시일 미루어졌습니다...", link: "/uark/uark6/ark.html" },
        { title: "현재 아크 사이트를 대규모로...", link: "/updates/event-update.html" },
    //{ title: "크리스마스 특집 업데이트 공개", link: "/updates/event-update.html" },
    ];

    const updatesSection = document.querySelector(".updates ul");

    updates.forEach((update) => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${update.link}"><strong>${update.title}</strong></a>`;
        updatesSection.appendChild(li);
    });

    
    // 스크롤 이벤트 처리
    document.addEventListener("scroll", () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < scrollPos) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    });
});
