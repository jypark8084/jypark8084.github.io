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
    //{ title: "범위안 안장없이 테이밍", code: "ForceTameAOE 20" }, //불가
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
    //아키티나 공룡 코드
    { title: "아키티나 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Achatina/Achatina_Character_BP.Achatina_Character_BP'\" 0 0 0 150" },
    { title: "아키티나 랜덤 레벨 소환 (Summon)", code: "cheat Summon Achatina_Character_BP_C" },
    { title: "아키티나 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Achatina_Character_BP_C" },
    { title: "아키티나 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Achatina_Character_BP_C\" 150" },
    { title: "아키티나 야생 공룡 소환 (SDF)", code: "cheat SDF Achatina 0 150" },
    { title: "아키티나 길들인 공룡 소환 (SDF)", code: "cheat SDF Achatina 1 150" },
    //알로사우루스
    { title: "알로사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Allosaurus/Allo_Character_BP.Allo_Character_BP'\" 0 0 0 150" },
    { title: "알로사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Allo_Character_BP_C" },
    { title: "알로사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Allo_Character_BP_C" },
    { title: "알로사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Allo_Character_BP_C\" 150" },
    { title: "알로사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Allo 0 150" },
    { title: "알로사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Allo 1 150" },
    //알파 카르노
    { title: "알파 카르노 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Carno/MegaCarno_Character_BP.MegaCarno_Character_BP'\" 0 0 0 150" },
    { title: "알파 카르노 랜덤 레벨 소환 (Summon)", code: "cheat Summon MegaCarno_Character_BP_C" },
    { title: "알파 카르노 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed MegaCarno_Character_BP_C" },
    { title: "알파 카르노 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"MegaCarno_Character_BP_C\" 150" },
    { title: "알파 카르노 야생 공룡 소환 (SDF)", code: "cheat SDF MegaCarno 0 150" },
    { title: "알파 카르노 길들인X 공룡 소환 (SDF)", code: "cheat SDF MegaCarno 1 150" },
    //알파 리드시크티스
    { title: "알파 리드시크티스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Leedsichthys/Alpha_Leedsichthys_Character_BP.Alpha_Leedsichthys_Character_BP'\" 0 0 0 150" },
    { title: "알파 리드시크티스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Alpha_Leedsichthys_Character_BP_C" },
    { title: "알파 리드시크티스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Alpha_Leedsichthys_Character_BP_C" },
    { title: "알파 리드시크티스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Alpha_Leedsichthys_Character_BP_C\" 150" },
    { title: "알파 리드시크티스 야생 공룡 소환 (SDF)", code: "cheat SDF Alpha_Leedsichthys 0 150" },
    { title: "알파 리드시크티스 길들인X 공룡 소환 (SDF)", code: "cheat SDF Alpha_Leedsichthys 1 150" },
    //알파 메갈로돈
    { title: "알파 메갈로돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Megalodon/MEgaMegalodon_Character_BP.MegaMegalodon_Character_BP'\" 0 0 0 150" },
    { title: "알파 메갈로돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon MegaMegalodon_Character_BP_C" },
    { title: "알파 메갈로돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed MegaMegalodon_Character_BP_C" },
    { title: "알파 메갈로돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"MegaMegalodon_Character_BP_C\" 150" },
    { title: "알파 메갈로돈 야생 공룡 소환 (SDF)", code: "cheat SDF MegaMegalodon 0 150" },
    { title: "알파 메갈로돈 길들인X 공룡 소환 (SDF)", code: "cheat SDF MegaMegalodon 1 150" },
    //알파 모사사우루스
    { title: "알파 모사사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Mosasaurus/Mosa_Character_BP_Mega.Mosa_Character_BP_Mega'\" 0 0 0 150" },
    { title: "알파 모사사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Mosa_Character_BP_Mega_C" },
    { title: "알파 모사사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Mosa_Character_BP_Mega_C" },
    { title: "알파 모사사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Mosa_Character_BP_Mega_C\" 150" },
    { title: "알파 모사사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Mosa_Character_BP_Mega 0 150" },
    { title: "알파 모사사우루스 길들인X 공룡 소환 (SDF)", code: "cheat SDF Mosa_Character_BP_Mega 1 150" },
    //알파 랩터
    { title: "알파 랩터 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Raptor/MegaRaptor_Character_BP.MegaRaptor_Character_BP'\" 0 0 0 150" },
    { title: "알파 랩터 랜덤 레벨 소환 (Summon)", code: "cheat Summon MegaRaptor_Character_BP_C" },
    { title: "알파 랩터 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed MegaRaptor_Character_BP_C" },
    { title: "알파 랩터 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"MegaRaptor_Character_BP_C\" 150" },
    { title: "알파 랩터 야생 공룡 소환 (SDF)", code: "cheat SDF MegaRaptor 0 150" },
    { title: "알파 랩터 길들인X 공룡 소환 (SDF)", code: "cheat SDF MegaRaptor 1 150" },
    //알파 렉스
    { title: "알파 렉스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Rex/MegaRex_Character_BP.MegaRex_Character_BP'\" 0 0 0 150" },
    { title: "알파 렉스 랜덤 레벨 소환 (Summon)", code: "cheat Summon MegaRex_Character_BP_C" },
    { title: "알파 렉스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed MegaRex_Character_BP_C" },
    { title: "알파 렉스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"MegaRex_Character_BP_C\" 150" },
    { title: "알파 렉스 야생 공룡 소환 (SDF)", code: "cheat SDF MegaRex 0 150" },
    { title: "알파 렉스 길들인X 공룡 소환 (SDF)", code: "cheat SDF MegaRex 1 150" },
    //알파 투소테우티스
    { title: "알파 투소테우티스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Tusoteuthis/Mega_Tusoteuthis_Character_BP.Mega_Tusoteuthis_Character_BP'\" 0 0 0 150" },
    { title: "알파 투소테우티스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Mega_Tusoteuthis_Character_BP_C" },
    { title: "알파 투소테우티스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Mega_Tusoteuthis_Character_BP_C" },
    { title: "알파 투소테우티스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Mega_Tusoteuthis_Character_BP_C\" 150" },
    { title: "알파 투소테우티스 야생 공룡 소환 (SDF)", code: "cheat SDF Mega_Tusoteuthis 0 150" },
    { title: "알파 투소테우티스 길들인X 공룡 소환 (SDF)", code: "cheat SDF Mega_Tusoteuthis 1 150" },
    //암모나이트
    { title: "암모나이트 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Ammonite/Ammonite_Character.Ammonite_Character'\" 0 0 0 150" },
    { title: "암모나이트 랜덤 레벨 소환 (Summon)", code: "cheat Summon Ammonite_Character_C" },
    { title: "암모나이트 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Ammonite_Character_C" },
    { title: "암모나이트 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Ammonite_Character_C\" 150" },
    { title: "암모나이트 야생 공룡 소환 (SDF)", code: "cheat SDF Ammonite 0 150" },
    { title: "암모나이트 길들인 공룡 소환 (SDF)", code: "cheat SDF Ammonite 1 150" },
    //앵글러피쉬
    { title: "앵글러피쉬 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Anglerfish/Angler_Character_BP.Angler_Character_BP'\" 0 0 0 150" },
    { title: "앵글러피쉬 랜덤 레벨 소환 (Summon)", code: "cheat Summon Angler_Character_BP_C" },
    { title: "앵글러피쉬 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Angler_Character_BP_C" },
    { title: "앵글러피쉬 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Angler_Character_BP_C\" 150" },
    { title: "앵글러피쉬 야생 공룡 소환 (SDF)", code: "cheat SDF Angler 0 150" },
    { title: "앵글러피쉬 길들인 공룡 소환 (SDF)", code: "cheat SDF Angler 1 150" },
    //안킬로사우루스
    { title: "안킬로사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Ankylo/Ankylo_Character_BP.Ankylo_Character_BP'\" 0 0 0 150" },
    { title: "안킬로사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Ankylo_Character_BP_C" },
    { title: "안킬로사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Ankylo_Character_BP_C" },
    { title: "안킬로사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Ankylo_Character_BP_C\" 150" },
    { title: "안킬로사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Ankylo 0 150" },
    { title: "안킬로사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Ankylo 1 150" },
    //아라네오
    { title: "아라네오 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Spider-Small/SpiderS_Character_BP.SpiderS_Character_BP'\" 0 0 0 150" },
    { title: "아라네오 랜덤 레벨 소환 (Summon)", code: "cheat Summon SpiderS_Character_BP_C" },
    { title: "아라네오 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed SpiderS_Character_BP_C" },
    { title: "아라네오 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"SpiderS_Character_BP_C\" 150" },
    { title: "아라네오 야생 공룡 소환 (SDF)", code: "cheat SDF SpiderS 0 150" },
    { title: "아라네오 길들인 공룡 소환 (SDF)", code: "cheat SDF SpiderS 1 150" },
    //시조새
    { title: "시조새 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Archaeopteryx/Archa_Character_BP.Archa_Character_BP'\" 0 0 0 150" },
    { title: "시조새 랜덤 레벨 소환 (Summon)", code: "cheat Summon Archa_Character_BP_C" },
    { title: "시조새 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Archa_Character_BP_C" },
    { title: "시조새 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Archa_Character_BP_C\" 150" },
    { title: "시조새 야생 공룡 소환 (SDF)", code: "cheat SDF Archa 0 150" },
    { title: "시조새 길들인 공룡 소환 (SDF)", code: "cheat SDF Archa 1 150" },
    //아르젠타비스
    { title: "아르젠타비스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Argentavis/Argent_Character_BP.Argent_Character_BP'\" 0 0 0 150" },
    { title: "아르젠타비스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Argent_Character_BP_C" },
    { title: "아르젠타비스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Argent_Character_BP_C" },
    { title: "아르젠타비스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Argent_Character_BP_C\" 150" },
    { title: "아르젠타비스 야생 공룡 소환 (SDF)", code: "cheat SDF Argent 0 150" },
    { title: "아르젠타비스 길들인 공룡 소환 (SDF)", code: "cheat SDF Argent 1 150" },
    //아트로플레우라
    { title: "아트로플레우라 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Arthropluera/Arthro_Character_BP.Arthro_Character_BP'\" 0 0 0 150" },
    { title: "아트로플레우라 랜덤 레벨 소환 (Summon)", code: "cheat Summon Arthro_Character_BP_C" },
    { title: "아트로플레우라 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Arthro_Character_BP_C" },
    { title: "아트로플레우라 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Arthro_Character_BP_C\" 150" },
    { title: "아트로플레우라 야생 공룡 소환 (SDF)", code: "cheat SDF Arthro 0 150" },
    { title: "아트로플레우라 길들인 공룡 소환 (SDF)", code: "cheat SDF Arthro 1 150" },
    //바리오닉스
    { title: "바리오닉스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Baryonyx/Baryonyx_Character_BP.Baryonyx_Character_BP'\" 0 0 0 150" },
    { title: "바리오닉스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Baryonyx_Character_BP_C" },
    { title: "바리오닉스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Baryonyx_Character_BP_C" },
    { title: "바리오닉스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Baryonyx_Character_BP_C\" 150" },
    { title: "바리오닉스 야생 공룡 소환 (SDF)", code: "cheat SDF Baryonyx 0 150" },
    { title: "바리오닉스 길들인 공룡 소환 (SDF)", code: "cheat SDF Baryonyx 1 150" },
    //바실로사우루스
    { title: "바실로사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Basilosaurus/Basilosaurus_Character_BP.Basilosaurus_Character_BP'\" 0 0 0 150" },
    { title: "바실로사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Basilosaurus_Character_BP_C" },
    { title: "바실로사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Basilosaurus_Character_BP_C" },
    { title: "바실로사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Basilosaurus_Character_BP_C\" 150" },
    { title: "바실로사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Basilosaurus 0 150" },
    { title: "바실로사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Basilosaurus 1 150" },
    //벨제부포
    { title: "벨제부포 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Toad/Toad_Character_BP.Toad_Character_BP'\" 0 0 0 150" },
    { title: "벨제부포 랜덤 레벨 소환 (Summon)", code: "cheat Summon Toad_Character_BP_C" },
    { title: "벨제부포 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Toad_Character_BP_C" },
    { title: "벨제부포 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Toad_Character_BP_C\" 150" },
    { title: "벨제부포 야생 공룡 소환 (SDF)", code: "cheat SDF Toad 0 150" },
    { title: "벨제부포 길들인 공룡 소환 (SDF)", code: "cheat SDF Toad 1 150" },
    //브론토사우루스
    { title: "브론토사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Sauropod/Sauropod_Character_BP.Sauropod_Character_BP'\" 0 0 0 150" },
    { title: "브론토사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Sauropod_Character_BP_C" },
    { title: "브론토사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Sauropod_Character_BP_C" },
    { title: "브론토사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Sauropod_Character_BP_C\" 150" },
    { title: "브론토사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Sauropod 0 150" },
    { title: "브론토사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Sauropod 1 150" },
    //브루드 마더 라이스릭스
    { title: "브루드 마더 라이스릭스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Spider-Large/SpiderL_Character_BP.SpiderL_Character_BP'\" 0 0 0 150" },
    { title: "브루드 마더 라이스릭스 랜덤 레벨 소환 (Summon)", code: "cheat Summon SpiderL_Character_BP_C" },
    { title: "브루드 마더 라이스릭스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed SpiderL_Character_BP_C" },
    { title: "브루드 마더 라이스릭스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"SpiderL_Character_BP_C\" 150" },
    { title: "브루드 마더 라이스릭스 야생 공룡 소환 (SDF)", code: "cheat SDF SpiderL 0 150" },
    { title: "브루드 마더 라이스릭스 길들인 공룡 소환 (SDF)", code: "cheat SDF SpiderL 1 150" },
    //칼리코테리움
    { title: "칼리코테리움 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Chalicotherium/Chalico_Character_BP.Chalico_Character_BP'\" 0 0 0 150" },
    { title: "칼리코테리움 랜덤 레벨 소환 (Summon)", code: "cheat Summon Chalico_Character_BP_C" },
    { title: "칼리코테리움 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Chalico_Character_BP_C" },
    { title: "칼리코테리움 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Chalico_Character_BP_C\" 150" },
    { title: "칼리코테리움 야생 공룡 소환 (SDF)", code: "cheat SDF Chalico 0 150" },
    { title: "칼리코테리움 길들인 공룡 소환 (SDF)", code: "cheat SDF Chalico 1 150" },
    //카르보네미스
    { title: "카르보네미스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Turtle/Turtle_Character_BP.Turtle_Character_BP'\" 0 0 0 150" },
    { title: "카르보네미스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Turtle_Character_BP_C" },
    { title: "카르보네미스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Turtle_Character_BP_C" },
    { title: "카르보네미스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Turtle_Character_BP_C\" 150" },
    { title: "카르보네미스 야생 공룡 소환 (SDF)", code: "cheat SDF Turtle 0 150" },
    { title: "카르보네미스 길들인 공룡 소환 (SDF)", code: "cheat SDF Turtle 1 150" },
    //카르노타우루스
    { title: "카르노타우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Carno/Carno_Character_BP.Carno_Character_BP'\" 0 0 0 150" },
    { title: "카르노타우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Carno_Character_BP_C" },
    { title: "카르노타우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Carno_Character_BP_C" },
    { title: "카르노타우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Carno_Character_BP_C\" 150" },
    { title: "카르노타우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Carno 0 150" },
    { title: "카르노타우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Carno 1 150" },
    //카스토로이데스(비버)
    { title: "카스토로이데스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Beaver/Beaver_Character_BP.Beaver_Character_BP'\" 0 0 0 150" },
    { title: "카스토로이데스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Beaver_Character_BP_C" },
    { title: "카스토로이데스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Beaver_Character_BP_C" },
    { title: "카스토로이데스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Beaver_Character_BP_C\" 150" },
    { title: "카스토로이데스 야생 공룡 소환 (SDF)", code: "cheat SDF Beaver 0 150" },
    { title: "카스토로이데스 길들인 공룡 소환 (SDF)", code: "cheat SDF Beaver 1 150" },
    //해파리
    { title: "해파리 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Cnidaria/Cnidaria_Character_BP.Cnidaria_Character_BP'\" 0 0 0 150" },
    { title: "해파리 랜덤 레벨 소환 (Summon)", code: "cheat Summon Cnidaria_Character_BP_C" },
    { title: "해파리 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Cnidaria_Character_BP_C" },
    { title: "해파리 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Cnidaria_Character_BP_C\" 150" },
    { title: "해파리 야생 공룡 소환 (SDF)", code: "cheat SDF Cnidaria 0 150" },
    { title: "해파리 길들인 공룡 소환 (SDF)", code: "cheat SDF Cnidaria 1 150" },
    //콤피
    { title: "콤피 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Compy/Compy_Character_BP.Compy_Character_BP'\" 0 0 0 150" },
    { title: "콤피 랜덤 레벨 소환 (Summon)", code: "cheat Summon Compy_Character_BP_C" },
    { title: "콤피 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Compy_Character_BP_C" },
    { title: "콤피 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Compy_Character_BP_C\" 150" },
    { title: "콤피 야생 공룡 소환 (SDF)", code: "cheat SDF Compy 0 150" },
    { title: "콤피 길들인 공룡 소환 (SDF)", code: "cheat SDF Compy 1 150" },
    //다에오돈
    { title: "다에오돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Daeodon/Daeodon_Character_BP.Daeodon_Character_BP'\" 0 0 0 150" },
    { title: "다에오돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Daeodon_Character_BP_C" },
    { title: "다에오돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Daeodon_Character_BP_C" },
    { title: "다에오돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Daeodon_Character_BP_C\" 150" },
    { title: "다에오돈 야생 공룡 소환 (SDF)", code: "cheat SDF Daeodon 0 150" },
    { title: "다에오돈 길들인 공룡 소환 (SDF)", code: "cheat SDF Daeodon 1 150" },
    //데스웜
    { title: "데스웜 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/ScorchedEarth/Dinos/DeathWorm/DeathWorm_Character_BP.DeathWorm_Character_BP'\" 0 0 0 150" },
    { title: "데스웜 랜덤 레벨 소환 (Summon)", code: "cheat Summon Deathworm_Character_BP_C" },
    { title: "데스웜 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Deathworm_Character_BP_C" },
    { title: "데스웜 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Deathworm_Character_BP_C\" 150" },
    { title: "데스웜 야생 공룡 소환 (SDF)", code: "cheat SDF Deathworm 0 150" },
    { title: "데스웜 길들인 공룡 소환 (SDF)", code: "cheat SDF Deathworm 1 150" },
    //딜로포사우루스
    { title: "딜로포사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Dilo/Dilo_Character_BP.Dilo_Character_BP'\" 0 0 0 150" },
    { title: "딜로포사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Dilo_Character_BP_C" },
    { title: "딜로포사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Dilo_Character_BP_C" },
    { title: "딜로포사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Dilo_Character_BP_C\" 150" },
    { title: "딜로포사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Dilo 0 150" },
    { title: "딜로포사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Dilo 1 150" },
    //디메트로돈
    { title: "디메트로돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Dimetrodon/Dimetro_Character_BP.Dimetro_Character_BP'\" 0 0 0 150" },
    { title: "디메트로돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Dimetro_Character_BP_C" },
    { title: "디메트로돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Dimetro_Character_BP_C" },
    { title: "디메트로돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Dimetro_Character_BP_C\" 150" },
    { title: "디메트로돈 야생 공룡 소환 (SDF)", code: "cheat SDF Dimetro 0 150" },
    { title: "디메트로돈 길들인 공룡 소환 (SDF)", code: "cheat SDF Dimetro 1 150" },
    //디몰포돈    { title: "디몰포돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Dimorphodon/Dimorph_Character_BP.Dimorph_Character_BP'\" 0 0 0 150" },
    { title: "디몰포돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Dimorph_Character_BP_C" },
    { title: "디몰포돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Dimorph_Character_BP_C" },
    { title: "디몰포돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Dimorph_Character_BP_C\" 150" },
    { title: "디몰포돈 야생 공룡 소환 (SDF)", code: "cheat SDF Dimorph 0 150" },
    { title: "디몰포돈 길들인 공룡 소환 (SDF)", code: "cheat SDF Dimorph 1 150" },
    //디플로도쿠스
    { title: "디플로도쿠스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Diplodocus/Diplodocus_Character_BP.Diplodocus_Character_BP'\" 0 0 0 150" },
    { title: "디플로도쿠스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Diplodocus_Character_BP_C" },
    { title: "디플로도쿠스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Diplodocus_Character_BP_C" },
    { title: "디플로도쿠스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Diplodocus_Character_BP_C\" 150" },
    { title: "디플로도쿠스 야생 공룡 소환 (SDF)", code: "cheat SDF Diplodocus 0 150" },
    { title: "디플로도쿠스 길들인 공룡 소환 (SDF)", code: "cheat SDF Diplodocus 1 150" },

    //다이어 베어
    { title: "다이어 베어 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Direbear/Direbear_Character_BP.Direbear_Character_BP'\" 0 0 0 150" },
    { title: "다이어 베어 랜덤 레벨 소환 (Summon)", code: "cheat Summon Direbear_Character_BP_C" },
    { title: "다이어 베어 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Direbear_Character_BP_C" },
    { title: "다이어 베어 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Direbear_Character_BP_C\" 150" },
    { title: "다이어 베어 야생 공룡 소환 (SDF)", code: "cheat SDF Direbear 0 150" },
    { title: "다이어 베어 길들인 공룡 소환 (SDF)", code: "cheat SDF Direbear 1 150" },

    //다이어 울프
    { title: "다이어 울프 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Direwolf/Direwolf_Character_BP.Direwolf_Character_BP'\" 0 0 0 150" },
    { title: "다이어 울프 랜덤 레벨 소환 (Summon)", code: "cheat Summon Direwolf_Character_BP_C" },
    { title: "다이어 울프 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Direwolf_Character_BP_C" },
    { title: "다이어 울프 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Direwolf_Character_BP_C\" 150" },
    { title: "다이어 울프 야생 공룡 소환 (SDF)", code: "cheat SDF Direwolf 0 150" },
    { title: "다이어 울프 길들인 공룡 소환 (SDF)", code: "cheat SDF Direwolf 1 150" },

    //도도
    { title: "도도 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Dodo/Dodo_Character_BP.Dodo_Character_BP'\" 0 0 0 150" },
    { title: "도도 랜덤 레벨 소환 (Summon)", code: "cheat Summon Dodo_Character_BP_C" },
    { title: "도도 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Dodo_Character_BP_C" },
    { title: "도도 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Dodo_Character_BP_C\" 150" },
    { title: "도도 야생 공룡 소환 (SDF)", code: "cheat SDF Dodo 0 150" },
    { title: "도도 길들인 공룡 소환 (SDF)", code: "cheat SDF Dodo 1 150" },

    //도에디쿠스
    { title: "도에디쿠스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Doedicurus/Doed_Character_BP.Doed_Character_BP'\" 0 0 0 150" },
    { title: "도에디쿠스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Doed_Character_BP_C" },
    { title: "도에디쿠스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Doed_Character_BP_C" },
    { title: "도에디쿠스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Doed_Character_BP_C\" 150" },
    { title: "도에디쿠스 야생 공룡 소환 (SDF)", code: "cheat SDF Doed 0 150" },
    { title: "도에디쿠스 길들인 공룡 소환 (SDF)", code: "cheat SDF Doed 1 150" },

    //드래곤
    { title: "드래곤 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Dragon/Dragon_Character_BP.Dragon_Character_BP'\" 0 0 0 150" },
    { title: "드래곤 랜덤 레벨 소환 (Summon)", code: "cheat Summon Dragon_Character_BP_C" },
    { title: "드래곤 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Dragon_Character_BP_C" },
    { title: "드래곤 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Dragon_Character_BP_C\" 150" },
    { title: "드래곤 야생 공룡 소환 (SDF)", code: "cheat SDF Dragon 0 150" },
    { title: "드래곤 길들인 공룡 소환 (SDF)", code: "cheat SDF Dragon 1 150" },

    //쇠똥구리
    { title: "쇠똥구리 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/DungBeetle/DungBeetle_Character_BP.DungBeetle_Character_BP'\" 0 0 0 150" },
    { title: "쇠똥구리 랜덤 레벨 소환 (Summon)", code: "cheat Summon DungBeetle_Character_BP_C" },
    { title: "쇠똥구리 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed DungBeetle_Character_BP_C" },
    { title: "쇠똥구리 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"DungBeetle_Character_BP_C\" 150" },
    { title: "쇠똥구리 야생 공룡 소환 (SDF)", code: "cheat SDF DungBeetle 0 150" },
    { title: "쇠똥구리 길들인 공룡 소환 (SDF)", code: "cheat SDF DungBeetle 1 150" },

    //둔클레오스테우스
    { title: "둔클레오스테우스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Dunkleosteus/Dunkle_Character_BP.Dunkle_Character_BP'\" 0 0 0 150" },
    { title: "둔클레오스테우스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Dunkle_Character_BP_C" },
    { title: "둔클레오스테우스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Dunkle_Character_BP_C" },
    { title: "둔클레오스테우스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Dunkle_Character_BP_C\" 150" },
    { title: "둔클레오스테우스 야생 공룡 소환 (SDF)", code: "cheat SDF Dunkle 0 150" },
    { title: "둔클레오스테우스 길들인 공룡 소환 (SDF)", code: "cheat SDF Dunkle 1 150" },

    //전기 뱀장어
    { title: "전기 뱀장어 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Eel/Eel_Character_BP.Eel_Character_BP'\" 0 0 0 150" },
    { title: "전기 뱀장어 랜덤 레벨 소환 (Summon)", code: "cheat Summon Eel_Character_BP_C" },
    { title: "전기 뱀장어 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Eel_Character_BP_C" },
    { title: "전기 뱀장어 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Eel_Character_BP_C\" 150" },
    { title: "전기 뱀장어 야생 공룡 소환 (SDF)", code: "cheat SDF Eel 0 150" },
    { title: "전기 뱀장어 길들인 공룡 소환 (SDF)", code: "cheat SDF Eel 1 150" },

    //에쿠스
    { title: "에쿠스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Equus/Equus_Character_BP.Equus_Character_BP'\" 0 0 0 150" },
    { title: "에쿠스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Equus_Character_BP_C" },
    { title: "에쿠스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Equus_Character_BP_C" },
    { title: "에쿠스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Equus_Character_BP_C\" 150" },
    { title: "에쿠스 야생 공룡 소환 (SDF)", code: "cheat SDF Equus 0 150" },
    { title: "에쿠스 길들인 공룡 소환 (SDF)", code: "cheat SDF Equus 1 150" },

    //유니콘
    { title: "유니콘 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Equus/Equus_Character_BP_Unicorn.Equus_Character_BP_Unicorn'\" 0 0 0 150" },
    { title: "유니콘 랜덤 레벨 소환 (Summon)", code: "cheat Summon Equus_Character_BP_Unicorn_C" },
    { title: "유니콘 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Equus_Character_BP_Unicorn_C" },
    { title: "유니콘 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Equus_Character_BP_Unicorn_C\" 150" },
    { title: "유니콘 야생 공룡 소환 (SDF)", code: "cheat SDF Equus_Character_BP_Unicorn 0 150" },
    { title: "유니콘 길들인 공룡 소환 (SDF)", code: "cheat SDF Equus_Character_BP_Unicorn 1 150" },

    //바다전갈
    { title: "바다전갈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Eurypterid/Euryp_Character.Euryp_Character'\" 0 0 0 150" },
    { title: "바다전갈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Euryp_Character_C" },
    { title: "바다전갈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Euryp_Character_C" },
    { title: "바다전갈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Euryp_Character_C\" 150" },
    { title: "바다전갈 야생 공룡 소환 (SDF)", code: "cheat SDF Euryp 0 150" },
    { title: "바다전갈 길들인 공룡 소환 (SDF)", code: "cheat SDF Euryp 1 150" },

    //갈리미무스
    { title: "갈리미무스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Gallimimus/Galli_Character_BP.Galli_Character_BP'\" 0 0 0 150" },
    { title: "갈리미무스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Galli_Character_BP_C" },
    { title: "갈리미무스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Galli_Character_BP_C" },
    { title: "갈리미무스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Galli_Character_BP_C\" 150" },
    { title: "갈리미무스 야생 공룡 소환 (SDF)", code: "cheat SDF Galli 0 150" },
    { title: "갈리미무스 길들인 공룡 소환 (SDF)", code: "cheat SDF Galli 1 150" },
    //거대벌
    { title: "거대벌 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Bee/Bee_Character_BP.Bee_Character_BP'\" 0 0 0 150" },
    { title: "거대벌 랜덤 레벨 소환 (Summon)", code: "cheat Summon Bee_Character_BP_C" },
    { title: "거대벌 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Bee_Character_BP_C" },
    { title: "거대벌 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Bee_Character_BP_C\" 150" },
    { title: "거대벌 야생 공룡 소환 (SDF)", code: "cheat SDF Bee 0 150" },
    { title: "거대벌 길들인 공룡 소환 (SDF)", code: "cheat SDF Bee 1 150" },

    //기가노토사우루스
    { title: "기가노토사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Giganotosaurus/Gigant_Character_BP.Gigant_Character_BP'\" 0 0 0 150" },
    { title: "기가노토사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Gigant_Character_BP_C" },
    { title: "기가노토사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Gigant_Character_BP_C" },
    { title: "기가노토사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Gigant_Character_BP_C\" 150" },
    { title: "기가노토사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Gigant 0 150" },
    { title: "기가노토사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Gigant 1 150" },

    //기간토피테쿠스
    { title: "기간토피테쿠스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Bigfoot/Bigfoot_Character_BP.Bigfoot_Character_BP'\" 0 0 0 150" },
    { title: "기간토피테쿠스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Bigfoot_Character_BP_C" },
    { title: "기간토피테쿠스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Bigfoot_Character_BP_C" },
    { title: "기간토피테쿠스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Bigfoot_Character_BP_C\" 150" },
    { title: "기간토피테쿠스 야생 공룡 소환 (SDF)", code: "cheat SDF Bigfoot 0 150" },
    { title: "기간토피테쿠스 길들인 공룡 소환 (SDF)", code: "cheat SDF Bigfoot 1 150" },

    //이스페로니스
    { title: "이스페로니스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Hesperornis/Hesperornis_Character_BP.Hesperornis_Character_BP'\" 0 0 0 150" },
    { title: "이스페로니스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Hesperornis_Character_BP_C" },
    { title: "이스페로니스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Hesperornis_Character_BP_C" },
    { title: "이스페로니스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Hesperornis_Character_BP_C\" 150" },
    { title: "이스페로니스 야생 공룡 소환 (SDF)", code: "cheat SDF Hesperornis 0 150" },
    { title: "이스페로니스 길들인 공룡 소환 (SDF)", code: "cheat SDF Hesperornis 1 150" },

    //인간(남자)
    { title: "인간(남자) 생성 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/CoreBlueprints/PlayerPawnTest_Male.PlayerPawnTest_Male'\" 0 0 0 150" },

    //인간(여자)
    { title: "인간(여자) 생성 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/CoreBlueprints/PlayerPawnTest_Female.PlayerPawnTest_Female'\" 0 0 0 150" },

    //하이에노돈
    { title: "하이에노돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Hyaenodon/Hyaenodon_Character_BP.Hyaenodon_Character_BP'\" 0 0 0 150" },
    { title: "하이에노돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Hyaenodon_Character_BP_C" },
    { title: "하이에노돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Hyaenodon_Character_BP_C" },
    { title: "하이에노돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Hyaenodon_Character_BP_C\" 150" },
    { title: "하이에노돈 야생 공룡 소환 (SDF)", code: "cheat SDF Hyaenodon 0 150" },
    { title: "하이에노돈 길들인 공룡 소환 (SDF)", code: "cheat SDF Hyaenodon 1 150" },

    //이크티오르니스
    { title: "이크티오르니스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Ichthyornis/Ichthyornis_Character_BP.Ichthyornis_Character_BP'\" 0 0 0 150" },
    { title: "이크티오르니스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Ichthyornis_Character_BP_C" },
    { title: "이크티오르니스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Ichthyornis_Character_BP_C" },
    { title: "이크티오르니스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Ichthyornis_Character_BP_C\" 150" },
    { title: "이크티오르니스 야생 공룡 소환 (SDF)", code: "cheat SDF Ichthyornis 0 150" },
    { title: "이크티오르니스 길들인 공룡 소환 (SDF)", code: "cheat SDF Ichthyornis 1 150" },

    //이구아노돈
    { title: "이구아노돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Iguanodon/Iguanodon_Character_BP.Iguanodon_Character_BP'\" 0 0 0 150" },
    { title: "이구아노돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Iguanodon_Character_BP_C" },
    { title: "이구아노돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Iguanodon_Character_BP_C" },
    { title: "이구아노돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Iguanodon_Character_BP_C\" 150" },
    { title: "이구아노돈 야생 공룡 소환 (SDF)", code: "cheat SDF Iguanodon 0 150" },
    { title: "이구아노돈 길들인 공룡 소환 (SDF)", code: "cheat SDF Iguanodon 1 150" },

    //카이루쿠
    { title: "카이루쿠 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Kairuku/Kairuku_Character_BP.Kairuku_Character_BP'\" 0 0 0 150" },
    { title: "카이루쿠 랜덤 레벨 소환 (Summon)", code: "cheat Summon Kairuku_Character_BP_C" },
    { title: "카이루쿠 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Kairuku_Character_BP_C" },
    { title: "카이루쿠 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Kairuku_Character_BP_C\" 150" },
    { title: "카이루쿠 야생 공룡 소환 (SDF)", code: "cheat SDF Kairuku 0 150" },
    { title: "카이루쿠 길들인 공룡 소환 (SDF)", code: "cheat SDF Kairuku 1 150" },

    //카프로수쿠스
    { title: "카프로수쿠스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Kaprosuchus/Kaprosuchus_Character_BP.Kaprosuchus_Character_BP'\" 0 0 0 150" },
    { title: "카프로수쿠스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Kaprosuchus_Character_BP_C" },
    { title: "카프로수쿠스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Kaprosuchus_Character_BP_C" },
    { title: "카프로수쿠스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Kaprosuchus_Character_BP_C\" 150" },
    { title: "카프로수쿠스 야생 공룡 소환 (SDF)", code: "cheat SDF Kaprosuchus 0 150" },
    { title: "카프로수쿠스 길들인 공룡 소환 (SDF)", code: "cheat SDF Kaprosuchus 1 150" },

    //켄트로사우루스
    { title: "켄트로사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Kentrosaurus/Kentro_Character_BP.Kentro_Character_BP'\" 0 0 0 150" },
    { title: "켄트로사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Kentro_Character_BP_C" },
    { title: "켄트로사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Kentro_Character_BP_C" },
    { title: "켄트로사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Kentro_Character_BP_C\" 150" },
    { title: "켄트로사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Kentro 0 150" },
    { title: "켄트로사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Kentro 1 150" },

    //거머리
    { title: "거머리 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Leech/Leech_Character.Leech_Character'\" 0 0 0 150" },
    { title: "거머리 랜덤 레벨 소환 (Summon)", code: "cheat Summon Leech_Character_C" },
    { title: "거머리 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Leech_Character_C" },
    { title: "거머리 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Leech_Character_C\" 150" },
    { title: "거머리 야생 공룡 소환 (SDF)", code: "cheat SDF Leech 0 150" },
    { title: "거머리 길들인 공룡 소환 (SDF)", code: "cheat SDF Leech 1 150" },
    //질병거머리
    { title: "질병거머리 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Leech/Leech_Character_Diseased.Leech_Character_Diseased'\" 0 0 0 150" },
    { title: "질병거머리 랜덤 레벨 소환 (Summon)", code: "cheat Summon Leech_Character_Diseased_C" },
    { title: "질병거머리 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Leech_Character_Diseased_C" },
    { title: "질병거머리 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Leech_Character_Diseased_C\" 150" },
    { title: "질병거머리 야생 공룡 소환 (SDF)", code: "cheat SDF Leech_Character_Diseased 0 150" },
    { title: "질병거머리 길들인 공룡 소환 (SDF)", code: "cheat SDF Leech_Character_Diseased 1 150" },

    //리드시크티스
    { title: "리드시크티스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Leedsichthys/Leedsichthys_Character_BP.Leedsichthys_Character_BP'\" 0 0 0 150" },
    { title: "리드시크티스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Leedsichthys_Character_BP_C" },
    { title: "리드시크티스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Leedsichthys_Character_BP_C" },
    { title: "리드시크티스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Leedsichthys_Character_BP_C\" 150" },
    { title: "리드시크티스 야생 공룡 소환 (SDF)", code: "cheat SDF Leedsichthys 0 150" },
    { title: "리드시크티스 길들인 공룡 소환 (SDF)", code: "cheat SDF Leedsichthys 1 150" },

    //리오플레우로돈
    { title: "리오플레우로돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Liopleurodon/Liopleurodon_Character_BP.Liopleurodon_Character_BP'\" 0 0 0 150" },
    { title: "리오플레우로돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Liopleurodon_Character_BP_C" },
    { title: "리오플레우로돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Liopleurodon_Character_BP_C" },
    { title: "리오플레우로돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Liopleurodon_Character_BP_C\" 150" },
    { title: "리오플레우로돈 야생 공룡 소환 (SDF)", code: "cheat SDF Liopleurodon 0 150" },
    { title: "리오플레우로돈 길들인 공룡 소환 (SDF)", code: "cheat SDF Liopleurodon 1 150" },

    //리스트로사우루스
    { title: "리스트로사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Lystrosaurus/Lystro_Character_BP.Lystro_Character_BP'\" 0 0 0 150" },
    { title: "리스트로사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Lystro_Character_BP_C" },
    { title: "리스트로사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Lystro_Character_BP_C" },
    { title: "리스트로사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Lystro_Character_BP_C\" 150" },
    { title: "리스트로사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Lystro 0 150" },
    { title: "리스트로사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Lystro 1 150" },

    //메머드
    { title: "메머드 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Mammoth/Mammoth_Character_BP.Mammoth_Character_BP'\" 0 0 0 150" },
    { title: "메머드 랜덤 레벨 소환 (Summon)", code: "cheat Summon Mammoth_Character_BP_C" },
    { title: "메머드 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Mammoth_Character_BP_C" },
    { title: "메머드 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Mammoth_Character_BP_C\" 150" },
    { title: "메머드 야생 공룡 소환 (SDF)", code: "cheat SDF Mammoth 0 150" },
    { title: "메머드 길들인 공룡 소환 (SDF)", code: "cheat SDF Mammoth 1 150" },

    //만타
    { title: "만타 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Manta/Manta_Character_BP.Manta_Character_BP'\" 0 0 0 150" },
    { title: "만타 랜덤 레벨 소환 (Summon)", code: "cheat Summon Manta_Character_BP_C" },
    { title: "만타 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Manta_Character_BP_C" },
    { title: "만타 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Manta_Character_BP_C\" 150" },
    { title: "만타 야생 공룡 소환 (SDF)", code: "cheat SDF Manta 0 150" },
    { title: "만타 길들인 공룡 소환 (SDF)", code: "cheat SDF Manta 1 150" },

    //만티코어
    { title: "만티코어 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/ScorchedEarth/Dinos/Manticore/Manticore_Character_BP.Manticore_Character_BP'\" 0 0 0 150" },
    { title: "만티코어 랜덤 레벨 소환 (Summon)", code: "cheat Summon Manticore_Character_BP_C" },
    { title: "만티코어 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Manticore_Character_BP_C" },
    { title: "만티코어 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Manticore_Character_BP_C\" 150" },
    { title: "만티코어 야생 공룡 소환 (SDF)", code: "cheat SDF Manticore 0 150" },
    { title: "만티코어 길들인 공룡 소환 (SDF)", code: "cheat SDF Manticore 1 150" },

    //메갈라니아
    { title: "메갈라니아 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Megalania/Megalania_Character_BP.Megalania_Character_BP'\" 0 0 0 150" },
    { title: "메갈라니아 랜덤 레벨 소환 (Summon)", code: "cheat Summon Megalania_Character_BP_C" },
    { title: "메갈라니아 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Megalania_Character_BP_C" },
    { title: "메갈라니아 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Megalania_Character_BP_C\" 150" },
    { title: "메갈라니아 야생 공룡 소환 (SDF)", code: "cheat SDF Megalania 0 150" },
    { title: "메갈라니아 길들인 공룡 소환 (SDF)", code: "cheat SDF Megalania 1 150" },

    //메갈로케로스
    { title: "메갈로케로스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Stag/Stag_Character_BP.Stag_Character_BP'\" 0 0 0 150" },
    { title: "메갈로케로스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Stag_Character_BP_C" },
    { title: "메갈로케로스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Stag_Character_BP_C" },
    { title: "메갈로케로스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Stag_Character_BP_C\" 150" },
    { title: "메갈로케로스 야생 공룡 소환 (SDF)", code: "cheat SDF Stag 0 150" },
    { title: "메갈로케로스 길들인 공룡 소환 (SDF)", code: "cheat SDF Stag 1 150" },

    //메갈로돈
    { title: "메갈로돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Megalodon/Megalodon_Character_BP.Megalodon_Character_BP'\" 0 0 0 150" },
    { title: "메갈로돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Megalodon_Character_BP_C" },
    { title: "메갈로돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Megalodon_Character_BP_C" },
    { title: "메갈로돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Megalodon_Character_BP_C\" 150" },
    { title: "메갈로돈 야생 공룡 소환 (SDF)", code: "cheat SDF Megalodon 0 150" },
    { title: "메갈로돈 길들인 공룡 소환 (SDF)", code: "cheat SDF Megalodon 1 150" },

    //메갈로사우루스
    { title: "메갈로사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Megalosaurus/Megalosaurus_Character_BP.Megalosaurus_Character_BP'\" 0 0 0 150" },
    { title: "메갈로사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Megalosaurus_Character_BP_C" },
    { title: "메갈로사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Megalosaurus_Character_BP_C" },
    { title: "메갈로사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Megalosaurus_Character_BP_C\" 150" },
    { title: "메갈로사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Megalosaurus 0 150" },
    { title: "메갈로사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Megalosaurus 1 150" },

    //메가네우라
    { title: "메가네우라 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Dragonfly/Dragonfly_Character_BP.Dragonfly_Character_BP'\" 0 0 0 150" },
    { title: "메가네우라 랜덤 레벨 소환 (Summon)", code: "cheat Summon Dragonfly_Character_BP_C" },
    { title: "메가네우라 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Dragonfly_Character_BP_C" },
    { title: "메가네우라 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Dragonfly_Character_BP_C\" 150" },
    { title: "메가네우라 야생 공룡 소환 (SDF)", code: "cheat SDF Dragonfly 0 150" },
    { title: "메가네우라 길들인 공룡 소환 (SDF)", code: "cheat SDF Dragonfly 1 150" },

    //메가피테쿠스
    { title: "메가피테쿠스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Gorilla/Gorilla_Character_BP.Gorilla_Character_BP'\" 0 0 0 150" },
    { title: "메가피테쿠스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Gorilla_Character_BP_C" },
    { title: "메가피테쿠스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Gorilla_Character_BP_C" },
    { title: "메가피테쿠스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Gorilla_Character_BP_C\" 150" },
    { title: "메가피테쿠스 야생 공룡 소환 (SDF)", code: "cheat SDF Gorilla 0 150" },
    { title: "메가피테쿠스 길들인 공룡 소환 (SDF)", code: "cheat SDF Gorilla 1 150" },
    //메가테리움
    { title: "메가테리움 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Megatherium/Megatherium_Character_BP.Megatherium_Character_BP'\" 0 0 0 150" },
    { title: "메가테리움 랜덤 레벨 소환 (Summon)", code: "cheat Summon Megatherium_Character_BP_C" },
    { title: "메가테리움 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Megatherium_Character_BP_C" },
    { title: "메가테리움 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Megatherium_Character_BP_C\" 150" },
    { title: "메가테리움 야생 공룡 소환 (SDF)", code: "cheat SDF Megatherium 0 150" },
    { title: "메가테리움 길들인 공룡 소환 (SDF)", code: "cheat SDF Megatherium 1 150" },

    //메소피테쿠스
    { title: "메소피테쿠스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Monkey/Monkey_Character_BP.Monkey_Character_BP'\" 0 0 0 150" },
    { title: "메소피테쿠스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Monkey_Character_BP_C" },
    { title: "메소피테쿠스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Monkey_Character_BP_C" },
    { title: "메소피테쿠스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Monkey_Character_BP_C\" 150" },
    { title: "메소피테쿠스 야생 공룡 소환 (SDF)", code: "cheat SDF Monkey 0 150" },
    { title: "메소피테쿠스 길들인 공룡 소환 (SDF)", code: "cheat SDF Monkey 1 150" },

    //미크로랍토르
    { title: "미크로랍토르 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Microraptor/Microraptor_Character_BP.Microraptor_Character_BP'\" 0 0 0 150" },
    { title: "미크로랍토르 랜덤 레벨 소환 (Summon)", code: "cheat Summon Microraptor_Character_BP_C" },
    { title: "미크로랍토르 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Microraptor_Character_BP_C" },
    { title: "미크로랍토르 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Microraptor_Character_BP_C\" 150" },
    { title: "미크로랍토르 야생 공룡 소환 (SDF)", code: "cheat SDF Microraptor 0 150" },
    { title: "미크로랍토르 길들인 공룡 소환 (SDF)", code: "cheat SDF Microraptor 1 150" },

    //모사사우루스
    { title: "모사사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Mosasaurus/Mosa_Character_BP.Mosa_Character_BP'\" 0 0 0 150" },
    { title: "모사사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Mosa_Character_BP_C" },
    { title: "모사사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Mosa_Character_BP_C" },
    { title: "모사사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Mosa_Character_BP_C\" 150" },
    { title: "모사사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Mosa 0 150" },
    { title: "모사사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Mosa 1 150" },

    //모스콥스
    { title: "모스콥스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Moschops/Moschops_Character_BP.Moschops_Character_BP'\" 0 0 0 150" },
    { title: "모스콥스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Moschops_Character_BP_C" },
    { title: "모스콥스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Moschops_Character_BP_C" },
    { title: "모스콥스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Moschops_Character_BP_C\" 150" },
    { title: "모스콥스 야생 공룡 소환 (SDF)", code: "cheat SDF Moschops 0 150" },
    { title: "모스콥스 길들인 공룡 소환 (SDF)", code: "cheat SDF Moschops 1 150" },

    //오니크
    { title: "오니크 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Bat/Bat_Character_BP.Bat_Character_BP'\" 0 0 0 150" },
    { title: "오니크 랜덤 레벨 소환 (Summon)", code: "cheat Summon Bat_Character_BP_C" },
    { title: "오니크 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Bat_Character_BP_C" },
    { title: "오니크 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Bat_Character_BP_C\" 150" },
    { title: "오니크 야생 공룡 소환 (SDF)", code: "cheat SDF Bat 0 150" },
    { title: "오니크 길들인 공룡 소환 (SDF)", code: "cheat SDF Bat 1 150" },

    //수달
    { title: "수달 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Otter/Otter_Character_BP.Otter_Character_BP'\" 0 0 0 150" },
    { title: "수달 랜덤 레벨 소환 (Summon)", code: "cheat Summon Otter_Character_BP_C" },
    { title: "수달 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Otter_Character_BP_C" },
    { title: "수달 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Otter_Character_BP_C\" 150" },
    { title: "수달 야생 공룡 소환 (SDF)", code: "cheat SDF Otter 0 150" },
    { title: "수달 길들인 공룡 소환 (SDF)", code: "cheat SDF Otter 1 150" },

    //오비랍토르
    { title: "오비랍토르 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Oviraptor/Oviraptor_Character_BP.Oviraptor_Character_BP'\" 0 0 0 150" },
    { title: "오비랍토르 랜덤 레벨 소환 (Summon)", code: "cheat Summon Oviraptor_Character_BP_C" },
    { title: "오비랍토르 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Oviraptor_Character_BP_C" },
    { title: "오비랍토르 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Oviraptor_Character_BP_C\" 150" },
    { title: "오비랍토르 야생 공룡 소환 (SDF)", code: "cheat SDF Oviraptor 0 150" },
    { title: "오비랍토르 길들인 공룡 소환 (SDF)", code: "cheat SDF Oviraptor 1 150" },

    //오비스
    { title: "오비스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Sheep/Sheep_Character_BP.Sheep_Character_BP'\" 0 0 0 150" },
    { title: "오비스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Sheep_Character_BP_C" },
    { title: "오비스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Sheep_Character_BP_C" },
    { title: "오비스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Sheep_Character_BP_C\" 150" },
    { title: "오비스 야생 공룡 소환 (SDF)", code: "cheat SDF Sheep 0 150" },
    { title: "오비스 길들인 공룡 소환 (SDF)", code: "cheat SDF Sheep 1 150" },

    //파키
    { title: "파키 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Pachy/Pachy_Character_BP.Pachy_Character_BP'\" 0 0 0 150" },
    { title: "파키 랜덤 레벨 소환 (Summon)", code: "cheat Summon Pachy_Character_BP_C" },
    { title: "파키 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Pachy_Character_BP_C" },
    { title: "파키 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Pachy_Character_BP_C\" 150" },
    { title: "파키 야생 공룡 소환 (SDF)", code: "cheat SDF Pachy 0 150" },
    { title: "파키 길들인 공룡 소환 (SDF)", code: "cheat SDF Pachy 1 150" },

    //파키리노사우루스
    { title: "파키리노사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Pachyrhinosaurus/Pachyrhino_Character_BP.Pachyrhino_Character_BP'\" 0 0 0 150" },
    { title: "파키리노사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Pachyrhino_Character_BP_C" },
    { title: "파키리노사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Pachyrhino_Character_BP_C" },
    { title: "파키리노사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Pachyrhino_Character_BP_C\" 150" },
    { title: "파키리노사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Pachyrhino 0 150" },
    { title: "파키리노사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Pachyrhino 1 150" },

    //파라케라테리움
    { title: "파라케라테리움 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Paraceratherium/Paracer_Character_BP.Paracer_Character_BP'\" 0 0 0 150" },
    { title: "파라케라테리움 랜덤 레벨 소환 (Summon)", code: "cheat Summon Paracer_Character_BP_C" },
    { title: "파라케라테리움 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Paracer_Character_BP_C" },
    { title: "파라케라테리움 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Paracer_Character_BP_C\" 150" },
    { title: "파라케라테리움 야생 공룡 소환 (SDF)", code: "cheat SDF Paracer 0 150" },
    { title: "파라케라테리움 길들인 공룡 소환 (SDF)", code: "cheat SDF Paracer 1 150" },

    //파라사우롤로푸스
    { title: "파라사우롤로푸스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Para/Para_Character_BP.Para_Character_BP'\" 0 0 0 150" },
    { title: "파라사우롤로푸스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Para_Character_BP_C" },
    { title: "파라사우롤로푸스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Para_Character_BP_C" },
    { title: "파라사우롤로푸스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Para_Character_BP_C\" 150" },
    { title: "파라사우롤로푸스 야생 공룡 소환 (SDF)", code: "cheat SDF Para 0 150" },
    { title: "파라사우롤로푸스 길들인 공룡 소환 (SDF)", code: "cheat SDF Para 1 150" },

    //페고매스탁스
    { title: "페고매스탁스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Pegomastax/Pegomastax_Character_BP.Pegomastax_Character_BP'\" 0 0 0 150" },
    { title: "페고매스탁스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Pegomastax_Character_BP_C" },
    { title: "페고매스탁스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Pegomastax_Character_BP_C" },
    { title: "페고매스탁스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Pegomastax_Character_BP_C\" 150" },
    { title: "페고매스탁스 야생 공룡 소환 (SDF)", code: "cheat SDF Pegomastax 0 150" },
    { title: "페고매스탁스 길들인 공룡 소환 (SDF)", code: "cheat SDF Pegomastax 1 150" },
    //펠라고르니스
    { title: "펠라고르니스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Pelagornis/Pela_Character_BP.Pela_Character_BP'\" 0 0 0 150" },
    { title: "펠라고르니스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Pela_Character_BP_C" },
    { title: "펠라고르니스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Pela_Character_BP_C" },
    { title: "펠라고르니스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Pela_Character_BP_C\" 150" },
    { title: "펠라고르니스 야생 공룡 소환 (SDF)", code: "cheat SDF Pela 0 150" },
    { title: "펠라고르니스 길들인 공룡 소환 (SDF)", code: "cheat SDF Pela 1 150" },

    //피오미아
    { title: "피오미아 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Phiomia/Phiomia_Character_BP.Phiomia_Character_BP'\" 0 0 0 150" },
    { title: "피오미아 랜덤 레벨 소환 (Summon)", code: "cheat Summon Phiomia_Character_BP_C" },
    { title: "피오미아 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Phiomia_Character_BP_C" },
    { title: "피오미아 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Phiomia_Character_BP_C\" 150" },
    { title: "피오미아 야생 공룡 소환 (SDF)", code: "cheat SDF Phiomia 0 150" },
    { title: "피오미아 길들인 공룡 소환 (SDF)", code: "cheat SDF Phiomia 1 150" },

    //피닉스
    { title: "피닉스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/ScorchedEarth/Dinos/Phoenix/Phoenix_Character_BP.Phoenix_Character_BP'\" 0 0 0 150" },
    { title: "피닉스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Phoenix_Character_BP_C" },
    { title: "피닉스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Phoenix_Character_BP_C" },
    { title: "피닉스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Phoenix_Character_BP_C\" 150" },
    { title: "피닉스 야생 공룡 소환 (SDF)", code: "cheat SDF Phoenix 0 150" },
    { title: "피닉스 길들인 공룡 소환 (SDF)", code: "cheat SDF Phoenix 1 150" },

    //피라냐
    { title: "피라냐 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Piranha/Piranha_Character_BP.Piranha_Character_BP'\" 0 0 0 150" },
    { title: "피라냐 랜덤 레벨 소환 (Summon)", code: "cheat Summon Piranha_Character_BP_C" },
    { title: "피라냐 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Piranha_Character_BP_C" },
    { title: "피라냐 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Piranha_Character_BP_C\" 150" },
    { title: "피라냐 야생 공룡 소환 (SDF)", code: "cheat SDF Piranha 0 150" },
    { title: "피라냐 길들인 공룡 소환 (SDF)", code: "cheat SDF Piranha 1 150" },

    //플레시오사우루스
    { title: "플레시오사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Plesiosaur/Plesiosaur_Character_BP.Plesiosaur_Character_BP'\" 0 0 0 150" },
    { title: "플레시오사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Plesiosaur_Character_BP_C" },
    { title: "플레시오사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Plesiosaur_Character_BP_C" },
    { title: "플레시오사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Plesiosaur_Character_BP_C\" 150" },
    { title: "플레시오사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Plesiosaur 0 150" },
    { title: "플레시오사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Plesiosaur 1 150" },

    //프로콥토돈
    { title: "프로콥토돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Procoptodon/Procoptodon_Character_BP.Procoptodon_Character_BP'\" 0 0 0 150" },
    { title: "프로콥토돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Procoptodon_Character_BP_C" },
    { title: "프로콥토돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Procoptodon_Character_BP_C" },
    { title: "프로콥토돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Procoptodon_Character_BP_C\" 150" },
    { title: "프로콥토돈 야생 공룡 소환 (SDF)", code: "cheat SDF Procoptodon 0 150" },
    { title: "프로콥토돈 길들인 공룡 소환 (SDF)", code: "cheat SDF Procoptodon 1 150" },

    //프테라노돈
    { title: "프테라노돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Ptero/Ptero_Character_BP.Ptero_Character_BP'\" 0 0 0 150" },
    { title: "프테라노돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Ptero_Character_BP_C" },
    { title: "프테라노돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Ptero_Character_BP_C" },
    { title: "프테라노돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Ptero_Character_BP_C\" 150" },
    { title: "프테라노돈 야생 공룡 소환 (SDF)", code: "cheat SDF Ptero 0 150" },
    { title: "프테라노돈 길들인 공룡 소환 (SDF)", code: "cheat SDF Ptero 1 150" },

    //펄모노스콜피어스
    { title: "펄모노스콜피어스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Scorpion/Scorpion_Character_BP.Scorpion_Character_BP'\" 0 0 0 150" },
    { title: "펄모노스콜피어스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Scorpion_Character_BP_C" },
    { title: "펄모노스콜피어스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Scorpion_Character_BP_C" },
    { title: "펄모노스콜피어스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Scorpion_Character_BP_C\" 150" },
    { title: "펄모노스콜피어스 야생 공룡 소환 (SDF)", code: "cheat SDF Scorpion 0 150" },
    { title: "펄모노스콜피어스 길들인 공룡 소환 (SDF)", code: "cheat SDF Scorpion 1 150" },

    //펄로비아
    { title: "펄로비아 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Purlovia/Purlovia_Character_BP.Purlovia_Character_BP'\" 0 0 0 150" },
    { title: "펄로비아 랜덤 레벨 소환 (Summon)", code: "cheat Summon Purlovia_Character_BP_C" },
    { title: "펄로비아 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Purlovia_Character_BP_C" },
    { title: "펄로비아 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Purlovia_Character_BP_C\" 150" },
    { title: "펄로비아 야생 공룡 소환 (SDF)", code: "cheat SDF Purlovia 0 150" },
    { title: "펄로비아 길들인 공룡 소환 (SDF)", code: "cheat SDF Purlovia 1 150" },

    //케찰
    { title: "케찰 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Quetzalcoatlus/Quetz_Character_BP.Quetz_Character_BP'\" 0 0 0 150" },
    { title: "케찰 랜덤 레벨 소환 (Summon)", code: "cheat Summon Quetz_Character_BP_C" },
    { title: "케찰 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Quetz_Character_BP_C" },
    { title: "케찰 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Quetz_Character_BP_C\" 150" },
    { title: "케찰 야생 공룡 소환 (SDF)", code: "cheat SDF Quetz 0 150" },
    { title: "케찰 길들인 공룡 소환 (SDF)", code: "cheat SDF Quetz 1 150" },

    //랩터
    { title: "랩터 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Raptor/Raptor_Character_BP.Raptor_Character_BP'\" 0 0 0 150" },
    { title: "랩터 랜덤 레벨 소환 (Summon)", code: "cheat Summon Raptor_Character_BP_C" },
    { title: "랩터 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Raptor_Character_BP_C" },
    { title: "랩터 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Raptor_Character_BP_C\" 150" },
    { title: "랩터 야생 공룡 소환 (SDF)", code: "cheat SDF Raptor 0 150" },
    { title: "랩터 길들인 공룡 소환 (SDF)", code: "cheat SDF Raptor 1 150" },

    //렉스
    { title: "렉스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Rex/Rex_Character_BP.Rex_Character_BP'\" 0 0 0 150" },
    { title: "렉스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Rex_Character_BP_C" },
    { title: "렉스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Rex_Character_BP_C" },
    { title: "렉스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Rex_Character_BP_C\" 150" },
    { title: "렉스 야생 공룡 소환 (SDF)", code: "cheat SDF Rex 0 150" },
    { title: "렉스 길들인 공룡 소환 (SDF)", code: "cheat SDF Rex 1 150" },

    //검치호
    { title: "검치호 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Saber/Saber_Character_BP.Saber_Character_BP'\" 0 0 0 150" },
    { title: "검치호 랜덤 레벨 소환 (Summon)", code: "cheat Summon Saber_Character_BP_C" },
    { title: "검치호 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Saber_Character_BP_C" },
    { title: "검치호 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Saber_Character_BP_C\" 150" },
    { title: "검치호 야생 공룡 소환 (SDF)", code: "cheat SDF Saber 0 150" },
    { title: "검치호 길들인 공룡 소환 (SDF)", code: "cheat SDF Saber 1 150" },

    //검치 연어
    { title: "검치 연어 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Salmon/Salmon_Character_BP.Salmon_Character_BP'\" 0 0 0 150" },
    { title: "검치 연어 랜덤 레벨 소환 (Summon)", code: "cheat Summon Salmon_Character_BP_C" },
    { title: "검치 연어 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Salmon_Character_BP_C" },
    { title: "검치 연어 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Salmon_Character_BP_C\" 150" },
    { title: "검치 연어 야생 공룡 소환 (SDF)", code: "cheat SDF Salmon 0 150" },
    { title: "검치 연어 길들인 공룡 소환 (SDF)", code: "cheat SDF Salmon 1 150" },
    //사르코
    { title: "사르코 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Sarco/Sarco_Character_BP.Sarco_Character_BP'\" 0 0 0 150" },
    { title: "사르코 랜덤 레벨 소환 (Summon)", code: "cheat Summon Sarco_Character_BP_C" },
    { title: "사르코 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Sarco_Character_BP_C" },
    { title: "사르코 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Sarco_Character_BP_C\" 150" },
    { title: "사르코 야생 공룡 소환 (SDF)", code: "cheat SDF Sarco 0 150" },
    { title: "사르코 길들인 공룡 소환 (SDF)", code: "cheat SDF Sarco 1 150" },

    //스피노
    { title: "스피노 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Spino/Spino_Character_BP.Spino_Character_BP'\" 0 0 0 150" },
    { title: "스피노 랜덤 레벨 소환 (Summon)", code: "cheat Summon Spino_Character_BP_C" },
    { title: "스피노 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Spino_Character_BP_C" },
    { title: "스피노 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Spino_Character_BP_C\" 150" },
    { title: "스피노 야생 공룡 소환 (SDF)", code: "cheat SDF Spino 0 150" },
    { title: "스피노 길들인 공룡 소환 (SDF)", code: "cheat SDF Spino 1 150" },

    //스테고사우루스
    { title: "스테고사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Stego/Stego_Character_BP.Stego_Character_BP'\" 0 0 0 150" },
    { title: "스테고사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Stego_Character_BP_C" },
    { title: "스테고사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Stego_Character_BP_C" },
    { title: "스테고사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Stego_Character_BP_C\" 150" },
    { title: "스테고사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Stego 0 150" },
    { title: "스테고사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Stego 1 150" },

    //타페자라
    { title: "타페자라 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Tapejara/Tapejara_Character_BP.Tapejara_Character_BP'\" 0 0 0 150" },
    { title: "타페자라 랜덤 레벨 소환 (Summon)", code: "cheat Summon Tapejara_Character_BP_C" },
    { title: "타페자라 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Tapejara_Character_BP_C" },
    { title: "타페자라 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Tapejara_Character_BP_C\" 150" },
    { title: "타페자라 야생 공룡 소환 (SDF)", code: "cheat SDF Tapejara 0 150" },
    { title: "타페자라 길들인 공룡 소환 (SDF)", code: "cheat SDF Tapejara 1 150" },

    //테크 파라사우롤로푸스
    { title: "테크 파라사우롤로푸스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Para/BionicPara_Character_BP.BionicPara_Character_BP'\" 0 0 0 150" },
    { title: "테크 파라사우롤로푸스 랜덤 레벨 소환 (Summon)", code: "cheat Summon BionicPara_Character_BP_C" },
    { title: "테크 파라사우롤로푸스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed BionicPara_Character_BP_C" },
    { title: "테크 파라사우롤로푸스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"BionicPara_Character_BP_C\" 150" },
    { title: "테크 파라사우롤로푸스 야생 공룡 소환 (SDF)", code: "cheat SDF BionicPara 0 150" },
    { title: "테크 파라사우롤로푸스 길들인 공룡 소환 (SDF)", code: "cheat SDF BionicPara 1 150" },

    //테크 케찰
    { title: "테크 케찰 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Quetzalcoatlus/BionicQuetz_Character_BP.BionicQuetz_Character_BP'\" 0 0 0 150" },
    { title: "테크 케찰 랜덤 레벨 소환 (Summon)", code: "cheat Summon BionicQuetz_Character_BP_C" },
    { title: "테크 케찰 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed BionicQuetz_Character_BP_C" },
    { title: "테크 케찰 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"BionicQuetz_Character_BP_C\" 150" },
    { title: "테크 케찰 야생 공룡 소환 (SDF)", code: "cheat SDF BionicQuetz 0 150" },
    { title: "테크 케찰 길들인 공룡 소환 (SDF)", code: "cheat SDF BionicQuetz 1 150" },

    //테크 랩터
    { title: "테크 랩터 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Raptor/BionicRaptor_Character_BP.BionicRaptor_Character_BP'\" 0 0 0 150" },
    { title: "테크 랩터 랜덤 레벨 소환 (Summon)", code: "cheat Summon BionicRaptor_Character_BP_C" },
    { title: "테크 랩터 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed BionicRaptor_Character_BP_C" },
    { title: "테크 랩터 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"BionicRaptor_Character_BP_C\" 150" },
    { title: "테크 랩터 야생 공룡 소환 (SDF)", code: "cheat SDF BionicRaptor 0 150" },
    { title: "테크 랩터 길들인 공룡 소환 (SDF)", code: "cheat SDF BionicRaptor 1 150" },

    //테크 렉스
    { title: "테크 렉스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Rex/BionicRex_Character_BP.BionicRex_Character_BP'\" 0 0 0 150" },
    { title: "테크 렉스 랜덤 레벨 소환 (Summon)", code: "cheat Summon BionicRex_Character_BP_C" },
    { title: "테크 렉스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed BionicRex_Character_BP_C" },
    { title: "테크 렉스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"BionicRex_Character_BP_C\" 150" },
    { title: "테크 렉스 야생 공룡 소환 (SDF)", code: "cheat SDF BionicRex 0 150" },
    { title: "테크 렉스 길들인 공룡 소환 (SDF)", code: "cheat SDF BionicRex 1 150" },

    //테크 스테고
    { title: "테크 스테고 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Stego/BionicStego_Character_BP.BionicStego_Character_BP'\" 0 0 0 150" },
    { title: "테크 스테고 랜덤 레벨 소환 (Summon)", code: "cheat Summon BionicStego_Character_BP_C" },
    { title: "테크 스테고 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed BionicStego_Character_BP_C" },
    { title: "테크 스테고 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"BionicStego_Character_BP_C\" 150" },
    { title: "테크 스테고 야생 공룡 소환 (SDF)", code: "cheat SDF BionicStego 0 150" },
    { title: "테크 스테고 길들인 공룡 소환 (SDF)", code: "cheat SDF BionicStego 1 150" },

    //테러버드
    { title: "테러버드 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/TerrorBird/TerrorBird_Character_BP.TerrorBird_Character_BP'\" 0 0 0 150" },
    { title: "테러버드 랜덤 레벨 소환 (Summon)", code: "cheat Summon TerrorBird_Character_BP_C" },
    { title: "테러버드 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed TerrorBird_Character_BP_C" },
    { title: "테러버드 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"TerrorBird_Character_BP_C\" 150" },
    { title: "테러버드 야생 공룡 소환 (SDF)", code: "cheat SDF TerrorBird 0 150" },
    { title: "테러버드 길들인 공룡 소환 (SDF)", code: "cheat SDF TerrorBird 1 150" },

    //테리지노사우루스
    { title: "테리지노사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Therizinosaurus/Therizino_Character_BP.Therizino_Character_BP'\" 0 0 0 150" },
    { title: "테리지노사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Therizino_Character_BP_C" },
    { title: "테리지노사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Therizino_Character_BP_C" },
    { title: "테리지노사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Therizino_Character_BP_C\" 150" },
    { title: "테리지노사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Therizino 0 150" },
    { title: "테리지노사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Therizino 1 150" },

    //틸라콜레오
    { title: "틸라콜레오 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Thylacoleo/Thylacoleo_Character_BP.Thylacoleo_Character_BP'\" 0 0 0 150" },
    { title: "틸라콜레오 랜덤 레벨 소환 (Summon)", code: "cheat Summon Thylacoleo_Character_BP_C" },
    { title: "틸라콜레오 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Thylacoleo_Character_BP_C" },
    { title: "틸라콜레오 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Thylacoleo_Character_BP_C\" 150" },
    { title: "틸라콜레오 야생 공룡 소환 (SDF)", code: "cheat SDF Thylacoleo 0 150" },
    { title: "틸라콜레오 길들인 공룡 소환 (SDF)", code: "cheat SDF Thylacoleo 1 150" },

    //티타노보아
    { title: "티타노보아 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/BoaFrill/BoaFrill_Character_BP.BoaFrill_Character_BP'\" 0 0 0 150" },
    { title: "티타노보아 랜덤 레벨 소환 (Summon)", code: "cheat Summon BoaFrill_Character_BP_C" },
    { title: "티타노보아 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed BoaFrill_Character_BP_C" },
    { title: "티타노보아 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"BoaFrill_Character_BP_C\" 150" },
    { title: "티타노보아 야생 공룡 소환 (SDF)", code: "cheat SDF BoaFrill 0 150" },
    { title: "티타노보아 길들인 공룡 소환 (SDF)", code: "cheat SDF BoaFrill 1 150" },

    //티타노미르마
    { title: "티타노미르마 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Ant/Ant_Character_BP.Ant_Character_BP'\" 0 0 0 150" },
    { title: "티타노미르마 랜덤 레벨 소환 (Summon)", code: "cheat Summon Ant_Character_BP_C" },
    { title: "티타노미르마 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Ant_Character_BP_C" },
    { title: "티타노미르마 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Ant_Character_BP_C\" 150" },
    { title: "티타노미르마 야생 공룡 소환 (SDF)", code: "cheat SDF Ant 0 150" },
    { title: "티타노미르마 길들인 공룡 소환 (SDF)", code: "cheat SDF Ant 1 150" },
    //티타노미르마 병사
    { title: "티타노미르마 병사 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Ant/FlyingAnt_Character_BP.FlyingAnt_Character_BP'\" 0 0 0 150" },
    { title: "티타노미르마 병사 랜덤 레벨 소환 (Summon)", code: "cheat Summon FlyingAnt_Character_BP_C" },
    { title: "티타노미르마 병사 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed FlyingAnt_Character_BP_C" },
    { title: "티타노미르마 병사 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"FlyingAnt_Character_BP_C\" 150" },
    { title: "티타노미르마 병사 야생 공룡 소환 (SDF)", code: "cheat SDF FlyingAnt 0 150" },
    { title: "티타노미르마 병사 길들인 공룡 소환 (SDF)", code: "cheat SDF FlyingAnt 1 150" },

    //티타노사우루스
    { title: "티타노사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/titanosaur/Titanosaur_Character_BP.Titanosaur_Character_BP'\" 0 0 0 150" },
    { title: "티타노사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Titanosaur_Character_BP_C" },
    { title: "티타노사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Titanosaur_Character_BP_C" },
    { title: "티타노사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Titanosaur_Character_BP_C\" 150" },
    { title: "티타노사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Titanosaur 0 150" },
    { title: "티타노사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Titanosaur 1 150" },

    //트리케라톱스
    { title: "트리케라톱스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Trike/Trike_Character_BP.Trike_Character_BP'\" 0 0 0 150" },
    { title: "트리케라톱스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Trike_Character_BP_C" },
    { title: "트리케라톱스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Trike_Character_BP_C" },
    { title: "트리케라톱스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Trike_Character_BP_C\" 150" },
    { title: "트리케라톱스 야생 공룡 소환 (SDF)", code: "cheat SDF Trike 0 150" },
    { title: "트리케라톱스 길들인 공룡 소환 (SDF)", code: "cheat SDF Trike 1 150" },

    //삼엽충
    { title: "삼엽충 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Trilobite/Trilobite_Character.Trilobite_Character'\" 0 0 0 150" },
    { title: "삼엽충 랜덤 레벨 소환 (Summon)", code: "cheat Summon Trilobite_Character_C" },
    { title: "삼엽충 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Trilobite_Character_C" },
    { title: "삼엽충 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Trilobite_Character_C\" 150" },
    { title: "삼엽충 야생 공룡 소환 (SDF)", code: "cheat SDF Trilobite 0 150" },
    { title: "삼엽충 길들인 공룡 소환 (SDF)", code: "cheat SDF Trilobite 1 150" },

    //트로오돈
    { title: "트로오돈 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Troodon/Troodon_Character_BP.Troodon_Character_BP'\" 0 0 0 150" },
    { title: "트로오돈 랜덤 레벨 소환 (Summon)", code: "cheat Summon Troodon_Character_BP_C" },
    { title: "트로오돈 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Troodon_Character_BP_C" },
    { title: "트로오돈 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Troodon_Character_BP_C\" 150" },
    { title: "트로오돈 야생 공룡 소환 (SDF)", code: "cheat SDF Troodon 0 150" },
    { title: "트로오돈 길들인 공룡 소환 (SDF)", code: "cheat SDF Troodon 1 150" },

    //투소테우티스
    { title: "투소테우티스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Tusoteuthis/Tusoteuthis_Character_BP.Tusoteuthis_Character_BP'\" 0 0 0 150" },
    { title: "투소테우티스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Tusoteuthis_Character_BP_C" },
    { title: "투소테우티스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Tusoteuthis_Character_BP_C" },
    { title: "투소테우티스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Tusoteuthis_Character_BP_C\" 150" },
    { title: "투소테우티스 야생 공룡 소환 (SDF)", code: "cheat SDF Tusoteuthis 0 150" },
    { title: "투소테우티스 길들인 공룡 소환 (SDF)", code: "cheat SDF Tusoteuthis 1 150" },

    //울리 라이노
    { title: "울리 라이노 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/WoollyRhino/Rhino_Character_BP.Rhino_Character_BP'\" 0 0 0 150" },
    { title: "울리 라이노 랜덤 레벨 소환 (Summon)", code: "cheat Summon Rhino_Character_BP_C" },
    { title: "울리 라이노 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Rhino_Character_BP_C" },
    { title: "울리 라이노 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Rhino_Character_BP_C\" 150" },
    { title: "울리 라이노 야생 공룡 소환 (SDF)", code: "cheat SDF Rhino 0 150" },
    { title: "울리 라이노 길들인 공룡 소환 (SDF)", code: "cheat SDF Rhino 1 150" },

    //예티
    { title: "예티 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Bigfoot/Yeti_Character_BP.Yeti_Character_BP'\" 0 0 0 150" },
    { title: "예티 랜덤 레벨 소환 (Summon)", code: "cheat Summon Yeti_Character_BP_C" },
    { title: "예티 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Yeti_Character_BP_C" },
    { title: "예티 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Yeti_Character_BP_C\" 150" },
    { title: "예티 야생 공룡 소환 (SDF)", code: "cheat SDF Yeti 0 150" },
    { title: "예티 길들인 공룡 소환 (SDF)", code: "cheat SDF Yeti 1 150" },

    //유티라누스
    { title: "유티라누스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Yutyrannus/Yutyrannus_Character_BP.Yutyrannus_Character_BP'\" 0 0 0 150" },
    { title: "유티라누스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Yutyrannus_Character_BP_C" },
    { title: "유티라누스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Yutyrannus_Character_BP_C" },
    { title: "유티라누스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Yutyrannus_Character_BP_C\" 150" },
    { title: "유티라누스 야생 공룡 소환 (SDF)", code: "cheat SDF Yutyrannus 0 150" },
    { title: "유티라누스 길들인 공룡 소환 (SDF)", code: "cheat SDF Yutyrannus 1 150" },

    //여왕벌
    { title: "여왕벌 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Bee/Bee_Queen_Character_BP.Bee_Queen_Character_BP'\" 0 0 0 150" },
    { title: "여왕벌 랜덤 레벨 소환 (Summon)", code: "cheat Summon Bee_Queen_Character_BP_C" },
    { title: "여왕벌 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Bee_Queen_Character_BP_C" },
    { title: "여왕벌 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Bee_Queen_Character_BP_C\" 150" },
    { title: "여왕벌 야생 공룡 소환 (SDF)", code: "cheat SDF Bee_Queen 0 150" },
    { title: "여왕벌 길들인 공룡 소환 (SDF)", code: "cheat SDF Bee_Queen 1 150" },

    //카르카로돈토사우루스
    { title: "카르카로돈토사우루스 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Carcharodontosaurus/Carcha_Character_BP.Carcha_Character_BP'\" 0 0 0 150" },
    { title: "카르카로돈토사우루스 랜덤 레벨 소환 (Summon)", code: "cheat Summon Carcha_Character_BP_C" },
    { title: "카르카로돈토사우루스 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Carcha_Character_BP_C" },
    { title: "카르카로돈토사우루스 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Carcha_Character_BP_C\" 150" },
    { title: "카르카로돈토사우루스 야생 공룡 소환 (SDF)", code: "cheat SDF Carcha 0 150" },
    { title: "카르카로돈토사우루스 길들인 공룡 소환 (SDF)", code: "cheat SDF Carcha 1 150" },

    //리니오그나타
    { title: "리니오그나타 야생 공룡 소환 (SpawnDino)", code: "cheat SpawnDino \"Blueprint'/Game/PrimalEarth/Dinos/Rhyniognatha/Rhynio_Character_BP.Rhynio_Character_BP'\" 0 0 0 150" },
    { title: "리니오그나타 랜덤 레벨 소환 (Summon)", code: "cheat Summon Rhynio_Character_BP_C" },
    { title: "리니오그나타 길들인 공룡 소환 (SummonTamed)", code: "cheat SummonTamed Rhynio_Character_BP_C" },
    { title: "리니오그나타 레벨 150 공룡 소환 (GMSummon)", code: "cheat GMSummon \"Rhynio_Character_BP_C\" 150" },
    { title: "리니오그나타 야생 공룡 소환 (SDF)", code: "cheat SDF Rhynio 0 150" },
    { title: "리니오그나타 길들인 공룡 소환 (SDF)", code: "cheat SDF Rhynio 1 150" }


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
