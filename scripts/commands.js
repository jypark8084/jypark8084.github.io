// 명령어 데이터
const commands = [
    { title: "무적", code: "god" },
    { title: "투명화", code: "enemyinvisible true" },
    { title: "투명화 (비활성화)", code: "enemyinvisible false" },
    { title: "경험치", code: "addexperience 10000 0 1" },
    { title: "스탯 무한", code: "infinitestats" },
    { title: "플레이어 앞 공룡 테이밍", code: "dotame" },
    { title: "플레이어 앞 공룡 테이밍 + 안장 없이 탑승 가능", code: "forcetame" },
    { title: "날기", code: "fly" },
    { title: "유령화", code: "ghost" },
    { title: "걷기", code: "walk" },
    { title: "모든 앵그램 해금", code: "giveengrams" },
    { title: "강화 무적", code: "gmbuff" },
    { title: "야생 공룡 리셋", code: "DestroyWildDinos" },
    { title: "모든 공룡 리셋", code: "Destroyallenemies" },
    { title: "아기 공룡 성장 수치 조절", code: "SetBabyAge 1" },
    { title: "공룡 각인 수치 설정", code: "SetImprintQuality 1" },
    { title: "공룡들 움직임 멈춤", code: "playersonly" },
    { title: "총알 무제한", code: "toggleinfiniteammo" },
    { title: "모든 자원 얻기", code: "giveresources" },
    { title: "짐승의 유물 얻기", code: "GFI Artifact_12 1 0 0" },
    { title: "짐승의 유물 얻기 2", code: "giveitem \"Blueprint'/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_12.PrimalItemArtifact_12'\" 1 0 0" },
    { title: "현명한 유물 얻기", code: "GFI Artifact_05 1 0 0" },
    { title: "현명한 유물 얻기 2", code: "giveitem \"Blueprint'/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_05.PrimalItemArtifact_05'\" 1 0 0" },
    { title: "교활함의 유물 얻기", code: "GFI Artifact_11 1 0 0" },
    { title: "교활함의 유물 얻기 2", code: "giveitem \"Blueprint'/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_11.PrimalItemArtifact_11'\" 1 0 0" },
    { title: "탐닉의 유물 얻기", code: "GFI Artifact_07 1 0 0" },
    { title: "탐닉의 유물 얻기 2", code: "giveitem \"Blueprint'/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_07.PrimalItemArtifact_07'\" 1 0 0" },
    { title: "사냥꾼의 유물 얻기", code: "GFI Artifact_01 1 0 0" },
    { title: "사냥꾼의 유물 얻기 2", code: "giveitem \"Blueprint'/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_01.PrimalItemArtifact_01'\" 1 0 0" },
    { title: "면역의 유물 얻기", code: "GFI Artifact_08 1 0 0" },
    { title: "면역의 유물 얻기 2", code: "giveitem \"Blueprint'/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_08.PrimalItemArtifact_08'\" 1 0 0" },
    { title: "거대함의 유물 얻기", code: "GFI Artifact_03 1 0 0" },
    { title: "거대함의 유물 얻기 2", code: "giveitem \"Blueprint'/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_03.PrimalItemArtifact_03'\" 1 0 0" },
    { title: "무리의 유물 얻기", code: "GFI Artifact_02 1 0 0" },
    { title: "무리의 유물 얻기 2", code: "giveitem \"Blueprint'/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_02.PrimalItemArtifact_02'\" 1 0 0" },
    { title: "하늘군주의 유물 얻기", code: "GFI Artifact_06 1 0 0" },
    { title: "하늘군주의 유물 얻기 2", code: "giveitem \"Blueprint'/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_06.PrimalItemArtifact_06'\" 1 0 0" },
    { title: "강함의 유물 얻기", code: "GFI Artifact_09 1 0 0" },
    { title: "강함의 유물 얻기 2", code: "giveitem \"Blueprint'/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_09.PrimalItemArtifact_09'\" 1 0 0" }
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
            showToast(`명령어가 복사되었습니다: ${code}`);
        });
    }

    // 토스트 메시지 표시
    function showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000); // 3초 후에 메시지 숨김
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
