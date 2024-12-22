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
    { title: "강함의 유물 얻기 2", code: "giveitem \"Blueprint'/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_09.PrimalItemArtifact_09'\" 1 0 0" },
    { title: "현재 내 버프 지우기", code: "ClearMyBuffs" },
    { title: "테크 슈트 입기", code: "GiveArmorSet Tek 20" },
    { title: "사막 슈트 입기", code: "GiveArmorSet Desert 20" },
    { title: "방호복 슈트 입기", code: "GiveArmorSet Hazard 20" },
    { title: "키틴 슈트 입기", code: "GiveArmorSet Chitin 20" },
    { title: "가죽 슈트 입기", code: "GiveArmorSet Hide 20" },
    { title: "스쿠버 슈트 입기", code: "GiveArmorSet Ghillie 20" },
    { title: "방탄 슈트 입기", code: "GiveArmorSet Scuba 20" },
    { title: "방탄 슈트 입기", code: "GiveArmorSet Metal 20" },
    { title: "모피 슈트 입기", code: "GiveArmorSet Fur 20" },
    { title: "진압복 슈트 입기", code: "GiveArmorSet Riot 20" },
    { title: "천 슈트 입기", code: "GiveArmorSet Cloth 20" },
    { title: "무기 세트 1", code: "GiveWeaponSet 0 20" },
    { title: "무기 세트 2", code: "GiveWeaponSet 1 20" },
    { title: "무기 세트 3", code: "GiveWeaponSet 2 20" },
    { title: "무기 세트 4", code: "GiveWeaponSet 3 20" },
    { title: "아이템 세트 1", code: "GiveItemSet 0" },
    { title: "아이템 세트 2", code: "GiveItemSet 1" },
    { title: "아이템 세트 3", code: "GiveItemSet 2" },
    { title: "아이템 세트 4", code: "GiveItemSet 3" },
    { title: "음식 세트", code: "GiveItemSet food" },
    { title: "수통", code: "GiveItemSet water" },
    { title: "브루 세트", code: "GiveItemSet brews" },
    { title: "관찰자 모드 활성화", code: "Enablespectator" },
    { title: "관찰자 모드 비활성화", code: "Stopspectating" },
    { title: "맵 중앙으로 텔포", code: "teleport" },
    { title: "아일랜드 레드오벨 텔포", code: "tp red" },
    { title: "아일랜드 그린오벨 텔포", code: "tp green" },
    { title: "아일랜드 블루오벨 텔포", code: "tp blue" },
    { title: "아일랜드 동굴 1", code: "tp CAVE1" },
    { title: "아일랜드 동굴 2", code: "tp CAVE2" },
    { title: "아일랜드 동굴 3", code: "tp CAVE3" },
    { title: "아일랜드 동굴 4", code: "tp CAVE4" },
    { title: "아일랜드 동굴 5", code: "tp CAVE5" },
    { title: "아일랜드 동굴 6", code: "tp CAVE6" },
    { title: "아일랜드 동굴 7", code: "tp CAVE7" },
    { title: "아일랜드 동굴 8", code: "tp CAVE8" },
    { title: "아일랜드 동굴 9", code: "tp CAVE9" },
    { title: "아일랜드 동굴 10", code: "tp CAVE10" },
    { title: "스코치드 레드오벨 텔포", code: "tp red" },
    { title: "스코치드 그린오벨 텔포", code: "tp green" },
    { title: "스코치드 블루오벨 텔포", code: "tp blue" },
    { title: "에버레이션 레드오벨 텔포", code: "tp red" },
    { title: "에버레이션 그린오벨 텔포", code: "tp green" },
    { title: "에버레이션 블루오벨 텔포", code: "tp blue" },
    { title: "범위안 안장없이 테이밍", code: "ForceTameAOE 20" },
    { title: "알 즉시 부화", code: "hatchegg" },
    { title: "공룡 세트 1", code: "GiveDinoSet 0 1" },
    { title: "공룡 세트 2", code: "GiveDinoSet 1 1" },
    { title: "공룡 세트 3", code: "GiveDinoSet 2 1" },
    { title: "공룡 세트 4", code: "GiveDinoSet 3 1" },
    { title: "공룡 날탈 세트", code: "GiveDinoSet flyer 1" },
    { title: "공룡 맥 세트", code: "GiveDinoSet mek 1" },
    { title: "아르젠타비스 소환", code: "GiveDinoSet Argent 1" },
    { title: "공룡 익스팅션 세트", code: "GiveDinoSet Extinction 1" },
    { title: "아일랜드 날씨 멈추기", code: "ce stoptime" },
    { title: "아일랜드 날씨 계속하기", code: "ce starttime" },
    { title: "아일랜드 더위 날씨", code: "ce heatwave" },
    { title: "아일랜드 추위 날씨", code: "ce coldfront" },
    { title: "아일랜드 비 날씨", code: "ce makeitrain" },
    { title: "아일랜드 안개 날씨", code: "ce fogitup" },
    { title: "스코치드 어스 폭염 날씨 시작", code: "ce start_superheat" },
    { title: "스코치드 어스 폭염 날씨 멈춤", code: "ce stop_superheat" },
    { title: "스코치드 어스 모래 폭풍 시작", code: "ce start_sandstorm" },
    { title: "스코치드 어스 모래 폭풍 멈춤", code: "ce stop_sandstorm" },
    { title: "스코치드 어스 전기 폭풍 시작", code: "ce start_electricalstorm" },
    { title: "스코치드 어스 전기 폭풍 멈춤", code: "ce stop_electricalstorm" },
    { title: "스코치드 어스 비 시작", code: "ce start_rain" },
    { title: "스코치드 어스 비 멈춤", code: "ce stop_rain" },
    { title: "에버레이션 지진 시작", code: "ce startquake" },
    { title: "에버레이션 지진 멈춤", code: "ce stopquake" },
    { title: "게임 속도", code: "Slomo 4" },
    { title: "인게임 시간 변경", code: "settimeofday 13:30" },
    { title: "아일랜드 감마 래벨", code: "playercommand Ascend1" },
    { title: "아일랜드 베타 래벨", code: "playercommand Ascend2" },
    { title: "아일랜드 알파 래벨", code: "playercommand Ascend3" },
    { title: "에버레이션 감마 래벨", code: "playercommand AbAscend1" },
    { title: "에버레이션 베타 래벨", code: "playercommand AbAscend2" },
    { title: "에버레이션 알파 래벨", code: "playercommand AbAscend3" },
    { title: "바라보는 방향에 경험치 주기", code: "GiveExpToTarget 10000 0 1" },
    { title: "자신에게 데미지 주기", code: "hurtme 1000" },
    { title: "자신에게 힐 하기", code: "hurtme -1000" },
    { title: "바라보는 타겟 죽이기", code: "kill" },
    { title: "범위 근처 모든 공룡 죽이기", code: "KillAOE dinos 3000" },
    { title: "범위 근처 야생 공룡 죽이기", code: "KillAOE wild 3000" },
    { title: "범위 근처 길들인 공룡 죽이기", code: "KillAOE tamed 3000" },
    { title: "범위 근처 플레이어 죽이기", code: "KillAOE players 3000" },
    { title: "범위 근처 구조물 부수기", code: "KillAOE stuctures 3000" },
    { title: "1인칭에서 무기 숨기기", code: "ToggleGun" },
    { title: "서버에 데미지 텍스트 표시", code: "ToggleDamageNumbers" }
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
