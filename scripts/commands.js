import dinoCommands from './commands/dinoCommands.js';
import BossCommands from './commands/BossCommands.js';
import itemCommands from './commands/itemCommands.js';
import artifactCommands from './commands/artifactCommands.js';
import generalCommands from './commands/generalCommands.js';
import tpCommands from './commands/tpCommands.js';
import weatherCommands from './commands/weatherCommands.js';

// 명령어 데이터
const commands = [
    ...dinoCommands,
    ...BossCommands,
    ...itemCommands,
    ...artifactCommands,
    ...generalCommands,
    ...tpCommands,
    ...weatherCommands,
];

export default commands;

// 명령어 리스트 생성 및 렌더링
function renderCommands(filterTag = "", searchQuery = "") {
    const commandList = document.getElementById("commandList");
    if (!commandList) {
        console.error("commandList 요소를 찾을 수 없습니다.");
        return;
    }

    // 필터링된 명령어 리스트 생성
    const filteredCommands = commands.filter(command => {
        const matchesTag = filterTag ? command.tag === filterTag : true;
        const matchesSearch = searchQuery
            ? command.title.toLowerCase().includes(searchQuery) || command.code.toLowerCase().includes(searchQuery)
            : true;
        return matchesTag && matchesSearch;
    });

    commandList.innerHTML = ""; // 기존 내용 초기화
    if (filteredCommands.length === 0) {
        commandList.innerHTML = "<p>해당 조건에 맞는 명령어가 없습니다.</p>";
        return;
    }

    filteredCommands.forEach(command => {
        const commandItem = document.createElement("div");
        commandItem.classList.add("command-item");

        const displayCode = command.code.length > 20
            ? `${command.code.substring(0, 20)}...`
            : command.code;

        commandItem.innerHTML = `
            <p><strong>${command.title}:</strong> ${displayCode}</p>
        `;
        commandItem.addEventListener("click", () => copyCommand(command.code));
        commandList.appendChild(commandItem);
    });
}

// 명령어 복사 기능
function copyCommand(code) {
    navigator.clipboard.writeText(code).then(() => {
        showToast(`명령어가 복사되었습니다: ${code}`);
    });
}

// 토스트 메시지 표시
function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) {
        console.error("toast 요소를 찾을 수 없습니다.");
        return;
    }
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// 검색 및 태그 필터링 기능
document.addEventListener("DOMContentLoaded", () => {
    let activeTag = ""; // 현재 활성화된 태그

    // 검색 기능
    const commandSearch = document.getElementById("commandSearch");
    commandSearch.addEventListener("input", () => {
        const searchValue = commandSearch.value.toLowerCase();
        renderCommands(activeTag, searchValue);
    });

    // 태그 버튼 필터링
    const tagButtons = document.querySelectorAll(".tag-btn");
    tagButtons.forEach(button => {
        button.addEventListener("click", () => {
            const tag = button.getAttribute("data-tag");

            // 동일한 태그를 다시 클릭하면 필터 해제
            if (activeTag === tag) {
                activeTag = ""; // 필터 해제
                tagButtons.forEach(btn => btn.classList.remove("active")); // 모든 버튼 비활성화
            } else {
                activeTag = tag; // 선택한 태그 활성화
                tagButtons.forEach(btn => btn.classList.remove("active")); // 모든 버튼 비활성화
                button.classList.add("active"); // 현재 버튼 활성화
            }

            const searchValue = commandSearch.value.toLowerCase();
            renderCommands(activeTag, searchValue);
        });
    });

    // 초기 렌더링
    renderCommands();
});
