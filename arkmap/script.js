document.addEventListener('DOMContentLoaded', () => {
    const map = document.getElementById('map');
    const popup = document.getElementById('info-popup');
    const infoText = document.getElementById('info-text');

    map.addEventListener('click', (e) => {
        const rect = map.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width).toFixed(2);
        const y = ((e.clientY - rect.top) / rect.height).toFixed(2);

        // Determine location based on clicked coordinates
        let locationInfo = '정보 없음';
        if (x > 0.2 && x < 0.3 && y > 0.3 && y < 0.4) {
            locationInfo = '위치 1: 보물 상자';
        } else if (x > 0.5 && x < 0.6 && y > 0.5 && y < 0.6) {
            locationInfo = '위치 2: 몬스터 소굴';
        } else if (x > 0.7 && x < 0.8 && y > 0.7 && y < 0.8) {
            locationInfo = '위치 3: NPC 마을';
        }

        // Show popup at clicked position
        popup.style.left = `${e.clientX}px`;
        popup.style.top = `${e.clientY}px`;
        infoText.textContent = locationInfo;
        popup.style.display = 'block';
    });
});

function closePopup() {
    const popup = document.getElementById('info-popup');
    popup.style.display = 'none';
}
