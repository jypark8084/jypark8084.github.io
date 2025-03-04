document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const sidebarMenu = document.getElementById("sidebarMenu");
    const closeBtn = document.getElementById("closeBtn");
    const sections = document.querySelectorAll(".content-section");
    const scrollPos = window.innerHeight / 1.2;

    // 사이드 메뉴 토글
    menuBtn.addEventListener("click", () => {
        sidebarMenu.classList.toggle("active");
    });

    closeBtn.addEventListener("click", () => {
        sidebarMenu.classList.remove("active");
    });

    // 업데이트 목록 추가
    const updates = [
        { title: "아크 명령어 전체적으로 수정중...", link: "/uark/uark6/ark.html" },
        { title: "아크 출시일 기간 연장 소식", link: "/uark/uark6/ark.html" },
        { title: "현재 아크 사이트를 대규모로...", link: "/updates/event-update.html" },
    ];

    const updatesSection = document.querySelector(".updates ul");
    if (updatesSection) {
        updates.forEach((update) => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${update.link}"><strong>${update.title}</strong></a>`;
            updatesSection.appendChild(li);
        });
    } else {
        console.error("업데이트 섹션이 존재하지 않습니다. HTML에 .updates ul을 추가하세요.");
    }

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
