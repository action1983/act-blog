// 오만과 편견 비주얼 노벨 게임 스크립트

class VisualNovelGame {
    constructor() {
        this.currentScene = 0;
        this.currentText = 0;
        this.isAutoMode = false;
        this.textSpeed = 5;
        this.autoSpeed = 3;
        this.gameData = this.initializeGameData();
        this.characters = this.initializeCharacters();
        this.init();
    }

    initializeCharacters() {
        return {
            'elizabeth': {
                name: '엘리자베스 베넷',
                color: '#ff69b4',
                avatar: '👩',
                description: '영리하고 독립적인 성격의 주인공. 편견에 맞서는 용기가 있다.',
                status: '활발함'
            },
            'darcy': {
                name: '피츠윌리엄 다시',
                color: '#4169e1',
                avatar: '🤵',
                description: '부유하고 자랑스럽지만 실제로는 선량한 신사.',
                status: '냉정함'
            },
            'jane': {
                name: '제인 베넷',
                color: '#98fb98',
                avatar: '👸',
                description: '엘리자베스의 언니로 온화하고 아름다운 성격.',
                status: '온화함'
            },
            'bingley': {
                name: '찰스 빙리',
                color: '#ffa500',
                avatar: '👨',
                description: '쾌활하고 친근한 신사로 제인을 사랑한다.',
                status: '유쾌함'
            },
            'wickham': {
                name: '조지 위컴',
                color: '#dc143c',
                avatar: '😏',
                description: '매력적이지만 기만적인 군인.',
                status: '교활함'
            },
            'lydia': {
                name: '리디아 베넷',
                color: '#ff1493',
                avatar: '💃',
                description: '엘리자베스의 막내 여동생으로 경솔하고 활발함.',
                status: '경솔함'
            },
            'collins': {
                name: '윌리엄 콜린스',
                color: '#8b4513',
                avatar: '🤓',
                description: '베넷 가문의 상속자이자 목사. 매우 아첨적이다.',
                status: '아첨적'
            },
            'catherine': {
                name: '캐서린 드 버그 부인',
                color: '#800080',
                avatar: '👑',
                description: '다시의 고모로 오만하고 권위적인 성격.',
                status: '권위적'
            },
            'narrator': {
                name: '내레이터',
                color: '#f5f5dc',
                avatar: '📖',
                description: '이야기의 화자',
                status: '서술'
            }
        };
    }

    initializeGameData() {
        return [
            {
                title: "Chapter 1: 첫 만남",
                scenes: [
                    {
                        speaker: 'narrator',
                        text: "19세기 영국의 한 시골 마을. 베넷 가족에게 새로운 소식이 전해졌다.",
                        background: 'countryside'
                    },
                    {
                        speaker: 'narrator',
                        text: "부유한 청년 빙리가 근처 네더필드 저택을 임대했다는 소식이었다.",
                        background: 'countryside'
                    },
                    {
                        speaker: 'elizabeth',
                        text: "어머니께서는 또 결혼 이야기로 난리를 피우시겠군요.",
                        background: 'countryside'
                    },
                    {
                        speaker: 'jane',
                        text: "엘리자베스, 그렇게 냉정하게 말하지 마세요. 어머니도 우리를 걱정해서 그러시는 거예요.",
                        background: 'countryside'
                    },
                    {
                        speaker: 'narrator',
                        text: "그리고 운명적인 무도회 날이 다가왔다...",
                        background: 'ballroom'
                    },
                    {
                        speaker: 'darcy',
                        text: "이곳 사람들은 모두 시골뜨기들이군. 춤출 만한 여성도 보이지 않는다.",
                        background: 'ballroom'
                    },
                    {
                        speaker: 'elizabeth',
                        text: "(속마음) 정말 오만한 사람이네요. 겉모습만 훌륭하다고 해서...",
                        background: 'ballroom'
                    },
                    {
                        speaker: 'narrator',
                        text: "엘리자베스는 다시의 오만한 태도에 강한 반감을 갖게 되었다.",
                        background: 'ballroom'
                    }
                ]
            },
            {
                title: "Chapter 2: 오해와 편견",
                scenes: [
                    {
                        speaker: 'wickham',
                        text: "다시는 나의 아버지를 배신한 냉혹한 인간입니다. 저를 파멸시키려 했죠.",
                        background: 'garden'
                    },
                    {
                        speaker: 'elizabeth',
                        text: "그럴 줄 알았어요! 그의 오만한 태도에서 이미 그런 성격을 짐작했습니다.",
                        background: 'garden'
                    },
                    {
                        speaker: 'narrator',
                        text: "엘리자베스는 위컴의 말을 믿으며 다시에 대한 편견을 더욱 굳혔다.",
                        background: 'garden'
                    },
                    {
                        speaker: 'collins',
                        text: "미스 엘리자베스, 저와 결혼해 주십시오! 캐서린 드 버그 부인께서도 적극 권하고 계십니다!",
                        background: 'parlor'
                    },
                    {
                        speaker: 'elizabeth',
                        text: "죄송하지만 정중히 거절하겠습니다, 콜린스 씨.",
                        background: 'parlor',
                        choices: [
                            { text: "단호하게 거절한다", next: 'continue' },
                            { text: "이유를 자세히 설명한다", next: 'explain' }
                        ]
                    }
                ]
            },
            {
                title: "Chapter 3: 진실의 편지",
                scenes: [
                    {
                        speaker: 'darcy',
                        text: "미스 엘리자베스, 당신을 사랑합니다. 저와 결혼해 주십시오.",
                        background: 'garden'
                    },
                    {
                        speaker: 'elizabeth',
                        text: "미스터 다시, 죄송하지만 그럴 수는 없습니다. 당신은 제인 언니와 빙리 씨를 갈라놓았고...",
                        background: 'garden'
                    },
                    {
                        speaker: 'elizabeth',
                        text: "위컴 씨를 파멸시킨 냉혹한 사람입니다!",
                        background: 'garden'
                    },
                    {
                        speaker: 'darcy',
                        text: "그렇게 생각하신다면... 내일 이 편지를 읽어보시기 바랍니다.",
                        background: 'garden'
                    },
                    {
                        speaker: 'narrator',
                        text: "다음 날, 엘리자베스는 다시의 편지를 읽었다. 그 내용은 충격적이었다.",
                        background: 'library'
                    },
                    {
                        speaker: 'elizabeth',
                        text: "(편지를 읽으며) 위컴이 거짓말을 했다니... 내가 얼마나 편견에 사로잡혀 있었던 것일까?",
                        background: 'library'
                    }
                ]
            },
            {
                title: "Chapter 4: 새로운 시작",
                scenes: [
                    {
                        speaker: 'narrator',
                        text: "진실을 알게 된 엘리자베스는 자신의 편견을 반성하게 되었다.",
                        background: 'countryside'
                    },
                    {
                        speaker: 'elizabeth',
                        text: "미스터 다시, 과거의 무례함을 용서해 주세요. 당신의 진심을 이제야 알겠습니다.",
                        background: 'garden'
                    },
                    {
                        speaker: 'darcy',
                        text: "당신이 저를 변화시켜 주었습니다, 엘리자베스. 당신 덕분에 더 나은 사람이 되었어요.",
                        background: 'garden'
                    },
                    {
                        speaker: 'narrator',
                        text: "오만과 편견을 넘어선 두 사람은 진정한 사랑을 찾았다.",
                        background: 'garden'
                    },
                    {
                        speaker: 'narrator',
                        text: "그리고 그들은 행복하게 결혼하여 오래오래 행복하게 살았답니다.",
                        background: 'wedding'
                    }
                ]
            }
        ];
    }

    init() {
        this.initializeUI();
        this.setupEventListeners();
        this.loadCharacterList();
        this.displayCurrentScene();
    }

    initializeUI() {
        this.elements = {
            speakerName: document.getElementById('speaker-name'),
            textContent: document.getElementById('text-content'),
            characterDisplay: document.getElementById('character-display'),
            characterList: document.getElementById('character-list'),
            chapterInfo: document.getElementById('chapter-info'),
            progressFill: document.getElementById('progress-fill'),
            progressText: document.getElementById('progress-text'),
            nextBtn: document.getElementById('next-btn'),
            autoBtn: document.getElementById('auto-btn'),
            saveBtn: document.getElementById('save-btn'),
            choices: document.getElementById('choices'),
            characterModal: document.getElementById('character-modal'),
            characterProfile: document.getElementById('character-profile'),
            textSpeed: document.getElementById('text-speed'),
            autoSpeed: document.getElementById('auto-speed')
        };
    }

    setupEventListeners() {
        this.elements.nextBtn.addEventListener('click', () => this.nextText());
        this.elements.autoBtn.addEventListener('click', () => this.toggleAuto());
        this.elements.saveBtn.addEventListener('click', () => this.saveGame());
        
        // 텍스트 속도 조절
        this.elements.textSpeed.addEventListener('input', (e) => {
            this.textSpeed = parseInt(e.target.value);
        });
        
        this.elements.autoSpeed.addEventListener('input', (e) => {
            this.autoSpeed = parseInt(e.target.value);
        });

        // 모달 닫기
        document.querySelector('.close').addEventListener('click', () => {
            this.elements.characterModal.style.display = 'none';
        });

        // 키보드 이벤트
        document.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                this.nextText();
            } else if (e.key === 'Escape') {
                this.elements.characterModal.style.display = 'none';
            }
        });
    }

    loadCharacterList() {
        this.elements.characterList.innerHTML = '';
        Object.keys(this.characters).forEach(charId => {
            const char = this.characters[charId];
            if (charId === 'narrator') return; // 내레이터는 목록에서 제외
            
            const charElement = document.createElement('div');
            charElement.className = 'character-item';
            charElement.innerHTML = `
                <div class="character-avatar">${char.avatar}</div>
                <div>
                    <div class="character-name">${char.name}</div>
                    <div class="character-status">${char.status}</div>
                </div>
            `;
            charElement.addEventListener('click', () => this.showCharacterProfile(charId));
            this.elements.characterList.appendChild(charElement);
        });
    }

    showCharacterProfile(charId) {
        const char = this.characters[charId];
        this.elements.characterProfile.innerHTML = `
            <div class="character-avatar" style="width: 100px; height: 100px; font-size: 48px; margin: 0 auto 20px;">${char.avatar}</div>
            <h2>${char.name}</h2>
            <p><strong>상태:</strong> ${char.status}</p>
            <p><strong>설명:</strong> ${char.description}</p>
        `;
        this.elements.characterModal.style.display = 'flex';
    }

    displayCurrentScene() {
        const currentChapter = this.gameData[this.currentScene];
        const currentSceneData = currentChapter.scenes[this.currentText];
        
        if (!currentSceneData) {
            this.nextChapter();
            return;
        }

        // 챕터 정보 업데이트
        this.elements.chapterInfo.textContent = currentChapter.title;
        
        // 진행률 업데이트
        const totalScenes = this.gameData.reduce((total, chapter) => total + chapter.scenes.length, 0);
        const currentProgress = this.gameData.slice(0, this.currentScene).reduce((total, chapter) => total + chapter.scenes.length, 0) + this.currentText;
        const progressPercent = Math.round((currentProgress / totalScenes) * 100);
        
        this.elements.progressFill.style.width = `${progressPercent}%`;
        this.elements.progressText.textContent = `${progressPercent}%`;

        // 화자 정보 표시
        const speaker = this.characters[currentSceneData.speaker];
        if (speaker && currentSceneData.speaker !== 'narrator') {
            this.elements.speakerName.textContent = speaker.name;
            this.elements.speakerName.style.display = 'inline-block';
            this.elements.speakerName.style.background = `linear-gradient(90deg, ${speaker.color}, ${this.adjustColor(speaker.color, -20)})`;
            
            // 캐릭터 표시
            this.showCharacter(currentSceneData.speaker);
        } else {
            this.elements.speakerName.style.display = 'none';
            this.hideCharacter();
        }

        // 텍스트 애니메이션 표시
        this.typeText(currentSceneData.text);

        // 선택지 처리
        if (currentSceneData.choices) {
            setTimeout(() => {
                this.showChoices(currentSceneData.choices);
            }, this.calculateTypingDuration(currentSceneData.text));
        } else {
            this.elements.choices.style.display = 'none';
        }
    }

    showCharacter(charId) {
        const char = this.characters[charId];
        this.elements.characterDisplay.innerHTML = `
            <div class="character-sprite" style="
                background: linear-gradient(135deg, ${char.color}, ${this.adjustColor(char.color, -30)});
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 120px;
                color: white;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
            ">${char.avatar}</div>
        `;
        
        // 애니메이션 효과
        setTimeout(() => {
            const sprite = this.elements.characterDisplay.querySelector('.character-sprite');
            if (sprite) sprite.classList.add('speaking');
        }, 100);
    }

    hideCharacter() {
        this.elements.characterDisplay.innerHTML = '';
    }

    typeText(text) {
        this.elements.textContent.textContent = '';
        let currentChar = 0;
        const typingSpeed = 100 - (this.textSpeed * 10);
        
        const typeInterval = setInterval(() => {
            if (currentChar < text.length) {
                this.elements.textContent.textContent += text[currentChar];
                currentChar++;
            } else {
                clearInterval(typeInterval);
                if (this.isAutoMode) {
                    setTimeout(() => this.nextText(), 2000 + (1000 * (10 - this.autoSpeed)));
                }
            }
        }, typingSpeed);
    }

    calculateTypingDuration(text) {
        const typingSpeed = 100 - (this.textSpeed * 10);
        return text.length * typingSpeed;
    }

    showChoices(choices) {
        this.elements.choices.style.display = 'block';
        this.elements.choices.innerHTML = '';
        
        choices.forEach((choice, index) => {
            const choiceBtn = document.createElement('button');
            choiceBtn.className = 'choice-btn';
            choiceBtn.textContent = choice.text;
            choiceBtn.addEventListener('click', () => {
                this.handleChoice(choice);
            });
            this.elements.choices.appendChild(choiceBtn);
        });
        
        this.elements.nextBtn.style.display = 'none';
    }

    handleChoice(choice) {
        this.elements.choices.style.display = 'none';
        this.elements.nextBtn.style.display = 'block';
        
        // 선택에 따른 처리 (현재는 단순히 계속 진행)
        if (choice.next === 'continue' || choice.next === 'explain') {
            this.nextText();
        }
    }

    nextText() {
        this.currentText++;
        
        const currentChapter = this.gameData[this.currentScene];
        if (this.currentText >= currentChapter.scenes.length) {
            this.nextChapter();
        } else {
            this.displayCurrentScene();
        }
    }

    nextChapter() {
        this.currentScene++;
        this.currentText = 0;
        
        if (this.currentScene >= this.gameData.length) {
            this.showEnding();
        } else {
            this.displayCurrentScene();
        }
    }

    showEnding() {
        this.elements.textContent.textContent = "이야기가 끝났습니다. 오만과 편견을 함께 읽어주셔서 감사합니다!";
        this.elements.speakerName.style.display = 'none';
        this.hideCharacter();
        this.elements.nextBtn.textContent = "다시 시작";
        this.elements.nextBtn.onclick = () => this.restart();
    }

    restart() {
        this.currentScene = 0;
        this.currentText = 0;
        this.elements.nextBtn.textContent = "다음 ▶";
        this.elements.nextBtn.onclick = () => this.nextText();
        this.displayCurrentScene();
    }

    toggleAuto() {
        this.isAutoMode = !this.isAutoMode;
        this.elements.autoBtn.textContent = this.isAutoMode ? "수동" : "자동";
        this.elements.autoBtn.style.background = this.isAutoMode ? 
            "linear-gradient(135deg, #dc143c, #b22222)" : 
            "linear-gradient(135deg, #654321, #8b4513)";
    }

    saveGame() {
        const saveData = {
            currentScene: this.currentScene,
            currentText: this.currentText,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('pride-prejudice-save', JSON.stringify(saveData));
        alert('게임이 저장되었습니다!');
    }

    loadGame() {
        const saveData = localStorage.getItem('pride-prejudice-save');
        if (saveData) {
            const data = JSON.parse(saveData);
            this.currentScene = data.currentScene;
            this.currentText = data.currentText;
            this.displayCurrentScene();
            return true;
        }
        return false;
    }

    adjustColor(color, amount) {
        const hex = color.replace('#', '');
        const r = Math.max(0, Math.min(255, parseInt(hex.substr(0, 2), 16) + amount));
        const g = Math.max(0, Math.min(255, parseInt(hex.substr(2, 2), 16) + amount));
        const b = Math.max(0, Math.min(255, parseInt(hex.substr(4, 2), 16) + amount));
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }
}

// 게임 초기화
document.addEventListener('DOMContentLoaded', () => {
    const game = new VisualNovelGame();
    
    // 저장된 게임이 있는지 확인
    if (localStorage.getItem('pride-prejudice-save')) {
        const loadGame = confirm('저장된 게임이 있습니다. 이어서 하시겠습니까?');
        if (loadGame) {
            game.loadGame();
        }
    }
});