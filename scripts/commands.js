// 명령어 데이터
const commands = [
    { title: "명령어 제목 1", code: "이것은 매우 긴 명령어 코드입니다. 이 명령어는 테스트를 위해 작성된 예제입니다." },
    { title: "명령어 제목 2", code: "짧은 코드" },
    { title: "명령어 제목 3", code: "또 다른 매우 긴 명령어 코드의 예제입니다. 이것도 잘릴 것입니다." }
];

// 명령어 리스트 생성
function renderCommands() {
    const commandList = document.getElementById("commandList");
    if (!commandList) {
        console.error("commandList 요소를 찾을 수 없습니다. HTML 파일에 ID가 'commandList'인 요소를 추가하세요.");
        return;
    }
    commandList.innerHTML = ""; // 기존 내용 초기화
    commands.forEach(command => {
        const commandItem = document.createElement("div");
        commandItem.classList.add("command-item");

        // 20자 이상일 경우 줄이기
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
        alert(`전체 명령어가 복사되었습니다: ${code}`);
    });
}

// 명령어 검색 기능
document.getElementById("commandSearch").addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();
    const filteredCommands = commands.filter(command =>
        command.title.toLowerCase().includes(searchValue) ||
        command.code.toLowerCase().includes(searchValue)
    );
    const commandList = document.getElementById("commandList");
    commandList.innerHTML = ""; // 기존 내용 초기화
    filteredCommands.forEach(command => {
        const commandItem = document.createElement("div");
        commandItem.classList.add("command-item");

        // 20자 이상일 경우 줄이기
        const displayCode = command.code.length > 20
            ? `${command.code.substring(0, 20)}...`
            : command.code;

        commandItem.innerHTML = `
            <p><strong>${command.title}:</strong> ${displayCode}</p>
        `;
        commandItem.addEventListener("click", () => copyCommand(command.code));
        commandList.appendChild(commandItem);
    });
});

// 초기 렌더링
document.addEventListener("DOMContentLoaded", () => {
    renderCommands();
});
