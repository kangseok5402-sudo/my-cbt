const allQuestions = [
    {
        "id": 1,
        "part": 1,
        "partName": "측광",
        "type": "B",
        "question": "다음 중 시감도가 가장 좋은 광색은?",
        "options": [
            "적색",
            "등색",
            "청색",
            "황록색"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "최대시감도 : 보통 사람의 눈은 파장 555[nm]의 빛(황록색)을 가장 밝게 느끼고, 그 때의 시감도는 683[lm/W], 비시감도는 1(최대)가 된다."
    },
    {
        "id": 2,
        "part": 1,
        "partName": "측광",
        "type": "B",
        "question": "비시감도가 최대인 파장[nm]은?",
        "options": [
            "350",
            "450",
            "500",
            "555"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "최대시감도 : 보통 사람의 눈은 파장 555[nm]의 빛(황록색)을 가장 밝게 느끼고, 그 때의 시감도는 683[lm/W], 비시감도는 1(최대)가 된다."
    },
    {
        "id": 3,
        "part": 1,
        "partName": "측광",
        "type": "A",
        "question": "완전 확산면의 휘도(B)와 광속발산도(R)의 관계식은?",
        "options": [
            "R=4piB",
            "R=2\\pi B",
            "R=\\pi B",
            "R=\\pi^2 B"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "완전 확산면의 광속발산도 R=\\pi B"
    },
    {
        "id": 4,
        "part": 1,
        "partName": "측광",
        "type": "C",
        "question": "",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": 3,
        "noShuffle": true,
        "hasImage": true,
        "explanation": "반으로 갈라졌으니 100의 반 50을 고르자"
    },
    {
        "id": 5,
        "part": 1,
        "partName": "측광",
        "type": "C",
        "question": "",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": 2,
        "noShuffle": true,
        "hasImage": true,
        "explanation": "하반구 -> 2\\pi = 6.28 의 100배 = 628. 하반구 2\\pi 를 외워두고 관련된 값을 고르자"
    },
    {
        "id": 6,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "B",
        "question": "흑체에서 최대 분광 복사속 발산도를 형성하는 파장은 절대온도에 반비례하는 것을 나타내는 법칙은?",
        "options": [
            "플랑크의 복사 법칙",
            "스테판-볼츠만 법칙",
            "빈의 변위 법칙",
            "파센의 법칙"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "빈(Wien)의 변위 법칙. 흑체에서 복사되는 최대 복사에너지의 파장은 절대온도에 반비례한다."
    },
    {
        "id": 7,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "B",
        "question": "흑체의 온도복사 법칙 중 절대온도가 높아질수록 파장이 짧아지는 법칙은?",
        "options": [
            "스테판 볼츠만의 법칙",
            "빈의 변위 법칙",
            "플랑크의 복사 법칙",
            "베버 페히너의 법칙"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "빈(Wien)의 변위 법칙. 흑체에서 복사되는 최대 복사에너지의 파장은 절대온도에 반비례한다."
    },
    {
        "id": 8,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "B",
        "question": "온도가 2000[K]되는 흑체의 전방사 에너지는 1000[K]일 때의 값의 몇 배가 되는가?",
        "options": [
            "2배",
            "4배",
            "8배",
            "16배"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "흑체의 복사 발산량(스테판-볼츠만의 법칙) . W=sigma T^4 이므로 온도가 2배가 되면 전방사 에너지는 2^4=16 배가 된다."
    },
    {
        "id": 9,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "C",
        "question": "방전개시전압과 관계되는 법칙은?",
        "options": [
            "스토크스의 법칙",
            "페닝의 법칙",
            "파센의 법칙",
            "탈보트의 법칙"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "파센의 법칙. 방전개시전압은 방전관 내의 압력과 전극간 간격의 곱에 비례한다."
    },
    {
        "id": 10,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "조명용 광원 중에서 연색성이 가장 우수한 것은?",
        "options": [
            "백열전구",
            "고압나트륨등",
            "고압수은등",
            "메탈 할라이드등"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "광원의 연색성이 우수한 순서 : 백열전구 > 메탈할라이드등 > 수은등 > 나트륨등"
    },
    {
        "id": 11,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "백열전구에 게터를 사용하는 목적은?",
        "options": [
            "광속 증가",
            "전력 감소",
            "수명 증가",
            "효율 증가"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "게터는 필라멘트의 증발을 감소시키고 진공을 좋게하여 수명을 길게한다."
    },
    {
        "id": 12,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "백열전구의 앵커에 사용되는 재료는?",
        "options": [
            "철",
            "크롬",
            "망간",
            "몰리브덴"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "백열전구의 앵커(지지선) : 유리와 잘 밀착되는 몰리브덴선을 사용"
    },
    {
        "id": 13,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "새로 제작한 전구는 최초의 점등에서 필라멘트의 특성을 안정화시키는 작업을 무엇이라하는가?",
        "options": [
            "초특성",
            "동정특성",
            "전압특성",
            "에이징(aging)"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "에이징(aging) : 새로 제작한 전구는 최초의 점등에서 필라멘트의 특성을 안정화시키는 작업"
    },
    {
        "id": 14,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "300[W] 이상의 백열전구에 사용되는 베이스의 크기는?",
        "options": [
            "E10",
            "E17",
            "E26",
            "E39"
        ],
        "answer": 3,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "소켓의 수용구 크기 및 용도 : 대형전구용 300W"
    },
    {
        "id": 15,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "필라멘트 재료가 갖추어야 할 조건 중 틀린 것은?",
        "options": [
            "융해점이 높을 것",
            "고유 저항이 작을 것",
            "선팽창 계수가 작을 것",
            "높은 온도에서 증발성이 적을 것"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "필라멘트 재료의 조건 : 고유저항이 클 것"
    },
    {
        "id": 16,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "백열전구에서 사용되는 필라멘트 재료의 구비 조건으로 틀린 것은?",
        "options": [
            "용융점이 높을 것",
            "고유 저항이 클 것",
            "선팽창 계수가 높을 것",
            "높은 온도에서 증발성이 적을 것"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "필라멘트 재료의 조건 : 선팽창 계수가 작을 것"
    },
    {
        "id": 17,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "B",
        "question": "할로겐전구의 특징이 아닌 것은?",
        "options": [
            "휘도가 낮다",
            "열충격에 강하다",
            "단위 광속이 크다",
            "연색성이 좋다"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "할로겐 전구의 특징 : 휘도가 높다 (눈부심이 크다)"
    },
    {
        "id": 18,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "B",
        "question": "할로겐전구의 특징에 해당하지 않는 것은?",
        "options": [
            "백열전구에 비해 수명이 길다.",
            "배광 제어가 용이하다",
            "효율이 20~22[lm/W]이다.",
            "연색성이 나쁘다"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "할로겐 전구의 특징 : 연색성이 좋다"
    },
    {
        "id": 19,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "형광판, 야광도료 및 형광방전등에 이용되는 루미네선스는?",
        "options": [
            "열 루미네선스",
            "전기 루미네선스",
            "복사 루미네선스",
            "파이로 루미네선스"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "복사 루미네선스 : 형광판, 야광도료 및 형광방전등에 이용되는 루미네선스"
    },
    {
        "id": 20,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "방전등에 속하지 않는 것은?",
        "options": [
            "할로겐등",
            "형광 수은등",
            "고압나트륨등",
            "메탈 할라이드등"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "할로겐은 방전등이 아니다. 참고로 나머지 3개는 고압 방전등에 속한다."
    },
    {
        "id": 21,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "다음 중 등(램프) 종류별 기호가 옳은 것은?",
        "options": [
            "형광등 : F",
            "수은등 : N",
            "나트륨등 : T",
            "메탈 할라이드등 : H"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "수은 H , 나트륨 N, 메탈 할라이드 M"
    },
    {
        "id": 22,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "B",
        "question": "형광등의 광색이 주광색일 때 색온도[K]는 약 얼마인가?",
        "options": [
            "3,000",
            "4,500",
            "5,000",
            "6,500"
        ],
        "answer": 3,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "주광색은 기호 D, 상관 색온도 범위는 5700~7100 [K]"
    },
    {
        "id": 23,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "C",
        "question": "형광등은 형광체의 종류에 따라 여러 가지 광색을 얻을 수 있다. 형광체가 규산 아연일 때의 광색은?",
        "options": [
            "녹색",
            "백색",
            "청색",
            "황색"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "규산 아연 : 녹색"
    },
    {
        "id": 24,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "전원을 넣자마자 곧바로 점등되는 형광등용의 안정기는?",
        "options": [
            "점등관식",
            "래피드 스타트식",
            "글로우 스타트식",
            "필라멘트 단락식"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "속시기동형과 순시기동형. 둘 다 곧바로 점등이지만 해당 유형의 문제는 선지에 래피드가 있으면 선택, 지문에 필라멘트 예열이 있다면 순시 기동(슬림 라인)을 선택"
    },
    {
        "id": 25,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "형광등의 점등 회로 중 필라멘트를 예열하지 않고 직접 형광등에 고전압을 가하여 순간적으로 기동하는 점등 회로로서, 전극이 기동 시에는 냉음극, 동작 시에는 방전전류에 의한 열음극으로 작동하는 회로는?",
        "options": [
            "전자 스타터 점등 회로",
            "글로우 스타터 점등 회로",
            "속시 기동(래피드 스타터) 점등 회로",
            "순시 기동(슬림 라인) 점등 회로"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "속시기동형과 순시기동형. 둘 다 곧바로 점등이지만 해당 유형의 문제는 선지에 래피드가 있으면 선택. 단, 지문에 필라멘트 예열이 있다면 순시 기동(슬림 라인)을 선택"
    },
    {
        "id": 26,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "C",
        "question": "형광등의 형광체에 형광 발생을 위한 자극을 주는 가장 유효한 파장의 범위는?",
        "options": [
            "1000 이하",
            "1000~2000",
            "2000~3000",
            "3000 이상"
        ],
        "answer": 2,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "형광이 3번이나 나왔다. 3번을 고르자. 실제로는 2537 이라고 한다."
    },
    {
        "id": 27,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "저압 나트륨등에 대한 설명 중 틀린 것은?",
        "options": [
            "광원의 효율은 방전등 중에서 가장 우수하다.",
            "가시광의 대부분이 단일 광색이므로 연색 지수가 낮다.",
            "물체의 형체나 요철의 식별에 우수한 효과가 있다.",
            "연색성이 우수하여 도로, 터널의 조명등에 쓰인다."
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "저압 나트륨등은 연색성이 나쁘다"
    },
    {
        "id": 28,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "효율이 우수하고 특히 등황색 단색광으로 연색성이 문제 되지 않는 도로조명, 터널 조명 등에 많이 사용되고 있는 등은?",
        "options": [
            "크세논등",
            "고압 수은등",
            "저압 나트륨등",
            "메탈 할라이드등"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "저압 나트륨등은 연색성만 나쁘지 효율은 좋다"
    },
    {
        "id": 29,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "방전등의 일종으로 빛의 투과율이 크고 등황색의 단색광이며 안개 속을 잘 투과하는 등은?",
        "options": [
            "나트륨등",
            "할로겐등",
            "형광등",
            "수은등"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "나트륨등의 특징 : 등황색의 단색광으로 효율이 우수하며 빛의 투과율이 커 안개 지역, 터널 조명 등에 많이 사용됨"
    },
    {
        "id": 30,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "터널 내의 배기가스 및 안개 등에 대한 투과력이 우수하여 터널 조명, 교량 조명 고속도로 인터체인지 등에 많이 사용되는 방전등은?",
        "options": [
            "수은등",
            "나트륨등",
            "크세논등",
            "메탈 헬라이드등"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "나트륨등의 특징 : 등황색의 단색광으로 효율이 우수하며 빛의 투과율이 커 안개 지역, 터널 조명 등에 많이 사용됨"
    },
    {
        "id": 31,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "방전등의 일종으로서 효율이 대단히 좋으며 광색은 순황색이고 연기나 안개 속을 잘 투과하는 등은?",
        "options": [
            "수은등",
            "형광등",
            "나트륨",
            "요오드등"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "나트륨등의 특징 : 등황색의 단색광으로 효율이 우수하며 빛의 투과율이 커 안개 지역, 터널 조명 등에 많이 사용됨"
    },
    {
        "id": 32,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "램프 효율이 우수하고 단색광이므로 안개 지역에서 가장 많이 사용되는 광원은?",
        "options": [
            "나트륨등",
            "메탈 헬라이드등",
            "수은등",
            "크세논등"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "나트륨등의 특징 : 등황색의 단색광으로 효율이 우수하며 빛의 투과율이 커 안개 지역, 터널 조명 등에 많이 사용됨"
    },
    {
        "id": 33,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "방전등의 일종으로 효율이 좋으며 빛의 투과율이 크고, 등황색의 단광색이며, 안개 속을 잘 투과하는 등은?",
        "options": [
            "나트륨등",
            "할로겐등",
            "형광등",
            "수은등"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "나트륨등의 특징 : 등황색의 단색광으로 효율이 우수하며 빛의 투과율이 커 안개 지역, 터널 조명 등에 많이 사용됨"
    },
    {
        "id": 34,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "다음 광원 중 발광 효율이 가장 좋은 것은?",
        "options": [
            "형광등",
            "크세논등",
            "저압 나트륨등",
            "메탈 헬라이드등"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "나트륨등의 특징 : 등황색의 단색광으로 효율이 우수하며 빛의 투과율이 커 안개 지역, 터널 조명 등에 많이 사용됨"
    },
    {
        "id": 35,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "B",
        "question": "나트륨등의 이론적 발광 효율은 약 몇 [lm/W] 인가?",
        "options": [
            "255",
            "300",
            "395",
            "500"
        ],
        "answer": 2,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "나트륨등의 이론상 효율은 395[lm/W], 실용상 효율은 80~150[lm/W]"
    },
    {
        "id": 36,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "B",
        "question": "나트륨램프에 대한 설명 중 틀린 것은?",
        "options": [
            "KS C 7610에 따른 기호 NX는 저압 나트륨램프를 표시하는 기호이다.",
            "등황색의 단일 광색으로 색수치가 적다.",
            "색온도는 5000~6000[K] 정도이다.",
            "도로, 터널, 항만 표지 등에 이용한다."
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "색온도 저압 1700~1900 , 고압 2000~2700"
    },
    {
        "id": 37,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "네온 방전등에 대한 설명으로 틀린 것은?",
        "options": [
            "네온 방전등에 공급하는 전로의 대지 전압은 300[V] 이하로 하여야 한다.",
            "네온변압기 2차 측은 병렬로 접속하여 사용하여야 한다.",
            "관등회로의 배선은 애자 공사로 시설하여야 한다.",
            "관등회로의 배선에서 전선 상호 간의 이격거리는 60[mm] 이상으로 하여야 한다."
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "네온변압기는 2차측을 직렬 또는 병렬로 접속하여 사용하지 말 것."
    },
    {
        "id": 38,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "C",
        "question": "KS C 7617에 따른 네온관의 공칭 관전류는 몇 [mA]인가?",
        "options": [
            "10",
            "20",
            "30",
            "40"
        ],
        "answer": 1,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "7617을 더하면 21임 20 고르자"
    },
    {
        "id": 39,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "C",
        "question": "네온전구의 용도로서 틀린 것은?",
        "options": [
            "소비전력이 적으므로 배전반의 표시등에 적합하다.",
            "부글로우를 이용하고 있어 직류의 극성 판별에 사용된다.",
            "일정한 전압에서 점등되므로 검전기, 교류파고값의 측정에 이용할 수 없다.",
            "네온전구는 전극 간의 길이가 짧으므로 부글로우를 발광으로 이용한 것이다."
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "네온 전구는 일정 전압 이상에서 발광한다. 검전기나 교류 파고치 측정에 사용된다."
    },
    {
        "id": 40,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "다음 중 일반적으로 휘도가 가장 높은 램프는?",
        "options": [
            "백열전구",
            "탄소 아크등",
            "고압 수은등",
            "형광등"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "탄소 아크등 : 일반적으로 휘도가 가장 높은 램프"
    },
    {
        "id": 41,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "B",
        "question": "HID 램프의 종류가 아닌 것은?",
        "options": [
            "고압 수은 램프",
            "고압 옥소 램프",
            "고압 나트륨 램프",
            "메탈 할라이드 램프"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "옥소는 여기 옶소.. HID 램프의 종류는 고압 수은등, 고압 나트륨등, 메탈 할라이드등, 크세논 등 이다."
    },
    {
        "id": 42,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "C",
        "question": "크세논등의 특징이 아닌 것은?",
        "options": [
            "연색성이 우수하다.",
            "크세논가스 중의 방전을 이용한다.",
            "영사용 광원, 광학기기용 광원 등으로 사용된다.",
            "휘도가 작고 자연주광에 가깝다"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "크세논등도 휘도가 매우 높다. 자연 주광에 가깝다."
    },
    {
        "id": 43,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "다음 조명기구의 배광에 의한 분류 중 병실이나 침실에 시설할 조명기구로 가장 적합한 것은?",
        "options": [
            "직접 조명기구",
            "반간접 조명기구",
            "반직접 조명기구",
            "전반 확산 조명기구"
        ],
        "answer": 1,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "반간접 조명 : 병실이나 침실에 시설할 조명기구로 가장 적합한 것"
    },
    {
        "id": 44,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "하향 광속으로 직접 작업면에 직사시키고 상향 광속의 반사광으로 작업면의 조도를 증가시키는 조명기구는?",
        "options": [
            "간접 조명기구",
            "직접 조명기구",
            "반직접 조명기구",
            "전반 확산 조명기구"
        ],
        "answer": 3,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "전반 확산 조명 : 하향과 상향, 비율 명시 없으면 반반인 전반확산 조명 선택"
    },
    {
        "id": 45,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "조명기구나 소형 전기기기구에 전력을 공급하는 것으로 상점이나 백화점, 전시장 등에서 조명 기구의 위치를 빈번하게 바꾸는 곳에 사용되는 것은?",
        "options": [
            "라이팅덕트",
            "다운라이트",
            "코퍼라이트",
            "스포트라이트"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "라이팅 덕트 : 조명기구나 소형 전기기구에 전력을 공급하는 것으로 상점이나 백화점, 전시장 등에서 조명기구의 위치를 빈번하게 바꾸는 곳에 사용되는 것"
    },
    {
        "id": 46,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "A",
        "question": "무대 조명의 배치별 구분 중 무대 상부 배치 조명에 해당되는 것은?",
        "options": [
            "Foot light",
            "Tower light",
            "Ceiling Spot light",
            "Suspension Spot light"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "서스펜션 스포트라이트 : 무대 상부 배치 조명 중 하나"
    },
    {
        "id": 47,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "B",
        "question": "천장면을 여러 형태의 사각, 삼각 등으로 구멍을 내어 다양한 형태의 매입 기구를 취부하여 실내의 단조로움을 피하는 조명 방식은?",
        "options": [
            "pin hole light",
            "coffer light",
            "line light",
            "cornis light"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "코퍼 라이트 : 천장면을 여러 형태의 사각, 삼각 등으로 구멍을 내어 다양한 형태의 매입 기구를 취부하여 실내의 단조로움을 피하는 조명방식"
    },
    {
        "id": 48,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "B",
        "question": "연속열 등기구를 천장에 매입하거나 들보에 설치하는 조명 방식으로 일반적으로 사무실에 설치되는 건축화 조명 방식은?",
        "options": [
            "밸런스 조명",
            "광량 조명",
            "코브 조명",
            "코퍼 조명"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "광령 조명 : 연속열 등기구를 천장에 '매입'하거나 '들보'에 설치. 일반적으로 사무실에 설치. 매입과 들보가 나오면 광량을 고르자"
    },
    {
        "id": 49,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "B",
        "question": "실내 조도 계산에서 조명률 결정에 미치는 요소가 아닌 것은?",
        "options": [
            "실지수",
            "반사율",
            "조명기구",
            "감광보상률"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "조명률(U) : 조명기구 효율, 빛의 특성, 실지수, 조명기구 설치 위치 등에 따라 달라진다. 평균조도 공식에 쓰임."
    },
    {
        "id": 50,
        "part": 2,
        "partName": "광원 및 조명설계",
        "type": "C",
        "question": "KS C 8000에서 감전 보호와 관련하여 조명기구의 종류(등급)을 나누고 있다. 각 등급에 따른 기구의 설명이 틀린 것은?",
        "options": [
            "등급 0 기구 : 기초절연으로 일부분을 보호한 기구로서 접지단자를 가지고 있는 기구",
            "등급 I 기구 : 기초절연만으로 전체를 보호한 기구로서 보호 접지단자를 가지고 있는 기구",
            "등급 II 기구 : 2중 절연을 할 기구",
            "등급 III 기구 : 정격전압이 교류 30V 이하인 전압의 전원에 접속하여 사용하는 기구"
        ],
        "answer": 0,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "등급 0 기구 : 접지단자 또는 접지선을 갖지 않고 기초 절연만으로 '전체'가 보호된 기구."
    },
    {
        "id": 51,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "344[kcal]를 [kWh]의 단위로 표시하면?",
        "options": [
            "0.4",
            "407",
            "400",
            "0.0039"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "1kWh = 860kcal"
    },
    {
        "id": 52,
        "part": 3,
        "partName": "전열",
        "type": "B",
        "question": "전기의 전도와 열의 전도는 서로 근사하여 온도를 전압, 열류를 전류와 같이 생각하여 열전도의 계산에 사용될 때의 열류의 단위로 옳은 것은?",
        "options": [
            "[J]",
            "[deg]",
            "[deg/W]",
            "[W]"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "열류의 단위 : [W]"
    },
    {
        "id": 53,
        "part": 3,
        "partName": "전열",
        "type": "B",
        "question": "열전도율의 단위를 나타낸 것은?",
        "options": [
            "kcal/h",
            "m h C / kcal",
            "kcal/h C",
            "kcal/m h C"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "열전도율의 단위. 분모에 뭐가 많음. 또는 W/m C"
    },
    {
        "id": 54,
        "part": 3,
        "partName": "전열",
        "type": "B",
        "question": "일정 전류를 통하는 도체의 온도상승 ",
        "options": [
            "$\\theta$ = k r^{-2}",
            "$\\theta$ = k r^{-3}",
            "$\\theta$ = k r^{-\\frac{2}{3}}",
            "$\\theta$ = k r^{-\\frac{3}{2}}"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "도체의 온도상승 $\\theta_t \\propto \\frac{k}{r^3}$"
    },
    {
        "id": 55,
        "part": 3,
        "partName": "전열",
        "type": "B",
        "question": "고유 저항 ($20^\\circ \\mathrm{C}$)이 가장 큰 것은?",
        "options": [
            "텅스텐",
            "백금",
            "은",
            "알루미늄"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "금속의 고유저항 (고유 저항 ($20^\\circ \\mathrm{C}$))의 크기 : 백금 > 텅스텐 > 알루미늄 > 은"
    },
    {
        "id": 56,
        "part": 3,
        "partName": "전열",
        "type": "C",
        "question": "금속재료 중 용융점이 제일 높은 것은?",
        "options": [
            "백금",
            "이리듐",
            "몰리브덴",
            "텅스텐"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "텅스텐 > 몰리브덴 > 이리듐 > 백금"
    },
    {
        "id": 57,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "다음 중 발열체의 구비 조건이 아닌 것은?",
        "options": [
            "내열성이 클 것",
            "용융, 연화, 산화 온도가 낮을 것",
            "저항률이 크고 온도계수가 작을 것",
            "연성 및 전성이 풍부하여 가공이 용이할 것"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "발열체 구비조건 1. '용산역(연) 개덥네' -> 용융 산화 연화 온도가 높다"
    },
    {
        "id": 58,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "발열체의 구비 조건 중 틀린 것은?",
        "options": [
            "내열성이 클 것",
            "내식성이 클 것",
            "가공이 용이할 것",
            "저항률이 비교적 작고 온도계수가 높을 것"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "적당한 고유 저항값을 가지고, 저항의 온도계쑤가 정(+)이며 작을 것"
    },
    {
        "id": 59,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "순금속 발열체의 종류가 아닌 것은?",
        "options": [
            "백금(Pt)",
            "텅스텐(W)",
            "몰리브덴(Mo)",
            "탄화규소(SiC)"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "탄화규소 발열체는 비금속 발열체로 최고 사용 온도가 1500도로 매우 높다."
    },
    {
        "id": 60,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "다음 발열체 중 최고 사용 온도가 가장 높은 것은?",
        "options": [
            "니크롬 제 1종",
            "니크롬 제 2종",
            "철-크롬 제 1종",
            "탄화규소 발열체"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "탄화규소 발열체는 비금속 발열체로 최고 사용 온도가 1500도로 매우 높다."
    },
    {
        "id": 61,
        "part": 3,
        "partName": "전열",
        "type": "C",
        "question": "비금속 발열체에 대한 설명으로 틀린 것은?",
        "options": [
            "탄화규소 발열체는 카보런덤을 주성분으로 한 발열체이다.",
            "탄소질 발열체에는 인조 흑연을 가공하여 사용하는 것이 있다.",
            "규화 몰리브덴 발열체는 고온용의 발열체로써 칸탈선이라고도 한다.",
            "염욕 발열체는 높은 도전성을 가지는 고체 발열체이다."
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "염욕 발열체는 '액체' 발열체이다"
    }
];