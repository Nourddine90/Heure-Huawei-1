// ملف script.js
class HuaweiClock {
    constructor() {
        this.timeElement = document.getElementById('time');
        this.dateElement = document.getElementById('date');
        this.init();
    }
    
    init() {
        this.update();
        setInterval(() => this.update(), 1000);
        this.setupTheme();
    }
    
    update() {
        const now = new Date();
        this.updateTime(now);
        this.updateDate(now);
        this.updateTheme(now);
    }
    
    updateTime(now) {
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        this.timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    updateDate(now) {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            calendar: 'islamic'
        };
        this.dateElement.textContent = now.toLocaleDateString('ar-SA', options);
    }
    
    updateTheme(now) {
        const hours = now.getHours();
        let color, shadow;
        
        if (hours < 6 || hours >= 18) {
            color = '#a855f7';
            shadow = '0 0 20px rgba(168, 85, 247, 0.7)';
        } else if (hours < 12) {
            color = '#f59e0b';
            shadow = '0 0 20px rgba(245, 158, 11, 0.7)';
        } else {
            color = '#00ffff';
            shadow = '0 0 20px rgba(0, 255, 255, 0.7)';
        }
        
        this.timeElement.style.color = color;
        this.timeElement.style.textShadow = shadow;
    }
    
    setupTheme() {
        // يمكن إضافة ميزات إضافية هنا
    }
}

// تشغيل الساعة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    new HuaweiClock();
});
