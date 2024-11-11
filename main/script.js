document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const mainMenu = document.getElementById("main-menu");

    menuToggle.addEventListener("click", function() {
        if (mainMenu.style.display === "flex") {
            mainMenu.style.display = "none";
        } else {
            mainMenu.style.display = "flex";
        }
    });
});

const pveServers = [
    { name: "korea newbie event server", opendate: "2024-09-20", players: "20", kakaoplayer: "53", link: "../server/korea newbie event server/server.html" },
    { name: "korea2024", opendate: "2024-05-10", players: "12", kakaoplayer: "20", link: "../server/korea2024/server.html" },
    { name: "KH bongbong server", opendate: "2024-03-8", players: "12", kakaoplayer: "42", link: "../server/KH bongbong server/server.html" },
    { name: "KOREA 365 (비공식 / PVE)", opendate: "2023-02-12", players: "12", kakaoplayer: "55", link: "../server/korea 365/server.html" }
];
const pvpServers = [];

function showServerInfo(type) {
    const serverInfo = document.getElementById('server-info');
    const serverList = document.getElementById('server-list');
    serverList.innerHTML = ''; // 기존 서버 목록 초기화

    if (type === 'PVE') {
        pveServers.forEach(server => {
            serverList.innerHTML += `
                <div class="server-item" onclick="location.href='${server.link || '#'}'">
                    <h4>${server.name}</h4>
                    <p>오픈 날짜: ${server.opendate}</p>
                    <p>서버 인원수: ${server.players}</p>
                    <p>카카오톡 방 인원수: ${server.kakaoplayer}</p>
                </div>
            `;
        });
    } else if (type === 'PVP') {
        pvpServers.forEach(server => {
            serverList.innerHTML += `
                <div class="server-item">
                    <h4>${server.name}</h4>
                    <p>오픈 날짜: ${server.opendate}</p>
                    <p>서버 인원수: ${server.players}</p>
                    <p>카카오톡 방 인원수: ${server.kakaoplayer}</p>
                </div>
            `;
        });
    }
}
