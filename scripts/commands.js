// 명령어 데이터
const commands = [
    { title: "모아 키", code: "cheat gfi key 99999999 1 0" },
    { title: "무적", code: "god" },
    { title: "투명화", code: "enemyinvisible true" },
    { title: "투명화 (비활성화)", code: "enemyinvisible false" },
    { title: "경험치", code: "addexperience 10000 0 1" },
    { title: "스탯 무한", code: "infinitestats" },
    { title: "플레이어 앞 공룡 테이밍", code: "dotame" },
    { title: "플레이어 앞 공룡 테이밍 + 안장 없이 탑승 가능", code: "forcetame" },
    { title: "원소 100개", code: "gfi Element 100 0 0" },
    { title: "포드 냉장고", code: "gfi CryoFridge 1 1 0" },
    { title: "크라이포드", code: "gfi EmptyCryopod 100" },   //불가
    { title: "테크 발전기", code: "gfi TekGenerator 1 1 0" },
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
    { title: "짐승의 유물 얻기 2", code: "giveitem \"Blueprint/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_12.PrimalItemArtifact_12\" 1 0 0" }, 
    { title: "현명한 유물 얻기", code: "GFI Artifact_05 1 0 0" }, 
    { title: "현명한 유물 얻기 2", code: "giveitem \"Blueprint/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_05.PrimalItemArtifact_05\" 1 0 0" }, 
    { title: "교활함의 유물 얻기", code: "GFI Artifact_11 1 0 0" },
    { title: "교활함의 유물 얻기 2", code: "giveitem \"Blueprint/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_11.PrimalItemArtifact_11\" 1 0 0" }, 
    { title: "탐닉의 유물 얻기", code: "GFI Artifact_07 1 0 0" },
    { title: "탐닉의 유물 얻기 2", code: "giveitem \"Blueprint/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_07.PrimalItemArtifact_07\" 1 0 0" },
    { title: "사냥꾼의 유물 얻기", code: "GFI Artifact_01 1 0 0" },
    { title: "사냥꾼의 유물 얻기 2", code: "giveitem \"Blueprint/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_01.PrimalItemArtifact_01\" 1 0 0" },
    { title: "면역의 유물 얻기", code: "GFI Artifact_08 1 0 0" },
    { title: "면역의 유물 얻기 2", code: "giveitem \"Blueprint/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_08.PrimalItemArtifact_08\" 1 0 0" },
    { title: "거대함의 유물 얻기", code: "GFI Artifact_03 1 0 0" },
    { title: "거대함의 유물 얻기 2", code: "giveitem \"Blueprint/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_03.PrimalItemArtifact_03\" 1 0 0" },
    { title: "무리의 유물 얻기", code: "GFI Artifact_02 1 0 0" },
    { title: "무리의 유물 얻기 2", code: "giveitem \"Blueprint/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_02.PrimalItemArtifact_02\" 1 0 0" },
    { title: "하늘군주의 유물 얻기", code: "GFI Artifact_06 1 0 0" },
    { title: "하늘군주의 유물 얻기 2", code: "giveitem \"Blueprint/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_06.PrimalItemArtifact_06\" 1 0 0" },
    { title: "강함의 유물 얻기", code: "GFI Artifact_09 1 0 0" },
    { title: "강함의 유물 얻기 2", code: "giveitem \"Blueprint/Game/PrimalEarth/CoreBlueprints/Items/Artifacts/PrimalItemArtifact_09.PrimalItemArtifact_09\" 1 0 0" },
    { title: "현재 내 버프 지우기", code: "ClearMyBuffs" },
    { title: "테크 슈트 입기", code: "GiveArmorSet Tek 20" },
    { title: "사막 슈트 입기", code: "GiveArmorSet Desert 20" },
    { title: "방호복 슈트 입기", code: "GiveArmorSet Hazard 20" },
    { title: "키틴 슈트 입기", code: "GiveArmorSet Chitin 20" },
    { title: "가죽 슈트 입기", code: "GiveArmorSet Hide 20" },
    { title: "길리 슈트 입기", code: "GiveArmorSet Ghillie 20" },
    { title: "수쿠버 슈트 입기", code: "GiveArmorSet Scuba 20" },
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
    { title: "관찰자 모드 활성화(주의)", code: "Enablespectator" },
    { title: "관찰자 모드 비활성화", code: "Stopspectating" },
    { title: "맵 중앙으로 텔포", code: "teleport" },
    { title: "아일랜드 레드오벨 텔포", code: "tp red" },
    { title: "아일랜드 그린오벨 텔포", code: "tp green" },
    { title: "아일랜드 블루오벨 텔포", code: "tp blue" },
    { title: "아일랜드 사냥꾼 동굴 ", code: "tp CAVE1" },
    { title: "아일랜드 무리의 유물 동굴 ", code: "tp CAVE2" },
    { title: "아일랜드 거대함의 유물 동굴 ", code: "tp CAVE3" },
    //{ title: "아일랜드 동굴 4", code: "tp CAVE4" }, //불가
    { title: "아일랜드 현명함의 유물 동굴 ", code: "tp CAVE5" },
    { title: "아일랜드 하늘군주 유물 동굴 ", code: "tp CAVE6" },
    { title: "아일랜드 탐닉의 유물 동굴 ", code: "tp CAVE7" },
    { title: "아일랜드 면역의 유물 동굴 ", code: "tp CAVE8" },
    { title: "아일랜드 강함의 유물 동굴 ", code: "tp CAVE9" },
    { title: "아일랜드 감독관 동굴 ", code: "tp CAVE10" },
    { title: "스코치드 레드오벨 텔포", code: "tp red" },
    { title: "스코치드 그린오벨 텔포", code: "tp green" },
    { title: "스코치드 블루오벨 텔포", code: "tp blue" },
    { title: "에버레이션 레드오벨 텔포", code: "tp red" },
    { title: "에버레이션 그린오벨 텔포", code: "tp green" },
    { title: "에버레이션 블루오벨 텔포", code: "tp blue" },
    { title: "범위안 안장없이 테이밍", code: "ForceTameAOE 2000" },
    { title: "알 즉시 부화", code: "hatchegg" },
    { title: "공룡 세트 1", code: "GiveDinoSet 0 1" },
    { title: "공룡 세트 2", code: "GiveDinoSet 1 1" },
    { title: "공룡 세트 3", code: "GiveDinoSet 2 1" },
    { title: "공룡 세트 4", code: "GiveDinoSet 3 1" },
    { title: "공룡 날탈 세트", code: "GiveDinoSet flyer 1" },
    //{ title: "공룡 맥 세트", code: "GiveDinoSet mek 1" }, //불가
    { title: "아르젠타비스 소환", code: "GiveDinoSet Argent 1" },
    //{ title: "공룡 익스팅션 세트", code: "GiveDinoSet Extinction 1" },//불가
    { title: "아일랜드 날씨 멈추기(똥 많이 쌈;;)", code: "ce stoptime" },
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
    { title: "아일랜드 감독관 감마 래벨", code: "playercommand Ascend1" },
    { title: "아일랜드 감독관 베타 래벨", code: "playercommand Ascend2" },
    { title: "아일랜드 감독관 알파 래벨", code: "playercommand Ascend3" },
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
    { title: "서버에 데미지 텍스트 표시", code: "ToggleDamageNumbers" },






    //아일랜드

    //아키티나 공룡 코드
    { title: "아키티나 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Achatina/Achatina_Character_BP.Achatina_Character_BP\" 0 0 0 150" },
    { title: "아키티나 랜덤 레벨 소환 (Summon)", code: "cheat Summon Achatina_Character_BP_C" },
    { title: "아키티나 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Achatina_Character_BP_C" },
    { title: "아키티나 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Achatina_Character_BP_C\" 150" },
    { title: "아키티나 야생 공룡 소환 (SDF)", code: "cheat SDF Achatina 0 150" },
    { title: "아키티나 길들인 공룡 소환 (SDF)", code: "cheat SDF Achatina 1 150" },
    //알로사우루스
    { title: "알로사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Allosaurus/Allo_Character_BP.Allo_Character_BP\" 0 0 0 150" },
    { title: "알로사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Allo_Character_BP_C" },
    { title: "알로사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Allo_Character_BP_C" },
    { title: "알로사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Allo_Character_BP_C\" 150" },
    { title: "알로사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Allo 0 150" },
    { title: "알로사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Allo 1 150" },
    //알파 카르노
    { title: "알파 카르노 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Carno/MegaCarno_Character_BP.MegaCarno_Character_BP\" 0 0 0 150" },
    { title: "알파 카르노 랜덤 레벨 소환 (Summon)", code: "cheat Summon MegaCarno_Character_BP_C" },
    { title: "알파 카르노 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed MegaCarno_Character_BP_C" },
    { title: "알파 카르노 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"MegaCarno_Character_BP_C\" 150" },
    { title: "알파 카르노 야생 공룡 소환 (SDF)", code: "cheat SDF MegaCarno 0 150" },
    { title: "알파 카르노 길들인X 공룡 소환 (SDF)", code: "cheat SDF MegaCarno 1 150" },
    //알파 리드시크티스
    { title: "알파 리드시크티스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Leedsichthys/Alpha_Leedsichthys_Character_BP.Alpha_Leedsichthys_Character_BP\" 0 0 0 150" },
    { title: "알파 리드시크티스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Alpha_Leedsichthys_Character_BP_C" },
    { title: "알파 리드시크티스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Alpha_Leedsichthys_Character_BP_C" },
    { title: "알파 리드시크티스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Alpha_Leedsichthys_Character_BP_C\" 150" },
    { title: "알파 리드시크티스 야생 공룡 소환 (SDF)", code: "cheat SDF Alpha_Leedsichthys 0 150" },
    { title: "알파 리드시크티스 길들인X 공룡 소환 (SDF)", code: "cheat SDF Alpha_Leedsichthys 1 150" },
    //알파 메갈로돈
    { title: "알파 메갈로돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Megalodon/MEgaMegalodon_Character_BP.MegaMegalodon_Character_BP\" 0 0 0 150" },
    { title: "알파 메갈로돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon MegaMegalodon_Character_BP_C" },
    { title: "알파 메갈로돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed MegaMegalodon_Character_BP_C" },
    { title: "알파 메갈로돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"MegaMegalodon_Character_BP_C\" 150" },
    { title: "알파 메갈로돈 야생 공룡 소환 (SDF)", code: "cheat SDF MegaMegalodon 0 150" },
    { title: "알파 메갈로돈 길들인X 공룡 소환 (SDF)", code: "cheat SDF MegaMegalodon 1 150" },
    //알파 모사사우루스
    { title: "알파 모사사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Mosasaurus/Mosa_Character_BP_Mega.Mosa_Character_BP_Mega\" 0 0 0 150" },
    { title: "알파 모사사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Mosa_Character_BP_Mega_C" },
    { title: "알파 모사사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Mosa_Character_BP_Mega_C" },
    { title: "알파 모사사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Mosa_Character_BP_Mega_C\" 150" },
    { title: "알파 모사사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Mosa_Character_BP_Mega 0 150" },
    { title: "알파 모사사우루스 길들인X 공룡 소환 (SDF)", code: "cheat SDF Mosa_Character_BP_Mega 1 150" },
    //알파 랩터
    { title: "알파 랩터 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Raptor/MegaRaptor_Character_BP.MegaRaptor_Character_BP\" 0 0 0 150" },
    { title: "알파 랩터 랜덤 레벨 소환 (Summon)", code: "cheat Summon MegaRaptor_Character_BP_C" },
    { title: "알파 랩터 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed MegaRaptor_Character_BP_C" },
    { title: "알파 랩터 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"MegaRaptor_Character_BP_C\" 150" },
    { title: "알파 랩터 야생 공룡 소환 (SDF)", code: "cheat SDF MegaRaptor 0 150" },
    { title: "알파 랩터 길들인X 공룡 소환 (SDF)", code: "cheat SDF MegaRaptor 1 150" },
    //알파 렉스
    { title: "알파 렉스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Rex/MegaRex_Character_BP.MegaRex_Character_BP\" 0 0 0 150" },
    { title: "알파 렉스 랜덤 레벨 소환 (Summon)", code: "cheat Summon MegaRex_Character_BP_C" },
    { title: "알파 렉스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed MegaRex_Character_BP_C" },
    { title: "알파 렉스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"MegaRex_Character_BP_C\" 150" },
    { title: "알파 렉스 야생 공룡 소환 (SDF)", code: "cheat SDF MegaRex 0 150" },
    { title: "알파 렉스 길들인X 공룡 소환 (SDF)", code: "cheat SDF MegaRex 1 150" },
    //알파 투소테우티스
    { title: "알파 투소테우티스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Tusoteuthis/Mega_Tusoteuthis_Character_BP.Mega_Tusoteuthis_Character_BP\" 0 0 0 150" },
    { title: "알파 투소테우티스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Mega_Tusoteuthis_Character_BP_C" },
    { title: "알파 투소테우티스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Mega_Tusoteuthis_Character_BP_C" },
    { title: "알파 투소테우티스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Mega_Tusoteuthis_Character_BP_C\" 150" },
    { title: "알파 투소테우티스 야생 공룡 소환 (SDF)", code: "cheat SDF Mega_Tusoteuthis 0 150" },
    { title: "알파 투소테우티스 길들인X 공룡 소환 (SDF)", code: "cheat SDF Mega_Tusoteuthis 1 150" },
    //암모나이트
    { title: "암모나이트 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Ammonite/Ammonite_Character.Ammonite_Character\" 0 0 0 150" },
    { title: "암모나이트 랜덤 레벨 소환 (Summon)", code: "cheat Summon Ammonite_Character_C" },
    { title: "암모나이트 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Ammonite_Character_C" },
    { title: "암모나이트 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Ammonite_Character_C\" 150" },
    { title: "암모나이트 야생 공룡 소환 (SDF)", code: "cheat SDF Ammonite 0 150" },
    { title: "암모나이트 길들인 공룡 소환 (SDF)", code: "cheat SDF Ammonite 1 150" },
    //앵글러피쉬
    { title: "앵글러피쉬 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Anglerfish/Angler_Character_BP.Angler_Character_BP\" 0 0 0 150" },
    { title: "앵글러피쉬 랜덤 레벨 소환 (Summon)", code: "cheat Summon Angler_Character_BP_C" },
    { title: "앵글러피쉬 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Angler_Character_BP_C" },
    { title: "앵글러피쉬 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Angler_Character_BP_C\" 150" },
    { title: "앵글러피쉬 야생 공룡 소환 (SDF)", code: "cheat SDF Angler 0 150" },
    { title: "앵글러피쉬 길들인 공룡 소환 (SDF)", code: "cheat SDF Angler 1 150" },
    //안킬로사우루스
    { title: "안킬로사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Ankylo/Ankylo_Character_BP.Ankylo_Character_BP\" 0 0 0 150" },
    { title: "안킬로사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Ankylo_Character_BP_C" },
    { title: "안킬로사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Ankylo_Character_BP_C" },
    { title: "안킬로사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Ankylo_Character_BP_C\" 150" },
    { title: "안킬로사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Ankylo 0 150" },
    { title: "안킬로사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Ankylo 1 150" },
    //아라네오
    { title: "아라네오 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Spider-Small/SpiderS_Character_BP.SpiderS_Character_BP\" 0 0 0 150" },
    { title: "아라네오 랜덤 레벨 소환 (Summon)", code: "cheat Summon SpiderS_Character_BP_C" },
    { title: "아라네오 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed SpiderS_Character_BP_C" },
    { title: "아라네오 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"SpiderS_Character_BP_C\" 150" },
    { title: "아라네오 야생 공룡 소환 (SDF)", code: "cheat SDF SpiderS 0 150" },
    { title: "아라네오 길들인 공룡 소환 (SDF)", code: "cheat SDF SpiderS 1 150" },
    //시조새
    { title: "시조새 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Archaeopteryx/Archa_Character_BP.Archa_Character_BP\" 0 0 0 150" },
    { title: "시조새 랜덤 레벨 소환 (Summon)", code: "cheat Summon Archa_Character_BP_C" },
    { title: "시조새 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Archa_Character_BP_C" },
    { title: "시조새 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Archa_Character_BP_C\" 150" },
    { title: "시조새 야생 공룡 소환 (SDF)", code: "cheat SDF Archa 0 150" },
    { title: "시조새 길들인 공룡 소환 (SDF)", code: "cheat SDF Archa 1 150" },
    //아르젠타비스
    { title: "아르젠타비스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Argentavis/Argent_Character_BP.Argent_Character_BP\" 0 0 0 150" },
    { title: "아르젠타비스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Argent_Character_BP_C" },
    { title: "아르젠타비스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Argent_Character_BP_C" },
    { title: "아르젠타비스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Argent_Character_BP_C\" 150" },
    { title: "아르젠타비스 야생 공룡 소환 (SDF)", code: "cheat SDF Argent 0 150" },
    { title: "아르젠타비스 길들인 공룡 소환 (SDF)", code: "cheat SDF Argent 1 150" },
    //아트로플레우라
    { title: "아트로플레우라 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Arthropluera/Arthro_Character_BP.Arthro_Character_BP\" 0 0 0 150" },
    { title: "아트로플레우라 랜덤 레벨 소환 (Summon)", code: "cheat Summon Arthro_Character_BP_C" },
    { title: "아트로플레우라 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Arthro_Character_BP_C" },
    { title: "아트로플레우라 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Arthro_Character_BP_C\" 150" },
    { title: "아트로플레우라 야생 공룡 소환 (SDF)", code: "cheat SDF Arthro 0 150" },
    { title: "아트로플레우라 길들인 공룡 소환 (SDF)", code: "cheat SDF Arthro 1 150" },
    //바리오닉스
    { title: "바리오닉스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Baryonyx/Baryonyx_Character_BP.Baryonyx_Character_BP\" 0 0 0 150" },
    { title: "바리오닉스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Baryonyx_Character_BP_C" },
    { title: "바리오닉스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Baryonyx_Character_BP_C" },
    { title: "바리오닉스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Baryonyx_Character_BP_C\" 150" },
    { title: "바리오닉스 야생 공룡 소환 (SDF)", code: "cheat SDF Baryonyx 0 150" },
    { title: "바리오닉스 길들인 공룡 소환 (SDF)", code: "cheat SDF Baryonyx 1 150" },
    //바실로사우루스
    { title: "바실로사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Basilosaurus/Basilosaurus_Character_BP.Basilosaurus_Character_BP\" 0 0 0 150" },
    { title: "바실로사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Basilosaurus_Character_BP_C" },
    { title: "바실로사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Basilosaurus_Character_BP_C" },
    { title: "바실로사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Basilosaurus_Character_BP_C\" 150" },
    { title: "바실로사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Basilosaurus 0 150" },
    { title: "바실로사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Basilosaurus 1 150" },
    //벨제부포
    { title: "벨제부포 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Toad/Toad_Character_BP.Toad_Character_BP\" 0 0 0 150" },
    { title: "벨제부포 랜덤 레벨 소환 (Summon)", code: "cheat Summon Toad_Character_BP_C" },
    { title: "벨제부포 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Toad_Character_BP_C" },
    { title: "벨제부포 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Toad_Character_BP_C\" 150" },
    { title: "벨제부포 야생 공룡 소환 (SDF)", code: "cheat SDF Toad 0 150" },
    { title: "벨제부포 길들인 공룡 소환 (SDF)", code: "cheat SDF Toad 1 150" },
    //브론토사우루스
    { title: "브론토사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Sauropod/Sauropod_Character_BP.Sauropod_Character_BP\" 0 0 0 150" },
    { title: "브론토사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Sauropod_Character_BP_C" },
    { title: "브론토사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Sauropod_Character_BP_C" },
    { title: "브론토사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Sauropod_Character_BP_C\" 150" },
    { title: "브론토사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Sauropod 0 150" },
    { title: "브론토사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Sauropod 1 150" },
    //브루드 마더 라이스릭스
    { title: "브루드 마더 라이스릭스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Spider-Large/SpiderL_Character_BP.SpiderL_Character_BP\" 0 0 0 150" },
    { title: "브루드 마더 라이스릭스 랜덤 레벨 소환 (Summon)", code: "cheat Summon SpiderL_Character_BP_C" },
    { title: "브루드 마더 라이스릭스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed SpiderL_Character_BP_C" },
    { title: "브루드 마더 라이스릭스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"SpiderL_Character_BP_C\" 150" },
    { title: "브루드 마더 라이스릭스 야생 공룡 소환 (SDF)", code: "cheat SDF SpiderL 0 150" },
    { title: "브루드 마더 라이스릭스 길들인 공룡 소환 (SDF)", code: "cheat SDF SpiderL 1 150" },
    //칼리코테리움
    { title: "칼리코테리움 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Chalicotherium/Chalico_Character_BP.Chalico_Character_BP\" 0 0 0 150" },
    { title: "칼리코테리움 랜덤 레벨 소환 (Summon)", code: "cheat Summon Chalico_Character_BP_C" },
    { title: "칼리코테리움 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Chalico_Character_BP_C" },
    { title: "칼리코테리움 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Chalico_Character_BP_C\" 150" },
    { title: "칼리코테리움 야생 공룡 소환 (SDF)", code: "cheat SDF Chalico 0 150" },
    { title: "칼리코테리움 길들인 공룡 소환 (SDF)", code: "cheat SDF Chalico 1 150" },
    //카르보네미스
    { title: "카르보네미스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Turtle/Turtle_Character_BP.Turtle_Character_BP\" 0 0 0 150" },
    { title: "카르보네미스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Turtle_Character_BP_C" },
    { title: "카르보네미스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Turtle_Character_BP_C" },
    { title: "카르보네미스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Turtle_Character_BP_C\" 150" },
    { title: "카르보네미스 야생 공룡 소환 (SDF)", code: "cheat SDF Turtle 0 150" },
    { title: "카르보네미스 길들인 공룡 소환 (SDF)", code: "cheat SDF Turtle 1 150" },
    //카르노타우루스
    { title: "카르노타우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Carno/Carno_Character_BP.Carno_Character_BP\" 0 0 0 150" },
    { title: "카르노타우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Carno_Character_BP_C" },
    { title: "카르노타우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Carno_Character_BP_C" },
    { title: "카르노타우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Carno_Character_BP_C\" 150" },
    { title: "카르노타우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Carno 0 150" },
    { title: "카르노타우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Carno 1 150" },
    //카스토로이데스(비버)
    { title: "카스토로이데스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Beaver/Beaver_Character_BP.Beaver_Character_BP\" 0 0 0 150" },
    { title: "카스토로이데스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Beaver_Character_BP_C" },
    { title: "카스토로이데스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Beaver_Character_BP_C" },
    { title: "카스토로이데스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Beaver_Character_BP_C\" 150" },
    { title: "카스토로이데스 야생 공룡 소환 (SDF)", code: "cheat SDF Beaver 0 150" },
    { title: "카스토로이데스 길들인 공룡 소환 (SDF)", code: "cheat SDF Beaver 1 150" },
    //해파리
    { title: "해파리 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Cnidaria/Cnidaria_Character_BP.Cnidaria_Character_BP\" 0 0 0 150" },
    { title: "해파리 랜덤 레벨 소환 (Summon)", code: "cheat Summon Cnidaria_Character_BP_C" },
    { title: "해파리 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Cnidaria_Character_BP_C" },
    { title: "해파리 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Cnidaria_Character_BP_C\" 150" },
    { title: "해파리 야생 공룡 소환 (SDF)", code: "cheat SDF Cnidaria 0 150" },
    { title: "해파리 길들인 공룡 소환 (SDF)", code: "cheat SDF Cnidaria 1 150" },
    //콤피
    { title: "콤피 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Compy/Compy_Character_BP.Compy_Character_BP\" 0 0 0 150" },
    { title: "콤피 랜덤 레벨 소환 (Summon)", code: "cheat Summon Compy_Character_BP_C" },
    { title: "콤피 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Compy_Character_BP_C" },
    { title: "콤피 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Compy_Character_BP_C\" 150" },
    { title: "콤피 야생 공룡 소환 (SDF)", code: "cheat SDF Compy 0 150" },
    { title: "콤피 길들인 공룡 소환 (SDF)", code: "cheat SDF Compy 1 150" },
    //다에오돈
    { title: "다에오돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Daeodon/Daeodon_Character_BP.Daeodon_Character_BP\" 0 0 0 150" },
    { title: "다에오돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Daeodon_Character_BP_C" },
    { title: "다에오돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Daeodon_Character_BP_C" },
    { title: "다에오돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Daeodon_Character_BP_C\" 150" },
    { title: "다에오돈 야생 공룡 소환 (SDF)", code: "cheat SDF Daeodon 0 150" },
    { title: "다에오돈 길들인 공룡 소환 (SDF)", code: "cheat SDF Daeodon 1 150" },
    //데스웜
    { title: "데스웜 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/DeathWorm/DeathWorm_Character_BP.DeathWorm_Character_BP\" 0 0 0 150" },
    { title: "데스웜 랜덤 레벨 소환 (Summon)", code: "cheat Summon Deathworm_Character_BP_C" },
    { title: "데스웜 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Deathworm_Character_BP_C" },
    { title: "데스웜 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Deathworm_Character_BP_C\" 150" },
    { title: "데스웜 야생 공룡 소환 (SDF)", code: "cheat SDF Deathworm 0 150" },
    { title: "데스웜 길들인 공룡 소환 (SDF)", code: "cheat SDF Deathworm 1 150" },
    //딜로포사우루스
    { title: "딜로포사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Dilo/Dilo_Character_BP.Dilo_Character_BP\" 0 0 0 150" },
    { title: "딜로포사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Dilo_Character_BP_C" },
    { title: "딜로포사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Dilo_Character_BP_C" },
    { title: "딜로포사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Dilo_Character_BP_C\" 150" },
    { title: "딜로포사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Dilo 0 150" },
    { title: "딜로포사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Dilo 1 150" },
    //디메트로돈
    { title: "디메트로돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Dimetrodon/Dimetro_Character_BP.Dimetro_Character_BP\" 0 0 0 150" },
    { title: "디메트로돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Dimetro_Character_BP_C" },
    { title: "디메트로돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Dimetro_Character_BP_C" },
    { title: "디메트로돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Dimetro_Character_BP_C\" 150" },
    { title: "디메트로돈 야생 공룡 소환 (SDF)", code: "cheat SDF Dimetro 0 150" },
    { title: "디메트로돈 길들인 공룡 소환 (SDF)", code: "cheat SDF Dimetro 1 150" },
    //디몰포돈    
    { title: "디몰포돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Dimorphodon/Dimorph_Character_BP.Dimorph_Character_BP\" 0 0 0 150" },
    { title: "디몰포돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Dimorph_Character_BP_C" },
    { title: "디몰포돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Dimorph_Character_BP_C" },
    { title: "디몰포돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Dimorph_Character_BP_C\" 150" },
    { title: "디몰포돈 야생 공룡 소환 (SDF)", code: "cheat SDF Dimorph 0 150" },
    { title: "디몰포돈 길들인 공룡 소환 (SDF)", code: "cheat SDF Dimorph 1 150" },
    //디플로도쿠스
    { title: "디플로도쿠스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Diplodocus/Diplodocus_Character_BP.Diplodocus_Character_BP\" 0 0 0 150" },
    { title: "디플로도쿠스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Diplodocus_Character_BP_C" },
    { title: "디플로도쿠스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Diplodocus_Character_BP_C" },
    { title: "디플로도쿠스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Diplodocus_Character_BP_C\" 150" },
    { title: "디플로도쿠스 야생 공룡 소환 (SDF)", code: "cheat SDF Diplodocus 0 150" },
    { title: "디플로도쿠스 길들인 공룡 소환 (SDF)", code: "cheat SDF Diplodocus 1 150" },

    //다이어 베어
    { title: "다이어 베어 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Direbear/Direbear_Character_BP.Direbear_Character_BP\" 0 0 0 150" },
    { title: "다이어 베어 랜덤 레벨 소환 (Summon)", code: "cheat Summon Direbear_Character_BP_C" },
    { title: "다이어 베어 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Direbear_Character_BP_C" },
    { title: "다이어 베어 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Direbear_Character_BP_C\" 150" },
    { title: "다이어 베어 야생 공룡 소환 (SDF)", code: "cheat SDF Direbear 0 150" },
    { title: "다이어 베어 길들인 공룡 소환 (SDF)", code: "cheat SDF Direbear 1 150" },

    //다이어 울프
    { title: "다이어 울프 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Direwolf/Direwolf_Character_BP.Direwolf_Character_BP\" 0 0 0 150" },
    { title: "다이어 울프 랜덤 레벨 소환 (Summon)", code: "cheat Summon Direwolf_Character_BP_C" },
    { title: "다이어 울프 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Direwolf_Character_BP_C" },
    { title: "다이어 울프 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Direwolf_Character_BP_C\" 150" },
    { title: "다이어 울프 야생 공룡 소환 (SDF)", code: "cheat SDF Direwolf 0 150" },
    { title: "다이어 울프 길들인 공룡 소환 (SDF)", code: "cheat SDF Direwolf 1 150" },

    //도도
    { title: "도도 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Dodo/Dodo_Character_BP.Dodo_Character_BP\" 0 0 0 150" },
    { title: "도도 랜덤 레벨 소환 (Summon)", code: "cheat Summon Dodo_Character_BP_C" },
    { title: "도도 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Dodo_Character_BP_C" },
    { title: "도도 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Dodo_Character_BP_C\" 150" },
    { title: "도도 야생 공룡 소환 (SDF)", code: "cheat SDF Dodo 0 150" },
    { title: "도도 길들인 공룡 소환 (SDF)", code: "cheat SDF Dodo 1 150" },

    //도에디쿠스
    { title: "도에디쿠스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Doedicurus/Doed_Character_BP.Doed_Character_BP\" 0 0 0 150" },
    { title: "도에디쿠스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Doed_Character_BP_C" },
    { title: "도에디쿠스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Doed_Character_BP_C" },
    { title: "도에디쿠스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Doed_Character_BP_C\" 150" },
    { title: "도에디쿠스 야생 공룡 소환 (SDF)", code: "cheat SDF Doed 0 150" },
    { title: "도에디쿠스 길들인 공룡 소환 (SDF)", code: "cheat SDF Doed 1 150" },

    //드래곤
    { title: "드래곤 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Dragon/Dragon_Character_BP.Dragon_Character_BP\" 0 0 0 150" },
    { title: "드래곤 랜덤 레벨 소환 (Summon)", code: "cheat Summon Dragon_Character_BP_C" },
    { title: "드래곤 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Dragon_Character_BP_C" },
    { title: "드래곤 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Dragon_Character_BP_C\" 150" },
    { title: "드래곤 야생 공룡 소환 (SDF)", code: "cheat SDF Dragon 0 150" },
    { title: "드래곤 길들인 공룡 소환 (SDF)", code: "cheat SDF Dragon 1 150" },

    //쇠똥구리
    { title: "쇠똥구리 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/DungBeetle/DungBeetle_Character_BP.DungBeetle_Character_BP\" 0 0 0 150" },
    { title: "쇠똥구리 랜덤 레벨 소환 (Summon)", code: "cheat Summon DungBeetle_Character_BP_C" },
    { title: "쇠똥구리 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed DungBeetle_Character_BP_C" },
    { title: "쇠똥구리 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"DungBeetle_Character_BP_C\" 150" },
    { title: "쇠똥구리 야생 공룡 소환 (SDF)", code: "cheat SDF DungBeetle 0 150" },
    { title: "쇠똥구리 길들인 공룡 소환 (SDF)", code: "cheat SDF DungBeetle 1 150" },

    //둔클레오스테우스
    { title: "둔클레오스테우스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Dunkleosteus/Dunkle_Character_BP.Dunkle_Character_BP\" 0 0 0 150" },
    { title: "둔클레오스테우스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Dunkle_Character_BP_C" },
    { title: "둔클레오스테우스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Dunkle_Character_BP_C" },
    { title: "둔클레오스테우스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Dunkle_Character_BP_C\" 150" },
    { title: "둔클레오스테우스 야생 공룡 소환 (SDF)", code: "cheat SDF Dunkle 0 150" },
    { title: "둔클레오스테우스 길들인 공룡 소환 (SDF)", code: "cheat SDF Dunkle 1 150" },

    //전기 뱀장어
    { title: "전기 뱀장어 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Eel/Eel_Character_BP.Eel_Character_BP\" 0 0 0 150" },
    { title: "전기 뱀장어 랜덤 레벨 소환 (Summon)", code: "cheat Summon Eel_Character_BP_C" },
    { title: "전기 뱀장어 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Eel_Character_BP_C" },
    { title: "전기 뱀장어 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Eel_Character_BP_C\" 150" },
    { title: "전기 뱀장어 야생 공룡 소환 (SDF)", code: "cheat SDF Eel 0 150" },
    { title: "전기 뱀장어 길들인 공룡 소환 (SDF)", code: "cheat SDF Eel 1 150" },

    //에쿠스
    { title: "에쿠스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Equus/Equus_Character_BP.Equus_Character_BP1\" 0 0 0 150" },
    { title: "에쿠스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Equus_Character_BP_C" },
    { title: "에쿠스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Equus_Character_BP_C" },
    { title: "에쿠스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Equus_Character_BP_C\" 150" },
    { title: "에쿠스 야생 공룡 소환 (SDF)", code: "cheat SDF Equus 0 150" },
    { title: "에쿠스 길들인 공룡 소환 (SDF)", code: "cheat SDF Equus 1 150" },

    //유니콘
    { title: "유니콘 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Equus/Equus_Character_BP_Unicorn.Equus_Character_BP_Unicorn\" 0 0 0 150" },
    { title: "유니콘 랜덤 레벨 소환 (Summon)", code: "cheat Summon Equus_Character_BP_Unicorn_C" },
    { title: "유니콘 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Equus_Character_BP_Unicorn_C" },
    { title: "유니콘 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Equus_Character_BP_Unicorn_C\" 150" },
    { title: "유니콘 야생 공룡 소환 (SDF)", code: "cheat SDF Equus_Character_BP_Unicorn 0 150" },
    { title: "유니콘 길들인 공룡 소환 (SDF)", code: "cheat SDF Equus_Character_BP_Unicorn 1 150" },

    //바다전갈
    { title: "바다전갈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Eurypterid/Euryp_Character.Euryp_Character\" 0 0 0 150" },
    { title: "바다전갈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Euryp_Character_C" },
    { title: "바다전갈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Euryp_Character_C" },
    { title: "바다전갈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Euryp_Character_C\" 150" },
    { title: "바다전갈 야생 공룡 소환 (SDF)", code: "cheat SDF Euryp 0 150" },
    { title: "바다전갈 길들인 공룡 소환 (SDF)", code: "cheat SDF Euryp 1 150" },

    //갈리미무스
    { title: "갈리미무스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Gallimimus/Galli_Character_BP.Galli_Character_BP\" 0 0 0 150" },
    { title: "갈리미무스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Galli_Character_BP_C" },
    { title: "갈리미무스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Galli_Character_BP_C" },
    { title: "갈리미무스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Galli_Character_BP_C\" 150" },
    { title: "갈리미무스 야생 공룡 소환 (SDF)", code: "cheat SDF Galli 0 150" },
    { title: "갈리미무스 길들인 공룡 소환 (SDF)", code: "cheat SDF Galli 1 150" },
    //거대벌
    { title: "거대벌 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Bee/Bee_Character_BP.Bee_Character_BP\" 0 0 0 150" },
    { title: "거대벌 랜덤 레벨 소환 (Summon)", code: "cheat Summon Bee_Character_BP_C" },
    { title: "거대벌 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Bee_Character_BP_C" },
    { title: "거대벌 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Bee_Character_BP_C\" 150" },
    { title: "거대벌 야생 공룡 소환 (SDF)", code: "cheat SDF Bee 0 150" },
    { title: "거대벌 길들인 공룡 소환 (SDF)", code: "cheat SDF Bee 1 150" },

    //기가노토사우루스
    { title: "기가노토사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Giganotosaurus/Gigant_Character_BP.Gigant_Character_BP\" 0 0 0 150" },
    { title: "기가노토사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Gigant_Character_BP_C" },
    { title: "기가노토사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Gigant_Character_BP_C" },
    { title: "기가노토사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Gigant_Character_BP_C\" 150" },
    { title: "기가노토사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Gigant 0 150" },
    { title: "기가노토사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Gigant 1 150" },

    //기간토피테쿠스
    { title: "기간토피테쿠스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Bigfoot/Bigfoot_Character_BP.Bigfoot_Character_BP\" 0 0 0 150" },
    { title: "기간토피테쿠스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Bigfoot_Character_BP_C" },
    { title: "기간토피테쿠스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Bigfoot_Character_BP_C" },
    { title: "기간토피테쿠스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Bigfoot_Character_BP_C\" 150" },
    { title: "기간토피테쿠스 야생 공룡 소환 (SDF)", code: "cheat SDF Bigfoot 0 150" },
    { title: "기간토피테쿠스 길들인 공룡 소환 (SDF)", code: "cheat SDF Bigfoot 1 150" },

    //이스페로니스
    { title: "이스페로니스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Hesperornis/Hesperornis_Character_BP.Hesperornis_Character_BP\" 0 0 0 150" },
    { title: "이스페로니스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Hesperornis_Character_BP_C" },
    { title: "이스페로니스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Hesperornis_Character_BP_C" },
    { title: "이스페로니스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Hesperornis_Character_BP_C\" 150" },
    { title: "이스페로니스 야생 공룡 소환 (SDF)", code: "cheat SDF Hesperornis 0 150" },
    { title: "이스페로니스 길들인 공룡 소환 (SDF)", code: "cheat SDF Hesperornis 1 150" },

    //인간(남자)
    { title: "인간(남자) 생성 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/CoreBlueprints/PlayerPawnTest_Male.PlayerPawnTest_Male\" 0 0 0 150" },

    //인간(여자)
    { title: "인간(여자) 생성 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/CoreBlueprints/PlayerPawnTest_Female.PlayerPawnTest_Female\" 0 0 0 150" },

    //하이에노돈
    { title: "하이에노돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Hyaenodon/Hyaenodon_Character_BP.Hyaenodon_Character_BP\" 0 0 0 150" },
    { title: "하이에노돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Hyaenodon_Character_BP_C" },
    { title: "하이에노돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Hyaenodon_Character_BP_C" },
    { title: "하이에노돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Hyaenodon_Character_BP_C\" 150" },
    { title: "하이에노돈 야생 공룡 소환 (SDF)", code: "cheat SDF Hyaenodon 0 150" },
    { title: "하이에노돈 길들인 공룡 소환 (SDF)", code: "cheat SDF Hyaenodon 1 150" },

    //이크티오르니스
    { title: "이크티오르니스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Ichthyornis/Ichthyornis_Character_BP.Ichthyornis_Character_BP\" 0 0 0 150" },
    { title: "이크티오르니스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Ichthyornis_Character_BP_C" },
    { title: "이크티오르니스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Ichthyornis_Character_BP_C" },
    { title: "이크티오르니스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Ichthyornis_Character_BP_C\" 150" },
    { title: "이크티오르니스 야생 공룡 소환 (SDF)", code: "cheat SDF Ichthyornis 0 150" },
    { title: "이크티오르니스 길들인 공룡 소환 (SDF)", code: "cheat SDF Ichthyornis 1 150" },

    //이구아노돈
    { title: "이구아노돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Iguanodon/Iguanodon_Character_BP.Iguanodon_Character_BP\" 0 0 0 150" },
    { title: "이구아노돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Iguanodon_Character_BP_C" },
    { title: "이구아노돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Iguanodon_Character_BP_C" },
    { title: "이구아노돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Iguanodon_Character_BP_C\" 150" },
    { title: "이구아노돈 야생 공룡 소환 (SDF)", code: "cheat SDF Iguanodon 0 150" },
    { title: "이구아노돈 길들인 공룡 소환 (SDF)", code: "cheat SDF Iguanodon 1 150" },

    //카이루쿠
    { title: "카이루쿠 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Kairuku/Kairuku_Character_BP.Kairuku_Character_BP\" 0 0 0 150" },
    { title: "카이루쿠 랜덤 레벨 소환 (Summon)", code: "cheat Summon Kairuku_Character_BP_C" },
    { title: "카이루쿠 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Kairuku_Character_BP_C" },
    { title: "카이루쿠 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Kairuku_Character_BP_C\" 150" },
    { title: "카이루쿠 야생 공룡 소환 (SDF)", code: "cheat SDF Kairuku 0 150" },
    { title: "카이루쿠 길들인 공룡 소환 (SDF)", code: "cheat SDF Kairuku 1 150" },

    //카프로수쿠스
    { title: "카프로수쿠스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Kaprosuchus/Kaprosuchus_Character_BP.Kaprosuchus_Character_BP\" 0 0 0 150" },
    { title: "카프로수쿠스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Kaprosuchus_Character_BP_C" },
    { title: "카프로수쿠스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Kaprosuchus_Character_BP_C" },
    { title: "카프로수쿠스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Kaprosuchus_Character_BP_C\" 150" },
    { title: "카프로수쿠스 야생 공룡 소환 (SDF)", code: "cheat SDF Kaprosuchus 0 150" },
    { title: "카프로수쿠스 길들인 공룡 소환 (SDF)", code: "cheat SDF Kaprosuchus 1 150" },

    //켄트로사우루스
    { title: "켄트로사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Kentrosaurus/Kentro_Character_BP.Kentro_Character_BP\" 0 0 0 150" },
    { title: "켄트로사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Kentro_Character_BP_C" },
    { title: "켄트로사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Kentro_Character_BP_C" },
    { title: "켄트로사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Kentro_Character_BP_C\" 150" },
    { title: "켄트로사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Kentro 0 150" },
    { title: "켄트로사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Kentro 1 150" },

    //거머리
    { title: "거머리 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Leech/Leech_Character.Leech_Character\" 0 0 0 150" },
    { title: "거머리 랜덤 레벨 소환 (Summon)", code: "cheat Summon Leech_Character_C" },
    { title: "거머리 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Leech_Character_C" },
    { title: "거머리 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Leech_Character_C\" 150" },
    { title: "거머리 야생 공룡 소환 (SDF)", code: "cheat SDF Leech 0 150" },
    { title: "거머리 길들인 공룡 소환 (SDF)", code: "cheat SDF Leech 1 150" },
    //질병거머리
    { title: "질병거머리 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Leech/Leech_Character_Diseased.Leech_Character_Diseased\" 0 0 0 150" },
    { title: "질병거머리 랜덤 레벨 소환 (Summon)", code: "cheat Summon Leech_Character_Diseased_C" },
    { title: "질병거머리 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Leech_Character_Diseased_C" },
    { title: "질병거머리 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Leech_Character_Diseased_C\" 150" },
    { title: "질병거머리 야생 공룡 소환 (SDF)", code: "cheat SDF Leech_Character_Diseased 0 150" },
    { title: "질병거머리 길들인 공룡 소환 (SDF)", code: "cheat SDF Leech_Character_Diseased 1 150" },

    //리드시크티스
    { title: "리드시크티스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Leedsichthys/Leedsichthys_Character_BP.Leedsichthys_Character_BP\" 0 0 0 150" },
    { title: "리드시크티스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Leedsichthys_Character_BP_C" },
    { title: "리드시크티스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Leedsichthys_Character_BP_C" },
    { title: "리드시크티스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Leedsichthys_Character_BP_C\" 150" },
    { title: "리드시크티스 야생 공룡 소환 (SDF)", code: "cheat SDF Leedsichthys 0 150" },
    { title: "리드시크티스 길들인 공룡 소환 (SDF)", code: "cheat SDF Leedsichthys 1 150" },

    //리오플레우로돈
    { title: "리오플레우로돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Liopleurodon/Liopleurodon_Character_BP.Liopleurodon_Character_BP\" 0 0 0 150" },
    { title: "리오플레우로돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Liopleurodon_Character_BP_C" },
    { title: "리오플레우로돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Liopleurodon_Character_BP_C" },
    { title: "리오플레우로돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Liopleurodon_Character_BP_C\" 150" },
    { title: "리오플레우로돈 야생 공룡 소환 (SDF)", code: "cheat SDF Liopleurodon 0 150" },
    { title: "리오플레우로돈 길들인 공룡 소환 (SDF)", code: "cheat SDF Liopleurodon 1 150" },

    //리스트로사우루스
    { title: "리스트로사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Lystrosaurus/Lystro_Character_BP.Lystro_Character_BP\" 0 0 0 150" },
    { title: "리스트로사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Lystro_Character_BP_C" },
    { title: "리스트로사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Lystro_Character_BP_C" },
    { title: "리스트로사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Lystro_Character_BP_C\" 150" },
    { title: "리스트로사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Lystro 0 150" },
    { title: "리스트로사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Lystro 1 150" },

    //메머드
    { title: "메머드 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Mammoth/Mammoth_Character_BP.Mammoth_Character_BP\" 0 0 0 150" },
    { title: "메머드 랜덤 레벨 소환 (Summon)", code: "cheat Summon Mammoth_Character_BP_C" },
    { title: "메머드 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Mammoth_Character_BP_C" },
    { title: "메머드 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Mammoth_Character_BP_C\" 150" },
    { title: "메머드 야생 공룡 소환 (SDF)", code: "cheat SDF Mammoth 0 150" },
    { title: "메머드 길들인 공룡 소환 (SDF)", code: "cheat SDF Mammoth 1 150" },

    //만타
    { title: "만타 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Manta/Manta_Character_BP.Manta_Character_BP\" 0 0 0 150" },
    { title: "만타 랜덤 레벨 소환 (Summon)", code: "cheat Summon Manta_Character_BP_C" },
    { title: "만타 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Manta_Character_BP_C" },
    { title: "만타 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Manta_Character_BP_C\" 150" },
    { title: "만타 야생 공룡 소환 (SDF)", code: "cheat SDF Manta 0 150" },
    { title: "만타 길들인 공룡 소환 (SDF)", code: "cheat SDF Manta 1 150" },

    //만티코어
    { title: "만티코어 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/Manticore/Manticore_Character_BP.Manticore_Character_BP\" 0 0 0 150" },
    { title: "만티코어 랜덤 레벨 소환 (Summon)", code: "cheat Summon Manticore_Character_BP_C" },
    { title: "만티코어 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Manticore_Character_BP_C" },
    { title: "만티코어 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Manticore_Character_BP_C\" 150" },
    { title: "만티코어 야생 공룡 소환 (SDF)", code: "cheat SDF Manticore 0 150" },
    { title: "만티코어 길들인 공룡 소환 (SDF)", code: "cheat SDF Manticore 1 150" },

    //메갈라니아
    { title: "메갈라니아 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Megalania/Megalania_Character_BP.Megalania_Character_BP\" 0 0 0 150" },
    { title: "메갈라니아 랜덤 레벨 소환 (Summon)", code: "cheat Summon Megalania_Character_BP_C" },
    { title: "메갈라니아 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Megalania_Character_BP_C" },
    { title: "메갈라니아 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Megalania_Character_BP_C\" 150" },
    { title: "메갈라니아 야생 공룡 소환 (SDF)", code: "cheat SDF Megalania 0 150" },
    { title: "메갈라니아 길들인 공룡 소환 (SDF)", code: "cheat SDF Megalania 1 150" },

    //메갈로케로스
    { title: "메갈로케로스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Stag/Stag_Character_BP.Stag_Character_BP\" 0 0 0 150" },
    { title: "메갈로케로스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Stag_Character_BP_C" },
    { title: "메갈로케로스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Stag_Character_BP_C" },
    { title: "메갈로케로스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Stag_Character_BP_C\" 150" },
    { title: "메갈로케로스 야생 공룡 소환 (SDF)", code: "cheat SDF Stag 0 150" },
    { title: "메갈로케로스 길들인 공룡 소환 (SDF)", code: "cheat SDF Stag 1 150" },

    //메갈로돈
    { title: "메갈로돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Megalodon/Megalodon_Character_BP.Megalodon_Character_BP\" 0 0 0 150" },
    { title: "메갈로돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Megalodon_Character_BP_C" },
    { title: "메갈로돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Megalodon_Character_BP_C" },
    { title: "메갈로돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Megalodon_Character_BP_C\" 150" },
    { title: "메갈로돈 야생 공룡 소환 (SDF)", code: "cheat SDF Megalodon 0 150" },
    { title: "메갈로돈 길들인 공룡 소환 (SDF)", code: "cheat SDF Megalodon 1 150" },

    //메갈로사우루스
    { title: "메갈로사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Megalosaurus/Megalosaurus_Character_BP.Megalosaurus_Character_BP\" 0 0 0 150" },
    { title: "메갈로사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Megalosaurus_Character_BP_C" },
    { title: "메갈로사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Megalosaurus_Character_BP_C" },
    { title: "메갈로사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Megalosaurus_Character_BP_C\" 150" },
    { title: "메갈로사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Megalosaurus 0 150" },
    { title: "메갈로사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Megalosaurus 1 150" },

    //메가네우라
    { title: "메가네우라 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Dragonfly/Dragonfly_Character_BP.Dragonfly_Character_BP\" 0 0 0 150" },
    { title: "메가네우라 랜덤 레벨 소환 (Summon)", code: "cheat Summon Dragonfly_Character_BP_C" },
    { title: "메가네우라 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Dragonfly_Character_BP_C" },
    { title: "메가네우라 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Dragonfly_Character_BP_C\" 150" },
    { title: "메가네우라 야생 공룡 소환 (SDF)", code: "cheat SDF Dragonfly 0 150" },
    { title: "메가네우라 길들인 공룡 소환 (SDF)", code: "cheat SDF Dragonfly 1 150" },

    //메가피테쿠스
    { title: "메가피테쿠스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Gorilla/Gorilla_Character_BP.Gorilla_Character_BP\" 0 0 0 150" },
    { title: "메가피테쿠스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Gorilla_Character_BP_C" },
    { title: "메가피테쿠스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Gorilla_Character_BP_C" },
    { title: "메가피테쿠스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Gorilla_Character_BP_C\" 150" },
    { title: "메가피테쿠스 야생 공룡 소환 (SDF)", code: "cheat SDF Gorilla 0 150" },
    { title: "메가피테쿠스 길들인 공룡 소환 (SDF)", code: "cheat SDF Gorilla 1 150" },
    //메가테리움
    { title: "메가테리움 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Megatherium/Megatherium_Character_BP.Megatherium_Character_BP\" 0 0 0 150" },
    { title: "메가테리움 랜덤 레벨 소환 (Summon)", code: "cheat Summon Megatherium_Character_BP_C" },
    { title: "메가테리움 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Megatherium_Character_BP_C" },
    { title: "메가테리움 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Megatherium_Character_BP_C\" 150" },
    { title: "메가테리움 야생 공룡 소환 (SDF)", code: "cheat SDF Megatherium 0 150" },
    { title: "메가테리움 길들인 공룡 소환 (SDF)", code: "cheat SDF Megatherium 1 150" },

    //메소피테쿠스
    { title: "메소피테쿠스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Monkey/Monkey_Character_BP.Monkey_Character_BP\" 0 0 0 150" },
    { title: "메소피테쿠스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Monkey_Character_BP_C" },
    { title: "메소피테쿠스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Monkey_Character_BP_C" },
    { title: "메소피테쿠스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Monkey_Character_BP_C\" 150" },
    { title: "메소피테쿠스 야생 공룡 소환 (SDF)", code: "cheat SDF Monkey 0 150" },
    { title: "메소피테쿠스 길들인 공룡 소환 (SDF)", code: "cheat SDF Monkey 1 150" },

    //미크로랍토르
    { title: "미크로랍토르 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Microraptor/Microraptor_Character_BP.Microraptor_Character_BP\" 0 0 0 150" },
    { title: "미크로랍토르 랜덤 레벨 소환 (Summon)", code: "cheat Summon Microraptor_Character_BP_C" },
    { title: "미크로랍토르 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Microraptor_Character_BP_C" },
    { title: "미크로랍토르 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Microraptor_Character_BP_C\" 150" },
    { title: "미크로랍토르 야생 공룡 소환 (SDF)", code: "cheat SDF Microraptor 0 150" },
    { title: "미크로랍토르 길들인 공룡 소환 (SDF)", code: "cheat SDF Microraptor 1 150" },

    //모사사우루스
    { title: "모사사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Mosasaurus/Mosa_Character_BP.Mosa_Character_BP\" 0 0 0 150" },
    { title: "모사사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Mosa_Character_BP_C" },
    { title: "모사사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Mosa_Character_BP_C" },
    { title: "모사사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Mosa_Character_BP_C\" 150" },
    { title: "모사사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Mosa 0 150" },
    { title: "모사사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Mosa 1 150" },

    //모스콥스
    { title: "모스콥스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Moschops/Moschops_Character_BP.Moschops_Character_BP\" 0 0 0 150" },
    { title: "모스콥스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Moschops_Character_BP_C" },
    { title: "모스콥스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Moschops_Character_BP_C" },
    { title: "모스콥스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Moschops_Character_BP_C\" 150" },
    { title: "모스콥스 야생 공룡 소환 (SDF)", code: "cheat SDF Moschops 0 150" },
    { title: "모스콥스 길들인 공룡 소환 (SDF)", code: "cheat SDF Moschops 1 150" },

    //오니크
    { title: "오니크 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Bat/Bat_Character_BP.Bat_Character_BP\" 0 0 0 150" },
    { title: "오니크 랜덤 레벨 소환 (Summon)", code: "cheat Summon Bat_Character_BP_C" },
    { title: "오니크 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Bat_Character_BP_C" },
    { title: "오니크 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Bat_Character_BP_C\" 150" },
    { title: "오니크 야생 공룡 소환 (SDF)", code: "cheat SDF Bat 0 150" },
    { title: "오니크 길들인 공룡 소환 (SDF)", code: "cheat SDF Bat 1 150" },

    //수달
    { title: "수달 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Otter/Otter_Character_BP.Otter_Character_BP\" 0 0 0 150" },
    { title: "수달 랜덤 레벨 소환 (Summon)", code: "cheat Summon Otter_Character_BP_C" },
    { title: "수달 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Otter_Character_BP_C" },
    { title: "수달 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Otter_Character_BP_C\" 150" },
    { title: "수달 야생 공룡 소환 (SDF)", code: "cheat SDF Otter 0 150" },
    { title: "수달 길들인 공룡 소환 (SDF)", code: "cheat SDF Otter 1 150" },

    //오비랍토르
    { title: "오비랍토르 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Oviraptor/Oviraptor_Character_BP.Oviraptor_Character_BP\" 0 0 0 150" },
    { title: "오비랍토르 랜덤 레벨 소환 (Summon)", code: "cheat Summon Oviraptor_Character_BP_C" },
    { title: "오비랍토르 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Oviraptor_Character_BP_C" },
    { title: "오비랍토르 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Oviraptor_Character_BP_C\" 150" },
    { title: "오비랍토르 야생 공룡 소환 (SDF)", code: "cheat SDF Oviraptor 0 150" },
    { title: "오비랍토르 길들인 공룡 소환 (SDF)", code: "cheat SDF Oviraptor 1 150" },

    //오비스
    { title: "오비스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Sheep/Sheep_Character_BP.Sheep_Character_BP\" 0 0 0 150" },
    { title: "오비스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Sheep_Character_BP_C" },
    { title: "오비스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Sheep_Character_BP_C" },
    { title: "오비스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Sheep_Character_BP_C\" 150" },
    { title: "오비스 야생 공룡 소환 (SDF)", code: "cheat SDF Sheep 0 150" },
    { title: "오비스 길들인 공룡 소환 (SDF)", code: "cheat SDF Sheep 1 150" },

    //파키
    { title: "파키 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Pachy/Pachy_Character_BP.Pachy_Character_BP\" 0 0 0 150" },
    { title: "파키 랜덤 레벨 소환 (Summon)", code: "cheat Summon Pachy_Character_BP_C" },
    { title: "파키 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Pachy_Character_BP_C" },
    { title: "파키 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Pachy_Character_BP_C\" 150" },
    { title: "파키 야생 공룡 소환 (SDF)", code: "cheat SDF Pachy 0 150" },
    { title: "파키 길들인 공룡 소환 (SDF)", code: "cheat SDF Pachy 1 150" },

    //파키리노사우루스
    { title: "파키리노사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Pachyrhinosaurus/Pachyrhino_Character_BP.Pachyrhino_Character_BP\" 0 0 0 150" },
    { title: "파키리노사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Pachyrhino_Character_BP_C" },
    { title: "파키리노사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Pachyrhino_Character_BP_C" },
    { title: "파키리노사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Pachyrhino_Character_BP_C\" 150" },
    { title: "파키리노사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Pachyrhino 0 150" },
    { title: "파키리노사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Pachyrhino 1 150" },

    //파라케라테리움
    { title: "파라케라테리움 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Paraceratherium/Paracer_Character_BP.Paracer_Character_BP\" 0 0 0 150" },
    { title: "파라케라테리움 랜덤 레벨 소환 (Summon)", code: "cheat Summon Paracer_Character_BP_C" },
    { title: "파라케라테리움 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Paracer_Character_BP_C" },
    { title: "파라케라테리움 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Paracer_Character_BP_C\" 150" },
    { title: "파라케라테리움 야생 공룡 소환 (SDF)", code: "cheat SDF Paracer 0 150" },
    { title: "파라케라테리움 길들인 공룡 소환 (SDF)", code: "cheat SDF Paracer 1 150" },

    //파라사우롤로푸스
    { title: "파라사우롤로푸스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Para/Para_Character_BP.Para_Character_BP\" 0 0 0 150" },
    { title: "파라사우롤로푸스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Para_Character_BP_C" },
    { title: "파라사우롤로푸스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Para_Character_BP_C" },
    { title: "파라사우롤로푸스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Para_Character_BP_C\" 150" },
    { title: "파라사우롤로푸스 야생 공룡 소환 (SDF)", code: "cheat SDF Para 0 150" },
    { title: "파라사우롤로푸스 길들인 공룡 소환 (SDF)", code: "cheat SDF Para 1 150" },

    //페고매스탁스
    { title: "페고매스탁스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Pegomastax/Pegomastax_Character_BP.Pegomastax_Character_BP\" 0 0 0 150" },
    { title: "페고매스탁스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Pegomastax_Character_BP_C" },
    { title: "페고매스탁스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Pegomastax_Character_BP_C" },
    { title: "페고매스탁스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Pegomastax_Character_BP_C\" 150" },
    { title: "페고매스탁스 야생 공룡 소환 (SDF)", code: "cheat SDF Pegomastax 0 150" },
    { title: "페고매스탁스 길들인 공룡 소환 (SDF)", code: "cheat SDF Pegomastax 1 150" },
    //펠라고르니스
    { title: "펠라고르니스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Pelagornis/Pela_Character_BP.Pela_Character_BP\" 0 0 0 150" },
    { title: "펠라고르니스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Pela_Character_BP_C" },
    { title: "펠라고르니스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Pela_Character_BP_C" },
    { title: "펠라고르니스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Pela_Character_BP_C\" 150" },
    { title: "펠라고르니스 야생 공룡 소환 (SDF)", code: "cheat SDF Pela 0 150" },
    { title: "펠라고르니스 길들인 공룡 소환 (SDF)", code: "cheat SDF Pela 1 150" },

    //피오미아
    { title: "피오미아 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Phiomia/Phiomia_Character_BP.Phiomia_Character_BP\" 0 0 0 150" },
    { title: "피오미아 랜덤 레벨 소환 (Summon)", code: "cheat Summon Phiomia_Character_BP_C" },
    { title: "피오미아 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Phiomia_Character_BP_C" },
    { title: "피오미아 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Phiomia_Character_BP_C\" 150" },
    { title: "피오미아 야생 공룡 소환 (SDF)", code: "cheat SDF Phiomia 0 150" },
    { title: "피오미아 길들인 공룡 소환 (SDF)", code: "cheat SDF Phiomia 1 150" },

    //피닉스
    { title: "피닉스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/Phoenix/Phoenix_Character_BP.Phoenix_Character_BP\" 0 0 0 150" },
    { title: "피닉스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Phoenix_Character_BP_C" },
    { title: "피닉스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Phoenix_Character_BP_C" },
    { title: "피닉스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Phoenix_Character_BP_C\" 150" },
    { title: "피닉스 야생 공룡 소환 (SDF)", code: "cheat SDF Phoenix 0 150" },
    { title: "피닉스 길들인 공룡 소환 (SDF)", code: "cheat SDF Phoenix 1 150" },

    //피라냐
    { title: "피라냐 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Piranha/Piranha_Character_BP.Piranha_Character_BP\" 0 0 0 150" },
    { title: "피라냐 랜덤 레벨 소환 (Summon)", code: "cheat Summon Piranha_Character_BP_C" },
    { title: "피라냐 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Piranha_Character_BP_C" },
    { title: "피라냐 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Piranha_Character_BP_C\" 150" },
    { title: "피라냐 야생 공룡 소환 (SDF)", code: "cheat SDF Piranha 0 150" },
    { title: "피라냐 길들인 공룡 소환 (SDF)", code: "cheat SDF Piranha 1 150" },

    //플레시오사우루스
    { title: "플레시오사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Plesiosaur/Plesiosaur_Character_BP.Plesiosaur_Character_BP\" 0 0 0 150" },
    { title: "플레시오사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Plesiosaur_Character_BP_C" },
    { title: "플레시오사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Plesiosaur_Character_BP_C" },
    { title: "플레시오사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Plesiosaur_Character_BP_C\" 150" },
    { title: "플레시오사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Plesiosaur 0 150" },
    { title: "플레시오사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Plesiosaur 1 150" },

    //프로콥토돈
    { title: "프로콥토돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Procoptodon/Procoptodon_Character_BP.Procoptodon_Character_BP\" 0 0 0 150" },
    { title: "프로콥토돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Procoptodon_Character_BP_C" },
    { title: "프로콥토돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Procoptodon_Character_BP_C" },
    { title: "프로콥토돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Procoptodon_Character_BP_C\" 150" },
    { title: "프로콥토돈 야생 공룡 소환 (SDF)", code: "cheat SDF Procoptodon 0 150" },
    { title: "프로콥토돈 길들인 공룡 소환 (SDF)", code: "cheat SDF Procoptodon 1 150" },

    //프테라노돈
    { title: "프테라노돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Ptero/Ptero_Character_BP.Ptero_Character_BP\" 0 0 0 150" },
    { title: "프테라노돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Ptero_Character_BP_C" },
    { title: "프테라노돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Ptero_Character_BP_C" },
    { title: "프테라노돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Ptero_Character_BP_C\" 150" },
    { title: "프테라노돈 야생 공룡 소환 (SDF)", code: "cheat SDF Ptero 0 150" },
    { title: "프테라노돈 길들인 공룡 소환 (SDF)", code: "cheat SDF Ptero 1 150" },

    //펄모노스콜피어스
    { title: "펄모노스콜피어스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Scorpion/Scorpion_Character_BP.Scorpion_Character_BP\" 0 0 0 150" },
    { title: "펄모노스콜피어스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Scorpion_Character_BP_C" },
    { title: "펄모노스콜피어스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Scorpion_Character_BP_C" },
    { title: "펄모노스콜피어스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Scorpion_Character_BP_C\" 150" },
    { title: "펄모노스콜피어스 야생 공룡 소환 (SDF)", code: "cheat SDF Scorpion 0 150" },
    { title: "펄모노스콜피어스 길들인 공룡 소환 (SDF)", code: "cheat SDF Scorpion 1 150" },

    //펄로비아
    { title: "펄로비아 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Purlovia/Purlovia_Character_BP.Purlovia_Character_BP\" 0 0 0 150" },
    { title: "펄로비아 랜덤 레벨 소환 (Summon)", code: "cheat Summon Purlovia_Character_BP_C" },
    { title: "펄로비아 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Purlovia_Character_BP_C" },
    { title: "펄로비아 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Purlovia_Character_BP_C\" 150" },
    { title: "펄로비아 야생 공룡 소환 (SDF)", code: "cheat SDF Purlovia 0 150" },
    { title: "펄로비아 길들인 공룡 소환 (SDF)", code: "cheat SDF Purlovia 1 150" },

    //케찰
    { title: "케찰 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Quetzalcoatlus/Quetz_Character_BP.Quetz_Character_BP\" 0 0 0 150" },
    { title: "케찰 랜덤 레벨 소환 (Summon)", code: "cheat Summon Quetz_Character_BP_C" },
    { title: "케찰 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Quetz_Character_BP_C" },
    { title: "케찰 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Quetz_Character_BP_C\" 150" },
    { title: "케찰 야생 공룡 소환 (SDF)", code: "cheat SDF Quetz 0 150" },
    { title: "케찰 길들인 공룡 소환 (SDF)", code: "cheat SDF Quetz 1 150" },

    //랩터
    { title: "랩터 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Raptor/Raptor_Character_BP.Raptor_Character_BP\" 0 0 0 150" },
    { title: "랩터 랜덤 레벨 소환 (Summon)", code: "cheat Summon Raptor_Character_BP_C" },
    { title: "랩터 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Raptor_Character_BP_C" },
    { title: "랩터 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Raptor_Character_BP_C\" 150" },
    { title: "랩터 야생 공룡 소환 (SDF)", code: "cheat SDF Raptor 0 150" },
    { title: "랩터 길들인 공룡 소환 (SDF)", code: "cheat SDF Raptor 1 150" },

    //렉스
    { title: "렉스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Rex/Rex_Character_BP.Rex_Character_BP\" 0 0 0 150" },
    { title: "렉스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Rex_Character_BP_C" },
    { title: "렉스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Rex_Character_BP_C" },
    { title: "렉스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Rex_Character_BP_C\" 150" },
    { title: "렉스 야생 공룡 소환 (SDF)", code: "cheat SDF Rex 0 150" },
    { title: "렉스 길들인 공룡 소환 (SDF)", code: "cheat SDF Rex 1 150" },

    //검치호
    { title: "검치호 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Saber/Saber_Character_BP.Saber_Character_BP\" 0 0 0 150" },
    { title: "검치호 랜덤 레벨 소환 (Summon)", code: "cheat Summon Saber_Character_BP_C" },
    { title: "검치호 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Saber_Character_BP_C" },
    { title: "검치호 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Saber_Character_BP_C\" 150" },
    { title: "검치호 야생 공룡 소환 (SDF)", code: "cheat SDF Saber 0 150" },
    { title: "검치호 길들인 공룡 소환 (SDF)", code: "cheat SDF Saber 1 150" },

    //검치 연어
    { title: "검치 연어 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Salmon/Salmon_Character_BP.Salmon_Character_BP\" 0 0 0 150" },
    { title: "검치 연어 랜덤 레벨 소환 (Summon)", code: "cheat Summon Salmon_Character_BP_C" },
    { title: "검치 연어 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Salmon_Character_BP_C" },
    { title: "검치 연어 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Salmon_Character_BP_C\" 150" },
    { title: "검치 연어 야생 공룡 소환 (SDF)", code: "cheat SDF Salmon 0 150" },
    { title: "검치 연어 길들인 공룡 소환 (SDF)", code: "cheat SDF Salmon 1 150" },
    //사르코
    { title: "사르코 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Sarco/Sarco_Character_BP.Sarco_Character_BP\" 0 0 0 150" },
    { title: "사르코 랜덤 레벨 소환 (Summon)", code: "cheat Summon Sarco_Character_BP_C" },
    { title: "사르코 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Sarco_Character_BP_C" },
    { title: "사르코 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Sarco_Character_BP_C\" 150" },
    { title: "사르코 야생 공룡 소환 (SDF)", code: "cheat SDF Sarco 0 150" },
    { title: "사르코 길들인 공룡 소환 (SDF)", code: "cheat SDF Sarco 1 150" },

    //스피노
    { title: "스피노 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Spino/Spino_Character_BP.Spino_Character_BP\" 0 0 0 150" },
    { title: "스피노 랜덤 레벨 소환 (Summon)", code: "cheat Summon Spino_Character_BP_C" },
    { title: "스피노 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Spino_Character_BP_C" },
    { title: "스피노 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Spino_Character_BP_C\" 150" },
    { title: "스피노 야생 공룡 소환 (SDF)", code: "cheat SDF Spino 0 150" },
    { title: "스피노 길들인 공룡 소환 (SDF)", code: "cheat SDF Spino 1 150" },

    //스테고사우루스
    { title: "스테고사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Stego/Stego_Character_BP.Stego_Character_BP\" 0 0 0 150" },
    { title: "스테고사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Stego_Character_BP_C" },
    { title: "스테고사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Stego_Character_BP_C" },
    { title: "스테고사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Stego_Character_BP_C\" 150" },
    { title: "스테고사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Stego 0 150" },
    { title: "스테고사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Stego 1 150" },

    //타페자라
    { title: "타페자라 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Tapejara/Tapejara_Character_BP.Tapejara_Character_BP\" 0 0 0 150" },
    { title: "타페자라 랜덤 레벨 소환 (Summon)", code: "cheat Summon Tapejara_Character_BP_C" },
    { title: "타페자라 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Tapejara_Character_BP_C" },
    { title: "타페자라 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Tapejara_Character_BP_C\" 150" },
    { title: "타페자라 야생 공룡 소환 (SDF)", code: "cheat SDF Tapejara 0 150" },
    { title: "타페자라 길들인 공룡 소환 (SDF)", code: "cheat SDF Tapejara 1 150" },

    //테크 파라사우롤로푸스
    { title: "테크 파라사우롤로푸스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Para/BionicPara_Character_BP.BionicPara_Character_BP\" 0 0 0 150" },
    { title: "테크 파라사우롤로푸스 랜덤 레벨 소환 (Summon)", code: "cheat Summon BionicPara_Character_BP_C" },
    { title: "테크 파라사우롤로푸스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed BionicPara_Character_BP_C" },
    { title: "테크 파라사우롤로푸스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"BionicPara_Character_BP_C\" 150" },
    { title: "테크 파라사우롤로푸스 야생 공룡 소환 (SDF)", code: "cheat SDF BionicPara 0 150" },
    { title: "테크 파라사우롤로푸스 길들인 공룡 소환 (SDF)", code: "cheat SDF BionicPara 1 150" },

    //테크 케찰
    { title: "테크 케찰 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Quetzalcoatlus/BionicQuetz_Character_BP.BionicQuetz_Character_BP\" 0 0 0 150" },
    { title: "테크 케찰 랜덤 레벨 소환 (Summon)", code: "cheat Summon BionicQuetz_Character_BP_C" },
    { title: "테크 케찰 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed BionicQuetz_Character_BP_C" },
    { title: "테크 케찰 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"BionicQuetz_Character_BP_C\" 150" },
    { title: "테크 케찰 야생 공룡 소환 (SDF)", code: "cheat SDF BionicQuetz 0 150" },
    { title: "테크 케찰 길들인 공룡 소환 (SDF)", code: "cheat SDF BionicQuetz 1 150" },

    //테크 랩터
    { title: "테크 랩터 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Raptor/BionicRaptor_Character_BP.BionicRaptor_Character_BP\" 0 0 0 150" },
    { title: "테크 랩터 랜덤 레벨 소환 (Summon)", code: "cheat Summon BionicRaptor_Character_BP_C" },
    { title: "테크 랩터 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed BionicRaptor_Character_BP_C" },
    { title: "테크 랩터 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"BionicRaptor_Character_BP_C\" 150" },
    { title: "테크 랩터 야생 공룡 소환 (SDF)", code: "cheat SDF BionicRaptor 0 150" },
    { title: "테크 랩터 길들인 공룡 소환 (SDF)", code: "cheat SDF BionicRaptor 1 150" },

    //테크 렉스
    { title: "테크 렉스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Rex/BionicRex_Character_BP.BionicRex_Character_BP\" 0 0 0 150" },
    { title: "테크 렉스 랜덤 레벨 소환 (Summon)", code: "cheat Summon BionicRex_Character_BP_C" },
    { title: "테크 렉스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed BionicRex_Character_BP_C" },
    { title: "테크 렉스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"BionicRex_Character_BP_C\" 150" },
    { title: "테크 렉스 야생 공룡 소환 (SDF)", code: "cheat SDF BionicRex 0 150" },
    { title: "테크 렉스 길들인 공룡 소환 (SDF)", code: "cheat SDF BionicRex 1 150" },

    //테크 스테고
    { title: "테크 스테고 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Stego/BionicStego_Character_BP.BionicStego_Character_BP\" 0 0 0 150" },
    { title: "테크 스테고 랜덤 레벨 소환 (Summon)", code: "cheat Summon BionicStego_Character_BP_C" },
    { title: "테크 스테고 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed BionicStego_Character_BP_C" },
    { title: "테크 스테고 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"BionicStego_Character_BP_C\" 150" },
    { title: "테크 스테고 야생 공룡 소환 (SDF)", code: "cheat SDF BionicStego 0 150" },
    { title: "테크 스테고 길들인 공룡 소환 (SDF)", code: "cheat SDF BionicStego 1 150" },

    //테러버드
    { title: "테러버드 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/TerrorBird/TerrorBird_Character_BP.TerrorBird_Character_BP\" 0 0 0 150" },
    { title: "테러버드 랜덤 레벨 소환 (Summon)", code: "cheat Summon TerrorBird_Character_BP_C" },
    { title: "테러버드 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed TerrorBird_Character_BP_C" },
    { title: "테러버드 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"TerrorBird_Character_BP_C\" 150" },
    { title: "테러버드 야생 공룡 소환 (SDF)", code: "cheat SDF TerrorBird 0 150" },
    { title: "테러버드 길들인 공룡 소환 (SDF)", code: "cheat SDF TerrorBird 1 150" },

    //테리지노사우루스
    { title: "테리지노사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Therizinosaurus/Therizino_Character_BP.Therizino_Character_BP\" 0 0 0 150" },
    { title: "테리지노사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Therizino_Character_BP_C" },
    { title: "테리지노사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Therizino_Character_BP_C" },
    { title: "테리지노사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Therizino_Character_BP_C\" 150" },
    { title: "테리지노사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Therizino 0 150" },
    { title: "테리지노사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Therizino 1 150" },

    //틸라콜레오
    { title: "틸라콜레오 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Thylacoleo/Thylacoleo_Character_BP.Thylacoleo_Character_BP\" 0 0 0 150" },
    { title: "틸라콜레오 랜덤 레벨 소환 (Summon)", code: "cheat Summon Thylacoleo_Character_BP_C" },
    { title: "틸라콜레오 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Thylacoleo_Character_BP_C" },
    { title: "틸라콜레오 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Thylacoleo_Character_BP_C\" 150" },
    { title: "틸라콜레오 야생 공룡 소환 (SDF)", code: "cheat SDF Thylacoleo 0 150" },
    { title: "틸라콜레오 길들인 공룡 소환 (SDF)", code: "cheat SDF Thylacoleo 1 150" },

    //티타노보아
    { title: "티타노보아 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/BoaFrill/BoaFrill_Character_BP.BoaFrill_Character_BP\" 0 0 0 150" },
    { title: "티타노보아 랜덤 레벨 소환 (Summon)", code: "cheat Summon BoaFrill_Character_BP_C" },
    { title: "티타노보아 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed BoaFrill_Character_BP_C" },
    { title: "티타노보아 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"BoaFrill_Character_BP_C\" 150" },
    { title: "티타노보아 야생 공룡 소환 (SDF)", code: "cheat SDF BoaFrill 0 150" },
    { title: "티타노보아 길들인 공룡 소환 (SDF)", code: "cheat SDF BoaFrill 1 150" },

    //티타노미르마
    { title: "티타노미르마 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Ant/Ant_Character_BP.Ant_Character_BP\" 0 0 0 150" },
    { title: "티타노미르마 랜덤 레벨 소환 (Summon)", code: "cheat Summon Ant_Character_BP_C" },
    { title: "티타노미르마 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Ant_Character_BP_C" },
    { title: "티타노미르마 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Ant_Character_BP_C\" 150" },
    { title: "티타노미르마 야생 공룡 소환 (SDF)", code: "cheat SDF Ant 0 150" },
    { title: "티타노미르마 길들인 공룡 소환 (SDF)", code: "cheat SDF Ant 1 150" },
    //티타노미르마 병사
    { title: "티타노미르마 병사 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Ant/FlyingAnt_Character_BP.FlyingAnt_Character_BP\" 0 0 0 150" },
    { title: "티타노미르마 병사 랜덤 레벨 소환 (Summon)", code: "cheat Summon FlyingAnt_Character_BP_C" },
    { title: "티타노미르마 병사 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed FlyingAnt_Character_BP_C" },
    { title: "티타노미르마 병사 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"FlyingAnt_Character_BP_C\" 150" },
    { title: "티타노미르마 병사 야생 공룡 소환 (SDF)", code: "cheat SDF FlyingAnt 0 150" },
    { title: "티타노미르마 병사 길들인 공룡 소환 (SDF)", code: "cheat SDF FlyingAnt 1 150" },

    //티타노사우루스
    { title: "티타노사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/titanosaur/Titanosaur_Character_BP.Titanosaur_Character_BP\" 0 0 0 150" },
    { title: "티타노사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Titanosaur_Character_BP_C" },
    { title: "티타노사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Titanosaur_Character_BP_C" },
    { title: "티타노사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Titanosaur_Character_BP_C\" 150" },
    { title: "티타노사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Titanosaur 0 150" },
    { title: "티타노사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Titanosaur 1 150" },

    //트리케라톱스
    { title: "트리케라톱스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Trike/Trike_Character_BP.Trike_Character_BP\" 0 0 0 150" },
    { title: "트리케라톱스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Trike_Character_BP_C" },
    { title: "트리케라톱스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Trike_Character_BP_C" },
    { title: "트리케라톱스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Trike_Character_BP_C\" 150" },
    { title: "트리케라톱스 야생 공룡 소환 (SDF)", code: "cheat SDF Trike 0 150" },
    { title: "트리케라톱스 길들인 공룡 소환 (SDF)", code: "cheat SDF Trike 1 150" },

    //삼엽충
    { title: "삼엽충 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Trilobite/Trilobite_Character.Trilobite_Character\" 0 0 0 150" },
    { title: "삼엽충 랜덤 레벨 소환 (Summon)", code: "cheat Summon Trilobite_Character_C" },
    { title: "삼엽충 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Trilobite_Character_C" },
    { title: "삼엽충 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Trilobite_Character_C\" 150" },
    { title: "삼엽충 야생 공룡 소환 (SDF)", code: "cheat SDF Trilobite 0 150" },
    { title: "삼엽충 길들인 공룡 소환 (SDF)", code: "cheat SDF Trilobite 1 150" },

    //트로오돈
    { title: "트로오돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Troodon/Troodon_Character_BP.Troodon_Character_BP\" 0 0 0 150" },
    { title: "트로오돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Troodon_Character_BP_C" },
    { title: "트로오돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Troodon_Character_BP_C" },
    { title: "트로오돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Troodon_Character_BP_C\" 150" },
    { title: "트로오돈 야생 공룡 소환 (SDF)", code: "cheat SDF Troodon 0 150" },
    { title: "트로오돈 길들인 공룡 소환 (SDF)", code: "cheat SDF Troodon 1 150" },

    //투소테우티스
    { title: "투소테우티스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Tusoteuthis/Tusoteuthis_Character_BP.Tusoteuthis_Character_BP\" 0 0 0 150" },
    { title: "투소테우티스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Tusoteuthis_Character_BP_C" },
    { title: "투소테우티스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Tusoteuthis_Character_BP_C" },
    { title: "투소테우티스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Tusoteuthis_Character_BP_C\" 150" },
    { title: "투소테우티스 야생 공룡 소환 (SDF)", code: "cheat SDF Tusoteuthis 0 150" },
    { title: "투소테우티스 길들인 공룡 소환 (SDF)", code: "cheat SDF Tusoteuthis 1 150" },

    //울리 라이노
    { title: "울리 라이노 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/WoollyRhino/Rhino_Character_BP.Rhino_Character_BP\" 0 0 0 150" },
    { title: "울리 라이노 랜덤 레벨 소환 (Summon)", code: "cheat Summon Rhino_Character_BP_C" },
    { title: "울리 라이노 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Rhino_Character_BP_C" },
    { title: "울리 라이노 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Rhino_Character_BP_C\" 150" },
    { title: "울리 라이노 야생 공룡 소환 (SDF)", code: "cheat SDF Rhino 0 150" },
    { title: "울리 라이노 길들인 공룡 소환 (SDF)", code: "cheat SDF Rhino 1 150" },

    //예티
    { title: "예티 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Bigfoot/Yeti_Character_BP.Yeti_Character_BP\" 0 0 0 150" },
    { title: "예티 랜덤 레벨 소환 (Summon)", code: "cheat Summon Yeti_Character_BP_C" },
    { title: "예티 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Yeti_Character_BP_C" },
    { title: "예티 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Yeti_Character_BP_C\" 150" },
    { title: "예티 야생 공룡 소환 (SDF)", code: "cheat SDF Yeti 0 150" },
    { title: "예티 길들인 공룡 소환 (SDF)", code: "cheat SDF Yeti 1 150" },

    //유티라누스
    { title: "유티라누스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Yutyrannus/Yutyrannus_Character_BP.Yutyrannus_Character_BP\" 0 0 0 150" },
    { title: "유티라누스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Yutyrannus_Character_BP_C" },
    { title: "유티라누스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Yutyrannus_Character_BP_C" },
    { title: "유티라누스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Yutyrannus_Character_BP_C\" 150" },
    { title: "유티라누스 야생 공룡 소환 (SDF)", code: "cheat SDF Yutyrannus 0 150" },
    { title: "유티라누스 길들인 공룡 소환 (SDF)", code: "cheat SDF Yutyrannus 1 150" },

    //여왕벌
    { title: "여왕벌 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Bee/Bee_Queen_Character_BP.Bee_Queen_Character_BP\" 0 0 0 150" },
    { title: "여왕벌 랜덤 레벨 소환 (Summon)", code: "cheat Summon Bee_Queen_Character_BP_C" },
    { title: "여왕벌 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Bee_Queen_Character_BP_C" },
    { title: "여왕벌 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Bee_Queen_Character_BP_C\" 150" },
    { title: "여왕벌 야생 공룡 소환 (SDF)", code: "cheat SDF Bee_Queen 0 150" },
    { title: "여왕벌 길들인 공룡 소환 (SDF)", code: "cheat SDF Bee_Queen 1 150" },

    //카르카로돈토사우루스
    { title: "카르카로돈토사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Carcharodontosaurus/Carcha_Character_BP.Carcha_Character_BP\" 0 0 0 150" },
    { title: "카르카로돈토사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Carcha_Character_BP_C" },
    { title: "카르카로돈토사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Carcha_Character_BP_C" },
    { title: "카르카로돈토사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Carcha_Character_BP_C\" 150" },
    { title: "카르카로돈토사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Carcha 0 150" },
    { title: "카르카로돈토사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Carcha 1 150" },

    //리니오그나타
    { title: "리니오그나타 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Rhyniognatha/Rhynio_Character_BP.Rhynio_Character_BP\" 0 0 0 150" },
    { title: "리니오그나타 랜덤 레벨 소환 (Summon)", code: "cheat Summon Rhynio_Character_BP_C" },
    { title: "리니오그나타 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Rhynio_Character_BP_C" },
    { title: "리니오그나타 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Rhynio_Character_BP_C\" 150" },
    { title: "리니오그나타 야생 공룡 소환 (SDF)", code: "cheat SDF Rhynio 0 150" },
    { title: "리니오그나타 길들인 공룡 소환 (SDF)", code: "cheat SDF Rhynio 1 150" },






    //스코치드 어스

    //알파 화염 와이번
    { title: "알파 화염 와이번 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/Wyvern/MegaWyvern_Character_BP_Fire.MegaWyvern_Character_BP_Fire\" 0 0 0 150" },
    { title: "알파 화염 와이번 랜덤 레벨 소환 (Summon)", code: "cheat Summon MegaWyvern_Character_BP_Fire_C" },
    { title: "알파 화염 와이번 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed MegaWyvern_Character_BP_Fire_C" },
    { title: "알파 화염 와이번 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"MegaWyvern_Character_BP_Fire_C\" 150" },
    { title: "알파 화염 와이번 야생 공룡 소환 (SDF)", code: "cheat SDF MegaWyvern_Character_BP_Fire 0 150" },
    { title: "알파 화염 와이번 길들인 공룡 소환 (SDF)", code: "cheat SDF MegaWyvern_Character_BP_Fire 1 150" },

    //알파 데스웜
    { title: "알파 데스웜 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/Deathworm/MegaDeathworm_Character_BP.MegaDeathworm_Character_BP\" 0 0 0 150" },
    { title: "알파 데스웜 랜덤 레벨 소환 (Summon)", code: "cheat Summon MegaDeathworm_Character_BP_C" },
    { title: "알파 데스웜 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed MegaDeathworm_Character_BP_C" },
    { title: "알파 데스웜 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"MegaDeathworm_Character_BP_C\" 150" },
    { title: "알파 데스웜 야생 공룡 소환 (SDF)", code: "cheat SDF MegaDeathworm 0 150" },
    { title: "알파 데스웜 길들인 공룡 소환 (SDF)", code: "cheat SDF MegaDeathworm 1 150" },

    //도도 와이번
    { title: "도도 와이번 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/DodoWyvern/DodoWyvern_Character_BP.DodoWyvern_Character_BP\" 0 0 0 150" },
    { title: "도도 와이번 랜덤 레벨 소환 (Summon)", code: "cheat Summon DodoWyvern_Character_BP_C" },
    { title: "도도 와이번 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed DodoWyvern_Character_BP_C" },
    { title: "도도 와이번 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"DodoWyvern_Character_BP_C\" 150" },
    { title: "도도 와이번 야생 공룡 소환 (SDF)", code: "cheat SDF DodoWyvern 0 150" },
    { title: "도도 와이번 길들인 공룡 소환 (SDF)", code: "cheat SDF DodoWyvern 1 150" },

    //캥거루 쥐
    { title: "캥거루 쥐 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/Jerboa/Jerboa_Character_BP.Jerboa_Character_BP\" 0 0 0 150" },
    { title: "캥거루 쥐 랜덤 레벨 소환 (Summon)", code: "cheat Summon Jerboa_Character_BP_C" },
    { title: "캥거루 쥐 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Jerboa_Character_BP_C" },
    { title: "캥거루 쥐 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Jerboa_Character_BP_C\" 150" },
    { title: "캥거루 쥐 야생 공룡 소환 (SDF)", code: "cheat SDF Jerboa 0 150" },
    { title: "캥거루 쥐 길들인 공룡 소환 (SDF)", code: "cheat SDF Jerboa 1 150" },

    //주전자 벌레
    { title: "주전자 벌레 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/Jugbug/JugBug_Character_BaseBP.JugBug_Character_BaseBP\" 0 0 0 150" },
    { title: "주전자 벌레 랜덤 레벨 소환 (Summon)", code: "cheat Summon Jugbug_Character_BaseBP_C" },
    { title: "주전자 벌레 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Jugbug_Character_BaseBP_C" },
    { title: "주전자 벌레 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Jugbug_Character_BaseBP_C\" 150" },
    { title: "주전자 벌레 야생 공룡 소환 (SDF)", code: "cheat SDF Jugbug_Character_BaseBP 0 150" },
    { title: "주전자 벌레 길들인 공룡 소환 (SDF)", code: "cheat SDF Jugbug_Character_BaseBP 1 150" },

    //오일 주전자 벌레
    { title: "오일 주전자 벌레 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/Jugbug/Jugbug_Oil_Character_BP.Jugbug_Oil_Character_BP\" 0 0 0 150" },
    { title: "오일 주전자 벌레 랜덤 레벨 소환 (Summon)", code: "cheat Summon Jugbug_Oil_Character_BP_C" },
    { title: "오일 주전자 벌레 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Jugbug_Oil_Character_BP_C" },
    { title: "오일 주전자 벌레 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Jugbug_Oil_Character_BP_C\" 150" },
    { title: "오일 주전자 벌레 야생 공룡 소환 (SDF)", code: "cheat SDF Jugbug_Oil 0 150" },
    { title: "오일 주전자 벌레 길들인 공룡 소환 (SDF)", code: "cheat SDF Jugbug_Oil 1 150" },

    //물 주전자 벌레
    { title: "물 주전자 벌레 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/Jugbug/Jugbug_Water_Character_BP.Jugbug_Water_Character_BP\" 0 0 0 150" },
    { title: "물 주전자 벌레 랜덤 레벨 소환 (Summon)", code: "cheat Summon Jugbug_Water_Character_BP_C" },
    { title: "물 주전자 벌레 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Jugbug_Water_Character_BP_C" },
    { title: "물 주전자 벌레 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Jugbug_Water_Character_BP_C\" 150" },
    { title: "물 주전자 벌레 야생 공룡 소환 (SDF)", code: "cheat SDF Jugbug_Water 0 150" },
    { title: "물 주전자 벌레 길들인 공룡 소환 (SDF)", code: "cheat SDF Jugbug_Water 1 150" },

    //매미나방
    { title: "매미나방 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/Moth/Moth_Character_BP.Moth_Character_BP\" 0 0 0 150" },
    { title: "매미나방 랜덤 레벨 소환 (Summon)", code: "cheat Summon Moth_Character_BP_C" },
    { title: "매미나방 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Moth_Character_BP_C" },
    { title: "매미나방 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Moth_Character_BP_C\" 150" },
    { title: "매미나방 야생 공룡 소환 (SDF)", code: "cheat SDF Moth 0 150" },
    { title: "매미나방 길들인 공룡 소환 (SDF)", code: "cheat SDF Moth 1 150" },

    //사마귀
    { title: "사마귀 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/Mantis/Mantis_Character_BP.Mantis_Character_BP\" 0 0 0 150" },
    { title: "사마귀 랜덤 레벨 소환 (Summon)", code: "cheat Summon Mantis_Character_BP_C" },
    { title: "사마귀 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Mantis_Character_BP_C" },
    { title: "사마귀 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Mantis_Character_BP_C\" 150" },
    { title: "사마귀 야생 공룡 소환 (SDF)", code: "cheat SDF Mantis 0 150" },
    { title: "사마귀 길들인 공룡 소환 (SDF)", code: "cheat SDF Mantis 1 150" },

    //모렐라톱스
    { title: "모렐라톱스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/Camelsaurus/camelsaurus_Character_BP.camelsaurus_Character_BP\" 0 0 0 150" },
    { title: "모렐라톱스 랜덤 레벨 소환 (Summon)", code: "cheat Summon camelsaurus_Character_BP_C" },
    { title: "모렐라톱스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed camelsaurus_Character_BP_C" },
    { title: "모렐라톱스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"camelsaurus_Character_BP_C\" 150" },
    { title: "모렐라톱스 야생 공룡 소환 (SDF)", code: "cheat SDF camelsaurus 0 150" },
    { title: "모렐라톱스 길들인 공룡 소환 (SDF)", code: "cheat SDF camelsaurus 1 150" },

    //바위 정령
    { title: "바위 정령 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/RockGolem/RockGolem_Character_BP.RockGolem_Character_BP\" 0 0 0 150" },
    { title: "바위 정령 랜덤 레벨 소환 (Summon)", code: "cheat Summon RockGolem_Character_BP_C" },
    { title: "바위 정령 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed RockGolem_Character_BP_C" },
    { title: "바위 정령 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"RockGolem_Character_BP_C\" 150" },
    { title: "바위 정령 야생 공룡 소환 (SDF)", code: "cheat SDF RockGolem 0 150" },
    { title: "바위 정령 길들인 공룡 소환 (SDF)", code: "cheat SDF RockGolem 1 150" },

    //rubble golem
    { title: "rubble golem 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/RockGolem/RubbleGolem_Character_BP.RubbleGolem_Character_BP\" 0 0 0 150" },
    { title: "rubble golem 랜덤 레벨 소환 (Summon)", code: "cheat Summon RubbleGolem_Character_BP_C" },
    { title: "rubble golem 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed RubbleGolem_Character_BP_C" },
    { title: "rubble golem 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"RubbleGolem_Character_BP_C\" 150" },
    { title: "rubble golem 야생 공룡 소환 (SDF)", code: "cheat SDF RubbleGolem 0 150" },
    { title: "rubble golem 길들인 공룡 소환 (SDF)", code: "cheat SDF RubbleGolem 1 150" },
    
    //가시 드래곤
    { title: "가시 드래곤 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/SpineyLizard/SpineyLizard_Character_BP.SpineyLizard_Character_BP\" 0 0 0 150" },
    { title: "가시 드래곤 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon SpineyLizard_Character_BP_C" },
    { title: "가시 드래곤 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed SpineyLizard_Character_BP_C" },
    { title: "가시 드래곤 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"SpineyLizard_Character_BP_C\" 150" },
    { title: "가시 드래곤 야생 공룡 소환 (SDF)", code: "CHEAT SDF SpineyLizard 0 150" },
    { title: "가시 드래곤 길들인 공룡 소환 (SDF)", code: "CHEAT SDF SpineyLizard 1 150" },

    //독수리
    { title: "독수리 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/Vulture/Vulture_Character_BP.Vulture_Character_BP\" 0 0 0 150" },
    { title: "독수리 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Vulture_Character_BP_C" },
    { title: "독수리 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Vulture_Character_BP_C" },
    { title: "독수리 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Vulture_Character_BP_C\" 150" },
    { title: "독수리 야생 공룡 소환 (SDF)", code: "CHEAT SDF Vulture 0 150" },
    { title: "독수리 길들인 공룡 소환 (SDF)", code: "CHEAT SDF Vulture 1 150" },

    //와이번
    { title: "와이번 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/Wyvern/Wyvern_Character_BP_Base.Wyvern_Character_BP_Base\" 0 0 0 150" },
    { title: "와이번 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Wyvern_Character_BP_Base_C" },
    { title: "와이번 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Wyvern_Character_BP_Base_C" },
    { title: "와이번 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Wyvern_Character_BP_Base_C\" 150" },
    { title: "와이번 야생 공룡 소환 (SDF)", code: "CHEAT SDF Wyvern 0 150" },
    { title: "와이번 길들인 공룡 소환 (SDF)", code: "CHEAT SDF Wyvern 1 150" },

    //화염 와이번
    { title: "화염 와이번 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/Wyvern/Wyvern_Character_BP_Fire.Wyvern_Character_BP_Fire\" 0 0 0 150" },
    { title: "화염 와이번 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Wyvern_Character_BP_Fire_C" },
    { title: "화염 와이번 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Wyvern_Character_BP_Fire_C" },
    { title: "화염 와이번 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Wyvern_Character_BP_Fire_C\" 150" },
    { title: "화염 와이번 야생 공룡 소환 (SDF)", code: "CHEAT SDF Wyvern_Character_BP_Fire 0 150" },
    { title: "화염 와이번 길들인 공룡 소환 (SDF)", code: "CHEAT SDF Wyvern_Character_BP_Fire 1 150" },

    //번개 와이번
    { title: "번개 와이번 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/Wyvern/Wyvern_Character_BP_Lightning.Wyvern_Character_BP_Lightning\" 0 0 0 150" },
    { title: "번개 와이번 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Wyvern_Character_BP_Lightning_C" },
    { title: "번개 와이번 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Wyvern_Character_BP_Lightning_C" },
    { title: "번개 와이번 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Wyvern_Character_BP_Lightning_C\" 150" },
    { title: "번개 와이번 야생 공룡 소환 (SDF)", code: "CHEAT SDF Wyvern_Character_BP_Lightning 0 150" },
    { title: "번개 와이번 길들인 공룡 소환 (SDF)", code: "CHEAT SDF Wyvern_Character_BP_Lightning 1 150" },

    //독 와이번
    { title: "독 와이번 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/Wyvern/Wyvern_Character_BP_Poison.Wyvern_Character_BP_Poison\" 0 0 0 150" },
    { title: "독 와이번 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Wyvern_Character_BP_Poison_C" },
    { title: "독 와이번 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Wyvern_Character_BP_Poison_C" },
    { title: "독 와이번 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Wyvern_Character_BP_Poison_C\" 150" },
    { title: "독 와이번 야생 공룡 소환 (SDF)", code: "CHEAT SDF Wyvern_Character_BP_Poison 0 150" },
    { title: "독 와이번 길들인 공룡 소환 (SDF)", code: "CHEAT SDF Wyvern_Character_BP_Poison 1 150" },

    //불새[피닉스]
    { title: "불새[피닉스] 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/ScorchedEarth/Dinos/Phoenix/Phoenix_Character_BP.Phoenix_Character_BP\" 0 0 0 150" },
    { title: "불새[피닉스] 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Phoenix_Character_BP_C" },
    { title: "불새[피닉스] 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Phoenix_Character_BP_C" },
    { title: "불새[피닉스] 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Phoenix_Character_BP_C\" 150" },
    { title: "불새[피닉스] 야생 공룡 소환 (SDF)", code: "CHEAT SDF Phoenix 0 150" },
    { title: "불새[피닉스] 길들인 공룡 소환 (SDF)", code: "CHEAT SDF Phoenix 1 150" },








    //라그나로크
    //그리핀
    { title: "그리핀 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Griffin/Griffin_Character_BP.Griffin_Character_BP\" 0 0 0 150" },
    { title: "그리핀 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Griffin_Character_BP_C" },
    { title: "그리핀 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Griffin_Character_BP_C" },
    { title: "그리핀 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Griffin_Character_BP_C\" 150" },
    { title: "그리핀 야생 공룡 소환 (SDF)", code: "CHEAT SDF Griffin 0 150" },
    { title: "그리핀 길들인 공룡 소환 (SDF)", code: "CHEAT SDF Griffin 1 150" },

    //냉기(아이스) 와이번 소환
    { title: "냉기(아이스) 와이번 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Mods/Ragnarok/Custom_Assets/Dinos/Wyvern/Ice_Wyvern/Ragnarok_Wyvern_Override_Ice.Ragnarok_Wyvern_Override_Ice\" 0 0 0 150" },
    { title: "냉기(아이스) 와이번 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Ragnarok_Wyvern_Override_Ice_C" },
    { title: "냉기(아이스) 와이번 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Ragnarok_Wyvern_Override_Ice_C" },
    { title: "냉기(아이스) 와이번 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Ragnarok_Wyvern_Override_Ice_C\" 150" },
    { title: "냉기(아이스) 와이번 야생 공룡 소환 (SDF)", code: "CHEAT SDF Ragnarok_Wyvern_Override_Ice 0 150" },
    { title: "냉기(아이스) 와이번 길들인 공룡 소환 (SDF)", code: "CHEAT SDF Ragnarok_Wyvern_Override_Ice 1 150" },

    //아이스 웜 퀸
    { title: "아이스 웜 퀸 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Mods/Ragnarok/Custom_Assets/JacksonL/Iceworm/Iceworm_Queen_Character_BP.Iceworm_Queen_Character_BP\" 0 0 0 150" },
    { title: "아이스 웜 퀸 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Iceworm_Queen_Character_BP_C" },
    { title: "아이스 웜 퀸 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Iceworm_Queen_Character_BP_C" },
    { title: "아이스 웜 퀸 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Iceworm_Queen_Character_BP_C\" 150" },
    { title: "아이스 웜 퀸 야생 공룡 소환 (SDF)", code: "CHEAT SDF Iceworm_Queen 0 150" },
    { title: "아이스 웜 퀸 길들인 공룡 소환 (SDF)", code: "CHEAT SDF Iceworm_Queen 1 150" },

   //용암 정령 아직 소환 안됌
    // { title: "용암 정령 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Mods/Ragnarok/Custom_Assets/JacksonL/LavaGolem/LavaGolem_Character_BP.LavaGolem_Character_BP\" 0 0 0 150" },
    // { title: "용암 정령 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon LavaGolem_Character_BP_C" },
    // { title: "용암 정령 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed LavaGolem_Character_BP_C" },
    // { title: "용암 정령 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"LavaGolem_Character_BP_C\" 150" },
    // { title: "용암 정령 야생 공룡 소환 (SDF)", code: "CHEAT SDF LavaGolem 0 150" },
    // { title: "용암 정령 길들인 공룡 소환 (SDF)", code: "CHEAT SDF LavaGolem 1 150" },







    //에버레이션
    //변종 아카티나
    { title: "변종 아카티나 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Achatina/Achatina_Character_BP_Aberrant.Achatina_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 아카티나 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Achatina_Character_BP_Aberrant_C" },
    { title: "변종 아카티나 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Achatina_Character_BP_Aberrant_C" },
    { title: "변종 아카티나 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Achatina_Character_BP_Aberrant_C\" 150" },
    { title: "변종 아카티나 야생 공룡 소환 (SDF)", code: "CHEAT SDF Achatina_Aberrant 0 150" },
    { title: "변종 아카티나 길들인 공룡 소환 (SDF)", code: "CHEAT SDF Achatina_Aberrant 1 150" },

    //변종 앵글러피쉬
    { title: "변종 앵글러피쉬 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Anglerfish/Angler_Character_BP_Aberrant.Angler_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 앵글러피쉬 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Angler_Character_BP_Aberrant_C" },
    { title: "변종 앵글러피쉬 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Angler_Character_BP_Aberrant_C" },
    { title: "변종 앵글러피쉬 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Angler_Character_BP_Aberrant_C\" 150" },
    { title: "변종 앵글러피쉬 야생 공룡 소환 (SDF)", code: "CHEAT SDF Angler_Aberrant 0 150" },
    { title: "변종 앵글러피쉬 길들인 공룡 소환 (SDF)", code: "CHEAT SDF Angler_Aberrant 1 150" },

    //변종 안킬로사우루스
    { title: "변종 안킬로사우루스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Ankylo/Ankylo_Character_BP_Aberrant.Ankylo_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 안킬로사우루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Ankylo_Character_BP_Aberrant_C" },
    { title: "변종 안킬로사우루스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Ankylo_Character_BP_Aberrant_C" },
    { title: "변종 안킬로사우루스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Ankylo_Character_BP_Aberrant_C\" 150" },
    { title: "변종 안킬로사우루스 야생 공룡 소환 (SDF)", code: "CHEAT SDF Ankylo_Aberrant 0 150" },
    { title: "변종 안킬로사우루스 길들인 공룡 소환 (SDF)", code: "CHEAT SDF Ankylo_Aberrant 1 150" },

    //변종 아라네오
    { title: "변종 아라네오 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Spider-Small/SpiderS_Character_BP_Aberrant.SpiderS_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 아라네오 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon SpiderS_Character_BP_Aberrant_C" },
    { title: "변종 아라네오 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed SpiderS_Character_BP_Aberrant_C" },
    { title: "변종 아라네오 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"SpiderS_Character_BP_Aberrant_C\" 150" },
    { title: "변종 아라네오 야생 공룡 소환 (SDF)", code: "CHEAT SDF SpiderS_Aberrant 0 150" },
    { title: "변종 아라네오 길들인 공룡 소환 (SDF)", code: "CHEAT SDF SpiderS_Aberrant 1 150" },

    //변종 아트로플레우라
    { title: "변종 아트로플레우라 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Arthropluera/Arthro_Character_BP_Aberrant.Arthro_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 아트로플레우라 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Arthro_Character_BP_Aberrant_C" },
    { title: "변종 아트로플레우라 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Arthro_Character_BP_Aberrant_C" },
    { title: "변종 아트로플레우라 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Arthro_Character_BP_Aberrant_C\" 150" },
    { title: "변종 아트로플레우라 야생 공룡 소환 (SDF)", code: "CHEAT SDF Arthro_Aberrant 0 150" },
    { title: "변종 아트로플레우라 길들인 공룡 소환 (SDF)", code: "CHEAT SDF Arthro_Aberrant 1 150" },

    //변종 바리오닉스
    { title: "변종 바리오닉스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Baryonyx/Baryonyx_Character_BP_Aberrant.Baryonyx_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 바리오닉스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Baryonyx_Character_BP_Aberrant_C" },
    { title: "변종 바리오닉스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Baryonyx_Character_BP_Aberrant_C" },
    { title: "변종 바리오닉스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Baryonyx_Character_BP_Aberrant_C\" 150" },
    { title: "변종 바리오닉스 야생 공룡 소환 (SDF)", code: "CHEAT SDF Baryonyx_Aberrant 0 150" },
    { title: "변종 바리오닉스 길들인 공룡 소환 (SDF)", code: "CHEAT SDF Baryonyx_Aberrant 1 150" },

    //변종 벨제부포
    { title: "변종 벨제부포 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Toad/Toad_Character_BP_Aberrant.Toad_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 벨제부포 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Toad_Character_BP_Aberrant_C" },
    { title: "변종 벨제부포 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Toad_Character_BP_Aberrant_C" },
    { title: "변종 벨제부포 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Toad_Character_BP_Aberrant_C\" 150" },
    { title: "변종 벨제부포 야생 공룡 소환 (SDF)", code: "CHEAT SDF Toad_Aberrant 0 150" },
    { title: "변종 벨제부포 길들인 공룡 소환 (SDF)", code: "CHEAT SDF Toad_Aberrant 1 150" },

    //변종 카르보네미스
    { title: "변종 카르보네미스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Turtle/Turtle_Character_BP_Aberrant.Turtle_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 카르보네미스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Turtle_Character_BP_Aberrant_C" },
    { title: "변종 카르보네미스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Turtle_Character_BP_Aberrant_C" },
    { title: "변종 카르보네미스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Turtle_Character_BP_Aberrant_C\" 150" },
    { title: "변종 카르보네미스 야생 공룡 소환 (SDF)", code: "CHEAT SDF Turtle_Aberrant 0 150" },
    { title: "변종 카르보네미스 길들인 공룡 소환 (SDF)", code: "CHEAT SDF Turtle_Aberrant 1 150" },

    //변종 카르노타우루스
    { title: "변종 카르노타우루스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Carno/Carno_Character_BP_Aberrant.Carno_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 카르노타우루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Carno_Character_BP_Aberrant_C" },
    { title: "변종 카르노타우루스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Carno_Character_BP_Aberrant_C" },
    { title: "변종 카르노타우루스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Carno_Character_BP_Aberrant_C\" 150" },
    { title: "변종 카르노타우루스 야생 공룡 소환 (SDF)", code: "CHEAT SDF Carno_Aberrant 0 150" },
    { title: "변종 카르노타우루스 길들인 공룡 소환 (SDF)", code: "CHEAT SDF Carno_Aberrant 1 150" },

    //변종 크니다리아(해파리)
    { title: "변종 크니다리아(해파리) 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Cnidaria/Cnidaria_Character_BP_Aberrant.Cnidaria_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 크니다리아(해파리) 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Cnidaria_Character_BP_Aberrant_C" },
    { title: "변종 크니다리아(해파리) 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Cnidaria_Character_BP_Aberrant_C" },
    { title: "변종 크니다리아(해파리) 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Cnidaria_Character_BP_Aberrant_C\" 150" },
    { title: "변종 크니다리아(해파리) 야생 공룡 소환 (SDF)", code: "CHEAT SDF Cnidaria_Aberrant 0 150" },
    { title: "변종 크니다리아(해파리) 길들인 공룡 소환 (SDF)", code: "CHEAT SDF Cnidaria_Aberrant 1 150" },

    //변종 실러캔스
    { title: "변종 실러캔스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Coelacanth/Coel_Character_BP_Aberrant.Coel_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 실러캔스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Coel_Character_BP_Aberrant_C" },
    { title: "변종 실러캔스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Coel_Character_BP_Aberrant_C" },
    { title: "변종 실러캔스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Coel_Character_BP_Aberrant_C\" 150" },
    { title: "변종 실러캔스 야생 공룡 소환 (SDF)", code: "CHEAT SDF Coel_Aberrant 0 150" },
    { title: "변종 실러캔스 길들인 공룡 소환 (SDF)", code: "CHEAT SDF Coel_Aberrant 1 150" },

    //변종 디메트로돈
    { title: "변종 디메트로돈 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Dimetrodon/Dimetro_Character_BP_Aberrant.Dimetro_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 디메트로돈 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Dimetro_Character_BP_Aberrant_C" },
    { title: "변종 디메트로돈 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Dimetro_Character_BP_Aberrant_C" },
    { title: "변종 디메트로돈 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Dimetro_Character_BP_Aberrant_C\" 150" },
    { title: "변종 디메트로돈 야생 공룡 소환 (SDF)", code: "CHEAT SDF Dimetro_Aberrant 0 150" },
    { title: "변종 디메트로돈 길들인 공룡 소환 (SDF)", code: "CHEAT SDF Dimetro_Aberrant 1 150" },
    //변종 디몰포돈
    { title: "변종 디몰포돈 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Dimorphodon/Dimorph_Character_BP_Aberrant.Dimorph_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 디몰포돈 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Dimorph_Character_BP_Aberrant_C" },
    { title: "변종 디몰포돈 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Dimorph_Character_BP_Aberrant_C" },
    { title: "변종 디몰포돈 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Dimorph_Character_BP_Aberrant_C\" 150" },
    { title: "변종 디몰포돈 야생 공룡 소환 (SDF)", code: "CHEAT SDF Dimorph_Aberrant 0 150" },

    //변종 디플로카울루스
    { title: "변종 디플로카울루스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Diplocaulus/Diplocaulus_Character_BP_Aberrant.Diplocaulus_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 디플로카울루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Diplocaulus_Character_BP_Aberrant_C" },
    { title: "변종 디플로카울루스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Diplocaulus_Character_BP_Aberrant_C" },
    { title: "변종 디플로카울루스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Diplocaulus_Character_BP_Aberrant_C\" 150" },
    { title: "변종 디플로카울루스 야생 공룡 소환 (SDF)", code: "CHEAT SDF Diplocaulus_Aberrant 0 150" },

    //변종 디플로도쿠스
    { title: "변종 디플로도쿠스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Diplodocus/Diplodocus_Character_BP_Aberrant.Diplodocus_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 디플로도쿠스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Diplodocus_Character_BP_Aberrant_C" },
    { title: "변종 디플로도쿠스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Diplodocus_Character_BP_Aberrant_C" },
    { title: "변종 디플로도쿠스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Diplodocus_Character_BP_Aberrant_C\" 150" },
    { title: "변종 디플로도쿠스 야생 공룡 소환 (SDF)", code: "CHEAT SDF Diplodocus_Aberrant 0 150" },

    //변종 다이어베어
    { title: "변종 다이어베어 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Direbear/Direbear_Character_BP_Aberrant.Direbear_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 다이어베어 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Direbear_Character_BP_Aberrant_C" },
    { title: "변종 다이어베어 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Direbear_Character_BP_Aberrant_C" },
    { title: "변종 다이어베어 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Direbear_Character_BP_Aberrant_C\" 150" },
    { title: "변종 다이어베어 야생 공룡 소환 (SDF)", code: "CHEAT SDF Direbear_Aberrant 0 150" },

    //변종 도도
    { title: "변종 도도 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Dodo/Dodo_Character_BP_Aberrant.Dodo_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 도도 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Dodo_Character_BP_Aberrant_C" },
    { title: "변종 도도 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Dodo_Character_BP_Aberrant_C" },
    { title: "변종 도도 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Dodo_Character_BP_Aberrant_C\" 150" },
    { title: "변종 도도 야생 공룡 소환 (SDF)", code: "CHEAT SDF Dodo_Aberrant 0 150" },
    //변종 도에디쿠스
    { title: "변종 도에디쿠스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Doedicurus/Doed_Character_BP_Aberrant.Doed_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 도에디쿠스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Doed_Character_BP_Aberrant_C" },
    { title: "변종 도에디쿠스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Doed_Character_BP_Aberrant_C" },
    { title: "변종 도에디쿠스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Doed_Character_BP_Aberrant_C\" 150" },
    { title: "변종 도에디쿠스 야생 공룡 소환 (SDF)", code: "CHEAT SDF Doed_Aberrant 0 150" },

    //변종 쇠똥구리
    { title: "변종 쇠똥구리 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/DungBeetle/DungBeetle_Character_BP_Aberrant.DungBeetle_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 쇠똥구리 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon DungBeetle_Character_BP_Aberrant_C" },
    { title: "변종 쇠똥구리 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed DungBeetle_Character_BP_Aberrant_C" },
    { title: "변종 쇠똥구리 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"DungBeetle_Character_BP_Aberrant_C\" 150" },
    { title: "변종 쇠똥구리 야생 공룡 소환 (SDF)", code: "CHEAT SDF DungBeetle_Aberrant 0 150" },

    //변종 둔클레오
    { title: "변종 둔클레오 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Dunkleosteus/Dunkle_Character_BP.Dunkle_Character_BP\" 0 0 0 150" },
    { title: "변종 둔클레오 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Dunkle_Character_BP_C" },
    { title: "변종 둔클레오 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Dunkle_Character_BP_C" },
    { title: "변종 둔클레오 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Dunkle_Character_BP_C\" 150" },
    { title: "변종 둔클레오 야생 공룡 소환 (SDF)", code: "CHEAT SDF Dunkle 0 150" },

    //변종 전기뱀장어
    { title: "변종 전기뱀장어 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Eel/Eel_Character_BP.Eel_Character_BP\" 0 0 0 150" },
    { title: "변종 전기뱀장어 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Eel_Character_BP_C" },
    { title: "변종 전기뱀장어 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Eel_Character_BP_C" },
    { title: "변종 전기뱀장어 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Eel_Character_BP_C\" 150" },
    { title: "변종 전기뱀장어 야생 공룡 소환 (SDF)", code: "CHEAT SDF Eel 0 150" },

    //변종 에쿠스
    { title: "변종 에쿠스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Equus/Equus_Character_BP.Equus_Character_BP\" 0 0 0 150" },
    { title: "변종 에쿠스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Equus_Character_BP_C" },
    { title: "변종 에쿠스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Equus_Character_BP_C" },
    { title: "변종 에쿠스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Equus_Character_BP_C\" 150" },
    { title: "변종 에쿠스 야생 공룡 소환 (SDF)", code: "CHEAT SDF Equus 0 150" },

    //변종 기간토피테쿠스
    { title: "변종 기간토피테쿠스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Bigfoot/Bigfoot_Character_BP_Aberrant.Bigfoot_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 기간토피테쿠스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Bigfoot_Character_BP_Aberrant_C" },
    { title: "변종 기간토피테쿠스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Bigfoot_Character_BP_Aberrant_C" },
    { title: "변종 기간토피테쿠스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Bigfoot_Character_BP_Aberrant_C\" 150" },
    { title: "변종 기간토피테쿠스 야생 공룡 소환 (SDF)", code: "CHEAT SDF Bigfoot_Aberrant 0 150" },

    //변종 이구아노돈
    { title: "변종 이구아노돈 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Iguanodon/Iguanodon_Character_BP_Aberrant.Iguanodon_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 이구아노돈 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Iguanodon_Character_BP_Aberrant_C" },
    { title: "변종 이구아노돈 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Iguanodon_Character_BP_Aberrant_C" },
    { title: "변종 이구아노돈 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Iguanodon_Character_BP_Aberrant_C\" 150" },
    { title: "변종 이구아노돈 야생 공룡 소환 (SDF)", code: "CHEAT SDF Iguanodon_Aberrant 0 150" },

    //변종 리스트로사우루스
    { title: "변종 리스트로사우루스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Lystrosaurus/Lystro_Character_BP_Aberrant.Lystro_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 리스트로사우루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Lystro_Character_BP_Aberrant_C" },
    { title: "변종 리스트로사우루스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Lystro_Character_BP_Aberrant_C" },
    { title: "변종 리스트로사우루스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Lystro_Character_BP_Aberrant_C\" 150" },
    { title: "변종 리스트로사우루스 야생 공룡 소환 (SDF)", code: "CHEAT SDF Lystro_Aberrant 0 150" },

    //변종 만타
    { title: "변종 만타 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Manta/Manta_Character_BP_Aberrant.Manta_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 만타 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Manta_Character_BP_Aberrant_C" },
    { title: "변종 만타 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Manta_Character_BP_Aberrant_C" },
    { title: "변종 만타 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Manta_Character_BP_Aberrant_C\" 150" },
    { title: "변종 만타 야생 공룡 소환 (SDF)", code: "CHEAT SDF Manta_Aberrant 0 150" },

    //변종 메갈라니아
    { title: "변종 메갈라니아 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Megalania/Megalania_Character_BP_Aberrant.Megalania_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 메갈라니아 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Megalania_Character_BP_Aberrant_C" },
    { title: "변종 메갈라니아 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Megalania_Character_BP_Aberrant_C" },
    { title: "변종 메갈라니아 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Megalania_Character_BP_Aberrant_C\" 150" },
    { title: "변종 메갈라니아 야생 공룡 소환 (SDF)", code: "CHEAT SDF Megalania_Aberrant 0 150" },

    //변종 메갈로사우루스
    { title: "변종 메갈로사우루스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Megalosaurus/Megalosaurus_Character_BP_Aberrant.Megalosaurus_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 메갈로사우루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Megalosaurus_Character_BP_Aberrant_C" },
    { title: "변종 메갈로사우루스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Megalosaurus_Character_BP_Aberrant_C" },
    { title: "변종 메갈로사우루스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Megalosaurus_Character_BP_Aberrant_C\" 150" },
    { title: "변종 메갈로사우루스 야생 공룡 소환 (SDF)", code: "CHEAT SDF Megalosaurus_Aberrant 0 150" },

    //변종 메가네우라(잠자리)
    { title: "변종 메가네우라(잠자리) 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Dragonfly/Dragonfly_Character_BP_Aberrant.Dragonfly_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 메가네우라(잠자리) 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Dragonfly_Character_BP_Aberrant_C" },
    { title: "변종 메가네우라(잠자리) 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Dragonfly_Character_BP_Aberrant_C" },
    { title: "변종 메가네우라(잠자리) 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Dragonfly_Character_BP_Aberrant_C\" 150" },
    { title: "변종 메가네우라(잠자리) 야생 공룡 소환 (SDF)", code: "CHEAT SDF Dragonfly_Aberrant 0 150" },

    //변종 모스콥스
    { title: "변종 모스콥스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Moschops/Moschops_Character_BP_Aberrant.Moschops_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 모스콥스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Moschops_Character_BP_Aberrant_C" },
    { title: "변종 모스콥스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Moschops_Character_BP_Aberrant_C" },
    { title: "변종 모스콥스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Moschops_Character_BP_Aberrant_C\" 150" },
    { title: "변종 모스콥스 야생 공룡 소환 (SDF)", code: "CHEAT SDF Moschops_Aberrant 0 150" },
    //변종 수달
    { title: "변종 수달 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Otter/Otter_Character_BP_Aberrant.Otter_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 수달 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Otter_Character_BP_Aberrant_C" },
    { title: "변종 수달 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Otter_Character_BP_Aberrant_C" },
    { title: "변종 수달 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Otter_Character_BP_Aberrant_C\" 150" },
    { title: "변종 수달 야생 공룡 소환 (SDF)", code: "CHEAT SDF Otter_Aberrant 0 150" },

    //변종 오비스
    { title: "변종 오비스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Sheep/Sheep_Character_BP_Aberrant.Sheep_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 오비스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Sheep_Character_BP_Aberrant_C" },
    { title: "변종 오비스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Sheep_Character_BP_Aberrant_C" },
    { title: "변종 오비스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Sheep_Character_BP_Aberrant_C\" 150" },
    { title: "변종 오비스 야생 공룡 소환 (SDF)", code: "CHEAT SDF Sheep_Aberrant 0 150" },

    //변종 파라케라테리움
    { title: "변종 파라케라테리움 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Paraceratherium/Paracer_Character_BP_Aberrant.Paracer_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 파라케라테리움 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Paracer_Character_BP_Aberrant_C" },
    { title: "변종 파라케라테리움 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Paracer_Character_BP_Aberrant_C" },
    { title: "변종 파라케라테리움 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Paracer_Character_BP_Aberrant_C\" 150" },
    { title: "변종 파라케라테리움 야생 공룡 소환 (SDF)", code: "CHEAT SDF Paracer_Aberrant 0 150" },

    //변종 파라사우루
    { title: "변종 파라사우루 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Para/Para_Character_BP_Aberrant.Para_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 파라사우루 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Para_Character_BP_Aberrant_C" },
    { title: "변종 파라사우루 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Para_Character_BP_Aberrant_C" },
    { title: "변종 파라사우루 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Para_Character_BP_Aberrant_C\" 150" },
    { title: "변종 파라사우루 야생 공룡 소환 (SDF)", code: "CHEAT SDF Para_Aberrant 0 150" },

    //변종 피라냐
    { title: "변종 피라냐 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Piranha/Piranha_Character_BP_Aberrant.Piranha_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 피라냐 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Piranha_Character_BP_Aberrant_C" },
    { title: "변종 피라냐 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Piranha_Character_BP_Aberrant_C" },
    { title: "변종 피라냐 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Piranha_Character_BP_Aberrant_C\" 150" },
    { title: "변종 피라냐 야생 공룡 소환 (SDF)", code: "CHEAT SDF Piranha_Aberrant 0 150" },

    //변종 펄모노스콜피어스
    { title: "변종 펄모노스콜피어스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Scorpion/Scorpion_Character_BP_Aberrant.Scorpion_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 펄모노스콜피어스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Scorpion_Character_BP_Aberrant_C" },
    { title: "변종 펄모노스콜피어스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Scorpion_Character_BP_Aberrant_C" },
    { title: "변종 펄모노스콜피어스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Scorpion_Character_BP_Aberrant_C\" 150" },
    { title: "변종 펄모노스콜피어스 야생 공룡 소환 (SDF)", code: "CHEAT SDF Scorpion_Aberrant 0 150" },

    //변종 펄로비아
    { title: "변종 펄로비아 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Purlovia/Purlovia_Character_BP_Aberrant.Purlovia_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 펄로비아 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Purlovia_Character_BP_Aberrant_C" },
    { title: "변종 펄로비아 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Purlovia_Character_BP_Aberrant_C" },
    { title: "변종 펄로비아 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Purlovia_Character_BP_Aberrant_C\" 150" },
    { title: "변종 펄로비아 야생 공룡 소환 (SDF)", code: "CHEAT SDF Purlovia_Aberrant 0 150" },

    //변종 랩터
    { title: "변종 랩터 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Raptor/Raptor_Character_BP_Aberrant.Raptor_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 랩터 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Raptor_Character_BP_Aberrant_C" },
    { title: "변종 랩터 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Raptor_Character_BP_Aberrant_C" },
    { title: "변종 랩터 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Raptor_Character_BP_Aberrant_C\" 150" },
    { title: "변종 랩터 야생 공룡 소환 (SDF)", code: "CHEAT SDF Raptor_Aberrant 0 150" },

    //변종 검치연어
    { title: "변종 검치연어 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Salmon/Salmon_Character_Aberrant.Salmon_Character_Aberrant\" 0 0 0 150" },
    { title: "변종 검치연어 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Salmon_Character_Aberrant_C" },
    { title: "변종 검치연어 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Salmon_Character_Aberrant_C" },
    { title: "변종 검치연어 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Salmon_Character_Aberrant_C\" 150" },
    { title: "변종 검치연어 야생 공룡 소환 (SDF)", code: "CHEAT SDF Salmon_Aberrant 0 150" },

    //변종 사르코
    { title: "변종 사르코 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Sarco/Sarco_Character_BP_Aberrant.Sarco_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 사르코 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Sarco_Character_BP_Aberrant_C" },
    { title: "변종 사르코 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Sarco_Character_BP_Aberrant_C" },
    { title: "변종 사르코 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Sarco_Character_BP_Aberrant_C\" 150" },
    { title: "변종 사르코 야생 공룡 소환 (SDF)", code: "CHEAT SDF Sarco_Aberrant 0 150" },

    //변종 스피노
    { title: "변종 스피노 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Spino/Spino_Character_BP_Aberrant.Spino_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 스피노 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Spino_Character_BP_Aberrant_C" },
    { title: "변종 스피노 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Spino_Character_BP_Aberrant_C" },
    { title: "변종 스피노 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Spino_Character_BP_Aberrant_C\" 150" },
    { title: "변종 스피노 야생 공룡 소환 (SDF)", code: "CHEAT SDF Spino_Aberrant 0 150" },

    //변종 스테고
    { title: "변종 스테고 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Stego/Stego_Character_BP_Aberrant.Stego_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 스테고 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Stego_Character_BP_Aberrant_C" },
    { title: "변종 스테고 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Stego_Character_BP_Aberrant_C" },
    { title: "변종 스테고 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Stego_Character_BP_Aberrant_C\" 150" },
    { title: "변종 스테고 야생 공룡 소환 (SDF)", code: "CHEAT SDF Stego_Aberrant 0 150" },

    //변종 티타노보아
    { title: "변종 티타노보아 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/BoaFrill/BoaFrill_Character_BP_Aberrant.BoaFrill_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 티타노보아 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon BoaFrill_Character_BP_Aberrant_C" },
    { title: "변종 티타노보아 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed BoaFrill_Character_BP_Aberrant_C" },
    { title: "변종 티타노보아 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"BoaFrill_Character_BP_Aberrant_C\" 150" },
    { title: "변종 티타노보아 야생 공룡 소환 (SDF)", code: "CHEAT SDF BoaFrill_Aberrant 0 150" },

    //변종 트리케라톱스
    { title: "변종 트리케라톱스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Trike/Trike_Character_BP_Aberrant.Trike_Character_BP_Aberrant\" 0 0 0 150" },
    { title: "변종 트리케라톱스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Trike_Character_BP_Aberrant_C" },
    { title: "변종 트리케라톱스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Trike_Character_BP_Aberrant_C" },
    { title: "변종 트리케라톱스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Trike_Character_BP_Aberrant_C\" 150" },
    { title: "변종 트리케라톱스 야생 공룡 소환 (SDF)", code: "CHEAT SDF Trike_Aberrant 0 150" },

    //변종 삼엽충
    { title: "변종 삼엽충 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Trilobite/Trilobite_Character_Aberrant.Trilobite_Character_Aberrant\" 0 0 0 150" },
    { title: "변종 삼엽충 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Trilobite_Character_Aberrant_C" },
    { title: "변종 삼엽충 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Trilobite_Character_Aberrant_C" },
    { title: "변종 삼엽충 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Trilobite_Character_Aberrant_C\" 150" },
    { title: "변종 삼엽충 야생 공룡 소환 (SDF)", code: "CHEAT SDF Trilobite_Aberrant 0 150" },

    //알파 바실리스크
    { title: "알파 바실리스크 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Dinos/Basilisk/MegaBasilisk_Character_BP.MegaBasilisk_Character_BP\" 0 0 0 150" },
    { title: "알파 바실리스크 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon MegaBasilisk_Character_BP_C" },
    { title: "알파 바실리스크 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed MegaBasilisk_Character_BP_C" },
    { title: "알파 바실리스크 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"MegaBasilisk_Character_BP_C\" 150" },
    { title: "알파 바실리스크 야생 공룡 소환 (SDF)", code: "CHEAT SDF MegaBasilisk 0 150" },

    //알파 카르키노스
    { title: "알파 카르키노스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Dinos/Crab/MegaCrab_Character_BP.MegaCrab_Character_BP\" 0 0 0 150" },
    { title: "알파 카르키노스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon MegaCrab_Character_BP_C" },
    { title: "알파 카르키노스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed MegaCrab_Character_BP_C" },
    { title: "알파 카르키노스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"MegaCrab_Character_BP_C\" 150" },
    { title: "알파 카르키노스 야생 공룡 소환 (SDF)", code: "CHEAT SDF MegaCrab 0 150" },
    //알파 리퍼 킹
    { title: "알파 리퍼 킹 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Dinos/Nameless/MegaXenomorph_Character_BP_Male_Surface.MegaXenomorph_Character_BP_Male_Surface\" 0 0 0 150" },
    { title: "알파 리퍼 킹 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon MegaXenomorph_Character_BP_Male_Surface_C" },
    { title: "알파 리퍼 킹 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed MegaXenomorph_Character_BP_Male_Surface_C" },
    { title: "알파 리퍼 킹 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"MegaXenomorph_Character_BP_Male_Surface_C\" 150" },
    { title: "알파 리퍼 킹 야생 공룡 소환 (SDF)", code: "CHEAT SDF MegaXenomorph 0 150" },

    //바실리스크
    { title: "바실리스크 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Dinos/Basilisk/Basilisk_Character_BP.Basilisk_Character_BP\" 0 0 0 150" },
    { title: "바실리스크 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Basilisk_Character_BP_C" },
    { title: "바실리스크 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Basilisk_Character_BP_C" },
    { title: "바실리스크 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Basilisk_Character_BP_C\" 150" },
    { title: "바실리스크 야생 공룡 소환 (SDF)", code: "CHEAT SDF Basilisk 0 150" },

    //벌브 독
    { title: "벌브 독 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Dinos/LanternPug/LanternPug_Character_BP.LanternPug_Character_BP\" 0 0 0 150" },
    { title: "벌브 독 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon LanternPug_Character_BP_C" },
    { title: "벌브 독 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed LanternPug_Character_BP_C" },
    { title: "벌브 독 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"LanternPug_Character_BP_C\" 150" },
    { title: "벌브 독 야생 공룡 소환 (SDF)", code: "CHEAT SDF LanternPug 0 150" },

    //페더라이트
    { title: "페더라이트 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Dinos/LanternBird/LanternBird_Character_BP.LanternBird_Character_BP\" 0 0 0 150" },
    { title: "페더라이트 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon LanternBird_Character_BP_C" },
    { title: "페더라이트 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed LanternBird_Character_BP_C" },
    { title: "페더라이트 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"LanternBird_Character_BP_C\" 150" },
    { title: "페더라이트 야생 공룡 소환 (SDF)", code: "CHEAT SDF LanternBird 0 150" },

    //빛벌레
    { title: "빛벌레 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Dinos/Lightbug/Lightbug_Character_BaseBP.Lightbug_Character_BaseBP\" 0 0 0 150" },
    { title: "빛벌레 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Lightbug_Character_BaseBP_C" },
    { title: "빛벌레 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Lightbug_Character_BaseBP_C" },
    { title: "빛벌레 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Lightbug_Character_BaseBP_C\" 150" },
    { title: "빛벌레 야생 공룡 소환 (SDF)", code: "CHEAT SDF Lightbug 0 150" },

    //글로우테일
    { title: "글로우테일 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Dinos/LanternLizard/LanternLizard_Character_BP.LanternLizard_Character_BP\" 0 0 0 150" },
    { title: "글로우테일 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon LanternLizard_Character_BP_C" },
    { title: "글로우테일 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed LanternLizard_Character_BP_C" },
    { title: "글로우테일 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"LanternLizard_Character_BP_C\" 150" },
    { title: "글로우테일 야생 공룡 소환 (SDF)", code: "CHEAT SDF LanternLizard 0 150" },

    //카르키노스
    { title: "카르키노스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Dinos/Crab/Crab_Character_BP.Crab_Character_BP\" 0 0 0 150" },
    { title: "카르키노스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Crab_Character_BP_C" },
    { title: "카르키노스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Crab_Character_BP_C" },
    { title: "카르키노스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Crab_Character_BP_C\" 150" },
    { title: "카르키노스 야생 공룡 소환 (SDF)", code: "CHEAT SDF Crab 0 150" },

    //칠성장어
    { title: "칠성장어 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Dinos/Lamprey/Lamprey_Character.Lamprey_Character\" 0 0 0 150" },
    { title: "칠성장어 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Lamprey_Character_C" },
    { title: "칠성장어 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Lamprey_Character_C" },
    { title: "칠성장어 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Lamprey_Character_C\" 150" },
    { title: "칠성장어 야생 공룡 소환 (SDF)", code: "CHEAT SDF Lamprey 0 150" },

    //네임리스
    { title: "네임리스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Dinos/ChupaCabra/ChupaCabra_Character_BP.ChupaCabra_Character_BP\" 0 0 0 150" },
    { title: "네임리스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon ChupaCabra_Character_BP_C" },
    { title: "네임리스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed ChupaCabra_Character_BP_C" },
    { title: "네임리스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"ChupaCabra_Character_BP_C\" 150" },
    { title: "네임리스 야생 공룡 소환 (SDF)", code: "CHEAT SDF ChupaCabra 0 150" },

    //네임리스 퀸
    { title: "네임리스 퀸 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Dinos/Nameless/Xenomorph_Character_BP.Xenomorph_Character_BP\" 0 0 0 150" },
    { title: "네임리스 퀸 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Xenomorph_Character_BP_C" },
    { title: "네임리스 퀸 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Xenomorph_Character_BP_C" },
    { title: "네임리스 퀸 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Xenomorph_Character_BP_C\" 150" },
    { title: "네임리스 퀸 야생 공룡 소환 (SDF)", code: "CHEAT SDF Xenomorph 0 150" },

    //레비져
    { title: "레비져 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Dinos/CaveWolf/CaveWolf_Character_BP.CaveWolf_Character_BP\" 0 0 0 150" },
    { title: "레비져 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon CaveWolf_Character_BP_C" },
    { title: "레비져 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed CaveWolf_Character_BP_C" },
    { title: "레비져 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"CaveWolf_Character_BP_C\" 150" },
    { title: "레비져 야생 공룡 소환 (SDF)", code: "CHEAT SDF CaveWolf 0 150" },

    //리퍼 킹
    { title: "리퍼 킹 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Dinos/Nameless/Xenomorph_Character_BP_Male_Tamed.Xenomorph_Character_BP_Male_Tamed\" 0 0 0 150" },
    { title: "리퍼 킹 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Xenomorph_Character_BP_Male_Tamed_C" },
    { title: "리퍼 킹 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Xenomorph_Character_BP_Male_Tamed_C" },
    { title: "리퍼 킹 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Xenomorph_Character_BP_Male_Tamed_C\" 150" },
    { title: "리퍼 킹 야생 공룡 소환 (SDF)", code: "CHEAT SDF Xenomorph_Male_Tamed 0 150" },
    //리퍼 퀸
    { title: "리퍼 퀸 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Dinos/Nameless/Xenomorph_Character_BP_Female.Xenomorph_Character_BP_Female\" 0 0 0 150" },
    { title: "리퍼 퀸 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Xenomorph_Character_BP_Female_C" },
    { title: "리퍼 퀸 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Xenomorph_Character_BP_Female_C" },
    { title: "리퍼 퀸 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Xenomorph_Character_BP_Female_C\" 150" },
    { title: "리퍼 퀸 야생 공룡 소환 (SDF)", code: "CHEAT SDF Xenomorph_Female 0 150" },

    //락 드레이크
    { title: "락 드레이크 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Dinos/RockDrake/RockDrake_Character_BP.RockDrake_Character_BP\" 0 0 0 150" },
    { title: "락 드레이크 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon RockDrake_Character_BP_C" },
    { title: "락 드레이크 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed RockDrake_Character_BP_C" },
    { title: "락 드레이크 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"RockDrake_Character_BP_C\" 150" },
    { title: "락 드레이크 야생 공룡 소환 (SDF)", code: "CHEAT SDF RockDrake 0 150" },

    //로크웰
    { title: "로크웰 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Boss/Rockwell/Rockwell_Character_BP.Rockwell_Character_BP\" 0 0 0 150" },
    { title: "로크웰 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Rockwell_Character_BP_C" },
    { title: "로크웰 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Rockwell_Character_BP_C\" 150" },
    { title: "로크웰 야생 소환 (SDF)", code: "CHEAT SDF Rockwell 0 150" },

    //로크웰(알파)
    { title: "로크웰(알파) 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Boss/Rockwell/Rockwell_Character_BP_Hard.Rockwell_Character_BP_Hard\" 0 0 0 150" },
    { title: "로크웰(알파) 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Rockwell_Character_BP_Hard_C" },
    { title: "로크웰(알파) 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Rockwell_Character_BP_Hard_C\" 150" },
    { title: "로크웰(알파) 야생 소환 (SDF)", code: "CHEAT SDF Rockwell_Hard 0 150" },

    //로크웰(베타)
    { title: "로크웰(베타) 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Boss/Rockwell/Rockwell_Character_BP_Medium.Rockwell_Character_BP_Medium\" 0 0 0 150" },
    { title: "로크웰(베타) 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Rockwell_Character_BP_Medium_C" },
    { title: "로크웰(베타) 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Rockwell_Character_BP_Medium_C\" 150" },
    { title: "로크웰(베타) 야생 소환 (SDF)", code: "CHEAT SDF Rockwell_Medium 0 150" },

    //로크웰(감마)
    { title: "로크웰(감마) 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Boss/Rockwell/Rockwell_Character_BP_Easy.Rockwell_Character_BP_Easy\" 0 0 0 150" },
    { title: "로크웰(감마) 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Rockwell_Character_BP_Easy_C" },
    { title: "로크웰(감마) 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Rockwell_Character_BP_Easy_C\" 150" },
    { title: "로크웰(감마) 야생 소환 (SDF)", code: "CHEAT SDF Rockwell_Easy 0 150" },

    //롤 렛
    { title: "롤 렛 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Dinos/MoleRat/MoleRat_Character_BP.MoleRat_Character_BP\" 0 0 0 150" },
    { title: "롤 렛 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon MoleRat_Character_BP_C" },
    { title: "롤 렛 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed MoleRat_Character_BP_C" },
    { title: "롤 렛 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"MoleRat_Character_BP_C\" 150" },
    { title: "롤 렛 야생 공룡 소환 (SDF)", code: "CHEAT SDF MoleRat 0 150" },

    //씨커
    { title: "씨커 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Dinos/Pteroteuthis/Pteroteuthis_Char_BP.Pteroteuthis_Char_BP\" 0 0 0 150" },
    { title: "씨커 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Pteroteuthis_Char_BP_C" },
    { title: "씨커 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Pteroteuthis_Char_BP_C" },
    { title: "씨커 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Pteroteuthis_Char_BP_C\" 150" },
    { title: "씨커 야생 공룡 소환 (SDF)", code: "CHEAT SDF Pteroteuthis 0 150" },

    //샤이니 혼
    { title: "샤이니 혼 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Dinos/LanternGoat/LanternGoat_Character_BP.LanternGoat_Character_BP\" 0 0 0 150" },
    { title: "샤이니 혼 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon LanternGoat_Character_BP_C" },
    { title: "샤이니 혼 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed LanternGoat_Character_BP_C" },
    { title: "샤이니 혼 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"LanternGoat_Character_BP_C\" 150" },
    { title: "샤이니 혼 야생 공룡 소환 (SDF)", code: "CHEAT SDF LanternGoat 0 150" },
    //알파 킹 타이탄
    { title: "알파 킹 타이탄 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/KingKaiju/KingKaiju_Character_BP_Alpha.KingKaiju_Character_BP_Alpha\" 0 0 0 150" },
    { title: "알파 킹 타이탄 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon KingKaiju_Character_BP_Alpha_C" },
    { title: "알파 킹 타이탄 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed KingKaiju_Character_BP_Alpha_C" },
    { title: "알파 킹 타이탄 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"KingKaiju_Character_BP_Alpha_C\" 150" },
    { title: "알파 킹 타이탄 야생 소환 (SDF)", code: "CHEAT SDF KingKaiju_Alpha 0 150" },

    //베타 킹 타이탄
    { title: "베타 킹 타이탄 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/KingKaiju/KingKaiju_Character_BP_Beta.KingKaiju_Character_BP_Beta\" 0 0 0 150" },
    { title: "베타 킹 타이탄 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon KingKaiju_Character_BP_Beta_C" },
    { title: "베타 킹 타이탄 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed KingKaiju_Character_BP_Beta_C" },
    { title: "베타 킹 타이탄 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"KingKaiju_Character_BP_Beta_C\" 150" },
    { title: "베타 킹 타이탄 야생 소환 (SDF)", code: "CHEAT SDF KingKaiju_Beta 0 150" },

    //감마 킹 타이탄
    { title: "감마 킹 타이탄 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/KingKaiju/KingKaiju_Character_BP.KingKaiju_Character_BP\" 0 0 0 150" },
    { title: "감마 킹 타이탄 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon KingKaiju_Character_BP_C" },
    { title: "감마 킹 타이탄 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed KingKaiju_Character_BP_C" },
    { title: "감마 킹 타이탄 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"KingKaiju_Character_BP_C\" 150" },
    { title: "감마 킹 타이탄 야생 소환 (SDF)", code: "CHEAT SDF KingKaiju 0 150" },

    //Corrupt Tumor
    { title: "Corrupt Tumor 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/KingKaiju/CorruptTumor_Character_BP.CorruptTumor_Character_BP\" 0 0 0 150" },
    { title: "Corrupt Tumor 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon CorruptTumor_Character_BP_C" },
    { title: "Corrupt Tumor 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed CorruptTumor_Character_BP_C" },
    { title: "Corrupt Tumor 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"CorruptTumor_Character_BP_C\" 150" },
    { title: "Corrupt Tumor 야생 소환 (SDF)", code: "CHEAT SDF CorruptTumor 0 150" },

    //오염된 아트로플레우라
    { title: "오염된 아트로플레우라 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Corrupt/Arthropluera/Arthro_Character_BP_Corrupt.Arthro_Character_BP_Corrupt\" 0 0 0 150" },
    { title: "오염된 아트로플레우라 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Arthro_Character_BP_Corrupt_C" },
    { title: "오염된 아트로플레우라 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Arthro_Character_BP_Corrupt_C" },
    { title: "오염된 아트로플레우라 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Arthro_Character_BP_Corrupt_C\" 150" },
    { title: "오염된 아트로플레우라 야생 소환 (SDF)", code: "CHEAT SDF Arthro_Corrupt 0 150" },

    //오염된 카르노타우루스
    { title: "오염된 카르노타우루스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Corrupt/Carno/Carno_Character_BP_Corrupt.Carno_Character_BP_Corrupt\" 0 0 0 150" },
    { title: "오염된 카르노타우루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Carno_Character_BP_Corrupt_C" },
    { title: "오염된 카르노타우루스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Carno_Character_BP_Corrupt_C" },
    { title: "오염된 카르노타우루스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Carno_Character_BP_Corrupt_C\" 150" },
    { title: "오염된 카르노타우루스 야생 소환 (SDF)", code: "CHEAT SDF Carno_Corrupt 0 150" },

    //오염된 칼리코테리움
    { title: "오염된 칼리코테리움 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Corrupt/Chalicotherium/Chalico_Character_BP_Corrupt.Chalico_Character_BP_Corrupt\" 0 0 0 150" },
    { title: "오염된 칼리코테리움 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Chalico_Character_BP_Corrupt_C" },
    { title: "오염된 칼리코테리움 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Chalico_Character_BP_Corrupt_C" },
    { title: "오염된 칼리코테리움 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Chalico_Character_BP_Corrupt_C\" 150" },
    { title: "오염된 칼리코테리움 야생 소환 (SDF)", code: "CHEAT SDF Chalico_Corrupt 0 150" },

    //오염된 딜로포사우루스
    { title: "오염된 딜로포사우루스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Corrupt/Dilo/Dilo_Character_BP_Corrupt.Dilo_Character_BP_Corrupt\" 0 0 0 150" },
    { title: "오염된 딜로포사우루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Dilo_Character_BP_Corrupt_C" },
    { title: "오염된 딜로포사우루스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Dilo_Character_BP_Corrupt_C" },
    { title: "오염된 딜로포사우루스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Dilo_Character_BP_Corrupt_C\" 150" },
    { title: "오염된 딜로포사우루스 야생 소환 (SDF)", code: "CHEAT SDF Dilo_Corrupt 0 150" },

    //오염된 디몰포돈
    { title: "오염된 디몰포돈 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Corrupt/Dimorphodon/Dimorph_Character_BP_Corrupt.Dimorph_Character_BP_Corrupt\" 0 0 0 150" },
    { title: "오염된 디몰포돈 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Dimorph_Character_BP_Corrupt_C" },
    { title: "오염된 디몰포돈 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Dimorph_Character_BP_Corrupt_C" },
    { title: "오염된 디몰포돈 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Dimorph_Character_BP_Corrupt_C\" 150" },
    { title: "오염된 디몰포돈 야생 소환 (SDF)", code: "CHEAT SDF Dimorph_Corrupt 0 150" },

    //오염된 기가노토사우루스
    { title: "오염된 기가노토사우루스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Corrupt/Giganotosaurus/Gigant_Character_BP_Corrupt.Gigant_Character_BP_Corrupt\" 0 0 0 150" },
    { title: "오염된 기가노토사우루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Gigant_Character_BP_Corrupt_C" },
    { title: "오염된 기가노토사우루스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Gigant_Character_BP_Corrupt_C" },
    { title: "오염된 기가노토사우루스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Gigant_Character_BP_Corrupt_C\" 150" },
    { title: "오염된 기가노토사우루스 야생 소환 (SDF)", code: "CHEAT SDF Gigant_Corrupt 0 150" },

    //오염된 파라케라테리움
    { title: "오염된 파라케라테리움 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Corrupt/Paraceratherium/Paracer_Character_BP_Corrupt.Paracer_Character_BP_Corrupt\" 0 0 0 150" },
    { title: "오염된 파라케라테리움 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Paracer_Character_BP_Corrupt_C" },
    { title: "오염된 파라케라테리움 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Paracer_Character_BP_Corrupt_C" },
    { title: "오염된 파라케라테리움 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Paracer_Character_BP_Corrupt_C\" 150" },
    { title: "오염된 파라케라테리움 야생 소환 (SDF)", code: "CHEAT SDF Paracer_Corrupt 0 150" },
    //오염된 프테라노돈
    { title: "오염된 프테라노돈 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Corrupt/Ptero/Ptero_Character_BP_Corrupt.Ptero_Character_BP_Corrupt\" 0 0 0 150" },
    { title: "오염된 프테라노돈 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Ptero_Character_BP_Corrupt_C" },
    { title: "오염된 프테라노돈 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Ptero_Character_BP_Corrupt_C" },
    { title: "오염된 프테라노돈 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Ptero_Character_BP_Corrupt_C\" 150" },
    { title: "오염된 프테라노돈 야생 공룡 소환 (SDF)", code: "CHEAT SDF Ptero_Corrupt 0 150" },

    //오염된 랩터
    { title: "오염된 랩터 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Corrupt/Raptor/Raptor_Character_BP_Corrupt.Raptor_Character_BP_Corrupt\" 0 0 0 150" },
    { title: "오염된 랩터 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Raptor_Character_BP_Corrupt_C" },
    { title: "오염된 랩터 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Raptor_Character_BP_Corrupt_C" },
    { title: "오염된 랩터 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Raptor_Character_BP_Corrupt_C\" 150" },
    { title: "오염된 랩터 야생 공룡 소환 (SDF)", code: "CHEAT SDF Raptor_Corrupt 0 150" },

    //오염된 리퍼 킹
    { title: "오염된 리퍼 킹 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Corrupt/Nameless/Xenomorph_Character_BP_Male_Tamed_Corrupt.Xenomorph_Character_BP_Male_Tamed_Corrupt\" 0 0 0 150" },
    { title: "오염된 리퍼 킹 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Xenomorph_Character_BP_Male_Tamed_Corrupt_C" },
    { title: "오염된 리퍼 킹 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Xenomorph_Character_BP_Male_Tamed_Corrupt_C" },
    { title: "오염된 리퍼 킹 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Xenomorph_Character_BP_Male_Tamed_Corrupt_C\" 150" },
    { title: "오염된 리퍼 킹 야생 공룡 소환 (SDF)", code: "CHEAT SDF Xenomorph_Male_Corrupt 0 150" },

    //오염된 렉스
    { title: "오염된 렉스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Corrupt/Rex/Rex_Character_BP_Corrupt.Rex_Character_BP_Corrupt\" 0 0 0 150" },
    { title: "오염된 렉스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Rex_Character_BP_Corrupt_C" },
    { title: "오염된 렉스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Rex_Character_BP_Corrupt_C" },
    { title: "오염된 렉스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Rex_Character_BP_Corrupt_C\" 150" },
    { title: "오염된 렉스 야생 공룡 소환 (SDF)", code: "CHEAT SDF Rex_Corrupt 0 150" },

    //오염된 락 드레이크
    { title: "오염된 락 드레이크 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Corrupt/RockDrake/RockDrake_Character_BP_Corrupt.RockDrake_Character_BP_Corrupt\" 0 0 0 150" },
    { title: "오염된 락 드레이크 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon RockDrake_Character_BP_Corrupt_C" },
    { title: "오염된 락 드레이크 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed RockDrake_Character_BP_Corrupt_C" },
    { title: "오염된 락 드레이크 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"RockDrake_Character_BP_Corrupt_C\" 150" },
    { title: "오염된 락 드레이크 야생 공룡 소환 (SDF)", code: "CHEAT SDF RockDrake_Corrupt 0 150" },

    //오염된 스피노
    { title: "오염된 스피노 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Corrupt/Spino/Spino_Character_BP_Corrupt.Spino_Character_BP_Corrupt\" 0 0 0 150" },
    { title: "오염된 스피노 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Spino_Character_BP_Corrupt_C" },
    { title: "오염된 스피노 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Spino_Character_BP_Corrupt_C" },
    { title: "오염된 스피노 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Spino_Character_BP_Corrupt_C\" 150" },
    { title: "오염된 스피노 야생 공룡 소환 (SDF)", code: "CHEAT SDF Spino_Corrupt 0 150" },

    //오염된 스테고사우루스
    { title: "오염된 스테고사우루스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Corrupt/Stego/Stego_Character_BP_Corrupt.Stego_Character_BP_Corrupt\" 0 0 0 150" },
    { title: "오염된 스테고사우루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Stego_Character_BP_Corrupt_C" },
    { title: "오염된 스테고사우루스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Stego_Character_BP_Corrupt_C" },
    { title: "오염된 스테고사우루스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Stego_Character_BP_Corrupt_C\" 150" },
    { title: "오염된 스테고사우루스 야생 공룡 소환 (SDF)", code: "CHEAT SDF Stego_Corrupt 0 150" },

    //오염된 트리케라톱스
    { title: "오염된 트리케라톱스 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Corrupt/Trike/Trike_Character_BP_Corrupt.Trike_Character_BP_Corrupt\" 0 0 0 150" },
    { title: "오염된 트리케라톱스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Trike_Character_BP_Corrupt_C" },
    { title: "오염된 트리케라톱스 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Trike_Character_BP_Corrupt_C" },
    { title: "오염된 트리케라톱스 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Trike_Character_BP_Corrupt_C\" 150" },
    { title: "오염된 트리케라톱스 야생 공룡 소환 (SDF)", code: "CHEAT SDF Trike_Corrupt 0 150" },

    //디펜스 유닛
    { title: "디펜스 유닛 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Tank/Defender_Character_BP.Defender_Character_BP\" 0 0 0 150" },
    { title: "디펜스 유닛 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Defender_Character_BP_C" },
    { title: "디펜스 유닛 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Defender_Character_BP_C" },
    { title: "디펜스 유닛 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Defender_Character_BP_C\" 150" },
    { title: "디펜스 유닛 야생 공룡 소환 (SDF)", code: "CHEAT SDF Defender 0 150" },

    //데저트 타이탄
    { title: "데저트 타이탄 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/DesertKaiju/DesertKaiju_Character_BP.DesertKaiju_Character_BP\" 0 0 0 150" },
    { title: "데저트 타이탄 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon DesertKaiju_Character_BP_C" },
    { title: "데저트 타이탄 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed DesertKaiju_Character_BP_C" },
    { title: "데저트 타이탄 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"DesertKaiju_Character_BP_C\" 150" },
    { title: "데저트 타이탄 야생 소환 (SDF)", code: "CHEAT SDF DesertKaiju 0 150" },

    //앤포서
    { title: "앤포서 야생 공룡 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Enforcer/Enforcer_Character_BP.Enforcer_Character_BP\" 0 0 0 150" },
    { title: "앤포서 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Enforcer_Character_BP_C" },
    { title: "앤포서 길들인 공룡 소환 (SummonTamed)", code: "CHEAT SummonTamed Enforcer_Character_BP_C" },
    { title: "앤포서 레벨 150 공룡 소환 (GMSummon)", code: "CHEAT GMSummon \"Enforcer_Character_BP_C\" 150" },
    { title: "앤포서 야생 공룡 소환 (SDF)", code: "CHEAT SDF Enforcer 0 150" },

    //Enraged corrupted Rex
    { title: "Enraged corrupted Rex 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Corrupt/Rex/MegaRex_Character_BP_Corrupt.MegaRex_Character_BP_Corrupt\" 0 0 0 150" },
    { title: "Enraged corrupted Rex 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon MegaRex_Character_BP_Corrupt_C" },
    { title: "Enraged corrupted Rex 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed MegaRex_Character_BP_Corrupt_C" },
    { title: "Enraged corrupted Rex 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"MegaRex_Character_BP_Corrupt_C\" 150" },
    { title: "Enraged corrupted Rex 야생 소환 (SDF)", code: "CHEAT SDF MegaRex_Corrupt 0 150" },

    //Enraged Triceratops
    { title: "Enraged Triceratops 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Corrupt/Trike/MegaTrike_Character_BP_Corrupt.MegaTrike_Character_BP_Corrupt\" 0 0 0 150" },
    { title: "Enraged Triceratops 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon MegaTrike_Character_BP_Corrupt_C" },
    { title: "Enraged Triceratops 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed MegaTrike_Character_BP_Corrupt_C" },
    { title: "Enraged Triceratops 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"MegaTrike_Character_BP_Corrupt_C\" 150" },
    { title: "Enraged Triceratops 야생 소환 (SDF)", code: "CHEAT SDF MegaTrike_Corrupt 0 150" },
    //포레스트 타이탄
    { title: "포레스트 타이탄 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/ForestKaiju/ForestKaiju_Character_BP.ForestKaiju_Character_BP\" 0 0 0 150" },
    { title: "포레스트 타이탄 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon ForestKaiju_Character_BP_C" },
    { title: "포레스트 타이탄 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed ForestKaiju_Character_BP_C" },
    { title: "포레스트 타이탄 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"ForestKaiju_Character_BP_C\" 150" },
    { title: "포레스트 타이탄 야생 소환 (SDF)", code: "CHEAT SDF ForestKaiju 0 150" },

    //포레스트 와이번
    { title: "포레스트 와이번 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/ForestKaiju/Minion/Wyvern_Character_BP_Fire_Minion.Wyvern_Character_BP_Fire_Minion\" 0 0 0 150" },
    { title: "포레스트 와이번 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Wyvern_Character_BP_Fire_Minion_C" },
    { title: "포레스트 와이번 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Wyvern_Character_BP_Fire_Minion_C" },
    { title: "포레스트 와이번 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Wyvern_Character_BP_Fire_Minion_C\" 150" },
    { title: "포레스트 와이번 야생 소환 (SDF)", code: "CHEAT SDF Wyvern_Fire_Minion 0 150" },

    //가챠
    { title: "가챠 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Gacha/Gacha_Character_BP.Gacha_Character_BP\" 0 0 0 150" },
    { title: "가챠 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Gacha_Character_BP_C" },
    { title: "가챠 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Gacha_Character_BP_C" },
    { title: "가챠 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Gacha_Character_BP_C\" 150" },
    { title: "가챠 야생 소환 (SDF)", code: "CHEAT SDF Gacha 0 150" },

    //아이스 타이탄
    { title: "아이스 타이탄 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/IceKaiju/IceKaiju_Character_BP.IceKaiju_Character_BP\" 0 0 0 150" },
    { title: "아이스 타이탄 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon IceKaiju_Character_BP_C" },
    { title: "아이스 타이탄 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed IceKaiju_Character_BP_C" },
    { title: "아이스 타이탄 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"IceKaiju_Character_BP_C\" 150" },
    { title: "아이스 타이탄 야생 소환 (SDF)", code: "CHEAT SDF IceKaiju 0 150" },

    //마나 가르마
    { title: "마나 가르마 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/IceJumper/IceJumper_Character_BP.IceJumper_Character_BP\" 0 0 0 150" },
    { title: "마나 가르마 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon IceJumper_Character_BP_C" },
    { title: "마나 가르마 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed IceJumper_Character_BP_C" },
    { title: "마나 가르마 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"IceJumper_Character_BP_C\" 150" },
    { title: "마나 가르마 야생 소환 (SDF)", code: "CHEAT SDF IceJumper 0 150" },

    //메가 멕 (mega mek)
    { title: "메가 멕 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Mek/MegaMek_Character_BP.MegaMek_Character_BP\" 0 0 0 150" },
    { title: "메가 멕 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon MegaMek_Character_BP_C" },
    { title: "메가 멕 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed MegaMek_Character_BP_C" },
    { title: "메가 멕 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"MegaMek_Character_BP_C\" 150" },
    { title: "메가 멕 야생 소환 (SDF)", code: "CHEAT SDF MegaMek 0 150" },

    //멕 (mek)
    { title: "멕 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Mek/Mek_Character_BP.Mek_Character_BP\" 0 0 0 150" },
    { title: "멕 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Mek_Character_BP_C" },
    { title: "멕 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Mek_Character_BP_C" },
    { title: "멕 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Mek_Character_BP_C\" 150" },
    { title: "멕 야생 소환 (SDF)", code: "CHEAT SDF Mek 0 150" },

    //스카우트
    { title: "스카우트 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Scout/Scout_Character_BP.Scout_Character_BP\" 0 0 0 150" },
    { title: "스카우트 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Scout_Character_BP_C" },
    { title: "스카우트 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Scout_Character_BP_C" },
    { title: "스카우트 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Scout_Character_BP_C\" 150" },
    { title: "스카우트 야생 소환 (SDF)", code: "CHEAT SDF Scout 0 150" },

    //눈올빼미
    { title: "눈올빼미 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Owl/Owl_Character_BP.Owl_Character_BP\" 0 0 0 150" },
    { title: "눈올빼미 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Owl_Character_BP_C" },
    { title: "눈올빼미 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Owl_Character_BP_C" },
    { title: "눈올빼미 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Owl_Character_BP_C\" 150" },
    { title: "눈올빼미 야생 소환 (SDF)", code: "CHEAT SDF Owl 0 150" },

    //벨로나사우루스
    { title: "벨로나사우루스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Spindles/Spindles_Character_BP.Spindles_Character_BP\" 0 0 0 150" },
    { title: "벨로나사우루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Spindles_Character_BP_C" },
    { title: "벨로나사우루스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Spindles_Character_BP_C" },
    { title: "벨로나사우루스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Spindles_Character_BP_C\" 150" },
    { title: "벨로나사우루스 야생 소환 (SDF)", code: "CHEAT SDF Spindles 0 150" },

    //오염된 와이번
    { title: "오염된 와이번 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/Corrupt/Wyvern/Wyvern_Character_BP_Fire_Corrupt.Wyvern_Character_BP_Fire_Corrupt\" 0 0 0 150" },
    { title: "오염된 와이번 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Wyvern_Character_BP_Fire_Corrupt_C" },
    { title: "오염된 와이번 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Wyvern_Character_BP_Fire_Corrupt_C" },
    { title: "오염된 와이번 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Wyvern_Character_BP_Fire_Corrupt_C\" 150" },
    { title: "오염된 와이번 야생 소환 (SDF)", code: "CHEAT SDF Wyvern_Fire_Corrupt 0 150" },

    //가스백
    { title: "가스백 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Extinction/Dinos/GasBag/GasBags_Character_BP.GasBags_Character_BP\" 0 0 0 150" },
    { title: "가스백 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon GasBags_Character_BP_C" },
    { title: "가스백 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed GasBags_Character_BP_C" },
    { title: "가스백 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"GasBags_Character_BP_C\" 150" },
    { title: "가스백 야생 소환 (SDF)", code: "CHEAT SDF GasBags 0 150" },
    //백악 골렘
    { title: "백악 골렘 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Mods/Valguero/Assets/Dinos/RockGolem/ChalkGolem/ChalkGolem_Character_BP.ChalkGolem_Character_BP\" 0 0 0 150" },
    { title: "백악 골렘 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon ChalkGolem_Character_BP_C" },
    { title: "백악 골렘 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed ChalkGolem_Character_BP_C" },
    { title: "백악 골렘 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"ChalkGolem_Character_BP_C\" 150" },
    { title: "백악 골렘 야생 소환 (SDF)", code: "CHEAT SDF ChalkGolem 0 150" },

    //데이노니쿠스
    { title: "데이노니쿠스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Raptor/Uberraptor/Deinonychus_Character_BP.Deinonychus_Character_BP\" 0 0 0 150" },
    { title: "데이노니쿠스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Deinonychus_Character_BP_C" },
    { title: "데이노니쿠스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Deinonychus_Character_BP_C" },
    { title: "데이노니쿠스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Deinonychus_Character_BP_C\" 150" },
    { title: "데이노니쿠스 야생 소환 (SDF)", code: "CHEAT SDF Deinonychus 0 150" },

    //얼음 골렘
    { title: "얼음 골렘 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Mods/Valguero/Assets/Dinos/RockGolem/IceGolem/IceGolem_Character_BP.IceGolem_Character_BP\" 0 0 0 150" },
    { title: "얼음 골렘 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon IceGolem_Character_BP_C" },
    { title: "얼음 골렘 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed IceGolem_Character_BP_C" },
    { title: "얼음 골렘 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"IceGolem_Character_BP_C\" 150" },
    { title: "얼음 골렘 야생 소환 (SDF)", code: "CHEAT SDF IceGolem 0 150" },

    //Corrupted Master Controller
    { title: "Corrupted Master Controller 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/VRMainBoss/VRMainBoss_Character.VRMainBoss_Character\" 0 0 0 150" },
    { title: "Corrupted Master Controller 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon VRMainBoss_Character_C" },
    { title: "Corrupted Master Controller 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed VRMainBoss_Character_C" },
    { title: "Corrupted Master Controller 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"VRMainBoss_Character_C\" 150" },
    { title: "Corrupted Master Controller 야생 소환 (SDF)", code: "CHEAT SDF VRMainBoss 0 150" },

    //Alpha Corrupted Master Controller
    { title: "Alpha Corrupted Master Controller 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/VRMainBoss/VRMainBoss_Character_Hard.VRMainBoss_Character_Hard\" 0 0 0 150" },
    { title: "Alpha Corrupted Master Controller 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon VRMainBoss_Character_Hard_C" },
    { title: "Alpha Corrupted Master Controller 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed VRMainBoss_Character_Hard_C" },
    { title: "Alpha Corrupted Master Controller 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"VRMainBoss_Character_Hard_C\" 150" },
    { title: "Alpha Corrupted Master Controller 야생 소환 (SDF)", code: "CHEAT SDF VRMainBoss_Hard 0 150" },

    //Beta Corrupted Master Controller
    { title: "Beta Corrupted Master Controller 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/VRMainBoss/VRMainBoss_Character_Medium.VRMainBoss_Character_Medium\" 0 0 0 150" },
    { title: "Beta Corrupted Master Controller 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon VRMainBoss_Character_Medium_C" },
    { title: "Beta Corrupted Master Controller 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed VRMainBoss_Character_Medium_C" },
    { title: "Beta Corrupted Master Controller 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"VRMainBoss_Character_Medium_C\" 150" },
    { title: "Beta Corrupted Master Controller 야생 소환 (SDF)", code: "CHEAT SDF VRMainBoss_Medium 0 150" },

    //Gamma Corrupted Master Controller
    { title: "Gamma Corrupted Master Controller 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/VRMainBoss/VRMainBoss_Character_Easy.VRMainBoss_Character_Easy\" 0 0 0 150" },
    { title: "Gamma Corrupted Master Controller 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon VRMainBoss_Character_Easy_C" },
    { title: "Gamma Corrupted Master Controller 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed VRMainBoss_Character_Easy_C" },
    { title: "Gamma Corrupted Master Controller 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"VRMainBoss_Character_Easy_C\" 150" },
    { title: "Gamma Corrupted Master Controller 야생 소환 (SDF)", code: "CHEAT SDF VRMainBoss_Easy 0 150" },

    //Moeder, Master of the Ocean
    { title: "Moeder, Master of the Ocean 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Game/Genesis/Dinos/EelBoss/EelBoss_Character_BP.EelBoss_Character_BP\" 0 0 0 150" },
    { title: "Moeder, Master of the Ocean 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon EelBoss_Character_BP_C" },
    { title: "Moeder, Master of the Ocean 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed EelBoss_Character_BP_C" },
    { title: "Moeder, Master of the Ocean 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"EelBoss_Character_BP_C\" 150" },
    { title: "Moeder, Master of the Ocean 야생 소환 (SDF)", code: "CHEAT SDF EelBoss 0 150" },

    //Alpha Moeder, Master of the Ocean
    { title: "Alpha Moeder, Master of the Ocean 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/EelBoss/EelBoss_Character_BP_Hard.EelBoss_Character_BP_Hard\" 0 0 0 150" },
    { title: "Alpha Moeder, Master of the Ocean 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon EelBoss_Character_BP_Hard_C" },
    { title: "Alpha Moeder, Master of the Ocean 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed EelBoss_Character_BP_Hard_C" },
    { title: "Alpha Moeder, Master of the Ocean 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"EelBoss_Character_BP_Hard_C\" 150" },
    { title: "Alpha Moeder, Master of the Ocean 야생 소환 (SDF)", code: "CHEAT SDF EelBoss_Hard 0 150" },

    //Beta Moeder, Master of the Ocean
    { title: "Beta Moeder, Master of the Ocean 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/EelBoss/EelBoss_Character_BP_Medium.EelBoss_Character_BP_Medium\" 0 0 0 150" },
    { title: "Beta Moeder, Master of the Ocean 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon EelBoss_Character_BP_Medium_C" },
    { title: "Beta Moeder, Master of the Ocean 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed EelBoss_Character_BP_Medium_C" },
    { title: "Beta Moeder, Master of the Ocean 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"EelBoss_Character_BP_Medium_C\" 150" },
    { title: "Beta Moeder, Master of the Ocean 야생 소환 (SDF)", code: "CHEAT SDF EelBoss_Medium 0 150" },

    //Gamma Moeder, Master of the Ocean
    { title: "Gamma Moeder, Master of the Ocean 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/EelBoss/EelBoss_Character_BP_Easy.EelBoss_Character_BP_Easy\" 0 0 0 150" },
    { title: "Gamma Moeder, Master of the Ocean 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon EelBoss_Character_BP_Easy_C" },
    { title: "Gamma Moeder, Master of the Ocean 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed EelBoss_Character_BP_Easy_C" },
    { title: "Gamma Moeder, Master of the Ocean 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"EelBoss_Character_BP_Easy_C\" 150" },
    { title: "Gamma Moeder, Master of the Ocean 야생 소환 (SDF)", code: "CHEAT SDF EelBoss_Easy 0 150" },

    //Astrocetus(아스트로시터스)
    { title: "Astrocetus 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/SpaceWhale/SpaceWhale_Character_BP.SpaceWhale_Character_BP\" 0 0 0 150" },
    { title: "Astrocetus 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon SpaceWhale_Character_BP_C" },
    { title: "Astrocetus 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed SpaceWhale_Character_BP_C" },
    { title: "Astrocetus 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"SpaceWhale_Character_BP_C\" 150" },
    { title: "Astrocetus 야생 소환 (SDF)", code: "CHEAT SDF SpaceWhale 0 150" },

    //Bloodstalker(블러드스토커)
    { title: "Bloodstalker 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BogSpider/BogSpider_Character_BP.BogSpider_Character_BP\" 0 0 0 150" },
    { title: "Bloodstalker 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon BogSpider_Character_BP_C" },
    { title: "Bloodstalker 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed BogSpider_Character_BP_C" },
    { title: "Bloodstalker 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"BogSpider_Character_BP_C\" 150" },
    { title: "Bloodstalker 야생 소환 (SDF)", code: "CHEAT SDF BogSpider 0 150" },

    //Ferox(페록스)
    { title: "Ferox 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/Shapeshifter/Shapeshifter_Small/Shapeshifter_Small_Character_BP.Shapeshifter_Small_Character_BP\" 0 0 0 150" },
    { title: "Ferox 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Shapeshifter_Small_Character_BP_C" },
    { title: "Ferox 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Shapeshifter_Small_Character_BP_C" },
    { title: "Ferox 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Shapeshifter_Small_Character_BP_C\" 150" },
    { title: "Ferox 야생 소환 (SDF)", code: "CHEAT SDF Shapeshifter_Small 0 150" },

    //Large Ferox(원소먹은 페록스)
    { title: "Large Ferox 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/Shapeshifter/Shapeshifter_Large/Shapeshifter_Large_Character_BP.Shapeshifter_Large_Character_BP\" 0 0 0 150" },
    { title: "Large Ferox 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Shapeshifter_Large_Character_BP_C" },
    { title: "Large Ferox 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Shapeshifter_Large_Character_BP_C" },
    { title: "Large Ferox 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Shapeshifter_Large_Character_BP_C\" 150" },
    { title: "Large Ferox 야생 소환 (SDF)", code: "CHEAT SDF Shapeshifter_Large 0 150" },

    //Megachelon(메가셸론)
    { title: "Megachelon 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/GiantTurtle/GiantTurtle_Character_BP.GiantTurtle_Character_BP\" 0 0 0 150" },
    { title: "Megachelon 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon GiantTurtle_Character_BP_C" },
    { title: "Megachelon 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed GiantTurtle_Character_BP_C" },
    { title: "Megachelon 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"GiantTurtle_Character_BP_C\" 150" },
    { title: "Megachelon 야생 소환 (SDF)", code: "CHEAT SDF GiantTurtle 0 150" },
    //Magmasaur(마그마사우루스)
    { title: "Magmasaur 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/Cherufe/Cherufe_Character_BP.Cherufe_Character_BP\" 0 0 0 150" },
    { title: "Magmasaur 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Cherufe_Character_BP_C" },
    { title: "Magmasaur 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Cherufe_Character_BP_C" },
    { title: "Magmasaur 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Cherufe_Character_BP_C\" 150" },
    { title: "Magmasaur 야생 소환 (SDF)", code: "CHEAT SDF Cherufe 0 150" },

    //알파 X - 트리케라톱스
    { title: "알파 X - 트리케라톱스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Retrieve/Volcanic/Volcano_Trike_Character_BP_Retrieve_Alpha.Volcano_Trike_Character_BP_Retrieve_Alpha\" 0 0 0 150" },
    { title: "알파 X - 트리케라톱스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Volcano_Trike_Character_BP_Retrieve_Alpha_C" },
    { title: "알파 X - 트리케라톱스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Volcano_Trike_Character_BP_Retrieve_Alpha_C" },
    { title: "알파 X - 트리케라톱스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Volcano_Trike_Character_BP_Retrieve_Alpha_C\" 150" },
    { title: "알파 X - 트리케라톱스 야생 소환 (SDF)", code: "CHEAT SDF Volcano_Trike_Alpha 0 150" },

    //브루트 아라네오
    { title: "브루트 아라네오 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Bog/SpiderS_Character_BP_Hunt.SpiderS_Character_BP_Hunt\" 0 0 0 150" },
    { title: "브루트 아라네오 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon SpiderS_Character_BP_Hunt_C" },
    { title: "브루트 아라네오 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed SpiderS_Character_BP_Hunt_C" },
    { title: "브루트 아라네오 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"SpiderS_Character_BP_Hunt_C\" 150" },
    { title: "브루트 아라네오 야생 소환 (SDF)", code: "CHEAT SDF SpiderS_Hunt 0 150" },

    //브루트 아스트로시터스
    { title: "브루트 아스트로시터스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Lunar/SpaceWhale_Character_BP_Brute.SpaceWhale_Character_BP_Brute\" 0 0 0 150" },
    { title: "브루트 아스트로시터스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon SpaceWhale_Character_BP_Brute_C" },
    { title: "브루트 아스트로시터스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed SpaceWhale_Character_BP_Brute_C" },
    { title: "브루트 아스트로시터스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"SpaceWhale_Character_BP_Brute_C\" 150" },
    { title: "브루트 아스트로시터스 야생 소환 (SDF)", code: "CHEAT SDF SpaceWhale_Brute 0 150" },

    //브루트 바실로사우루스
    { title: "브루트 바실로사우루스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Ocean/Basilosaurus_Character_BP_Hunt.Basilosaurus_Character_BP_Hunt\" 0 0 0 150" },
    { title: "브루트 바실로사우루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Basilosaurus_Character_BP_Hunt_C" },
    { title: "브루트 바실로사우루스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Basilosaurus_Character_BP_Hunt_C" },
    { title: "브루트 바실로사우루스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Basilosaurus_Character_BP_Hunt_C\" 150" },
    { title: "브루트 바실로사우루스 야생 소환 (SDF)", code: "CHEAT SDF Basilosaurus_Hunt 0 150" },

    //브루트 블러드스토커
    { title: "브루트 블러드스토커 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Bog/BogSpider_Character_BP_Hunt.BogSpider_Character_BP_Hunt\" 0 0 0 150" },
    { title: "브루트 블러드스토커 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon BogSpider_Character_BP_Hunt_C" },
    { title: "브루트 블러드스토커 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed BogSpider_Character_BP_Hunt_C" },
    { title: "브루트 블러드스토커 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"BogSpider_Character_BP_Hunt_C\" 150" },
    { title: "브루트 블러드스토커 야생 소환 (SDF)", code: "CHEAT SDF BogSpider_Hunt 0 150" },

    //브루트 페록스
    { title: "브루트 페록스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Arctic/Shapeshifter_Large_Character_BP_Hunt.Shapeshifter_Large_Character_BP_Hunt\" 0 0 0 150" },
    { title: "브루트 페록스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Shapeshifter_Large_Character_BP_Hunt_C" },
    { title: "브루트 페록스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Shapeshifter_Large_Character_BP_Hunt_C" },
    { title: "브루트 페록스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Shapeshifter_Large_Character_BP_Hunt_C\" 150" },
    { title: "브루트 페록스 야생 소환 (SDF)", code: "CHEAT SDF Shapeshifter_Large_Hunt 0 150" },

    //브루트 화염 와이번
    { title: "브루트 화염 와이번 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Gauntlet/Volcanic/Wyvern_Character_BP_Fire_GauntletBoss.Wyvern_Character_BP_Fire_GauntletBoss\" 0 0 0 150" },
    { title: "브루트 화염 와이번 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Wyvern_Character_BP_Fire_GauntletBoss_C" },
    { title: "브루트 화염 와이번 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Wyvern_Character_BP_Fire_GauntletBoss_C" },
    { title: "브루트 화염 와이번 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Wyvern_Character_BP_Fire_GauntletBoss_C\" 150" },
    { title: "브루트 화염 와이번 야생 소환 (SDF)", code: "CHEAT SDF Wyvern_Fire_GauntletBoss 0 150" },

    //브루트 리드시크디스
    { title: "브루트 리드시크디스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Ocean/Leedsichthys_Character_BP_Hunt.Leedsichthys_Character_BP_Hunt\" 0 0 0 150" },
    { title: "브루트 리드시크디스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Leedsichthys_Character_BP_Hunt_C" },
    { title: "브루트 리드시크디스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Leedsichthys_Character_BP_Hunt_C" },
    { title: "브루트 리드시크디스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Leedsichthys_Character_BP_Hunt_C\" 150" },
    { title: "브루트 리드시크디스 야생 소환 (SDF)", code: "CHEAT SDF Leedsichthys_Hunt 0 150" },

    //브루트 마그마사우루스
    { title: "브루트 마그마사우루스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Volcanic/Cherufe_Character_BP_Hunt.Cherufe_Character_BP_Hunt\" 0 0 0 150" },
    { title: "브루트 마그마사우루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Cherufe_Character_BP_Hunt_C" },
    { title: "브루트 마그마사우루스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Cherufe_Character_BP_Hunt_C" },
    { title: "브루트 마그마사우루스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Cherufe_Character_BP_Hunt_C\" 150" },
    { title: "브루트 마그마사우루스 야생 소환 (SDF)", code: "CHEAT SDF Cherufe_Hunt 0 150" },

    //브루트 고장난 테크 기가노토사우루스
    { title: "브루트 고장난 테크 기가노토사우루스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Lunar/BionicGigant_Character_BP_Malfunctioned_Hunt.BionicGigant_Character_BP_Malfunctioned_Hunt\" 0 0 0 150" },
    { title: "브루트 고장난 테크 기가노토사우루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon BionicGigant_Character_BP_Malfunctioned_Hunt_C" },
    { title: "브루트 고장난 테크 기가노토사우루스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed BionicGigant_Character_BP_Malfunctioned_Hunt_C" },
    { title: "브루트 고장난 테크 기가노토사우루스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"BionicGigant_Character_BP_Malfunctioned_Hunt_C\" 150" },
    { title: "브루트 고장난 테크 기가노토사우루스 야생 소환 (SDF)", code: "CHEAT SDF BionicGigant_Hunt 0 150" },

    //브루트 고장난 테크 렉스
    { title: "브루트 고장난 테크 렉스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Lunar/BionicRex_Character_BP_Malfunctioned_Hunt.BionicRex_Character_BP_Malfunctioned_Hunt\" 0 0 0 150" },
    { title: "브루트 고장난 테크 렉스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon BionicRex_Character_BP_Malfunctioned_Hunt_C" },
    { title: "브루트 고장난 테크 렉스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed BionicRex_Character_BP_Malfunctioned_Hunt_C" },
    { title: "브루트 고장난 테크 렉스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"BionicRex_Character_BP_Malfunctioned_Hunt_C\" 150" },
    { title: "브루트 고장난 테크 렉스 야생 소환 (SDF)", code: "CHEAT SDF BionicRex_Hunt 0 150" },

    //브루트 메머드
    { title: "브루트 메머드 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Arctic/Mammoth_Character_BP_Hunt.Mammoth_Character_BP_Hunt\" 0 0 0 150" },
    { title: "브루트 메머드 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Mammoth_Character_BP_Hunt_C" },
    { title: "브루트 메머드 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Mammoth_Character_BP_Hunt_C" },
    { title: "브루트 메머드 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Mammoth_Character_BP_Hunt_C\" 150" },
    { title: "브루트 메머드 야생 소환 (SDF)", code: "CHEAT SDF Mammoth_Hunt 0 150" },

    //브루트 메갈로케로스
    { title: "브루트 메갈로케로스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Arctic/Stag_Character_BP_Hunt.Stag_Character_BP_Hunt\" 0 0 0 150" },
    { title: "브루트 메갈로케로스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Stag_Character_BP_Hunt_C" },
    { title: "브루트 메갈로케로스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Stag_Character_BP_Hunt_C" },
    { title: "브루트 메갈로케로스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Stag_Character_BP_Hunt_C\" 150" },
    { title: "브루트 메갈로케로스 야생 소환 (SDF)", code: "CHEAT SDF Stag_Hunt 0 150" },

    //브루트 플레시오사우루스
    { title: "브루트 플레시오사우루스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Ocean/Plesiosaur_Character_BP_Hunt.Plesiosaur_Character_BP_Hunt\" 0 0 0 150" },
    { title: "브루트 플레시오사우루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Plesiosaur_Character_BP_Hunt_C" },
    { title: "브루트 플레시오사우루스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Plesiosaur_Character_BP_Hunt_C" },
    { title: "브루트 플레시오사우루스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Plesiosaur_Character_BP_Hunt_C\" 150" },
    { title: "브루트 플레시오사우루스 야생 소환 (SDF)", code: "CHEAT SDF Plesiosaur_Hunt 0 150" },

    //브루트 리퍼킹
    { title: "브루트 리퍼킹 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Lunar/Xenomorph_Character_BP_Male_InitialBuryOnly_Hunt.Xenomorph_Character_BP_Male_InitialBuryOnly_Hunt\" 0 0 0 150" },
    { title: "브루트 리퍼킹 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Xenomorph_Character_BP_Male_InitialBuryOnly_Hunt_C" },
    { title: "브루트 리퍼킹 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Xenomorph_Character_BP_Male_InitialBuryOnly_Hunt_C" },
    { title: "브루트 리퍼킹 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Xenomorph_Character_BP_Male_InitialBuryOnly_Hunt_C\" 150" },
    { title: "브루트 리퍼킹 야생 소환 (SDF)", code: "CHEAT SDF Xenomorph_Male_Hunt 0 150" },

    //브루트 사르코
    { title: "브루트 사르코 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Bog/Sarco_Character_BP_Hunt.Sarco_Character_BP_Hunt\" 0 0 0 150" },
    { title: "브루트 사르코 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Sarco_Character_BP_Hunt_C" },
    { title: "브루트 사르코 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Sarco_Character_BP_Hunt_C" },
    { title: "브루트 사르코 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Sarco_Character_BP_Hunt_C\" 150" },
    { title: "브루트 사르코 야생 소환 (SDF)", code: "CHEAT SDF Sarco_Hunt 0 150" },

    //브루트 씨커
    { title: "브루트 씨커 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Lunar/Pteroteuthis_Char_BP_HuntFollower.Pteroteuthis_Char_BP_HuntFollower\" 0 0 0 150" },
    { title: "브루트 씨커 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Pteroteuthis_Char_BP_HuntFollower_C" },
    { title: "브루트 씨커 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Pteroteuthis_Char_BP_HuntFollower_C" },
    { title: "브루트 씨커 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Pteroteuthis_Char_BP_HuntFollower_C\" 150" },
    { title: "브루트 씨커 야생 소환 (SDF)", code: "CHEAT SDF Pteroteuthis_Hunt 0 150" },
    //브루트 투소테우티스
    { title: "브루트 투소테우티스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Ocean/Tusoteuthis_Character_BP_Hunt.Tusoteuthis_Character_BP_Hunt\" 0 0 0 150" },
    { title: "브루트 투소테우티스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Tusoteuthis_Character_BP_Hunt_C" },
    { title: "브루트 투소테우티스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Tusoteuthis_Character_BP_Hunt_C" },
    { title: "브루트 투소테우티스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Tusoteuthis_Character_BP_Hunt_C\" 150" },
    { title: "브루트 투소테우티스 야생 소환 (SDF)", code: "CHEAT SDF Tusoteuthis_Hunt 0 150" },

    //브루트 X - 알로사우루스
    { title: "브루트 X - 알로사우루스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Volcanic/Volcano_Allo_Character_BP_Hunt.Volcano_Allo_Character_BP_Hunt\" 0 0 0 150" },
    { title: "브루트 X - 알로사우루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Volcano_Allo_Character_BP_Hunt_C" },
    { title: "브루트 X - 알로사우루스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Volcano_Allo_Character_BP_Hunt_C" },
    { title: "브루트 X - 알로사우루스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Volcano_Allo_Character_BP_Hunt_C\" 150" },
    { title: "브루트 X - 알로사우루스 야생 소환 (SDF)", code: "CHEAT SDF Volcano_Allo_Hunt 0 150" },

    //브루트 X - 메갈로돈
    { title: "브루트 X - 메갈로돈 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Ocean/Ocean_Megalodon_Character_BP_Hunt.Ocean_Megalodon_Character_BP_Hunt\" 0 0 0 150" },
    { title: "브루트 X - 메갈로돈 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Ocean_Megalodon_Character_BP_Hunt_C" },
    { title: "브루트 X - 메갈로돈 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Ocean_Megalodon_Character_BP_Hunt_C" },
    { title: "브루트 X - 메갈로돈 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Ocean_Megalodon_Character_BP_Hunt_C\" 150" },
    { title: "브루트 X - 메갈로돈 야생 소환 (SDF)", code: "CHEAT SDF Ocean_Megalodon_Hunt 0 150" },

    //브루트 X - 모사사우루스
    { title: "브루트 X - 모사사우루스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Ocean/Ocean_Mosa_Character_BP_Hunt.Ocean_Mosa_Character_BP_Hunt\" 0 0 0 150" },
    { title: "브루트 X - 모사사우루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Ocean_Mosa_Character_BP_Hunt_C" },
    { title: "브루트 X - 모사사우루스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Ocean_Mosa_Character_BP_Hunt_C" },
    { title: "브루트 X - 모사사우루스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Ocean_Mosa_Character_BP_Hunt_C\" 150" },
    { title: "브루트 X - 모사사우루스 야생 소환 (SDF)", code: "CHEAT SDF Ocean_Mosa_Hunt 0 150" },

    //브루트 X - 랩터
    { title: "브루트 X - 랩터 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Bog/Bog_Raptor_Character_BP_Hunt.Bog_Raptor_Character_BP_Hunt\" 0 0 0 150" },
    { title: "브루트 X - 랩터 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Bog_Raptor_Character_BP_Hunt_C" },
    { title: "브루트 X - 랩터 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Bog_Raptor_Character_BP_Hunt_C" },
    { title: "브루트 X - 랩터 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Bog_Raptor_Character_BP_Hunt_C\" 150" },
    { title: "브루트 X - 랩터 야생 소환 (SDF)", code: "CHEAT SDF Bog_Raptor_Hunt 0 150" },

    //브루트 X - 렉스
    { title: "브루트 X - 렉스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Volcanic/Volcano_Rex_Character_BP_Hunt.Volcano_Rex_Character_BP_Hunt\" 0 0 0 150" },
    { title: "브루트 X - 렉스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Volcano_Rex_Character_BP_Hunt_C" },
    { title: "브루트 X - 렉스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Volcano_Rex_Character_BP_Hunt_C" },
    { title: "브루트 X - 렉스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Volcano_Rex_Character_BP_Hunt_C\" 150" },
    { title: "브루트 X - 렉스 야생 소환 (SDF)", code: "CHEAT SDF Volcano_Rex_Hunt 0 150" },

    //브루트 X - 바위정령
    { title: "브루트 X - 바위정령 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Volcanic/Volcano_Golem_Character_BP_Hunt.Volcano_Golem_Character_BP_Hunt\" 0 0 0 150" },
    { title: "브루트 X - 바위정령 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Volcano_Golem_Character_BP_Hunt_C" },
    { title: "브루트 X - 바위정령 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Volcano_Golem_Character_BP_Hunt_C" },
    { title: "브루트 X - 바위정령 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Volcano_Golem_Character_BP_Hunt_C\" 150" },
    { title: "브루트 X - 바위정령 야생 소환 (SDF)", code: "CHEAT SDF Volcano_Golem_Hunt 0 150" },

    //브루트 X - 스피노
    { title: "브루트 X - 스피노 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Bog/Bog_Spino_Character_BP_Hunt.Bog_Spino_Character_BP_Hunt\" 0 0 0 150" },
    { title: "브루트 X - 스피노 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Bog_Spino_Character_BP_Hunt_C" },
    { title: "브루트 X - 스피노 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Bog_Spino_Character_BP_Hunt_C" },
    { title: "브루트 X - 스피노 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Bog_Spino_Character_BP_Hunt_C\" 150" },
    { title: "브루트 X - 스피노 야생 소환 (SDF)", code: "CHEAT SDF Bog_Spino_Hunt 0 150" },

    //브루트 X - 유티라누스
    { title: "브루트 X - 유티라누스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Hunt/Arctic/Snow_Yutyrannus_Character_BP_Hunt.Snow_Yutyrannus_Character_BP_Hunt\" 0 0 0 150" },
    { title: "브루트 X - 유티라누스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Snow_Yutyrannus_Character_BP_Hunt_C" },
    { title: "브루트 X - 유티라누스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Snow_Yutyrannus_Character_BP_Hunt_C" },
    { title: "브루트 X - 유티라누스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Snow_Yutyrannus_Character_BP_Hunt_C\" 150" },
    { title: "브루트 X - 유티라누스 야생 소환 (SDF)", code: "CHEAT SDF Snow_Yutyrannus_Hunt 0 150" },
    //오염된 아바타
    { title: "오염된 아바타 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/Bots/Bot_Character_BP.Bot_Character_BP\" 0 0 0 150" },
    { title: "오염된 아바타 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Bot_Character_BP_C" },
    { title: "오염된 아바타 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Bot_Character_BP_C" },
    { title: "오염된 아바타 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Bot_Character_BP_C\" 150" },
    { title: "오염된 아바타 야생 소환 (SDF)", code: "CHEAT SDF Bot 0 150" },

    //Corrupted Attack Drone
    { title: "Corrupted Attack Drone 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/VR/VREndDrone_Character_BP.VREndDrone_Character_BP\" 0 0 0 150" },
    { title: "Corrupted Attack Drone 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon VREndDrone_Character_BP_C" },
    { title: "Corrupted Attack Drone 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed VREndDrone_Character_BP_C" },
    { title: "Corrupted Attack Drone 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"VREndDrone_Character_BP_C\" 150" },
    { title: "Corrupted Attack Drone 야생 소환 (SDF)", code: "CHEAT SDF VREndDrone 0 150" },

    //뱀장어 미니언
    { title: "뱀장어 미니언 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/EelBoss/EelMinion_Character_BP_Easy.EelMinion_Character_BP_Easy\" 0 0 0 150" },
    { title: "뱀장어 미니언 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon EelMinion_Character_BP_Easy_C" },
    { title: "뱀장어 미니언 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed EelMinion_Character_BP_Easy_C" },
    { title: "뱀장어 미니언 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"EelMinion_Character_BP_Easy_C\" 150" },
    { title: "뱀장어 미니언 야생 소환 (SDF)", code: "CHEAT SDF EelMinion_Easy 0 150" },

    //Golden Striped Brute Megalodon
    { title: "Golden Striped Brute Megalodon 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Retrieve/Ocean/Ocean_Megalodon_Character_BP_Retrieve_Brute.Ocean_Megalodon_Character_BP_Retrieve_Brute\" 0 0 0 150" },
    { title: "Golden Striped Brute Megalodon 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Ocean_Megalodon_Character_BP_Retrieve_Brute_C" },
    { title: "Golden Striped Brute Megalodon 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Ocean_Megalodon_Character_BP_Retrieve_Brute_C" },
    { title: "Golden Striped Brute Megalodon 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Ocean_Megalodon_Character_BP_Retrieve_Brute_C\" 150" },
    { title: "Golden Striped Brute Megalodon 야생 소환 (SDF)", code: "CHEAT SDF Ocean_Megalodon_Brute 0 150" },

    //Golden Striped Megalodon
    { title: "Golden Striped Megalodon 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Retrieve/Ocean/Ocean_Megalodon_Character_BP_Retrieve.Ocean_Megalodon_Character_BP_Retrieve\" 0 0 0 150" },
    { title: "Golden Striped Megalodon 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Ocean_Megalodon_Character_BP_Retrieve_C" },
    { title: "Golden Striped Megalodon 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Ocean_Megalodon_Character_BP_Retrieve_C" },
    { title: "Golden Striped Megalodon 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Ocean_Megalodon_Character_BP_Retrieve_C\" 150" },
    { title: "Golden Striped Megalodon 야생 소환 (SDF)", code: "CHEAT SDF Ocean_Megalodon_Retrieve 0 150" },

    //부상입은 브루트 리퍼 킹
    { title: "부상입은 브루트 리퍼 킹 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MissionVariants/Retrieve/Lunar/Xenomorph_Character_BP_Male_InitialBuryOnly_Brute_Retrieve.Xenomorph_Character_BP_Male_InitialBuryOnly_Brute_Retrieve\" 0 0 0 150" },
    { title: "부상입은 브루트 리퍼 킹 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Xenomorph_Character_BP_Male_InitialBuryOnly_Brute_Retrieve_C" },
    { title: "부상입은 브루트 리퍼 킹 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Xenomorph_Character_BP_Male_InitialBuryOnly_Brute_Retrieve_C" },
    { title: "부상입은 브루트 리퍼 킹 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Xenomorph_Character_BP_Male_InitialBuryOnly_Brute_Retrieve_C\" 150" },
    { title: "부상입은 브루트 리퍼 킹 야생 소환 (SDF)", code: "CHEAT SDF Xenomorph_Brute_Retrieve 0 150" },

    //물고기떼
    { title: "물고기떼 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/MicrobeSwarmChar_BP.MicrobeSwarmChar_BP\" 0 0 0 150" },
    { title: "물고기떼 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon MicrobeSwarmChar_BP_C" },
    { title: "물고기떼 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed MicrobeSwarmChar_BP_C" },
    { title: "물고기떼 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"MicrobeSwarmChar_BP_C\" 150" },
    { title: "물고기떼 야생 소환 (SDF)", code: "CHEAT SDF MicrobeSwarm 0 150" },

    //벌레떼
    { title: "벌레떼 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/Swarms/InsectSwarmChar_BP.InsectSwarmChar_BP\" 0 0 0 150" },
    { title: "벌레떼 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon InsectSwarmChar_BP_C" },
    { title: "벌레떼 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed InsectSwarmChar_BP_C" },
    { title: "벌레떼 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"InsectSwarmChar_BP_C\" 150" },
    { title: "벌레떼 야생 소환 (SDF)", code: "CHEAT SDF InsectSwarm 0 150" },

    //Reaper Prince
    { title: "Reaper Prince 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Aberration/Dinos/Nameless/Xenomorph_Character_BP_Male_InitialBuryOnly_Adolescent.Xenomorph_Character_BP_Male_InitialBuryOnly_Adolescent\" 0 0 0 150" },
    { title: "Reaper Prince 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Xenomorph_Character_BP_Male_InitialBuryOnly_Adolescent_C" },
    { title: "Reaper Prince 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Xenomorph_Character_BP_Male_InitialBuryOnly_Adolescent_C" },
    { title: "Reaper Prince 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Xenomorph_Character_BP_Male_InitialBuryOnly_Adolescent_C\" 150" },
    { title: "Reaper Prince 야생 소환 (SDF)", code: "CHEAT SDF ReaperPrince 0 150" },
    //테크 기가노토사우루스
    { title: "테크 기가노토사우루스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Giganotosaurus/BionicGigant_Character_BP.BionicGigant_Character_BP\" 0 0 0 150" },
    { title: "테크 기가노토사우루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon BionicGigant_Character_BP_C" },
    { title: "테크 기가노토사우루스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed BionicGigant_Character_BP_C" },
    { title: "테크 기가노토사우루스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"BionicGigant_Character_BP_C\" 150" },
    { title: "테크 기가노토사우루스 야생 소환 (SDF)", code: "CHEAT SDF BionicGigant 0 150" },

    //테크 트리케라톱스
    { title: "테크 트리케라톱스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Trike/BionicTrike_Character_BP.BionicTrike_Character_BP\" 0 0 0 150" },
    { title: "테크 트리케라톱스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon BionicTrike_Character_BP_C" },
    { title: "테크 트리케라톱스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed BionicTrike_Character_BP_C" },
    { title: "테크 트리케라톱스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"BionicTrike_Character_BP_C\" 150" },
    { title: "테크 트리케라톱스 야생 소환 (SDF)", code: "CHEAT SDF BionicTrike 0 150" },

    //X - 알로사우루스
    { title: "X - 알로사우루스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/Volcano_Allosaurus/Volcano_Allo_Character_BP.Volcano_Allo_Character_BP\" 0 0 0 150" },
    { title: "X - 알로사우루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Volcano_Allo_Character_BP_C" },
    { title: "X - 알로사우루스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Volcano_Allo_Character_BP_C" },
    { title: "X - 알로사우루스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Volcano_Allo_Character_BP_C\" 150" },
    { title: "X - 알로사우루스 야생 소환 (SDF)", code: "CHEAT SDF Volcano_Allo 0 150" },

    //X - 안킬로사우루스
    { title: "X - 안킬로사우루스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/Volcano_Ankylosaurus/Volcano_Ankylo_Character_BP.Volcano_Ankylo_Character_BP\" 0 0 0 150" },
    { title: "X - 안킬로사우루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Volcano_Ankylo_Character_BP_C" },
    { title: "X - 안킬로사우루스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Volcano_Ankylo_Character_BP_C" },
    { title: "X - 안킬로사우루스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Volcano_Ankylo_Character_BP_C\" 150" },
    { title: "X - 안킬로사우루스 야생 소환 (SDF)", code: "CHEAT SDF Volcano_Ankylo 0 150" },

    //X - 아르젠타비스
    { title: "X - 아르젠타비스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/Snow_Argentavis/Snow_Argent_Character_BP.Snow_Argent_Character_BP\" 0 0 0 150" },
    { title: "X - 아르젠타비스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Snow_Argent_Character_BP_C" },
    { title: "X - 아르젠타비스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Snow_Argent_Character_BP_C" },
    { title: "X - 아르젠타비스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Snow_Argent_Character_BP_C\" 150" },
    { title: "X - 아르젠타비스 야생 소환 (SDF)", code: "CHEAT SDF Snow_Argent 0 150" },

    //X - 바실로사우루스
    { title: "X - 바실로사우루스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/Ocean_Basilosaurus/Ocean_Basilosaurus_Character_BP.Ocean_Basilosaurus_Character_BP\" 0 0 0 150" },
    { title: "X - 바실로사우루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Ocean_Basilosaurus_Character_BP_C" },
    { title: "X - 바실로사우루스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Ocean_Basilosaurus_Character_BP_C" },
    { title: "X - 바실로사우루스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Ocean_Basilosaurus_Character_BP_C\" 150" },
    { title: "X - 바실로사우루스 야생 소환 (SDF)", code: "CHEAT SDF Ocean_Basilosaurus 0 150" },

    //X - 드래곤
    { title: "X - 드래곤 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/Volcano_Dragon/Volcanic_Dragon_Character_BP.Volcanic_Dragon_Character_BP\" 0 0 0 150" },
    { title: "X - 드래곤 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Volcanic_Dragon_Character_BP_C" },
    { title: "X - 드래곤 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Volcanic_Dragon_Character_BP_C" },
    { title: "X - 드래곤 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Volcanic_Dragon_Character_BP_C\" 150" },
    { title: "X - 드래곤 야생 소환 (SDF)", code: "CHEAT SDF Volcanic_Dragon 0 150" },

    //X - 둔클레오스테스
    { title: "X - 둔클레오스테스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/Ocean_Dunkleosteus/Ocean_Dunkle_Character_BP.Ocean_Dunkle_Character_BP\" 0 0 0 150" },
    { title: "X - 둔클레오스테스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Ocean_Dunkle_Character_BP_C" },
    { title: "X - 둔클레오스테스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Ocean_Dunkle_Character_BP_C" },
    { title: "X - 둔클레오스테스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Ocean_Dunkle_Character_BP_C\" 150" },
    { title: "X - 둔클레오스테스 야생 소환 (SDF)", code: "CHEAT SDF Ocean_Dunkle 0 150" },

    //X - 이크티오사우루스
    { title: "X - 이크티오사우루스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/Ocean_Dolphin/Ocean_Dolphin_Character_BP.Ocean_Dolphin_Character_BP\" 0 0 0 150" },
    { title: "X - 이크티오사우루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Ocean_Dolphin_Character_BP_C" },
    { title: "X - 이크티오사우루스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Ocean_Dolphin_Character_BP_C" },
    { title: "X - 이크티오사우루스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Ocean_Dolphin_Character_BP_C\" 150" },
    { title: "X - 이크티오사우루스 야생 소환 (SDF)", code: "CHEAT SDF Ocean_Dolphin 0 150" },

    //X - 메갈로돈
    { title: "X - 메갈로돈 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/Ocean_Megalodon/Ocean_Megalodon_Character_BP.Ocean_Megalodon_Character_BP\" 0 0 0 150" },
    { title: "X - 메갈로돈 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Ocean_Megalodon_Character_BP_C" },
    { title: "X - 메갈로돈 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Ocean_Megalodon_Character_BP_C" },
    { title: "X - 메갈로돈 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Ocean_Megalodon_Character_BP_C\" 150" },
    { title: "X - 메갈로돈 야생 소환 (SDF)", code: "CHEAT SDF Ocean_Megalodon 0 150" },

    //X - 모사사우루스
    { title: "X - 모사사우루스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/Ocean_Mosasaurus/Ocean_Mosa_Character_BP.Ocean_Mosa_Character_BP\" 0 0 0 150" },
    { title: "X - 모사사우루스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Ocean_Mosa_Character_BP_C" },
    { title: "X - 모사사우루스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Ocean_Mosa_Character_BP_C" },
    { title: "X - 모사사우루스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Ocean_Mosa_Character_BP_C\" 150" },
    { title: "X - 모사사우루스 야생 소환 (SDF)", code: "CHEAT SDF Ocean_Mosa 0 150" },

    //X - 수달
    { title: "X - 수달 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/Snow_Otter/Snow_Otter_Character_BP.Snow_Otter_Character_BP\" 0 0 0 150" },
    { title: "X - 수달 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Snow_Otter_Character_BP_C" },
    { title: "X - 수달 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Snow_Otter_Character_BP_C" },
    { title: "X - 수달 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Snow_Otter_Character_BP_C\" 150" },
    { title: "X - 수달 야생 소환 (SDF)", code: "CHEAT SDF Snow_Otter 0 150" },

    //X - 파라케라테리움
    { title: "X - 파라케라테리움 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/BogParaceratherium/Bog_Paracer_Character_BP.Bog_Paracer_Character_BP\" 0 0 0 150" },
    { title: "X - 파라케라테리움 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Bog_Paracer_Character_BP_C" },
    { title: "X - 파라케라테리움 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Bog_Paracer_Character_BP_C" },
    { title: "X - 파라케라테리움 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Bog_Paracer_Character_BP_C\" 150" },
    { title: "X - 파라케라테리움 야생 소환 (SDF)", code: "CHEAT SDF Bog_Paracer 0 150" },
    //X - 파라사우롤로푸스
    { title: "X - 파라사우롤로푸스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/BogPara/Bog_Para_Character_BP.Bog_Para_Character_BP\" 0 0 0 150" },
    { title: "X - 파라사우롤로푸스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Bog_Para_Character_BP_C" },
    { title: "X - 파라사우롤로푸스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Bog_Para_Character_BP_C" },
    { title: "X - 파라사우롤로푸스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Bog_Para_Character_BP_C\" 150" },
    { title: "X - 파라사우롤로푸스 야생 소환 (SDF)", code: "CHEAT SDF Bog_Para 0 150" },

    //X - 랩터
    { title: "X - 랩터 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/Bog_Raptor/Bog_Raptor_Character_BP.Bog_Raptor_Character_BP\" 0 0 0 150" },
    { title: "X - 랩터 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Bog_Raptor_Character_BP_C" },
    { title: "X - 랩터 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Bog_Raptor_Character_BP_C" },
    { title: "X - 랩터 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Bog_Raptor_Character_BP_C\" 150" },
    { title: "X - 랩터 야생 소환 (SDF)", code: "CHEAT SDF Bog_Raptor 0 150" },

    //X - 렉스
    { title: "X - 렉스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/Volcano_Rex/Volcano_Rex_Character_BP.Volcano_Rex_Character_BP\" 0 0 0 150" },
    { title: "X - 렉스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Volcano_Rex_Character_BP_C" },
    { title: "X - 렉스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Volcano_Rex_Character_BP_C" },
    { title: "X - 렉스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Volcano_Rex_Character_BP_C\" 150" },
    { title: "X - 렉스 야생 소환 (SDF)", code: "CHEAT SDF Volcano_Rex 0 150" },

    //X - 바위 정령
    { title: "X - 바위 정령 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/Lava_Golem/Volcano_Golem_Character_BP.Volcano_Golem_Character_BP\" 0 0 0 150" },
    { title: "X - 바위 정령 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Volcano_Golem_Character_BP_C" },
    { title: "X - 바위 정령 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Volcano_Golem_Character_BP_C" },
    { title: "X - 바위 정령 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Volcano_Golem_Character_BP_C\" 150" },
    { title: "X - 바위 정령 야생 소환 (SDF)", code: "CHEAT SDF Volcano_Golem 0 150" },

    //X - 검치호
    { title: "X - 검치호 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/Snow_Saber/Snow_Saber_Character_BP.Snow_Saber_Character_BP\" 0 0 0 150" },
    { title: "X - 검치호 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Snow_Saber_Character_BP_C" },
    { title: "X - 검치호 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Snow_Saber_Character_BP_C" },
    { title: "X - 검치호 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Snow_Saber_Character_BP_C\" 150" },
    { title: "X - 검치호 야생 소환 (SDF)", code: "CHEAT SDF Snow_Saber 0 150" },

    //X - 검치연어
    { title: "X - 검치연어 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/Lunar_Salmon/Lunar_Salmon_Character_BP.Lunar_Salmon_Character_BP\" 0 0 0 150" },
    { title: "X - 검치연어 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Lunar_Salmon_Character_BP_C" },
    { title: "X - 검치연어 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Lunar_Salmon_Character_BP_C" },
    { title: "X - 검치연어 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Lunar_Salmon_Character_BP_C\" 150" },
    { title: "X - 검치연어 야생 소환 (SDF)", code: "CHEAT SDF Lunar_Salmon 0 150" },

    //X - 스피노
    { title: "X - 스피노 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/Bog_Spino/Bog_Spino_Character_BP.Bog_Spino_Character_BP\" 0 0 0 150" },
    { title: "X - 스피노 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Bog_Spino_Character_BP_C" },
    { title: "X - 스피노 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Bog_Spino_Character_BP_C" },
    { title: "X - 스피노 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Bog_Spino_Character_BP_C\" 150" },
    { title: "X - 스피노 야생 소환 (SDF)", code: "CHEAT SDF Bog_Spino 0 150" },

    //X - 타페자라
    { title: "X - 타페자라 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/Bog_Tapejara/Bog_Tapejara_Character_BP.Bog_Tapejara_Character_BP\" 0 0 0 150" },
    { title: "X - 타페자라 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Bog_Tapejara_Character_BP_C" },
    { title: "X - 타페자라 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Bog_Tapejara_Character_BP_C" },
    { title: "X - 타페자라 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Bog_Tapejara_Character_BP_C\" 150" },
    { title: "X - 타페자라 야생 소환 (SDF)", code: "CHEAT SDF Bog_Tapejara 0 150" },

    //X - 트리케라톱스
    { title: "X - 트리케라톱스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/Volcano_Trike/Volcano_Trike_Character_BP.Volcano_Trike_Character_BP\" 0 0 0 150" },
    { title: "X - 트리케라톱스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Volcano_Trike_Character_BP_C" },
    { title: "X - 트리케라톱스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Volcano_Trike_Character_BP_C" },
    { title: "X - 트리케라톱스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Volcano_Trike_Character_BP_C\" 150" },
    { title: "X - 트리케라톱스 야생 소환 (SDF)", code: "CHEAT SDF Volcano_Trike 0 150" },

    //X - 울리라이노
    { title: "X - 울리라이노 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/Snow_WoollyRhino/Snow_Rhino_Character_BP.Snow_Rhino_Character_BP\" 0 0 0 150" },
    { title: "X - 울리라이노 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Snow_Rhino_Character_BP_C" },
    { title: "X - 울리라이노 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Snow_Rhino_Character_BP_C" },
    { title: "X - 울리라이노 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Snow_Rhino_Character_BP_C\" 150" },
    { title: "X - 울리라이노 야생 소환 (SDF)", code: "CHEAT SDF Snow_Rhino 0 150" },

    //X - 유티라누스
    { title: "X - 유티라누스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis/Dinos/BiomeVariants/Snow_Yutyrannus/Snow_Yutyrannus_Character_BP.Snow_Yutyrannus_Character_BP\" 0 0 0 150" },
    { title: "X - 유티라누스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Snow_Yutyrannus_Character_BP_C" },
    { title: "X - 유티라누스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Snow_Yutyrannus_Character_BP_C" },
    { title: "X - 유티라누스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Snow_Yutyrannus_Character_BP_C\" 150" },
    { title: "X - 유티라누스 야생 소환 (SDF)", code: "CHEAT SDF Snow_Yutyrannus 0 150" },
    //알파 블러드 크리스탈 와이번
    { title: "알파 블러드 크리스탈 와이번 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/CrystalWyvern/CrystalWyvern_Character_BP_Mega.CrystalWyvern_Character_BP_Mega\" 0 0 0 150" },
    { title: "알파 블러드 크리스탈 와이번 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon CrystalWyvern_Character_BP_Mega_C" },
    { title: "알파 블러드 크리스탈 와이번 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed CrystalWyvern_Character_BP_Mega_C" },
    { title: "알파 블러드 크리스탈 와이번 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"CrystalWyvern_Character_BP_Mega_C\" 150" },
    { title: "알파 블러드 크리스탈 와이번 야생 소환 (SDF)", code: "CHEAT SDF CrystalWyvern_Mega 0 150" },

    //클러드 크리스탈 와이번
    { title: "클러드 크리스탈 와이번 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/CrystalWyvern/CrystalWyvern_Character_BP_Blood.CrystalWyvern_Character_BP_Blood\" 0 0 0 150" },
    { title: "클러드 크리스탈 와이번 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon CrystalWyvern_Character_BP_Blood_C" },
    { title: "클러드 크리스탈 와이번 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed CrystalWyvern_Character_BP_Blood_C" },
    { title: "클러드 크리스탈 와이번 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"CrystalWyvern_Character_BP_Blood_C\" 150" },
    { title: "클러드 크리스탈 와이번 야생 소환 (SDF)", code: "CHEAT SDF CrystalWyvern_Blood 0 150" },

    //Blood Crystal Wyvern Heir
    { title: "Blood Crystal Wyvern Heir 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Mods/CrystalIsles/Assets/Dinos/CIBoss/Minions/CrystalWyvern_Character_BP_Minion_Blood.CrystalWyvern_Character_BP_Minion_Blood\" 0 0 0 150" },
    { title: "Blood Crystal Wyvern Heir 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon CrystalWyvern_Character_BP_Minion_Blood_C" },
    { title: "Blood Crystal Wyvern Heir 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed CrystalWyvern_Character_BP_Minion_Blood_C" },
    { title: "Blood Crystal Wyvern Heir 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"CrystalWyvern_Character_BP_Minion_Blood_C\" 150" },
    { title: "Blood Crystal Wyvern Heir 야생 소환 (SDF)", code: "CHEAT SDF CrystalWyvern_Blood_Minion 0 150" },

    //크리스탈 와이번 퀸[감마]
    { title: "크리스탈 와이번 퀸[감마] 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Mods/CrystalIsles/Assets/Dinos/CIBoss/CrystalWyvern_Character_BP_Boss_Easy.CrystalWyvern_Character_BP_Boss_Easy\" 0 0 0 150" },
    { title: "크리스탈 와이번 퀸[감마] 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon CrystalWyvern_Character_BP_Boss_Easy_C" },
    { title: "크리스탈 와이번 퀸[감마] 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed CrystalWyvern_Character_BP_Boss_Easy_C" },
    { title: "크리스탈 와이번 퀸[감마] 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"CrystalWyvern_Character_BP_Boss_Easy_C\" 150" },
    { title: "크리스탈 와이번 퀸[감마] 야생 소환 (SDF)", code: "CHEAT SDF CrystalWyvern_Boss_Easy 0 150" },

    //크리스탈 와이번 퀸[베타]
    { title: "크리스탈 와이번 퀸[베타] 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Mods/CrystalIsles/Assets/Dinos/CIBoss/CrystalWyvern_Character_BP_Boss_Medium.CrystalWyvern_Character_BP_Boss_Medium\" 0 0 0 150" },
    { title: "크리스탈 와이번 퀸[베타] 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon CrystalWyvern_Character_BP_Boss_Medium_C" },
    { title: "크리스탈 와이번 퀸[베타] 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed CrystalWyvern_Character_BP_Boss_Medium_C" },
    { title: "크리스탈 와이번 퀸[베타] 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"CrystalWyvern_Character_BP_Boss_Medium_C\" 150" },
    { title: "크리스탈 와이번 퀸[베타] 야생 소환 (SDF)", code: "CHEAT SDF CrystalWyvern_Boss_Medium 0 150" },

    //크리스탈 와이번 퀸[알파]
    { title: "크리스탈 와이번 퀸[알파] 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Mods/CrystalIsles/Assets/Dinos/CIBoss/CrystalWyvern_Character_BP_Boss_Hard.CrystalWyvern_Character_BP_Boss_Hard\" 0 0 0 150" },
    { title: "크리스탈 와이번 퀸[알파] 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon CrystalWyvern_Character_BP_Boss_Hard_C" },
    { title: "크리스탈 와이번 퀸[알파] 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed CrystalWyvern_Character_BP_Boss_Hard_C" },
    { title: "크리스탈 와이번 퀸[알파] 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"CrystalWyvern_Character_BP_Boss_Hard_C\" 150" },
    { title: "크리스탈 와이번 퀸[알파] 야생 소환 (SDF)", code: "CHEAT SDF CrystalWyvern_Boss_Hard 0 150" },

    //엠버 크리스탈 와이번
    { title: "엠버 크리스탈 와이번 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/CrystalWyvern/CrystalWyvern_Character_BP_Ember.CrystalWyvern_Character_BP_Ember\" 0 0 0 150" },
    { title: "엠버 크리스탈 와이번 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon CrystalWyvern_Character_BP_Ember_C" },
    { title: "엠버 크리스탈 와이번 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed CrystalWyvern_Character_BP_Ember_C" },
    { title: "엠버 크리스탈 와이번 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"CrystalWyvern_Character_BP_Ember_C\" 150" },
    { title: "엠버 크리스탈 와이번 야생 소환 (SDF)", code: "CHEAT SDF CrystalWyvern_Ember 0 150" },

    //Ember Crystal Wyvern Heir
    { title: "Ember Crystal Wyvern Heir 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Mods/CrystalIsles/Assets/Dinos/CIBoss/Minions/CrystalWyvern_Character_BP_Minion_Ember.CrystalWyvern_Character_BP_Minion_Ember\" 0 0 0 150" },
    { title: "Ember Crystal Wyvern Heir 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon CrystalWyvern_Character_BP_Minion_Ember_C" },
    { title: "Ember Crystal Wyvern Heir 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed CrystalWyvern_Character_BP_Minion_Ember_C" },
    { title: "Ember Crystal Wyvern Heir 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"CrystalWyvern_Character_BP_Minion_Ember_C\" 150" },
    { title: "Ember Crystal Wyvern Heir 야생 소환 (SDF)", code: "CHEAT SDF CrystalWyvern_Ember_Minion 0 150" },

    //거대 일벌
    { title: "거대 일벌 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Mods/CrystalIsles/Assets/Dinos/HoneyBee/HoneyBee_Character_BP.HoneyBee_Character_BP\" 0 0 0 150" },
    { title: "거대 일벌 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon HoneyBee_Character_BP_C" },
    { title: "거대 일벌 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed HoneyBee_Character_BP_C" },
    { title: "거대 일벌 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"HoneyBee_Character_BP_C\" 150" },
    { title: "거대 일벌 야생 소환 (SDF)", code: "CHEAT SDF HoneyBee 0 150" },
    //트로페오그나투스
    { title: "트로페오그나투스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/Tropeognathus/Tropeognathus_Character_BP.Tropeognathus_Character_BP\" 0 0 0 150" },
    { title: "트로페오그나투스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Tropeognathus_Character_BP_C" },
    { title: "트로페오그나투스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Tropeognathus_Character_BP_C" },
    { title: "트로페오그나투스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Tropeognathus_Character_BP_C\" 150" },
    { title: "트로페오그나투스 야생 소환 (SDF)", code: "CHEAT SDF Tropeognathus 0 150" },

    //트로피컬 크리스탈 와이번
    { title: "트로피컬 크리스탈 와이번 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/PrimalEarth/Dinos/CrystalWyvern/CrystalWyvern_Character_BP_WS.CrystalWyvern_Character_BP_WS\" 0 0 0 150" },
    { title: "트로피컬 크리스탈 와이번 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon CrystalWyvern_Character_BP_WS_C" },
    { title: "트로피컬 크리스탈 와이번 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed CrystalWyvern_Character_BP_WS_C" },
    { title: "트로피컬 크리스탈 와이번 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"CrystalWyvern_Character_BP_WS_C\" 150" },
    { title: "트로피컬 크리스탈 와이번 야생 소환 (SDF)", code: "CHEAT SDF CrystalWyvern_WS 0 150" },

    //Tropical Crystal Wyvern Heir
    { title: "Tropical Crystal Wyvern Heir 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Mods/CrystalIsles/Assets/Dinos/CIBoss/Minions/CrystalWyvern_Character_BP_Minion_WS.CrystalWyvern_Character_BP_Minion_WS\" 0 0 0 150" },
    { title: "Tropical Crystal Wyvern Heir 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon CrystalWyvern_Character_BP_Minion_WS_C" },
    { title: "Tropical Crystal Wyvern Heir 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed CrystalWyvern_Character_BP_Minion_WS_C" },
    { title: "Tropical Crystal Wyvern Heir 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"CrystalWyvern_Character_BP_Minion_WS_C\" 150" },
    { title: "Tropical Crystal Wyvern Heir 야생 소환 (SDF)", code: "CHEAT SDF CrystalWyvern_WS_Minion 0 150" },

    //메이윙 [Maewing]
    { title: "메이윙 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis2/Dinos/MilkGlider/MilkGlider_Character_BP.MilkGlider_Character_BP\" 0 0 0 150" },
    { title: "메이윙 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon MilkGlider_Character_Bp_C" },
    { title: "메이윙 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed MilkGlider_Character_Bp_C" },
    { title: "메이윙 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"MilkGlider_Character_Bp_C\" 150" },
    { title: "메이윙 야생 소환 (SDF)", code: "CHEAT SDF MilkGlider 0 150" },

    //아스트로델피스 [Astrodelphis]
    { title: "아스트로델피스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis2/Dinos/SpaceDolphin/SpaceDolphin_Character_BP.SpaceDolphin_Character_BP\" 0 0 0 150" },
    { title: "아스트로델피스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon SpaceDolphin_Character_Bp_C" },
    { title: "아스트로델피스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed SpaceDolphin_Character_Bp_C" },
    { title: "아스트로델피스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"SpaceDolphin_Character_Bp_C\" 150" },
    { title: "아스트로델피스 야생 소환 (SDF)", code: "CHEAT SDF SpaceDolphin 0 150" },

    //섀도메인 [Shadowmane]
    { title: "섀도메인 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis2/Dinos/LionfishLion/LionfishLion_Character_BP.LionfishLion_Character_BP\" 0 0 0 150" },
    { title: "섀도메인 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon LionFishLion_Character_Bp_C" },
    { title: "섀도메인 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed LionFishLion_Character_Bp_C" },
    { title: "섀도메인 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"LionFishLion_Character_Bp_C\" 150" },
    { title: "섀도메인 야생 소환 (SDF)", code: "CHEAT SDF LionFishLion 0 150" },

    //노글린 [Noglin]
    { title: "노글린 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis2/Dinos/BrainSlug/BrainSlug_Character_BP.BrainSlug_Character_BP\" 0 0 0 150" },
    { title: "노글린 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon BrainSlug_Character_Bp_C" },
    { title: "노글린 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed BrainSlug_Character_Bp_C" },
    { title: "노글린 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"BrainSlug_Character_Bp_C\" 150" },
    { title: "노글린 야생 소환 (SDF)", code: "CHEAT SDF BrainSlug 0 150" },

    //테크 스트라이더 [Tek Stryder]
    { title: "테크 스트라이더 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis2/Dinos/TekStrider/TekStrider_Character_BP.TekStrider_Character_BP\" 0 0 0 150" },
    { title: "테크 스트라이더 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon TekStrider_Character_Bp_C" },
    { title: "테크 스트라이더 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed TekStrider_Character_Bp_C" },
    { title: "테크 스트라이더 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"TekStrider_Character_Bp_C\" 150" },
    { title: "테크 스트라이더 야생 소환 (SDF)", code: "CHEAT SDF TekStrider 0 150" },

    //서머너 [Summoner]
    { title: "서머너 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis2/Dinos/Summoner/Summoner_Character_BP.Summoner_Character_BP\" 0 0 0 150" },
    { title: "서머너 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Summoner_Character_Bp_C" },
    { title: "서머너 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Summoner_Character_Bp_C" },
    { title: "서머너 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Summoner_Character_Bp_C\" 150" },
    { title: "서머너 야생 소환 (SDF)", code: "CHEAT SDF Summoner 0 150" },

    //보이드웜 [Voidwyrm]
    { title: "보이드웜 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Genesis2/Dinos/TekWyvern/TekWyvern_Character_BP.TekWyvern_Character_BP\" 0 0 0 150" },
    { title: "보이드웜 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon TekWyvern_Character_Bp_C" },
    { title: "보이드웜 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed TekWyvern_Character_Bp_C" },
    { title: "보이드웜 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"TekWyvern_Character_Bp_C\" 150" },
    { title: "보이드웜 야생 소환 (SDF)", code: "CHEAT SDF TekWyvern 0 150" },
    //아마르가
    { title: "아마르가 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/LostIsland/Dinos/Amargasaurus/Amargasaurus_Character_BP.Amargasaurus_Character_BP\" 0 0 0 150" },
    { title: "아마르가 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Amargasaurus_character_bp_c" },
    { title: "아마르가 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Amargasaurus_character_bp_c" },
    { title: "아마르가 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Amargasaurus_character_bp_c\" 150" },
    { title: "아마르가 야생 소환 (SDF)", code: "CHEAT SDF Amargasaurus 0 150" },

    //디노피테쿠스
    { title: "디노피테쿠스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/LostIsland/Dinos/Dinopithecus/Dinopithecus_Character_BP.Dinopithecus_Character_BP\" 0 0 0 150" },
    { title: "디노피테쿠스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon dinopithecus_character_bp_c" },
    { title: "디노피테쿠스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed dinopithecus_character_bp_c" },
    { title: "디노피테쿠스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"dinopithecus_character_bp_c\" 150" },
    { title: "디노피테쿠스 야생 소환 (SDF)", code: "CHEAT SDF Dinopithecus 0 150" },

    //시노마크롭스
    { title: "시노마크롭스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/LostIsland/Dinos/Sinomacrops/Sinomacrops_Character_BP.Sinomacrops_Character_BP\" 0 0 0 150" },
    { title: "시노마크롭스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon sinomacrops_character_bp_c" },
    { title: "시노마크롭스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed sinomacrops_character_bp_c" },
    { title: "시노마크롭스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"sinomacrops_character_bp_c\" 150" },
    { title: "시노마크롭스 야생 소환 (SDF)", code: "CHEAT SDF Sinomacrops 0 150" },

    //디노피테쿠스 킹[감마]
    { title: "디노피테쿠스 킹[감마] 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/LostIsland/Boss/BossDinopithecus_Character_BP_Easy.BossDinopithecus_Character_BP_Easy\" 0 0 0 150" },
    { title: "디노피테쿠스 킹[감마] 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon BossDinopithecus_Character_BP_Easy_C" },
    { title: "디노피테쿠스 킹[감마] 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed BossDinopithecus_Character_BP_Easy_C" },
    { title: "디노피테쿠스 킹[감마] 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"BossDinopithecus_Character_BP_Easy_C\" 150" },
    { title: "디노피테쿠스 킹[감마] 야생 소환 (SDF)", code: "CHEAT SDF BossDinopithecus_Easy 0 150" },

    //디노피테쿠스 킹[베타]
    { title: "디노피테쿠스 킹[베타] 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/LostIsland/Boss/BossDinopithecus_Character_BP_Medium.BossDinopithecus_Character_BP_Medium\" 0 0 0 150" },
    { title: "디노피테쿠스 킹[베타] 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon BossDinopithecus_Character_BP_Medium_C" },
    { title: "디노피테쿠스 킹[베타] 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed BossDinopithecus_Character_BP_Medium_C" },
    { title: "디노피테쿠스 킹[베타] 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"BossDinopithecus_Character_BP_Medium_C\" 150" },
    { title: "디노피테쿠스 킹[베타] 야생 소환 (SDF)", code: "CHEAT SDF BossDinopithecus_Medium 0 150" },

    //디노피테쿠스 킹[알파]
    { title: "디노피테쿠스 킹[알파] 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/LostIsland/Boss/BossDinopithecus_Character_BP_Hard.BossDinopithecus_Character_BP_Hard\" 0 0 0 150" },
    { title: "디노피테쿠스 킹[알파] 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon BossDinopithecus_Character_BP_Hard_C" },
    { title: "디노피테쿠스 킹[알파] 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed BossDinopithecus_Character_BP_Hard_C" },
    { title: "디노피테쿠스 킹[알파] 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"BossDinopithecus_Character_BP_Hard_C\" 150" },
    { title: "디노피테쿠스 킹[알파] 야생 소환 (SDF)", code: "CHEAT SDF BossDinopithecus_Hard 0 150" },
    //앤드류사르쿠스
    { title: "앤드류사르쿠스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Fjordur/Dinos/Andrewsarchus/Andrewsarchus_Character_BP.Andrewsarchus_Character_BP\" 0 0 0 150" },
    { title: "앤드류사르쿠스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Andrewsarchus_Character_BP_C" },
    { title: "앤드류사르쿠스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Andrewsarchus_Character_BP_C" },
    { title: "앤드류사르쿠스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Andrewsarchus_Character_BP_C\" 150" },
    { title: "앤드류사르쿠스 야생 소환 (SDF)", code: "CHEAT SDF Andrewsarchus 0 150" },

    //피오르드호크
    { title: "피오르드호크 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Fjordur/Dinos/Fjordhawk/Fjordhawk_Character_BP.Fjordhawk_Character_BP\" 0 0 0 150" },
    { title: "피오르드호크 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Fjordhawk_Character_BP_C" },
    { title: "피오르드호크 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Fjordhawk_Character_BP_C" },
    { title: "피오르드호크 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Fjordhawk_Character_BP_C\" 150" },
    { title: "피오르드호크 야생 소환 (SDF)", code: "CHEAT SDF Fjordhawk 0 150" },

    //데스모두스
    { title: "데스모두스 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Fjordur/Dinos/Desmodus/Desmodus_Character_BP.Desmodus_Character_BP\" 0 0 0 150" },
    { title: "데스모두스 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Desmodus_Character_BP_C" },
    { title: "데스모두스 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Desmodus_Character_BP_C" },
    { title: "데스모두스 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Desmodus_Character_BP_C\" 150" },
    { title: "데스모두스 야생 소환 (SDF)", code: "CHEAT SDF Desmodus 0 150" },

    //펜리르
    { title: "펜리르 야생 소환 (SpawnDino)", code: "CHEAT SpawnDino \"Blueprint/Game/Fjordur/Dinos/Fenrir/Fenrir_Character_BP.Fenrir_Character_BP\" 0 0 0 150" },
    { title: "펜리르 랜덤 레벨 소환 (Summon)", code: "CHEAT Summon Fenrir_Character_BP_C" },
    { title: "펜리르 길들인 소환 (SummonTamed)", code: "CHEAT SummonTamed Fenrir_Character_BP_C" },
    { title: "펜리르 레벨 150 소환 (GMSummon)", code: "CHEAT GMSummon \"Fenrir_Character_BP_C\" 150" },
    { title: "펜리르 야생 소환 (SDF)", code: "CHEAT SDF Fenrir 0 150" },

];


// 명령어 리스트 생성
function renderCommands() {
    const commandList = document.getElementById("commandList");
    if (!commandList) {
        console.error("commandList 요소를 찾을 수 없습니다. HTML 파일에 ID가 commandList인 요소를 추가하세요.");
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
        const toast = document.getElementById(toast);
        toast.textContent = message;
        toast.classList.add(show);
        setTimeout(() => {
            toast.classList.remove(show);
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
