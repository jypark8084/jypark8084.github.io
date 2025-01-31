window.onload = function() {
    const servers = [
        {
            name: "KH BongBong PVE server", players: 0, date: "2025-01-01", hearts: 0, 
            status: "오프라인", link: "/server/KH bongbong server/server.html"
        },
        {
            name: "KOREA 365", players: 0, date: "2025-01-01", hearts: 0, 
            status: "온라인", link: "/server/korea 365/server.html"
        },
        {
            name: "korea newbie event server", players: 0, date: "2025-01-01", hearts: 0, 
            status: "오프라인", link: "/server/KH bongbong server/server.html"
        },
        {
            name: "korea2024", players: 0, date: "2025-01-01", hearts: 0, 
            status: "온라인", link: "/server/korea2024/server.html"
        },
    ];

    const serverListContainer = document.getElementById("serverItems");

    servers.forEach(server => {
        const listItem = document.createElement("li");
        
        listItem.classList.add("server-item");

        listItem.innerHTML = `
            <a href="${server.link}" class="server-link">
                <div class="server-name">${server.name}</div>
                <div class="server-info">
                    <span class="server-players">${server.players}명</span>
                    <span class="server-date">${server.date}</span>
                </div>
                <div class="server-heart">
                    <span>❤️${server.hearts}</span>
                </div>
                <div class="server-status ${server.status === "온라인" ? "online" : "offline"}">${server.status}</div>
            </a>
        `;
        
        serverListContainer.appendChild(listItem);
    });
};
