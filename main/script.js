
        const pveServers = [
            { name: "모바일아크뉴비이벤트서버", 
            opendate: "2024-09-20", 
            players: "20" ,
            kakaoplayer: "53",
            link: "../server/s1/s1.html"},

            { name: "korea2024", 
            opendate: "2024-05-10", 
            players: "12" ,
            kakaoplayer: "20", 
            link: "../server/s2/s2.html" },
        ];
        const pvpServers = [
        ];

        function showServerInfo(type) {
            const serverInfo = document.getElementById('server-info');
            const serverList = document.getElementById('server-list');
            serverList.innerHTML = ''; // 기존 서버 목록 초기화

            if (type === 'PVE') {
                serverInfo.innerHTML = '<h3>PVE 서버 정보</h3><p>현재 운영중인 pve서버 목록들 입니다.</p>';
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
                serverInfo.innerHTML = '<h3>PVP 서버 정보</h3><p>현재 운영중인 pvp서버 목록들 입니다.</p>';
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