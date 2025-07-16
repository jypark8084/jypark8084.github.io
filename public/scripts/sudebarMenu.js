document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const sidebarMenu = document.getElementById("sidebarMenu");
    const closeBtn = document.getElementById("closeBtn");

    // 사이드 메뉴 토글
    menuBtn?.addEventListener("click", () => {
        sidebarMenu?.classList.toggle("active");
    });

    // 사이드 메뉴 닫기
    closeBtn?.addEventListener("click", () => {
        sidebarMenu?.classList.remove("active");
    });
});
