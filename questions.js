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
            "R=4\\pi B",
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
    },
    {
        "id": 62,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "2종의 금속이나 반도체를 접합하여 열전대를 만들고 기전력을 공급하면 각 접점에서 열의 흡수와 발생이 일어나는 현상은?",
        "options": [
            "펠티에 효과",
            "제백 효과",
            "톰슨 효과",
            "핀치 효과"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "펠티에 효과 : '서로' 다른 (2종)의 금속을 접합한 후 전류를 흘리면 접합 면에 온도 차가 발생하는 현상 <-> 같은 종류 금속 전류 -> 열 : 톰슨 효과 ,  서로 다른 두 종류 금속 열 -> 전류 : 제백 효과"
    },
    {
        "id": 63,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "금속의 표면 열처리에 이용하며 도체에 고주파 전류를 흘릴 때 전류가 표면에 집중하는 효과는?",
        "options": [
            "표피 효과",
            "톰슨 효과",
            "핀치 효과",
            "제백 효과"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "표피효과 : 도체에 고주파 전류를 흘릴 때 전류가 표면에 집중하는 효과"
    },
    {
        "id": 64,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "금속이나 반도체에 전류를 흘리고 이것과 직각 방향으로 자계를 가하면 전류와 자계의 방향을 포함하는 면에 대하여 수직적인 방향으로 기전력이 발생한다. 이러한 현상은?",
        "options": [
            "핀치 효과",
            "펠티어 효과",
            "제백 효과",
            "홀 효과"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "홀 효과 : 직각 관련 얘기가 나오면 홀 효과"
    },
    {
        "id": 65,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "열전대를 이용한 열전 온도계의 원리는?",
        "options": [
            "제벡 효과",
            "톰슨 효과",
            "핀치 효과",
            "펠티에 효과"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "제백 효과 : 서로 다른 금속 열->전류 , 열전대"
    },
    {
        "id": 66,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "서미스터(Thermistor)의 주된 용도는?",
        "options": [
            "온도 보상용",
            "잡음 제거용",
            "전압 증폭용",
            "출력 전류 조절용"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "서미스터는 큰 부(-)의 온도계수를 갖는 반도체소자로 온도에 따라 저항값을 변화시켜 '온도 보상용'으로 사용한다."
    },
    {
        "id": 67,
        "part": 3,
        "partName": "전열",
        "type": "B",
        "question": "스테판 볼츠만 법칙을 이용하여 온도를 측정하는 것은?",
        "options": [
            "광고온계",
            "저항 온도계",
            "열전 온도계",
            "복사 온도계"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "방사(복사) 온도계 : 스테판 볼츠만의 법칙을 이용한다."
    },
    {
        "id": 68,
        "part": 3,
        "partName": "전열",
        "type": "C",
        "question": "공업용 온도계로서 가장 높은 온도를 측정할 수 있는 것은?",
        "options": [
            "철-콘스탄탄",
            "동-콘스탄탄",
            "크로멜-알루멜",
            "백금-백금 로듐"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "가장 높은 온도 -> 백금 (고유저항의 값도 가장 큼)"
    },
    {
        "id": 69,
        "part": 3,
        "partName": "전열",
        "type": "C",
        "question": "구리 - 콘스탄탄 열전대 측온접점에 400[°C] 가해질 때 약 [mV]의 열기전력이 발생하는가?",
        "options": [
            "5",
            "20",
            "10",
            "30"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "구리-콘스탄탄의 열 기전력 -> 5.1[mV] × 400/100 = 20.4 [mV]"
    },
    {
        "id": 70,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "다음 중 직접식 저항로가 아닌 것은?",
        "options": [
            "흑연 화로",
            "카보런덤로",
            "지로식 전기로",
            "염욕로"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "염욕로는 간접 저항 가열이다. 직접 저항 가열 : 흑연화로, 카보런덤로, 카바이드로 -> 흑카카"
    },
    {
        "id": 71,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "전기로의 전기 가열 방식 중 흑연 화로, 카보런덤로의 가열 방식은?",
        "options": [
            "아크 가열",
            "유도 가열",
            "간접 저항 가열",
            "직접 저항 가열"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "직접 저항 가열 : 흑연화로, 카보런덤로, 카바이드로 -> 흑카카"
    },
    {
        "id": 72,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "형태가 복잡한 금속제품을 급속으로 온도를 균일하게 가열하는데 가장 적합한 전기로는?",
        "options": [
            "적외선 가열",
            "염욕로",
            "유도가열",
            "저주파 유도로"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "형태 복잡 -> 가공 어려움 -> 염병 욕나오게 어렵노 -> 염욕로"
    },
    {
        "id": 73,
        "part": 3,
        "partName": "전열",
        "type": "B",
        "question": "전기 가열 방식 중 전극 사이의 공간에 전류가 흐를 때 발생하는 고열에 의한 가열 방식은?",
        "options": [
            "아크 가열",
            "저항 가열",
            "적외선 가열",
            "고주파 가열"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "아크 가열 : 전극 사이 공간에 전류가 흐를 때 발생하는 고열에 의한 가열 방식"
    },
    {
        "id": 74,
        "part": 3,
        "partName": "전열",
        "type": "B",
        "question": "전압과 전류의 관계에서 수하특성을 이용한 가열 방식은?",
        "options": [
            "저항 가열",
            "아크 가열",
            "유전 가열",
            "적외선 가열"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "아크 가열 : 전극 사이 공간에 전류가 흐를 때 발생하는 고열에 의한 가열 방식, \"전압과 전류의 관계에서 '수하특성'을 이용한 가열방식\""
    },
    {
        "id": 75,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "금속의 표면 담금질에 쓰이는 가열 방식은?",
        "options": [
            "유도 가열",
            "유전 가열",
            "저항 가열",
            "아크 가열"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "유도 가열 : 금속의 표면 담금질에 사용된다. (히스테리시스손과 와류손을 이용, 특수강 제조에 사용, 목재 X)"
    },
    {
        "id": 76,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "상용 주파수를 사용할 수 있는 가열 방식은?",
        "options": [
            "초음파 가열",
            "유전 가열",
            "저주파 유도 가열",
            "마이크로파 유전 가열"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "저주파 유도로 : 저주파 유도가열은 60[Hz]의 상용 주파수를 사용하는 가열 방식이다."
    },
    {
        "id": 77,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "고주파 유도 가열의 용도가 아닌 것은?",
        "options": [
            "목재의 고주파 가공",
            "고주파 납땜",
            "관 용접",
            "단조"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "고주파 유도로 : 고급 특수강 제작. 목재는 유'전' 가열을 사용"
    },
    {
        "id": 78,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "유전 가열의 용도를 설명하고 있다. 다음 중 틀린 것은?",
        "options": [
            "합성수지의 가열 성형",
            "베니어판의 건조",
            "고무의 유화",
            "구리의 용접"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "구리 등의 금속 도체의 가열은 유'도' 가열"
    },
    {
        "id": 79,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "유전 가열의 용도로 틀린 것은?",
        "options": [
            "목재의 건조",
            "목재의 접착",
            "염화 비닐막의 접착",
            "금속 표면처리"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "유전 가열: 목재, 비닐막"
    },
    {
        "id": 80,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "비닐막 등의 접착에 주로 사용하는 가열 방식은?",
        "options": [
            "유전 가열",
            "저항 가열",
            "아크 가열",
            "유도 가열"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "유전 가열: 목재, 비닐막"
    },
    {
        "id": 81,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "합판 및 비닐막의 접착에 적당한 가열 방식은?",
        "options": [
            "유도 가열",
            "적외선 가열",
            "직접 저항 가열",
            "고주파 유전 가열"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "유전 가열: 목재, 비닐막"
    },
    {
        "id": 82,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "전기 가열 방식 중에서 고주파 유전 가열의 응용으로 틀린 것은?",
        "options": [
            "목재의 건조",
            "비닐막 접착",
            "목재의 접착",
            "공구의 표면처리"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "유전 가열: 목재, 비닐막"
    },
    {
        "id": 83,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "유전체 자신을 발열시키는 유전 가열의 특징으로 틀린것은?",
        "options": [
            "열이 유전체 손에 의하여 피열물 자체내에서 발생한다.",
            "온도상승 속도가 빠르다.",
            "표면의 소손과 균열이 없다.",
            "전 효율이 좋고, 설비비가 저렴하다."
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "유전 가열 : 설비비가 고가이며 효율이 낮다."
    },
    {
        "id": 84,
        "part": 3,
        "partName": "전열",
        "type": "A",
        "question": "전열의 원리와 이를 이용한 전열기기의 연결이 틀린 것은?",
        "options": [
            "저항 가열 - 전기다리미",
            "아크 가열 - 전기 용접기",
            "유전 가열 - 온열 치료기구",
            "적외선 가열 - 피부 미용 기기"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "유전 가열: 목재, 비닐막"
    },
    {
        "id": 85,
        "part": 3,
        "partName": "전열",
        "type": "B",
        "question": "다음 중 전기로의 가열 방식이 아닌 것은?",
        "options": [
            "저항 가열",
            "유전 가열",
            "유도 가열",
            "아크 가열"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "전기로의 종류 : 저항로, 아크로, 유도로"
    },
    {
        "id": 86,
        "part": 3,
        "partName": "전열",
        "type": "C",
        "question": "적외선 가열의 특징이 아닌 것은?",
        "options": [
            "표면 가열이 가능하다.",
            "신속하고 효율이 좋다.",
            "조작이 복잡하여 온도조절이 어렵다",
            "구조가 간단하다"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "적외선 가열의 특징 : 간단, 용이"
    },
    {
        "id": 87,
        "part": 3,
        "partName": "전열",
        "type": "B",
        "question": "전자빔으로 용해하는 고융점 활성금속 재료는?",
        "options": [
            "니크롬 제 2종",
            "철크롬 제 1종",
            "탄화규소",
            "탄탈, 지르코늄"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "전자빔 융해 고융점 활성금속 : 탄탈, 니오브, 지르코늄 -> 니코털"
    },
    {
        "id": 88,
        "part": 3,
        "partName": "전열",
        "type": "B",
        "question": "전자빔으로 융해하는 고융점 활성금속 재료는?",
        "options": [
            "탄화규소",
            "니크롬 제2종",
            "탄탈, 니오브",
            "철-크롬 제1종"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "전자빔 융해 고융점 활성금속 : 탄탈, 니오브, 지르코늄 -> 니코털"
    },
    {
        "id": 89,
        "part": 3,
        "partName": "전열",
        "type": "B",
        "question": "전자빔 가열의 특징이 아닌 것은?",
        "options": [
            "용접, 용해 및 천공 작업등에 응용된다.",
            "에너지의 밀도나 분포를 자유로이 조절할 수 있다.",
            "진공 중에서 가열이 불가능하다.",
            "고융점 재료 및 금속박 재료의 용접이 쉽다."
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "전자빔 -> 진공 중에서 가열이 가능하다."
    },
    {
        "id": 90,
        "part": 3,
        "partName": "전열",
        "type": "B",
        "question": "레이저 가열의 특징으로 틀린 것은?",
        "options": [
            "파장이 짧은 레이저는 미세 가공에 적합하다",
            "에너지 변환 효율이 높아 원격 가공이 가능하다.",
            "필요한 부분에 집중하여 고속으로 가열할 수 있다.",
            "레이저의 조사 면적을 광범위하게 제어할 수 있다."
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "레이저 가열은 에너지 변환 효율이 낮다"
    },
    {
        "id": 91,
        "part": 3,
        "partName": "전열",
        "type": "B",
        "question": "다음 용접 방법 중 저항 용접이 아닌 것은?",
        "options": [
            "점용접",
            "이음매용접",
            "돌기용접",
            "전자빔용접"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "저항 용접은 크게 맞대기 용접과 겹치기 용접이 있다. 맞대기 용접은 \"업셋 용접, 플래시 용접, 맞대기 용접, 충격 용접\" , 겹치기 용접은 \"점용접, 프로젝션(돌기)용접, 심용접, 이음매 용접\" 이 있다. -> 빈도 높은건 돌기, 오답 유형으로는 전자빔 용접"
    },
    {
        "id": 92,
        "part": 3,
        "partName": "전열",
        "type": "B",
        "question": "저항 용접에 속하는 것은?",
        "options": [
            "TIG 용접",
            "탄소 아크 용접",
            "유니온벨트 용접",
            "프로젝션 용접"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "저항 용접은 크게 맞대기 용접과 겹치기 용접이 있다. 맞대기 용접은 \"업셋 용접, 플래시 용접, 맞대기 용접, 충격 용접\" , 겹치기 용접은 \"점용접, 프로젝션(돌기)용접, 심용접, 이음매 용접\" 이 있다. -> 빈도 높은건 돌기, 오답 유형으로는 전자빔 용접"
    },
    {
        "id": 93,
        "part": 3,
        "partName": "전열",
        "type": "B",
        "question": "",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": 0,
        "noShuffle": true,
        "hasImage": true,
        "explanation": "아크 용접의 수하특성 : 전류가 증가하면 전압이 감소"
    },
    {
        "id": 94,
        "part": 3,
        "partName": "전열",
        "type": "C",
        "question": "알루미늄 및 마그네슘의 용접에 가장 적합한 용접방법은?",
        "options": [
            "탄소 아크용접",
            "원자수소 용접",
            "유니온멜트 용접",
            "불활성가스 아크용접"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "불활성 가스 용접 -> 알루미늄, 마그네숨, 기타 특수강 등의 방전 용접에 사용 -> 불알"
    },
    {
        "id": 95,
        "part": 3,
        "partName": "전열",
        "type": "B",
        "question": "전기용접부의 비파괴검사와 관계없는 것은?",
        "options": [
            "X선 검사",
            "자기 검사",
            "고주파 검사",
            "초음파 탐상시험"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "비파괴 시험 -> X선, 자기 검사, 초음파 탐상, 육안 검사 -> 자기 육아 초음이야? 아니(X) "
    },
    {
        "id": 96,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "전동기 정격(rate)에 해당되지 않는 것은?",
        "options": [
            "연속 정격",
            "단시간 정격",
            "중시간 정격",
            "반복 정격"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "전동기의 정격 : 연속 정격, 반복 정격, 단시간 정격 -> 해당 기출의 오답 유형은 항상 '중시간'"
    },
    {
        "id": 97,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "부식성의 산, 알칼리 또는 유해가스가 있는 장소에서 실용상 지장 없이 사용할 수 있는 구조의 전동기는?",
        "options": [
            "방적형",
            "방진형",
            "방수형",
            "방식형"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "방식형 전동기 : 부'식'성의 산, 알칼리 또는 유해가스가 존재하는 장소에서 사용하는 구조. 방적(물의 침입 보호, 15도) 방진(먼지 침입 방지) 방수(지정 조건 1~3분 주수하여도 물 침입 불가)"
    },
    {
        "id": 98,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "플라이휠을 이용하여 변동이 심한 부하에 사용되고 가역 운전에 알맞은 속도제어 방식은?",
        "options": [
            "일그너 방식",
            "워드 레오나드 방식",
            "극수 변환 방식",
            "전원 주파수 변환 방식"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "변동이 심한 -> 표정이 일그러져 -> 일그너 방식. 일그너 방식은 플라이 휠 효과를 이용하여 부하 변동이 심한 대용량 제철용 압연기 등에 사용된다."
    },
    {
        "id": 99,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "직류 전동기 속도제어에서 일그너 방식이 채용되는 것은?",
        "options": [
            "제지용 전동기",
            "특수한 공작기계용",
            "제철용 대형 압연기",
            "인쇄기"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "일그너 방식은 플라이 휠 효과를 이용하여 부하 변동이 심한 대용량 제철용 압연기 등에 사용된다."
    },
    {
        "id": 100,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "직류 전동기의 속도 제어법이 아닌 것은?",
        "options": [
            "극수 변환",
            "전압 제어",
            "저항 제어",
            "계자 제어"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "극수 변환 : 농형 유도 전동기의 속도 제어"
    },
    {
        "id": 101,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "직류 전동기의 속도 제어법에서 정출력 제어에 속하는 것은?",
        "options": [
            "계자 제어",
            "전압 제어",
            "전기자 저항 제어",
            "워드 레오나드 제어"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "계자 제어 : 정출력 제어에 적합한 속도제어법. -> 아 계출출해 : 계자 정출력"
    },
    {
        "id": 102,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "3상 농형 유도 전동기의 속도제어 방법이 아닌 것은?",
        "options": [
            "극수 변환법",
            "주파수 제어법",
            "전압 제어법",
            "2차 저항 제어법"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "농형 유도 전동기 -> 국주전(극수 주파수 전압), 2차 관련은 권선형 유도전동기의 속도제어"
    },
    {
        "id": 103,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "전기차의 속도 제어시스템 중 주파수의 변환에 대응하도록 전압도 같이 제어하는 방식은?",
        "options": [
            "저항 제어시스템",
            "초퍼 제어시스템",
            "위상 제어시스템",
            "VVVF 제어시스템"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "가변전압 가변주파수 전원공급장치로 농형 유도전동기의 속도 제어에 적합한 장치이다."
    },
    {
        "id": 104,
        "part": 4,
        "partName": "전동기",
        "type": "B",
        "question": "선박의 전기 추진에 많이 사용되는 속도제어방식은?",
        "options": [
            "크레머 제어방식",
            "2차 저항 제어 방식",
            "극수변환 제어방식",
            "전원 주파수 제어 방식"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "전원 주파수 -> 발전기 구동용 원동기의 속도를 바꾸어 발전기 주파수를 바꾸고 전동기 속도를 제어. 이는 선박의 전기 추진에 사용"
    },
    {
        "id": 105,
        "part": 4,
        "partName": "전동기",
        "type": "C",
        "question": "다음 전동기 중에서 속도 변동률이 가장 큰 것은?",
        "options": [
            "3상 동기 전동기",
            "단산 유도 전동기",
            "3상 농형 유도 전동기",
            "3상 권선형 유도 전동기"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "단상은 3상보다 속도 변동률 크다"
    },
    {
        "id": 106,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "하역 기계에서 무거운 것은 저속으로, 가벼운 것은 고속으로 작업하여 고속이나 저속에서 다 같이 동일한 동력이 요구되는 부하는?",
        "options": [
            "정토크 부하",
            "정동력 부하",
            "정속도 부하",
            "제곱토크 부하"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "정동력 부하 : 속도가 증가하면 토크가 감소. 반비례 관계"
    },
    {
        "id": 107,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "직류 직권 전동기는 어느 부하에 적당한가?",
        "options": [
            "변출력 부하",
            "정속도 부하",
            "정출력 부하",
            "정토크 부하"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "직류 직권 전동기는 속도에 관계없이 일정한 출력을 필요로 하는 정출력 부하에 적당하다."
    },
    {
        "id": 108,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "다음 중 정속도 특성을 갖고 있는 전동기는?",
        "options": [
            "직류 분권 전동기",
            "가동 분권 전동기",
            "직류 직권 전동기",
            "차동 복권 전동기"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "정속도 특성 : 직류 분권 전동기, 유도 전동기, 교류 분권 정류자 전동기"
    },
    {
        "id": 109,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "일반적인 농형 유도 전동기의 기동법이 아닌 것은?",
        "options": [
            "전전압 기동",
            "기동보상기에 의한 기동",
            "와이-델타 기동",
            "2차 저항 기동"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "2차 저항 기동 : 권선형 유도전동기 기동 방식"
    },
    {
        "id": 110,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "다음 중 농형 유도 전동기의 기동법으로 적합하지 않은 것은?",
        "options": [
            "와이-델타 기동",
            "전전압 기동",
            "2차 저항 기동",
            "기동보상기에 의한 기동"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "2차 저항 기동 : 권선형 유도전동기 기동 방식"
    },
    {
        "id": 111,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "3상 농형 유도 전동기의 기동 방법이 아닌 것은?",
        "options": [
            "와이-델타 기동",
            "전전압 기동",
            "2차 저항 기동",
            "기동보상기에 의한 기동"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "2차 저항 기동 : 권선형 유도전동기 기동 방식"
    },
    {
        "id": 112,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "단상 유도 전동기의 기동 방법이 아닌 것은?",
        "options": [
            "분상 기동법",
            "전압 제어법",
            "콘덴서 기동법",
            "셰이딩 코일법"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "단상 유도 전동기의 기동 방법 : 반콘분셰"
    },
    {
        "id": 113,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "단상 유도 전동기 중 기동 토크가 가장 큰 것은?",
        "options": [
            "반발 기동형",
            "분상 기동형",
            "콘덴서 기동형",
            "셰이딩 코일형"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "단상 유도 전동기의 기동 토크 순서 : 반콘분셰"
    },
    {
        "id": 114,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "전동기의 기계적 제동으로 옳은 것은?",
        "options": [
            "전동기의 단자 접속을 변경하여 회전 반대 방향으로 토크를 주어 제동하는 방법",
            "발생하는 전력을 선로 측으로 반환하여 제동하는 방법",
            "발생하는 전력을 저항에서 열로써 소비하여 제동하는 방법",
            "전자력을 이용하여 가압함으로써 발생하는 마찰력에 의해 제동하는 방법"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "기계적 제동 : 전자력을 이용하여 가압함으로써 발생하는 마찰력에 의해 제동하는 방법"
    },
    {
        "id": 115,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "3상 유도 전동기를 급속히 정지 또는 감속시킬 경우나 과속을 급히 막을 수 있는 가장 쉽고 효과적인 제동법은?",
        "options": [
            "발전 제동",
            "회생 제동",
            "역전 제동",
            "와전류 제동"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "역전(역상)제동: 전동기의 전원 접속을 바꾸어 역토크를 발생시켜 급정지시키는 방법"
    },
    {
        "id": 116,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "전동기의 전원 접속을 바꾸어 역 토크를 발생시켜 급정지시키는 방법은?",
        "options": [
            "역전 제동",
            "발전 제동",
            "와전류 제동",
            "회생 제동"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "역전(역상)제동: 전동기의 전원 접속을 바꾸어 역토크를 발생시켜 급정지시키는 방법"
    },
    {
        "id": 117,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "유도 전동기를 동기속도보다 높은 속도에서 발전기로 동작시켜 발생된 전력을 전원으로 반환하여 제동하는 방식은?",
        "options": [
            "역전 제동",
            "발전 제동",
            "회생 제동",
            "와전류 제동"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "회생 제동 : 역기전력을 전원 전압보다 높게, 전원측 반환, 되돌려줌, 선로 공급"
    },
    {
        "id": 118,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "전동기를 전원에 접속한 상태에서 중력 부하를 하강시킬 때, 전동기의 유기 기전력이 전원 전압보다 높아져서 발전기로 동작하고 발생 전력을 전원으로 되돌려 줌과 동시에 속도를 점차 감속하는 경제적인 제동법은?",
        "options": [
            "역전 제동",
            "발전 제동",
            "회생 제동",
            "와전류 제동"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "회생 제동 : 역기전력을 전원 전압보다 높게, 전원측 반환, 되돌려줌, 선로 공급"
    },
    {
        "id": 119,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "전동기의 회생 제동이란?",
        "options": [
            "전동기의 기전력을 저항으로써 소비시키는 방법이다.",
            "전동기에 붙인 제동화에 전자력으로 가압하는 방법이다.",
            "전동기를 발전 제동으로 하여 발생 전력을 선로에 공급하는 방식이다.",
            "와전류손으로 회전체의 에너지를 소비하는 방법이다."
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "회생 제동 : 역기전력을 전원 전압보다 높게, 전원측 반환, 되돌려줌, 선로 공급"
    },
    {
        "id": 120,
        "part": 4,
        "partName": "전동기",
        "type": "A",
        "question": "엘리베이터의 사용되는 전동기의 특성이 아닌 것은?",
        "options": [
            "소음이 적어야 한다",
            "기동 토크가 적어야한다",
            "회전 부분의 관성 모멘트는 적어야한다.",
            "가속도의 변화 비율이 일정값이 되도록 선택한다."
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "엘리베이터 -> 기동 토크가 커야한다."
    },
    {
        "id": 121,
        "part": 4,
        "partName": "전동기",
        "type": "B",
        "question": "직류 전동기 중 공급전원의 극성이 바뀌면 회전방향이 바뀌는 것은?",
        "options": [
            "분권기",
            "평복권기",
            "직권기",
            "타여자기"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "타여자기 -> 공급전원의 극성이 바뀌면 회전방향이 바뀐다"
    },
    {
        "id": 122,
        "part": 5,
        "partName": "전기철도",
        "type": "A",
        "question": "전기철도에서 궤도의 구성요소가 아닌 것은?",
        "options": [
            "침목",
            "레일",
            "캔트",
            "도상"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "궤도 구성의 3요소 -> 레일 침목 도상 -> 도레미"
    },
    {
        "id": 123,
        "part": 5,
        "partName": "전기철도",
        "type": "A",
        "question": "열차가 곡선 궤도를 운행할 때 차륜의 플랜지와 레일 사이의 측면 마찰을 피하기 위해 내측 레일의 궤간을 넓히는 것은?",
        "options": [
            "고도",
            "유간",
            "확도",
            "철차각"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "확도 : 곡선 궤도를 운행할 때 차륜 연부와 궤조 두부의 측면 사이의 마찰을 피하기 위하여 내측 궤조의 궤간을 넓히는 정도 (Slack)"
    },
    {
        "id": 124,
        "part": 5,
        "partName": "전기철도",
        "type": "A",
        "question": "철도 차량이 운행하는 곡선부의 종류가 아닌 것은?",
        "options": [
            "단곡선",
            "복곡선",
            "반향곡선",
            "완화곡선"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "철도 운행 곡선부의 종류 : 단곡선, 완화곡선, 반향곡선  -> 복곡선 X"
    },
    {
        "id": 125,
        "part": 5,
        "partName": "전기철도",
        "type": "A",
        "question": "다음 전기 차량의 대차에 의한 분류가 아닌 것은?",
        "options": [
            "4륜차",
            "전동차",
            "보기차",
            "연결차"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "차량 대차에 의한 분류 : 4륜차, 보기차, 연결차 -> 4연보"
    },
    {
        "id": 126,
        "part": 5,
        "partName": "전기철도",
        "type": "A",
        "question": "전기철도에서 흡상 변압기의 용도는?",
        "options": [
            "궤도용 신호 변압기",
            "전자 유도 경감용 변압기",
            "전기 기관차의 보조 변압기",
            "전원의 불평형을 조정하는 변압기"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "흡상변압기 : 통신선 유도장해 경감 <-> 전압 불평형 경감 : 스코트 결선 변압기"
    },
    {
        "id": 127,
        "part": 5,
        "partName": "전기철도",
        "type": "A",
        "question": "단상 교류식 전기철도에서 통신선에 발생하는 유도 장해를 경감하기 위하여 사용되는 것은?",
        "options": [
            "흡상 변압기",
            "3권선 변압기",
            "스코트 결선",
            "크로스 본드"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "흡상변압기 : 통신선 유도장해 경감 <-> 전압 불평형 경감 : 스코트 결선 변압기"
    },
    {
        "id": 128,
        "part": 5,
        "partName": "전기철도",
        "type": "A",
        "question": "교류식 전기철도에서 전압불평형을 경감시키기 위해서 사용하는 변압기 결선 방식은?",
        "options": [
            "와이 결선",
            "브이 결선",
            "델타 결선",
            "스코트 결선"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "흡상변압기 : 통신선 유도장해 경감 <-> 전압 불평형 경감 : 스코트 결선 변압기"
    },
    {
        "id": 129,
        "part": 5,
        "partName": "전기철도",
        "type": "B",
        "question": "전기철도용 변전소의 간격을 결정하는 요소에 속하지 않는 것은?",
        "options": [
            "전압 변동률",
            "선로의 구배",
            "수송량",
            "노면의 상태"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "전기철도용 변전소 간격 결정 요소 : 전압 변동률, 선로의 구배, 수송량 -> 노면은 중요하지 않다."
    },
    {
        "id": 130,
        "part": 5,
        "partName": "전기철도",
        "type": "A",
        "question": "전기철도에서 귀선의 누설전류에 의해 전식이 일어나는 곳은?",
        "options": [
            "궤도에서 전류가 유출하는 곳",
            "지중관로로 전류가 유입하는 곳",
            "지중관로에서 전류가 유출하는 곳",
            "궤도로 전류가 유입하는 곳"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "누설전류에 의한 전식 : 지중관로로 전류가 유출하는 곳에서 발생한다."
    },
    {
        "id": 131,
        "part": 5,
        "partName": "전기철도",
        "type": "A",
        "question": "전기철도에서 귀선의 누설전류에 의해 전식은 어디서 발생하는가?",
        "options": [
            "궤도로 전류가 유입하는 곳",
            "궤도에서 전류가 유출하는 곳",
            "지중관로로 전류가 유입하는 곳",
            "지중관로에서 전류가 유출하는 곳"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "누설전류에 의한 전식 : 지중관로로 전류가 유출하는 곳에서 발생한다."
    },
    {
        "id": 132,
        "part": 5,
        "partName": "전기철도",
        "type": "A",
        "question": "전기철도에서 전식 방지법이 아닌 것은?",
        "options": [
            "변전소 간격을 짧게 한다.",
            "대지에 대한 레일의 절연 저항을 크게 한다.",
            "귀선의 극서을 정기적으로 바꿔주어야 한다.",
            "귀선 저항을 크게 하기 위해 레일에 본드를 시설한다."
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "귀선 저항을 적게 하기 위해 레일에 본드를 시설한다."
    },
    {
        "id": 133,
        "part": 5,
        "partName": "전기철도",
        "type": "A",
        "question": "다음 설명에 해당하는 것은? 전차선 회로의 귀선 저항을 감소시키기위한 목적으로 좌우 레일 또는 인접 레일 사이를 전기적으로 접속한다.",
        "options": [
            "보조 귀선",
            "레일 본드",
            "압축 본드",
            "크로스 본드"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "크로스본드 : 좌우 레일 또는 인접 레일 사이를 전기적으로 접속하여 귀선 저항을 적게한다."
    },
    {
        "id": 134,
        "part": 5,
        "partName": "전기철도",
        "type": "A",
        "question": "직류 전차선로에서 전압강하 및 레일의 전위 상승이 현저한 경우에 귀선의 전기저항을 감소시켜 전식의 피해를 줄이기 위해 설치하는 것으로 가장 옳은 것은?",
        "options": [
            "레일 본드",
            "보조 귀선",
            "크로스 본드",
            "압축 본드"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "보조 귀선 : 직류 전차선로에서 전압강하 및 레일의 전위상승이 현저한 경우에 귀선의 전기저항을 감소시켜 전식의 피해를 줄이기 위해 설치하는 것"
    },
    {
        "id": 135,
        "part": 5,
        "partName": "전기철도",
        "type": "A",
        "question": "전기 부식을 방지하기 위한 전기철도 측에서의 방법 중 틀린 것은? ",
        "options": [
            "변전소 간격을 단축할 것",
            "귀선로의 저항을 적게 할 것",
            "도상의 누설 저항을 적게 할 것",
            "전차선(트롤리선) 전압을 승압할 것"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "전철측 전식 방지 : 도상의 누설 저항을 크게 할 것"
    },
    {
        "id": 136,
        "part": 5,
        "partName": "전기철도",
        "type": "A",
        "question": "전식을 방지하기 위한 전철 측에서의 방지 대책 중 틀린 것은?",
        "options": [
            "변전소의 간격을 축소한다.",
            "레일본드를 설치한다.",
            "대지에 대한 레일의 절연 저항을 적게한다.",
            "귀선의 극성을 전기적으로 바꾸어 준다."
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "전철측 전식 방지: 대지에 대한 레일의 절연 저항을 크게 한다."
    },
    {
        "id": 137,
        "part": 5,
        "partName": "전기철도",
        "type": "A",
        "question": "전기 철도에서 전기 부식방지 방법 중 전기철도 측 시설이 아닌 것은?",
        "options": [
            "레일에 본드를 시설한다.",
            "레일을 따라 보조 귀선을 설치한다.",
            "변전소 간 간격을 짧게 한다.",
            "매설관의 표면을 절연한다."
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "매설관측 전식 방지 : 배류법, 매설관 표면 절연"
    },
    {
        "id": 138,
        "part": 5,
        "partName": "전기철도",
        "type": "A",
        "question": "전기철도의 매설관 측에서 시설하는 전식 방지 방법은?",
        "options": [
            "임피던스본드 설치",
            "보조 귀선 설치",
            "이선율 유지",
            "강제배류법 사용"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "매설관측 전식 방지 : 배류법, 매설관 표면 절연"
    },
    {
        "id": 139,
        "part": 5,
        "partName": "전기철도",
        "type": "C",
        "question": "열차의 설비에 의한 전력 소비량을 감소시키는 방법이 아닌 것은?",
        "options": [
            "회생 제동을 한다.",
            "직병렬 제어를 한다.",
            "기어비를 크게 한다.",
            "차량의 중량을 경감한다."
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "기어비를 적절히 유지한다."
    },
    {
        "id": 140,
        "part": 5,
        "partName": "전기철도",
        "type": "C",
        "question": "전차의 경제적인 운전 방법이 아닌 것은?",
        "options": [
            "가속도를 크게 한다",
            "감속도를 크게 한다",
            "표정속도를 작게 한다",
            "가속도, 감속도를 작게 한다."
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "가속도, 감속도를 크게 해야한다."
    },
    {
        "id": 141,
        "part": 5,
        "partName": "전기철도",
        "type": "B",
        "question": "열차저항에 대한 설명 중 옳지 않은 것은?",
        "options": [
            "주행 저항은 베어링 부분의 기계적 마찰, 공기저항 등으로 이루어진다.",
            "열차가 곡선구간을 주행할 때 곡선의 반지름에 비례하여 받는 저항을 곡선저항이라 한다.",
            "경사궤도를 운전 시 중력에 의해 발생하는 저항을 구배저항이라 한다.",
            "열차 가속 시 발생하는 저항을 가속저항이라 한다."
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "곡선 저항 : 열차가 곡선로를 통과할 때 곡선 반지름에 반비례하여 받게 되는 저항"
    },
    {
        "id": 142,
        "part": 5,
        "partName": "전기철도",
        "type": "B",
        "question": "모노레일의 특징이 아닌 것은?",
        "options": [
            "소음이 적다",
            "승차감이 좋다",
            "감가속도를 크게 할 수 있다",
            "단위 차량의 수송력이 크다"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "단위 차량의 수송력이 작다."
    },
    {
        "id": 143,
        "part": 5,
        "partName": "전기철도",
        "type": "B",
        "question": "자기 부상식 철도에서 자석에 의해 부상하는 방법으로 틀린 것은?",
        "options": [
            "영구자석 간의 흡인력에 의한 자기 부상 방식",
            "고온 초전도체와 영구자석의 조합에 의한 자기 부상 방식",
            "자석과 전기 코일 간의 유도전류를 이용하는 유도식 자기 부상 방식",
            "전자석의 흡인력을 제어하여 일정한 간격을 유지하는 흡인식 자기 부상 방식"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "영구자석이 아닌 전자석에 의한 흡인력에 의해 지상에서 1[cm] 정도 레일면으로 끌어당기는 부상방식"
    },
    {
        "id": 144,
        "part": 5,
        "partName": "전기철도",
        "type": "B",
        "question": "가선 전압에 의하여 정해지고 대지와 통신선 사이에 유도되는 것은?",
        "options": [
            "전자 유도",
            "정전 유도",
            "자기 유도",
            "전해 유도"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "정전 유도 : 가선 전압에 의해 통신선에 유도되는 현상"
    },
    {
        "id": 145,
        "part": 5,
        "partName": "전기철도",
        "type": "B",
        "question": "열차가 정지신호를 무시하고 운행할 경우 또는 정해진 신호에 따른 속도 이상으로 운행할 경우 설정시간 이내에 제동 또는 지정 속도로 감속 조작을 하지 않으면 자동으로 열차를 안전하게 정지시키는 장치는?",
        "options": [
            "ATC",
            "ATS",
            "ATO",
            "DCTC"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "자동열차 정지장치 (Automatic Train Stop)"
    },
    {
        "id": 146,
        "part": 6,
        "partName": "전기화학",
        "type": "A",
        "question": "전기 화학 반응을 실제로 일으키기 위해, 필요한 전극 전위에서 그 반응의 평형 전위를 뺀 값을 과전압이라고 한다. 과전압의 원인으로 틀린 것은?",
        "options": [
            "농도 분극",
            "화학 분극",
            "전류 분극",
            "활성화 분극"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "전기 화학 반응의 과전압의 원인 : 농도, 화학, 활성화 -> 농활 화요일"
    },
    {
        "id": 147,
        "part": 6,
        "partName": "전기화학",
        "type": "C",
        "question": "전해질용액의 도전율에 가장 큰 영향을 미치는 것은?",
        "options": [
            "전해질용액의 양",
            "전해질용액의 농도",
            "전해질용액의 빛깔",
            "전해질용액의 유효단면적"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "도전율에 가장 큰 영향 -> 농도"
    },
    {
        "id": 148,
        "part": 6,
        "partName": "전기화학",
        "type": "C",
        "question": "전기 화학용 직류 전원장치에 요구되는 사항이 아닌 것은?",
        "options": [
            "저전압 대전류일 것",
            "전압 조정이 가능할 것",
            "일정한 전류로서 연속 운전에 견딜 것",
            "저전류에 의한 저항손의 감소에 대응할 것"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "저항손 증가에 대응"
    },
    {
        "id": 149,
        "part": 6,
        "partName": "전기화학",
        "type": "C",
        "question": "구리의 원자량은 63.54이고 원자가가 2일 때 전기화학당량은?",
        "options": [
            "0.3292 [mg/C]",
            "0.03292 [mg/C]",
            "0.3292 [g/C]",
            "0.03292 [g/C]"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "차례대로 나눠주자. 63.54 / 2 / 96494 = 3.292*10^-4 [g/C]"
    },
    {
        "id": 150,
        "part": 6,
        "partName": "전기화학",
        "type": "C",
        "question": "공해 방지의 측면에서 대기 중에 부유하는 분진 입자를 포집하는 정화 장치로 화력 발전소, 시멘트 공장, 용광로, 쓰레기 소각장 등에 널리 이용되는 것은?",
        "options": [
            "정전기",
            "정전 도장",
            "전해연마",
            "전기 집진기"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "분진 포집 -> 진집"
    },
    {
        "id": 151,
        "part": 6,
        "partName": "전기화학",
        "type": "C",
        "question": "전기 분해에 의해 일정한 전하량을 통과했을 때 얻어지는 물질의 양은 어느 것에 비례하는가?",
        "options": [
            "화학당량",
            "원자가",
            "전류",
            "전압"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "물질의 양 W=KQ로 전하량이 일정할 때 물질의 양은 화학당량에 비례한다."
    },
    {
        "id": 152,
        "part": 6,
        "partName": "전기화학",
        "type": "A",
        "question": "물을 전기 분해하면 음극에서 발생하는 기체는?",
        "options": [
            "산소",
            "질소",
            "수소",
            "이산화탄소"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "물의 전기 분해 -> 양극 : 산소 / 음극 : 수소"
    },
    {
        "id": 153,
        "part": 6,
        "partName": "전기화학",
        "type": "C",
        "question": "식염 전해에 대한 설명으로 틀린 것은?",
        "options": [
            "제조법에는 격막법와 수은법이 있다.",
            "염소, 수소와 수산화나트륨의 제조 방법에 사용된다.",
            "수은법에서 전해조의 애노드는 흑연, 캐소드는 수은을 사용한다.",
            "격막법은 수은법보다 전류밀도가 크고 생산성이 높다."
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "격막법은 전류밀도, 생산성 '낮음'"
    },
    {
        "id": 154,
        "part": 6,
        "partName": "전기화학",
        "type": "C",
        "question": "금속의 전해정제로 틀린 것은?",
        "options": [
            "전력 소비가 적다.",
            "순도가 높은 금속이 석출된다.",
            "금속을 음극으로 하고 순금속을 양극으로 한다.",
            "동(Cu)의 전해정제는 $H_2SO_4$와 $CuSO_4$의 혼합용액을 전해액으로 사용한다."
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "음극에 순수 금속, 양극에는 불순물을 쓴다."
    },
    {
        "id": 155,
        "part": 6,
        "partName": "전기화학",
        "type": "C",
        "question": "다음 설명 중 틀린 것은?",
        "options": [
            "방전가공을 이용하여 원형을 복제하는 것을 전주라 하며, 원형의 요철을 정밀하게 복제하는 곳에 사용된다.",
            "전기도금은 도금하고자 하는 금속을 양극, 도금되는 금속을 음극으로 하고 음극으로 금속을 석출시키는 것이다.",
            "전해연마는 연마하고자 하는 금속을 양극으로 하여 전기 분해하는 것으로 금속 표면의 요철을 평활화한다.",
            "전열 화학의 장점은 높은 온도 제어가 가능하고, 열효율이 높으며 광범위한 온도를 얻을 수 있다."
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "방전 가공이 아닌 '전기분해'를 이용하여 원형을 복제하는 것을 전주라고 한다."
    },
    {
        "id": 156,
        "part": 6,
        "partName": "전기화학",
        "type": "B",
        "question": "금속의 화학적 성질로 틀린 것은?",
        "options": [
            "산화되기 쉽다.",
            "전자를 잃기 쉽고, 양이온이 되기 쉽다.",
            "이온화 경향이 클수록 환원성이 강하다.",
            "산과 반응하고, 금속의 산화물은 염기성이다."
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "이온화 경향이 클수록 환원성이 아닌 '산화성'이 강하다."
    },
    {
        "id": 157,
        "part": 6,
        "partName": "전기화학",
        "type": "B",
        "question": "다음 중 금속의 이온화 경향이 가장 큰 것은?",
        "options": [
            "Zn",
            "Fe",
            "K",
            "Au"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "금속의 이온화 경향성이 큰 것 '리칼칼나마알....은백금'"
    },
    {
        "id": 158,
        "part": 6,
        "partName": "전기화학",
        "type": "A",
        "question": "전지의 자기 방전이 일어나는 국부 작요의 방지 대책이 아닌 것은?",
        "options": [
            "순환전류를 발생시킨다.",
            "고순도의 전극 재료를 사용한다.",
            "전극의 수은 도금(아말감)을 한다.",
            "전해액에 불순물 혼입을 억제시킨다."
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "국부 작용 방지 대책 : 순환전류와 무관"
    },
    {
        "id": 159,
        "part": 6,
        "partName": "전기화학",
        "type": "B",
        "question": "일정한 전압을 가진 전지에 부하를 걸면 단자 전압이 저하되는 원인은?",
        "options": [
            "주위 온도",
            "분극 작용",
            "이온화 경향",
            "전해액의 변색"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "분극 작용 : 전해액의 농도의 감소 등에 따라 반대 방향의 기전력이 생기는 현상으로 부하를 걸면 단자전압이 감소한다."
    },
    {
        "id": 160,
        "part": 6,
        "partName": "전기화학",
        "type": "A",
        "question": "다음 중 1차 전지가 아닌 것은?",
        "options": [
            "망간건전지",
            "공기전지",
            "알칼리 축전지",
            "수은전지"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "알칼리 '축'전지는 2차 전지이다. 공기는 1차 전지"
    },
    {
        "id": 161,
        "part": 6,
        "partName": "전기화학",
        "type": "B",
        "question": "다음 1차 전지 중 휴대용 라디오, 손전등, 완구, 시계 등에 매우 광범위하게 이용되고 있는 건전지는?",
        "options": [
            "망간건전지",
            "공기건전지",
            "수은건전지",
            "리튬건전지"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "망간건전지는 휴대용 라디오, 손전등, 완구, 시계 등 ㅈ만한 거에 광범위하게 사용"
    },
    {
        "id": 162,
        "part": 6,
        "partName": "전기화학",
        "type": "A",
        "question": "자체 방전이 적고 오래 저장할 숭 있으며 사용 중에 전압 변동률이 비교적 적은 것은?",
        "options": [
            "공기건전지",
            "보통건전지",
            "내한건전지",
            "적층건전지"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "공기건전지는 자체 방전이 적어 오랜 시간 저장 가능하다. -> 전압 변동률도 비교적 낮음"
    },
    {
        "id": 163,
        "part": 6,
        "partName": "전기화학",
        "type": "A",
        "question": "공기전지의 특징이 아닌 것은?",
        "options": [
            "방전 시 전압 변동률이 적다",
            "온도 차에 의한 전압 변동이 적다",
            "사용 중의 자기 방전이 크고 오랫동안 보존 할 수 없다.",
            "내열, 내한, 내습성을 가지고 있다."
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "공기전지 : 자기 방전 적고 오랜 보존 가능"
    },
    {
        "id": 164,
        "part": 6,
        "partName": "전기화학",
        "type": "A",
        "question": "공기 중의 산소를 전지의 감극제로 사용하는 건전지는?",
        "options": [
            "표준전지",
            "일반건전지",
            "내한건전지",
            "공기습전지"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "공기전지의 감극제 : 공기 중의 산소를 감극제로 사용한다."
    },
    {
        "id": 165,
        "part": 6,
        "partName": "전기화학",
        "type": "C",
        "question": "수은전지의 특징이 아닌 것은?",
        "options": [
            "소형이고 수명이 길다",
            "방전전압의 변화가 적다.",
            "전해액은 염화암모늄 용액을 사용한다.",
            "양극에 산화수은, 음극에 아연을 사용한다,"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "전해액은 염화암모늄이 아닌 '수산화칼륨'을 이용한다. 염화암모늄은 건전지, 금속공예 등에 사용된다."
    },
    {
        "id": 166,
        "part": 6,
        "partName": "전기화학",
        "type": "B",
        "question": "리튬 1차 전지의 부극 재료로 사용되는 것은?",
        "options": [
            "리튬염",
            "금속리튬",
            "불화카본",
            "이산화망간"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "리튬 1차 전지: 자기방전 정도는 낮다, 부극 재료로 금속 리튬이 사용된다. 공기전지, 망간건전지, 수은전지의 음극은 모두 아연(Zn)이 사용된다."
    },
    {
        "id": 167,
        "part": 6,
        "partName": "전기화학",
        "type": "B",
        "question": "다음 1차 전지 중 음극(부극)물질이 다른 것은?",
        "options": [
            "공기전지",
            "망간건전지",
            "수은전지",
            "리튬전지"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "리튬 1차 전지: 자기방전 정도는 낮다, 부극 재료로 금속 리튬이 사용된다. 공기전지, 망간건전지, 수은전지의 음극은 모두 아연(Zn)이 사용된다."
    },
    {
        "id": 168,
        "part": 6,
        "partName": "전기화학",
        "type": "B",
        "question": "리튬전지의 특징이 아닌 것은?",
        "options": [
            "자기 방전이 크다",
            "에너지 밀도가 높다",
            "기전력이 약 3[V] 정도로 높다.",
            "동작 온도 범위가 넓고 장기간 이용이 가능하다."
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "리튬 1차 전지: 자기방전 정도는 낮다, 부극 재료로 금속 리튬이 사용된다. 공기전지, 망간건전지, 수은전지의 음극은 모두 아연(Zn)이 사용된다."
    },
    {
        "id": 169,
        "part": 6,
        "partName": "전기화학",
        "type": "B",
        "question": "640[Ah]의 축전지의 8[A]에서 몇 시간 사용할 수 있는가?",
        "options": [
            "10",
            "35",
            "50",
            "80"
        ],
        "answer": 3,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "축전지 방전시간 = 축전지 용량 / 방전전류 = 640/8 =80[h]"
    },
    {
        "id": 170,
        "part": 6,
        "partName": "전기화학",
        "type": "C",
        "question": "다음 전지 중 물리 전지에 속하는 것은?",
        "options": [
            "열전지",
            "연료전지",
            "수은 전지",
            "산화은전지"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "물리전지 : 열, 태양, 원자력"
    },
    {
        "id": 171,
        "part": 6,
        "partName": "전기화학",
        "type": "C",
        "question": "부식의 문제가 없고 전류밀도가 높아 자동차나 군사용의 특수목적으로 사용되는 연료전지는?",
        "options": [
            "인산형(PAFC) 연료전지",
            "고체전해질형(SOFC) 연료전지",
            "용융탄산염형(MCFC) 연료전지",
            "고체고분자형(SPEFC) 연료전지"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "고체고분자형 연료전지 : 부식의 문제가 없음. -> 부식, 군대, 자동차 : 고체고분자"
    },
    {
        "id": 172,
        "part": 6,
        "partName": "전기화학",
        "type": "C",
        "question": "연료는 수소와 메탄올이 사용되며 전해액은 KOH가 사용되는 연료전지는?",
        "options": [
            "산성 전해액 연료전지",
            "고체 전해액 연료전지",
            "알칼리 전해액 연료전지",
            "용융염 전해액 연료전지"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "알칼리 전해액 연료전지 : 이건 걍 암기해야할듯 C 유형이라 시간 되면 외우기"
    },
    {
        "id": 173,
        "part": 6,
        "partName": "전기화학",
        "type": "A",
        "question": "연축전지의 음극에 쓰이는 재료는?",
        "options": [
            "납",
            "카드뮴",
            "철",
            "산화니켈"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "연축전지는 음극으로 납(Pb)이 사용됨."
    },
    {
        "id": 174,
        "part": 6,
        "partName": "전기화학",
        "type": "A",
        "question": "",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": 0,
        "noShuffle": true,
        "hasImage": true,
        "explanation": "화학반응식에서 우측인 생성물에 납과 전자만 있는걸 찾자. 납축전지이니 납이 있는걸 우선으로"
    },
    {
        "id": 175,
        "part": 6,
        "partName": "전기화학",
        "type": "A",
        "question": "",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": 0,
        "noShuffle": true,
        "hasImage": true,
        "explanation": "납축전지 : 충전 시 양극"
    },
    {
        "id": 176,
        "part": 6,
        "partName": "전기화학",
        "type": "A",
        "question": "",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": 0,
        "noShuffle": true,
        "hasImage": true,
        "explanation": "좌측인 반응물에 납의 원자 개수가 1개 + 1개 총 2개인 것을 찾자"
    },
    {
        "id": 177,
        "part": 6,
        "partName": "전기화학",
        "type": "B",
        "question": "납축전지가 충분히 충전되었을 때 양극판은 무슨 색인가?",
        "options": [
            "황색",
            "청색",
            "적갈색",
            "회백색"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "충전 - 적갈색, 방전 - 회백색 -> 충이 적은 방어회"
    },
    {
        "id": 178,
        "part": 6,
        "partName": "전기화학",
        "type": "B",
        "question": "고율 방전형 연축 전지로 단시간 대전류 부하(디젤, 가스터빈, 엔진 시공, 엘리베이터 비상 조작)용은?",
        "options": [
            "PS형",
            "HS형",
            "AM형",
            "AL형"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "연축전지의 형식 : HS형, 급방전형 (단시간 대전류 부하) -> 비상 조작이니 사고 발생 -> 헉시발! HS"
    },
    {
        "id": 179,
        "part": 6,
        "partName": "전기화학",
        "type": "A",
        "question": "알칼리 축전지에 대한 설명으로 옳은 것은?",
        "options": [
            "음극에 Ni 산화물, Ag 산화물을 사용한다.",
            "전해액은 묽은 황산 용액을 사용한다.",
            "진동에 약하고 급속 충방전이 어렵다.",
            "전해액의 농도 변화가 거의 없다."
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "알칼리 축전지의 특징 : 전해액 농도 변화가 거의 없음, 고율방전 특성 우수하며 연축전지에 비하여 소형, 급속 충방전 용이"
    },
    {
        "id": 180,
        "part": 6,
        "partName": "전기화학",
        "type": "A",
        "question": "알칼리 축전지에 대한 설명으로 옳은 것은?",
        "options": [
            "음극에 Ni 산화물, 양극에 Ag 산화물을 사용한다.",
            "전해액은 묽은 황산 용액을 사용한다.",
            "공칭전압은 셀당 1.2[V]이다.",
            "진동에 약하고 급속 충방전이 어렵다."
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "알칼리 축전지 : 공칭전압 1.2V , 공칭용량 5Ah "
    },
    {
        "id": 181,
        "part": 6,
        "partName": "전기화학",
        "type": "A",
        "question": "알칼리 축전지의 특징에 대한 설명으로 틀린 것은?",
        "options": [
            "전지의 수명이 납축전지보다 길다.",
            "진동, 충격에 강하다.",
            "급격한 충방전 및 높은 방전율을 견디기 어렵다.",
            "소형 경량이며 유지관리가 편하다."
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "알칼리 축전지의 특징 : 전해액 농도 변화가 거의 없음, 고율방전 특성 우수하며 연축전지에 비하여 소형, 급속 충방전 용이"
    },
    {
        "id": 182,
        "part": 6,
        "partName": "전기화학",
        "type": "A",
        "question": "알칼리 축전지에서 소결식에 해당하는 초급방전형은?",
        "options": [
            "AM형",
            "AMH형",
            "AL형",
            "AH-S형"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "소결식은 전부 초급(AH로 시작). 포켓은 AH-P가 해당함. "
    },
    {
        "id": 183,
        "part": 6,
        "partName": "전기화학",
        "type": "B",
        "question": "알칼리 축전지의 양극으로 사용되는 것은?",
        "options": [
            "이산화납",
            "아연",
            "구리",
            "수산화니켈"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "알칼리축전지 양극 -> 알칼리성인 수산화니켈을 선택하자"
    },
    {
        "id": 184,
        "part": 6,
        "partName": "전기화학",
        "type": "B",
        "question": "",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": 1,
        "noShuffle": true,
        "hasImage": true,
        "explanation": "생성물측 화합물 2개, 수산화물인 OH가 2개 씩 2개인걸 택"
    },
    {
        "id": 185,
        "part": 6,
        "partName": "전기화학",
        "type": "C",
        "question": "알칼리 축전지의 특성 및 성능을 바르게 나타낸 것은?",
        "options": [
            "고율방전 특성이 우수하며 연축전지에 비하여 소형이다.",
            "고율방전 특성은 보통이나 연축전지에 비하여 소형이다.",
            "고율방전 특성이 우수하며 연축전지보다 대형인 것이 장점이다.",
            "고율방전 특성은 보통이나 연축전지보다 대형인 것이 장점이다."
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "알칼리 축전지 : 고율방전 우수, 소형"
    },
    {
        "id": 186,
        "part": 6,
        "partName": "전기화학",
        "type": "A",
        "question": "축전지의 충전 방식 중 전지의 자기 방전을 보충함과 동시에, 상용 부하에 대한 전력공급은 충전기가 부담하되 비상시 일시적인 대부하 전류는 축전지가 부담하도록 하는 충전 방식은?",
        "options": [
            "보통 충전",
            "급속 충전",
            "균등 충전",
            "부동 충전"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "부동 충전. 해설 = 지문"
    },
    {
        "id": 187,
        "part": 6,
        "partName": "전기화학",
        "type": "A",
        "question": "자기 방전량만을 항시 충전하는 부동 충전 방식의 일종인 충전 방식은?",
        "options": [
            "세류 충전",
            "보통 충전",
            "급속 충전",
            "균등 충전"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "세류 충전 : 부동 충전의 일종으로 축전지의 자기 방전량만을 계속해서 충전"
    },
    {
        "id": 188,
        "part": 6,
        "partName": "전기화학",
        "type": "A",
        "question": "UPS(Uninterruptes Power Supply)의 특징으로 옳지 않은 것은?",
        "options": [
            "무정전 전원공급 장치이다.",
            "내부에 배터리가 내장되어 있다.",
            "평상시에는 배터리에 상용전원을 공급하지 않는다",
            "구성요소로 정류기와 인버터가 있다."
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "평상시 배터리에 상용전원을 공급한다. -> PS 평상시 전원 POWER 공급"
    },
    {
        "id": 189,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "A",
        "question": "다이오드 클램퍼의 용도는?",
        "options": [
            "전압 증폭",
            "전류증폭",
            "전압제한",
            "전압 레벨 이동"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "다이오드 클램프는 입력파형의 형태를 변화시키지 않고 출력 신호를 다른 레벨에 이동하여 고정시키는 회로"
    },
    {
        "id": 190,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "A",
        "question": "동일 정격의 다이오드를 병렬로 사용하면?",
        "options": [
            "역전압을 크게 할 수 있다",
            "필터 회로가 필요 없게 된다.",
            "전원 변압기를 사용할 수 있다.",
            "순방향 전류를 증가시킬 수 있다."
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "병렬 : 순방향 전류 증가 <-> 직렬 : 순방향 전압 증가"
    },
    {
        "id": 191,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "C",
        "question": "PN 접합 다이오드의 열평형 상태에서 전기장이 가장 강한 곳은?",
        "options": [
            "공핍층",
            "둘 다 동일하다.",
            "P층 중성 영역",
            "N형 중성 영역"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "공핍층 : 반도체 내부에서 캐리어가 결핍되어 있는 매우 좁은 층. 전기장이 가장 강함"
    },
    {
        "id": 192,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "A",
        "question": "",
        "options": [
            "SSS",
            "PUT",
            "SCR",
            "DIAC"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": true,
        "explanation": "SCR : 애노드(A), 캐소드(K), 게이트(G)를 갖는 역저지 3단자 사이리스터이다."
    },
    {
        "id": 193,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "A",
        "question": "",
        "options": [
            "SSS",
            "SCS",
            "SCR",
            "DIAC"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": true,
        "explanation": "SCR : 애노드(A), 캐소드(K), 게이트(G)를 갖는 역저지 3단자 사이리스터이다."
    },
    {
        "id": 194,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "A",
        "question": "SCR에 대한 설명으로 옳은 것은?",
        "options": [
            "제어 기능을 갖는 쌍방향성의 3단자 소자이다.",
            "정류 기능을 갖는 단일 방향성의 3단자 소자이다.",
            "증폭 기능을 갖는 단일 방향성의 3단자 소자이다.",
            "스위칭 기능을 갖는 쌍뱡향성의 3단자 소자이다"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "SCR : 정류기능을 갖는 단일 방향성 3단자 소자"
    },
    {
        "id": 195,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "A",
        "question": "SCR 사이리스터에 대한 설명으로 틀린 것은?",
        "options": [
            "게이트 전류에 의하여 턴 온 시킬 수 있다.",
            "게이트 전류에 의하여 턴 오프 시킬 수 없다.",
            "오프 상태에서는 순방향전압과 역방향전압 중 역방향 전압에 대해서만 차단능력을 가진다.",
            "턴 오프 된 후 다시 게이트 전류에 턴 온 시킬 수 있는 상태로 회복할 때 까지 일정한 시간이 필요하다."
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "오프 상태가 아닌 온 상태에서 순,역 중 역에 대해서만 차단 능력을 가짐. 턴 오프는 애노드의 극성을 0 또는 부(-)로 하거나 전원 전압의 극성을 반대로 한다."
    },
    {
        "id": 196,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "A",
        "question": "대전력 정류용으로 사용되는 SCR의 특징이 아닌 것은?",
        "options": [
            "열용량이 커서 고온에 강하다",
            "역률각 이하에서는 제어가 되지 않는다",
            "아크가 생기지 않으므로 열의 발생이 적다.",
            "전류가 흐르고 있을 때 양극의 전압강하가 작다."
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "SCR은 열에 약한 ㅈ밥이다. 열용량이 적어 고온에 약함"
    },
    {
        "id": 197,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "A",
        "question": "SCR에 대한 설명 중 틀린 것은?",
        "options": [
            "위상제어의 최대 조절 범위는 0~90도 이다",
            "3개 접합면을 가진 4층 다이오드 형태로 되어있다.",
            "게이트 단자에 펄스 신호가 입력되는 순간부터 도통된다.",
            "제어각이 작을수록 부하에 흐르는 전류 도통각이 커진다."
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "위상각 조정 범위 0~180도"
    },
    {
        "id": 198,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "A",
        "question": "SCR의 턴온 시 20[A]의 전류가 하른다. 게이트 전류를 반으로 줄이면 SCR의 전류 [A]는?",
        "options": [
            "5",
            "10",
            "20",
            "40"
        ],
        "answer": 2,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "게이트 전류의 크기와 관계 없이 SCR이 On 상태가 되면 SCR전류는 변화하지 않는다. "
    },
    {
        "id": 199,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "A",
        "question": "사이리스터의 응용에 대한 설명으로 잘못된 것은?",
        "options": [
            "위상제어에 의해 교류전력 제어가 가능하다.",
            "교류전원에서 가변주파수의 교류변환이 가능하다.",
            "직류전력의 증폭인 컨버터가 가능하다.",
            "위상제어에 의해 제어 정류, 즉 교류를 가변 직류로 변환할 수 있다."
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "직류전력의 증폭인 컨버터롤 사용하지 않는다."
    },
    {
        "id": 200,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "A",
        "question": "사이리스터의 게이트 트리거 회로로 적합하지 않은 것은?",
        "options": [
            "UJT 발진회로",
            "DIAC에 의한 트리거 회로",
            "PUT 발진회로",
            "SCR 발진회로"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "SCR은 트리거 회로가 아닌 트리거 '대상'이 된다."
    },
    {
        "id": 201,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "B",
        "question": "반도체 사이리스터에 의한 속도제어 중 주파수 제어는?",
        "options": [
            "계자 제어",
            "인버터 제어",
            "컨버터 제어",
            "초퍼제어"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "인버터 제어 : 반도체 사이리스터에 의한 속도제어 중 주파수 제어"
    },
    {
        "id": 202,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "A",
        "question": "자기 소호 기능이 가장 좋은 소자는?",
        "options": [
            "GTO",
            "SCR",
            "DIAC",
            "TRIAC"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "자기 소호 능력 GOAT -> GTO"
    },
    {
        "id": 203,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "A",
        "question": "역병렬로 된 2개의 SCR과 유사한 양 방향성 3단자 사이리스터로서 AC 전력의 제어에 사용하는 것은?",
        "options": [
            "SCS",
            "GTO",
            "TRIAC",
            "LASCR"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "TRIAC : 역병렬로 된 2개의 SCR과 유사한 양 방향성 3단자 사이리스터로서 AC 전력의 제어에 사용하는 것"
    },
    {
        "id": 204,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "A",
        "question": "2개의 SCR을 역병렬로 접속한 것과 같은 특성의 소자는?",
        "options": [
            "GTO",
            "TRIAC",
            "역전용 사이리스터",
            "광사이리스터"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "TRIAC : 역병렬로 된 2개의 SCR과 유사한 양 방향성 3단자 사이리스터로서 AC 전력의 제어에 사용하는 것"
    },
    {
        "id": 205,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "C",
        "question": "MOSFET, BJT, GTO 이점을 조합한 전력용 반도체 소자로서 대전력의 고속 스위칭 가능한 소자는?",
        "options": [
            "게이트 절연 양극성 트랜지스터",
            "MOS제어 사이리스터",
            "금속 산화물 반도체 전계효과 트랜지스터",
            "모놀리틱 달링톤"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "게이트 절연 양극성 트랜지스터(IGBT) : MOSFET, BJT, GTO 이점을 조합한 전력용 반도체 소자로서 대전력의 고속 스위칭 가능한 소자. 짬뽕해둔게 IGBT임"
    },
    {
        "id": 206,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "B",
        "question": "전력용 반도체 소자 중 IGBT의 특성이 아닌 것은?",
        "options": [
            "게이트 구동 전력이 매우 높다",
            "게이트와 에미터 간 입력 임피던스가 매우 높아 BJT보다 구동하기 쉽다",
            "소스에 대한 게이트의 전압으로 도통과 차단을 제어한다.",
            "스위칭 속도는 FET와 트랜지스터의 중간 정도로 빠른 편에 속한다."
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "IGBT는 구동전력이 뒤지게 낮다"
    },
    {
        "id": 207,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "B",
        "question": "IGBT의 설명으로 틀린 것은?",
        "options": [
            "GTO 사이리스터처럼 역방향 전압 저지 특성을 갖는다.",
            "오프 상태에서 SCR 사이리스터처럼 양방향 전압 저지 능력을 갖는다.",
            "게이트와 에미터 간 입력 임피던스가 매우 높아 BJT보다 구동하기 쉽다.",
            "BJT처럼 온드롭이 전류에 관계없이 낮고 거의 일정하여 MOSFET보다 큰 전류를 흘릴 수 있다."
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "GTO 사이리스터 처럼 역방향 전압저지 특성을 갖는다."
    },
    {
        "id": 208,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "A",
        "question": "다음 중 쌍방향 2단자 사이리스터는?",
        "options": [
            "SCR",
            "TRIAC",
            "SSS",
            "SCS"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "쌍방향 2단자 소자 -> SSS"
    },
    {
        "id": 209,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "A",
        "question": "반도체 소자 중 SSS의 특징으로 옳은 것은?",
        "options": [
            "2극 양방향 소자이다",
            "3극 양방향 소자이다",
            "2극 단방향 소자이다",
            "3극 단방향 소자이다"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "쌍방향 2단자 소자 -> SSS"
    },
    {
        "id": 210,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "A",
        "question": "바리스터(Varistor)의 용도는?",
        "options": [
            "전압 증폭",
            "진동 방지",
            "과도 전압에 대한 회로 보호",
            "전류 특성을 갖는 4단자 반도체 장치에 사용"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "바리스터 : 전압에 따라 저항값이 변하는 비선형 소자. 과도전압에 대한 회로 보호용"
    },
    {
        "id": 211,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "A",
        "question": "FET에 핀치 오프 전압이란?",
        "options": [
            "채널 폭이 막힌 때의 게이트 역방향 전압",
            "FET에서 애벌런치 전압",
            "드레인과 소스 사이의 최대 전압",
            "채널 폭이 최대로 되는 게이트의 역방향전압"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "채널 폭이 막힌 때의 게이트 역방향 전압"
    },
    {
        "id": 212,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "A",
        "question": "반도체에 빛이 가해지면 전기저항이 변화되는 현상은?",
        "options": [
            "홀 효과",
            "광전 효과",
            "제백 효과",
            "열진동 효과"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "광전효과 : 반도체에 빛이 가해지면 전기 저항이 변화되는 현상"
    },
    {
        "id": 213,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "B",
        "question": "다음 설명 중 옳은 것은?",
        "options": [
            "DIAC은 NPN 3층으로 되어있고 쌍방향으로 대칭적인 부성저항을 나타낸다.",
            "SCR은 PNPN 2층 구조로 되어있다.",
            "트라이액은 2극 쌍방향 사이리스터로 되어있다.",
            "SSS는 3극 쌍방향 사이리스터로 되어있다."
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "DIAC은 NPN 3층구조, 쌍방향 2단자"
    },
    {
        "id": 214,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "C",
        "question": "전압을 일정하게 유지하기 위한 전압 제어소자로 널리 이용되는 다이오드는? ",
        "options": [
            "터널 다이오드",
            "제너 다이오드",
            "바랙터 다이오드",
            "쇼트키 다이오드"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "제너 다이오드 : 전압을 일정하게 유지하기 위한 전압 제어소자(정전압 다이오드)"
    },
    {
        "id": 215,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
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
        "explanation": "동작 설명 : 충전전류에 의해 C는 충전됨. 이로 인해 펄스의 주기가 짧아짐. 이와 관련된 소자는 $R_E$ 이며 전술한 내용은 $R_E$의 역할임."
    },
    {
        "id": 216,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "B",
        "question": "n형 반도체에 대한 설명으로 옳은 것은?",
        "options": [
            "순수 실리콘 내에 정공의 수를 늘리기 위해 As, P, Sb과 같은 불순물 원자를 첨가한 것",
            "순수 실리콘 내에 정공의 수를 늘리기 위해 As, B, Ga과 같은 불순물 원자를 첨가한 것",
            "순수 실리콘 내에 전자의 수를 늘리기 위해 As, P, Sb과 같은 불순물 원자를 첨가한 것",
            "순수 실리콘 내에 전자의 수를 늘리기 위해 As, B, Ga과 같은 불순물 원자를 첨가한 것"
        ],
        "answer": 2,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "n형 반도체 = 불순물(외인성) 반도체 : 전자, As, P, Sb"
    },
    {
        "id": 217,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "C",
        "question": "광전 소자의 구조와 동작에 대한 설명 중 틀린 것은?",
        "options": [
            "포토트랜지스터는 모든 빛에 감응하지 않으며, 일정 파장 범위 내의 빛에 감응한다.",
            "포토커플러는 전기적으로 절연되어 있지만 광학적으로 결합되어 있는 발광부와 수광부를 갖추고 있다.",
            "포토사이리스터는 빛에 의해 개방된 두 단자 사이를 도통시킬 수 있어 전류의 ON-OFF제어에 쓰인다.",
            "포토 다이오드는 일반적으로 포토트랜지스터에 비해 반응속도가 느리다."
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "포토 다이오드는 일반적으로 빠르다!"
    },
    {
        "id": 218,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "C",
        "question": "트랜지스터의 안정도가 제일 좋은 바이어스 법은?",
        "options": [
            "고정 바이어스",
            "조합 바이어스",
            "전압궤환 바이어스",
            "전류궤환 바이어스"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "조합 바이어스 : 트랜지스터의 안정도가장 좋압~"
    },
    {
        "id": 219,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "C",
        "question": "MOSFET에 대한 설명으로 틀린 것은?",
        "options": [
            "MOSFET의 동작상태는 게이트 전압에 따라 축적상태, 공핍상태, 반전상태 세가지로 분류한다.",
            "MOSFET은 게이트 부분이 금속, 산화막 반도체순으로 적층되어 있는 수직구조이다.",
            "MOSFET은 채널 형성 유무에 따라 ON/OFF 상태가 결정된다.",
            "MOSFET은 포화영역에서 소스 전압과 관계없이 일정한 전류가 흐른다."
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "포화영역에서 전류가 일정한 것이 아니라, 드레인 전압 ($V_DS$)에 의해 영향을 받을 수 있다."
    },
    {
        "id": 220,
        "part": 7,
        "partName": "자동제어 및 반도체 응용",
        "type": "B",
        "question": "정류 방식 중 정류 효율이 가장 높은 것은? (단, 저항 부하를 사용한 경우이다.)",
        "options": [
            "단상 반파 방식",
            "단상 전파 방식",
            "3상 반파 방식",
            "3상 전파 방식"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "정류 효율[%] : 단상 반파(40.6) 단상 전파(81.2) 3상 반파(96.5) 3상 전파(99.8)"
    },
    {
        "id": 221,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "변압기유로 쓰이는 절연유에 요구되는 특성이 아닌 것은?",
        "options": [
            "점도가 클 것",
            "절연 내력이 클 것",
            "인화점이 높을 것",
            "비열이 커서 냉각 효과가 클 것"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "점도가 낮을 것"
    },
    {
        "id": 222,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "변압기 철심으로 사용하는 전력용 규소 강판의 두께[mm]는?",
        "options": [
            "0.1",
            "0.35",
            "2",
            "3"
        ],
        "answer": 1,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "변압기 철심으로는 0.35~0.5[mm] 의 규소 강판을 사용한다."
    },
    {
        "id": 223,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "자심 재료의 구비 조건으로 틀린 것은?",
        "options": [
            "저항률이 클 것",
            "투자율이 작을 것",
            "히스테리시스 면적이 작을 것",
            "잔류자기가 크고 보자력이 작을 것"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": ""
    },
    {
        "id": 224,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "변압기의 부속품이 아닌 것은?",
        "options": [
            "철심",
            "권선",
            "부싱",
            "정류자"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "정류자는 직류기, 교류정류자 전동기 등에서 일정한 방향으로 회전하도록 전류 방향을 주기적으로 바꿔 전기자에 공급하는 장치"
    },
    {
        "id": 225,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "단상변압기의 병렬운전 조건으로 해당하지 않는 것은?",
        "options": [
            "극성이 같을 것",
            "권수비가 같을 것",
            "상회전 방향 및 위상 변위가 같을 것",
            "%임피던스가 같을 것"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "상회전 방향 및 위상 변위가 같을 것은 3상 변압기의 병렬 운전 조건이다. 극정임내 + 권"
    },
    {
        "id": 226,
        "part": 8,
        "partName": "공사재료",
        "type": "C",
        "question": "변압기 내의 절연유는 절연 이외의 냉각을 목적으로 순환되며, 송유식에서는 절연유와 도체 절연체의 마찰로 인해 대전되는 유동 대전현상이 문제가 된다. 이 현상을 해소하면서 냉각 성능도 뛰어난 절연유는?",
        "options": [
            "실리콘유",
            "PFC(Perfluorocarbon)",
            "광유",
            "혼합유"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "퍼플루오로카본(PFC) -> 대전현상 해소 + 냉각 성능 -> 혼합유 X . PFC로 암기"
    },
    {
        "id": 227,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "전선 재료의 구비 조건 중 틀린 것은?",
        "options": [
            "접속이 쉬울 것",
            "도전율이 적을 것",
            "가요성이 풍부할 것",
            "내구성이 크고 비중이 작을 것"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "R 에서 비저항률 ρ의 역수 = 도전율 σ. 도전율이 작으면  -> 비저항 커짐 -> 저항 R 증가로 인한 손실 증가 즉, 도전율은 반대로 커야한다."
    },
    {
        "id": 228,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "도전재료로서 요구되는 조건이 틀린 것은?",
        "options": [
            "전기저항이 클 것",
            "내식성 등이 우수할 것",
            "접촉과 연결이 비교적 쉬울 것",
            "자원이 풍부하여 얻기 쉽고 가격이 저렴할 것"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "R 에서 비저항률 ρ의 역수 = 도전율 σ. 도전율이 작으면  -> 비저항 커짐 -> 저항 R 증가로 인한 손실 증가 즉, 도전율은 반대로 커야한다."
    },
    {
        "id": 229,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "전선 재료(도전재료)로서 구비하여야 할 조건 중 틀린 것은?",
        "options": [
            "도전율이 클 것",
            "접속이 쉬울 것",
            "인장 강도가 비교적 작을 것",
            "내식성이 클 것"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "전선 재료로서 구비할 조건 : 인장 강도가 클 것"
    },
    {
        "id": 230,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "전선 재료로서 구비할 조건 중 틀린 것은?",
        "options": [
            "도전율이 클 것",
            "접속이 쉬울 것",
            "내식성이 작을 것",
            "가요성이 풍부할 것"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "전선 재료로서 구비할 조건 : 내식성이 클 것"
    },
    {
        "id": 231,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "가공전선로에 사용되는 전선의 구비 조건으로 틀린 것은?",
        "options": [
            "도전율이 높은 것",
            "내구성이 있을 것",
            "비중이 클 것",
            "기계적인 강도가 클 것"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "전선 재료로서 구비할 조건 : 비중은 작아야한다."
    },
    {
        "id": 232,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "전선의 구비 조건으로 틀린 것은?",
        "options": [
            "비중이 클 것",
            "도전율이 클 것",
            "내구성이 클 것",
            "기계적 강도가 클 것"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "전선 재료로서 구비할 조건 : 비중은 작아야한다."
    },
    {
        "id": 233,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "도체의 재료로 주로 사용되는 구리와 알루미늄의 물리적 성질을 비교한 것 중 옳은 것은?",
        "options": [
            "구리가 알루미늄보다 비중이 작다.",
            "구리가 알루미늄보다 저항률이 크다.",
            "구리가 알루미늄보다 도전율이 작다.",
            "구리와 같은 저항을 갖기 위해서는 알루미늄 전선의 지름을 구리보다 굵게 한다."
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "저항률(비저항)은 알루미늄이 구리보다 크다. 같은 저항을 갖게 하려면 알루미늄의 전선 지름을 굵게 해야 R 에서의 분모인 단면적 A가 증가하므로 저항은 줄어들어 구리와 같은 저항을 가질 수 있다. "
    },
    {
        "id": 234,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "한국전기설비규정에 따른 상별 전선의 색상으로 틀린 것은?",
        "options": [
            "L1 : 백색",
            "L2 : 검은색",
            "L3 : 회색",
            "N : 파란색"
        ],
        "answer": 0,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "L1 : 갈색 -> 갈흑회청녹노 (L상 3개, 중성선 청, 접지선 녹노)"
    },
    {
        "id": 235,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "전선의 상별(L1,L2,L3) 전선의 색상에서 L2의 색상은?",
        "options": [
            "검은색",
            "청색",
            "적갈색",
            "녹색"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "L1 : 갈색 -> 갈흑회청녹노 (L상 3개, 중성선 청, 접지선 녹노)"
    },
    {
        "id": 236,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "다음 중 절연의 종류가 아닌 것은?",
        "options": [
            "A종",
            "B종",
            "D종",
            "H종"
        ],
        "answer": 2,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "절연물의 종류 Y,A,E,B,F,H,C 종 -> 야이 YA E Bixch Fxxking Holy C(shit) + E종 120도 , H종 180도 (허용 최고 온도)"
    },
    {
        "id": 237,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "전기기기의 E종 절연물의 최고 허용온도는?",
        "options": [
            "90[°C]",
            "105[°C]",
            "120[°C]",
            "155[°C]"
        ],
        "answer": 2,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "절연물의 종류 Y,A,E,B,F,H,C 종 -> 야이 YA E Bixch Fxxking Holy C(shit) + E종 120도 , H종 180도 (허용 최고 온도)"
    },
    {
        "id": 238,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "전기기기 절연의 종류와 허용최고온도가 잘못 연결된 것은?",
        "options": [
            "A종 - 105[°C]",
            "E종 - 120[°C]",
            "B종 - 130[°C]",
            "H종 - 155[°C]"
        ],
        "answer": 3,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "절연물의 종류 Y,A,E,B,F,H,C 종 -> 야이 YA E Bixch Fxxking Holy C(shit) + E종 120도 , H종 180도 (허용 최고 온도)"
    },
    {
        "id": 239,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "전기기기 절연계급의 종류별 최고 허용온도에서 120[°C] 의 허용온도를 갖는 절연물은?",
        "options": [
            "Y종",
            "E종",
            "B종",
            "H종"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "절연물의 종류 Y,A,E,B,F,H,C 종 -> 야이 YA E Bixch Fxxking Holy C(shit) + E종 120도 , H종 180도 (허용 최고 온도)"
    },
    {
        "id": 240,
        "part": 8,
        "partName": "공사재료",
        "type": "C",
        "question": "3[MVA] 이하 H종 건식변압기에서 절연재료로 사용하지 않는 것은?",
        "options": [
            "명주",
            "마이카",
            "유리섬유",
            "석면"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "H종 건식 변압기 재료 : 마이카, 유리섬유, 석면 (석유로 만든 카이막)"
    },
    {
        "id": 241,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "절연재료의 구비조건이 아닌 것은?",
        "options": [
            "절연 저항이 클 것",
            "유전체 손실이 클 것",
            "절연 내력이 클 것",
            "기계적 강도가 클 것"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "절연재료의 구비 조건 : 유전체 손실이 적을 것"
    },
    {
        "id": 242,
        "part": 8,
        "partName": "공사재료",
        "type": "C",
        "question": "접촉자의 합금 재료에 속하지 않는 것은?",
        "options": [
            "은",
            "니켈",
            "구리",
            "텅스텐"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "보통은 접촉자의 합금재료로 텅스텐 - 은 , 텅스텐 - 구리 조합을 쓴다. 니켈 X"
    },
    {
        "id": 243,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "옥외용 비닐절연전선의 약호 명칭은?",
        "options": [
            "DV",
            "CV",
            "OW",
            "OC"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "OW : 옥외용 비닐절연전선"
    },
    {
        "id": 244,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": 1,
        "noShuffle": true,
        "hasImage": true,
        "explanation": "DV : 인입 비닐 , OW : 옥외 비닐 , NF : 450/750 유연성 단심, NV : 비닐 네온 , NR : 450/750 단심 "
    },
    {
        "id": 245,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "전선의 약호에서 CVV의 품명은?",
        "options": [
            "인입용 비닐 절연전선",
            "0.6/1 [kV] 비닐 절연 비닐 캡타이어 케이블",
            "0.6/1 [kV] 비닐 절연 비닐시스 케이블",
            "0.6/1 [kV] 비닐 절연 비닐시스 제어 케이블"
        ],
        "answer": 3,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "제어 비닐 비닐 -> Control Vinyl Vinyl = CVV"
    },
    {
        "id": 246,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "다음 중 0.6/1[kV] 가교 폴리에틸렌 절연 비닐시스 전력케이블의 기호는?",
        "options": [
            "0.6/1 [kV] CCV",
            "0.6/1 [kV] CVV",
            "0.6/1 [kV] CV",
            "0.6/1 [kV] CE"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "CV : 가교폴리에틸렌 절연 비닐 시스 케이블"
    },
    {
        "id": 247,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "케이블의 약호 중 EE의 품명은?",
        "options": [
            "미네랄 인슈레이션 케이블",
            "플리에틸렌 절연 비닐 시스케이블",
            "형광방전등용 비닐전선",
            "폴리에틸렌 절연 폴리에틸렌 시스케이블"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "MI : 미네랄 인슈레이션 케이블 , EV : 폴리에틸렌 절연 비닐 시스케이블 , FL : 형광방전등용 비닐 전선 , EE : 폴리에틸렌 절연 폴리에틸렌 시스케이블"
    },
    {
        "id": 248,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "다음 중에서 절연전선에 해당되지 않는 것은 무엇인가?",
        "options": [
            "ACSR",
            "IV",
            "DV",
            "HFIX"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "ACSR은 강심 알루미늄 연선(나전선)이다. 피복 X"
    },
    {
        "id": 249,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "전기용 알루미늄에 미량의 지르코늄(Zr)을 첨가하여 내열성을 향상시킨 내열성의 강심 알루미늄 연선은 무엇인가?",
        "options": [
            "HV",
            "ACSR",
            "CNCV",
            "TACSR"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "내열 강심알루미늄연선 -> 미량의 지르코늄 첨가"
    },
    {
        "id": 250,
        "part": 8,
        "partName": "공사재료",
        "type": "C",
        "question": "솔리드 케이블이 아닌 것은?",
        "options": [
            "H 케이블",
            "SL 케이블",
            "OF 케이블",
            "벨트 케이블"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "암기"
    },
    {
        "id": 251,
        "part": 8,
        "partName": "공사재료",
        "type": "C",
        "question": "가교 폴리에틸렌(XLPE) 절연물의 최대허용온도는?",
        "options": [
            "70",
            "90",
            "105",
            "120"
        ],
        "answer": 1,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "가교 폴리에틸렌 -> 90도"
    },
    {
        "id": 252,
        "part": 8,
        "partName": "공사재료",
        "type": "C",
        "question": "석유류 등의 위험물을 제조하거나 저장하는 장소에 저압 옥내 전기설비를 시설하고자 할 때 사용 가능한 이동 전선은? (단, 이동 전선은 접속점이 없다.)",
        "options": [
            "0.6/1 [kV] EP 고무절연 클로로프렌 캡타이어 케이블",
            "0.6/1 [kV] EP 고무절연 클로로프렌 시스 케이블",
            "0.6/1 [kV] EP 고무절연 비닐 시스 케이블",
            "0.6/1 [kV] 비닐절연 비닐 시스 케이블"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "위험물 -> 캡타이어"
    },
    {
        "id": 253,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "전선 접속 시 유의 사항이 아닌 것은?",
        "options": [
            "접속으로 인해 전기적 저항이 증가하지 않게 한다.",
            "접속으로 인한 도체 단면적을 현저히 감소시키게 한다.",
            "접속부분의 전선 강도를 20[%] 이상 감소시키지 않게 한다.",
            "접속부분은 절연전선의 절연물과 동등 이상의 절연내력이 있는 것으로 충분히 피복한다."
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "도체 단면적 감소 -> 저항 증가 -> 손실 증가 -> X"
    },
    {
        "id": 254,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "나전선 상호 간을 접속하는 경우 인장하중에 대한 내용으로 옳은 것은?",
        "options": [
            "20[%] 이상 감소시키지 않을 것",
            "40[%] 이상 감소시키지 않을 것",
            "60[%] 이상 감소시키지 않을 것",
            "80[%] 이상 감소시키지 않을 것"
        ],
        "answer": 0,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "전선 상호 접속 시 -> '20%'"
    },
    {
        "id": 255,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "동전선의 접속 방법이 아닌 것은?",
        "options": [
            "교차 접속",
            "직선 접속",
            "분기 접속",
            "종단 접속"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "동전선 접속 방법 -> 직선 접속, 분기 접속, 종단 접속, 슬리브에 의한 접속"
    },
    {
        "id": 256,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "아웃렛 박스(정션박스)에서 전등선로를 연결하고 있다. 박스 내에서 전선 접속방법으로 옳은 것은?",
        "options": [
            "납땜",
            "압착 단자",
            "비닐 테이프",
            "와이어 커넥터"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "정션 박스 내에서의 전선 접속 -> 와이어 커넥터 (기술봉사 땐 쥐꼬리 후 절연테이프 처리를 하지만 실제 현장에서는 고깔같은 캡같은걸 전선 접속점 종단에 끼우거나 끼운 뒤 절연테이프 처리를 한다.) -> 비닐 테이프로 혼동 금지"
    },
    {
        "id": 257,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "금속관 공사의 박스 내에 전선을 접속할 때 가장 많이 사용하는 재료는?",
        "options": [
            "와이어 커넥터",
            "코드 커넥터",
            "S 슬리브",
            "컬 플러그"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "금속관 공사도 박스 내에선 '와이어 커넥터'"
    },
    {
        "id": 258,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "기계기구의 단자와 전선의 접속에 사용되는 자재는?",
        "options": [
            "터미널 러그",
            "슬리브",
            "와이어 커넥터",
            "T형 커넥터"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "기계기구의 단자'와 전선의 접속에 사용되는 재료. 와이어 커넥터와 혼동 금지"
    },
    {
        "id": 259,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "알루미늄 전선 접속 시 가는 전선을 박스 안에서 접속하는데 사용되는 슬리브는?",
        "options": [
            "S형 슬리브",
            "종단 겹침용 슬리브",
            "매킹 타이어 슬리브",
            "직선 겹침용 슬리브"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "가는 알루미늄 전선을 박스 안에서 접속할땐 종단 겹침용 슬리브"
    },
    {
        "id": 260,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "장력이 걸리지 않는 개소의 알루미늄선 상호간 또는 알루미늄선과 동선의 압축접속에 사용하는 분기 슬리브는?",
        "options": [
            "알루미늄 전선용 압축 슬리브",
            "알루미늄 전선용 보수 슬리브",
            "알루미늄 전선용 분기 슬리브",
            "분기 접속용 동 슬리브"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "장력이 걸리지 않는 -> 알루미늄 분기 , 장력이 걸리는 -> 알루미늄 압축"
    },
    {
        "id": 261,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "장력이 걸리지 않는 직선 개소에 있어서 ACSR 접속에 사용되는 자재는?",
        "options": [
            "알루미늄 전선용 압축 슬리브",
            "압축형 이질 금속 슬리브",
            "알루미늄 전선용 분기 슬리브",
            "분기 접속용 동 슬리브"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "장력이 걸리지 않는 -> 알루미늄 분기 , 장력이 걸리는 -> 알루미늄 압축"
    },
    {
        "id": 262,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "금속관(규격품) 1본의 길이는 약 몇 [m] 인가?",
        "options": [
            "4.44",
            "3.66",
            "3.56",
            "3.3"
        ],
        "answer": 1,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "3,660[mm] -> 3.66[m]"
    },
    {
        "id": 263,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "강제 전선관에 대한 설명으로 틀린 것은?",
        "options": [
            "후강 전선관과 박강 전선관으로 나누어진다",
            "폭발성 가스나 부식성 가스가 있는 장소에 적합하다",
            "녹이 스는 것을 방지하기 위해 건식 아연 도금법이 사용된다.",
            "주로 강으로 만들고 알루미늄이나 황동, 스테인레스 등은 강제관에서 제외된다."
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "강제 전선관 -> 존나 쎄야함 -> 금속제, 황동 또는 동으로 견고하게 제작"
    },
    {
        "id": 264,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "후강 전선관에 대한 설명으로 틀린 것은?",
        "options": [
            "관의 호칭은 바깥지름의 크기에 가깝다.",
            "후강전선관의 두께는 박강전선관의 두께보다 두껍다.",
            "콘크리트에 매입할 경우 관의 두께는 1.2[mm] 이상으로 해야한다.",
            "관의 호칭은 16[mm] 104[mm] 까지 10종이다"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "후강 전선관 -> 내경을 기준으로 한다."
    },
    {
        "id": 265,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "콘크리트 매입 금속관 공사에 사용하는 금속관의 두께는 최소 몇 [mm] 이상이어야 하는가?",
        "options": [
            "1",
            "1.2",
            "1.5",
            "2"
        ],
        "answer": 1,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "콘크리트에 묻을 경우 1.2mm"
    },
    {
        "id": 266,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "전선관의 산화 방지를 위해 하는 도금은?",
        "options": [
            "납",
            "니켈",
            "아연",
            "페인트"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "아연도금. 페인트는 당연히 아니겠지 시발"
    },
    {
        "id": 267,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "합성수지관 상호 간 및 관과 박스 접속 시에 삽입하는 최소 깊이는?",
        "options": [
            "관 안지름 1.2배",
            "관 안지름 1.5배",
            "관 바깥지름 1.2배",
            "관 바깥지름 1.5배"
        ],
        "answer": 2,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "두께 관련 '박강 , 후강 전선관' 제외 1.2 택. 해당 합성주시관은 '외관' 기준 1.2배"
    },
    {
        "id": 268,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "합성 수지관 배선 공사에서 틀린 것은?",
        "options": [
            "관 말단(끝) 부분에서는 전선 보호를 위하여 부싱을 사용한다.",
            "합성 수지관 내에서 전선에 접속점을 만들어서는 안된다.",
            "배선은 절연전선(옥외용 비닐 절연전선을 제외한다)을 사용한다",
            "합성 수지관을 새들 등으로 지지하는 경우는 그 지지점 간의 거리를 1.5m 이하로 한다"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "관의 끝 부분 및 안쪽 면은 전선의 피복을 손상하지 아니하도록 매끈한 것일 것"
    },
    {
        "id": 269,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "금속관 사용 시 케이블 손상 방지용으로 사용되는 것은?",
        "options": [
            "Lock Nut",
            "Bushing",
            "Coupling",
            "Elbow"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "부싱 : 전선 관단에 끼우고 피복 보호"
    },
    {
        "id": 270,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "금속관의 끝 부분에서 전선 피복의 손상을 방지하기 위해 사용하는 것은?",
        "options": [
            "부싱",
            "유니온 커플링",
            "로크너트",
            "노멀밴드"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "부싱 : 전선 관단에 끼우고 피복 보호"
    },
    {
        "id": 271,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "금속관 공사에서 부싱을 쓰는 목적은?",
        "options": [
            "관의 끝이 터지는 것을 방지",
            "관의 끝부분에서 전선 피복의 손상을 방지",
            "박스 내에서 전선의 접속을 방지",
            "관의 끝부분에서 조영재의 접속을 방지"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "부싱 : 전선 관단에 끼우고 피복 보호"
    },
    {
        "id": 272,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "금속관 공사에서 절연부싱을 사용하는 가장 주된 목적은?",
        "options": [
            "관의 끝이 터지는 것을 방지",
            "관내 해충 및 이물질 출입 방지",
            "관의 끝부분에서 조영재의 접촉 방지",
            "관의 끝부분에서 전선 피복의 손상 방지"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "부싱 : 전선 관단에 끼우고 피복 보호"
    },
    {
        "id": 273,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "전선관 접속재가 아닌 것은?",
        "options": [
            "유니버셜 엘보",
            "콤비네이션 커플링",
            "새들",
            "유니온 커플링"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "새들은 노출 배관을 조영재에 고정시키는데 사용"
    },
    {
        "id": 274,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "박스에 금속관을 연결하고자 할 때, 박스의 노크아웃 지름이 금속관의 지름보다 큰 경우 박스에 사용되는 것은?",
        "options": [
            "링 리듀서",
            "엔트런스 캡",
            "부싱",
            "엘보우"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "노크아웃 지름 -> 링 리듀서"
    },
    {
        "id": 275,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "저압 가공 인입선에서 금속관 공사로 옮겨지는 곳 또는 금속관으로부터 전선을 뽑아 전동기 단자 부분에 접속할 때 사용하는 것은?",
        "options": [
            "엘보",
            "터미널 캡",
            "접지클램프",
            "엔트런스 캡"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "터미널 캡 = 서비스 캡 : 전동기 단자 연결"
    },
    {
        "id": 276,
        "part": 8,
        "partName": "공사재료",
        "type": "C",
        "question": "옥내 배선용 공구 중 리머의 사용 목적으로 옳은 것은?",
        "options": [
            "로크너트 또는 부싱을 견고히 조일 때",
            "커넥터 또는 터미널을 압착하는 공구",
            "금속관 절단에 따른 절단면 다듬기",
            "금속관의 굽힘"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "리머 : 금속관을 쇠톱이나 커터로 끊은 후 관 안에 날카로운 것을 '다듬을 때' 사용 "
    },
    {
        "id": 277,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "케이블 트레이 및 부속재 선정에서 적합하지 않은 것은?",
        "options": [
            "수용된 모든 전선을 지지할 수 있는 적합한 강도의 것이어야 한다.",
            "비금속제 케이블 트레이는 난연성 재료의 것이어야 한다.",
            "지지대는 케이블 트레이 자체 하중과 포설된 케이블 하중을 충분히 견딜 수 있는 강도를 가져야 한다.",
            "케이블 트레이의 안전율은 1.4 이하로 하여야 한다."
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "안전율 1.5 이상. 1.4라는 안전율은 없다"
    },
    {
        "id": 278,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "금속 덕트 공사에서 금속 덕트의 설명으로 틀린 것은?",
        "options": [
            "덕트 철판의 두께가 1.2[mm] 이상일 것",
            "폭이 4cm를 초과하는 철판으로 제작할 것",
            "덕트의 바깥면만 산화 방지를 위한 아연 도금을 할 것",
            "덕트의 안쪽면만 전선의 피복을 손상시키는 돌기가 없을 것"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "어허! 안쪽 바깥쪽 전부 다 아연도금 해야한다."
    },
    {
        "id": 279,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "버스 덕트의 폭이 600[mm] 인 경우 덕트 강판의 두께는 몇 [mm] 이상인가?",
        "options": [
            "1.2",
            "1.4",
            "2",
            "2.3"
        ],
        "answer": 2,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "표를 다 외우긴 시간 낭비다. 자주 나오는 유형은 강판두께 기준 폭 150 이하 1.0 / 500초과 700이하 2.0 / 700초과 2.3 이 3가지 경우의 폭과 두께만 외우자"
    },
    {
        "id": 280,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "강판으로 된 금속  버스덕트 재료의 최소 두께 [mm]는? (단, 버스덕트 최대 폭은 150[mm] 이하다. )",
        "options": [
            "0.8",
            "1",
            "1.2",
            "1.4"
        ],
        "answer": 1,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "표를 다 외우긴 시간 낭비다. 자주 나오는 유형은 강판두께 기준 폭 150 이하 1.0 / 500초과 700이하 2.0 / 700초과 2.3 이 3가지 경우의 폭과 두께만 외우자"
    },
    {
        "id": 281,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "버스 덕트 공사에서 덕트 최대 폭에 따른 덕트 판의 최소 두께로 틀린 것은? (단, 덕트는 강판으로 제작된 것이다.)",
        "options": [
            "덕트 최대 폭 100[mm] : 최소 두께 1.0[mm]",
            "덕트 최대 폭 200[mm] : 최소 두께 1.4[mm]",
            "덕트 최대 폭 600[mm] : 최소 두께 2.0[mm]",
            "덕트 최대 폭 800[mm] : 최소 두께 2.6[mm]"
        ],
        "answer": 3,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "표를 다 외우긴 시간 낭비다. 자주 나오는 유형은 강판두께 기준 폭 150 이하 1.0 / 500초과 700이하 2.0 / 700초과 2.3 이 3가지 경우의 폭과 두께만 외우자"
    },
    {
        "id": 282,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "플로어 덕트 배선에 사용하는 절연전선이 연선일 때 단면적은 최소 몇 [$mm^2$]를 초과하여야 하는가?",
        "options": [
            "6",
            "10",
            "16",
            "25"
        ],
        "answer": 1,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "KEC 도 출제된 내용. 연선일 때 10 !!!"
    },
    {
        "id": 283,
        "part": 8,
        "partName": "공사재료",
        "type": "A",
        "question": "한국전기설비규정에 따른 플로어 덕트 공사의 시설 조건 중 연선을 사용해야만 하는 전선의 최소 단면적 기준은? (단, 전선의 도체는 구리선이며 연선을 사용하지 않아도 되는 예외조건은 고려하지 않는다.)",
        "options": [
            "6",
            "10",
            "16",
            "25"
        ],
        "answer": 1,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "KEC 도 출제된 내용. 연선일 때 10 !!!"
    },
    {
        "id": 284,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "",
        "options": [
            "가",
            "나",
            "다",
            "라"
        ],
        "answer": 1,
        "noShuffle": true,
        "hasImage": true,
        "explanation": "블랭크 와셔는 플로어덕트의 '정션 박스'에 덕트를 접속하지 않는 곳을 막기 위하여 사용한다. 기술봉사 때 커넥터 다는 곳을 보면 막혀있어서 드라이버로 뚫었던 경험이 있을 건데 그 막혀있는 부분이다"
    },
    {
        "id": 285,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "셀룰러덕트의 최대 폭이 200[mm]를 초과할 때 셀룰러덕트의 판 두께는 몇 [mm] 이상이어야 하는가?",
        "options": [
            "1.2",
            "1.4",
            "1.6",
            "1.8"
        ],
        "answer": 2,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "150 이하 -> 1.2, 150 초과 200 이하 -> 1.4 , 200 초과 1.6"
    },
    {
        "id": 286,
        "part": 8,
        "partName": "공사재료",
        "type": "C",
        "question": "합성수지몰드 공사에 관한 설명으로 틀린 것은?",
        "options": [
            "합성수지몰드 안에는 금속제의 조인트 박스를 사용하여 접속이 가능하다.",
            "합성수지몰드 상호 간 및 합성수지 몰드와 박스 기타의 부속품과는 전선이 노출되지 아니하도록 접속해야한다.",
            "합성수지몰드의 내면은 전선의 피복이 손상될 우려가 없도록 매끈한 것이어야한다.",
            "합성수지몰드는 홈의 폭 및 길이가 3.5cm 이하로 두께는 2mm 이상의 것이어야 한다."
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "합성수지몰드 안에는 접속점이 없도록!!!!"
    },
    {
        "id": 287,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "절연 컴파운드를 사용하는 목적이 아닌것은?",
        "options": [
            "자외선으로부터의 도체 파괴 방지",
            "표면 피복을 위한 습기 방지",
            "고전압으로 인한 전리 방지",
            "고체 절연의 빈 곳 메움을 위함"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "자외선과는 관계없다"
    },
    {
        "id": 288,
        "part": 8,
        "partName": "공사재료",
        "type": "C",
        "question": "케이블 접속상자의 충진 등에 이용되는 컴파운드의 재료가 아닌 것은?",
        "options": [
            "아스팔트",
            "에폭시수지",
            "휘발유",
            "폴리염화비닐"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "휘발유를 왜 씀 ;;; C유형이니 외우고 넘어가자"
    },
    {
        "id": 289,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "22.9[kV] 3상 4선식 중성선 다중접지 방식의 가공전선로에서 중성선으로 ACSR을 사용 시 최대 굵기는?",
        "options": [
            "95",
            "32",
            "58",
            "160"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "ACSR 중성선 굵기 32~95. 최대이니 95"
    },
    {
        "id": 290,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "19/1.8[mm] 경동연선의 바깥지름은 몇 [mm] 인가?",
        "options": [
            "8.5",
            "9",
            "9.5",
            "10"
        ],
        "answer": 1,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "계산 N=3n(n+1)+1 =19 , n=2 , D=(2n+1)d = 5×1.8=9[mm]"
    },
    {
        "id": 291,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "옥내에서 전선을 병렬로 사용할 때의 시설 방법으로 틀린 것은?",
        "options": [
            "전선은 동일한 도체이어야 한다.",
            "전선은 동일한 굵기, 동일한 길이이어야 한다.",
            "전선의 굵기는 구리선 40[$mm^2$] 또는 알루미늄 90[$mm^2$] 이상이어야 한다.",
            "관내에 전류의 불평형이 생기지 아니하도록 시설하여야 한다."
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "kec 도 출제된 내용. 40 90이 아닌 50 70 이다"
    },
    {
        "id": 292,
        "part": 8,
        "partName": "공사재료",
        "type": "C",
        "question": "아크용접기의 2차 전류가 100[A] 이하 일 때 정격 사용률이 50[%]인 경우 용접용 케이블 또는 기타의 케이블 굵기는 몇 [$mm^2$]를 시설하여야 하는가?",
        "options": [
            "16",
            "25",
            "35",
            "70"
        ],
        "answer": 0,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "2차 전류가 100[A] 이하일 때에는 16, 150[A] 이하일 때에는 25"
    },
    {
        "id": 293,
        "part": 8,
        "partName": "공사재료",
        "type": "C",
        "question": "테이블 탭에는 단면적 1.5[$mm^2$] 이상의 코드를 사용하고 플러그를 부속시켜야 한다. 이 경우 코드의 최대 길이 [m]는?",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": 2,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "테이블 탭 -> 3m"
    },
    {
        "id": 294,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "단면적 500[$mm^2$] 이상의 절연 트롤리선을 시설할 경우 굴곡 반지름이 3[m] 이하의 곡선 부분에서 지지점 간 거리 [m] 는?",
        "options": [
            "1",
            "1.2",
            "2",
            "3"
        ],
        "answer": 0,
        "noShuffle": true,
        "hasImage": false,
        "explanation": "500 이상에서 3m 맞는데 굴곡 반지름이 3m 이하면 곡선 부분에서는 1m이다."
    },
    {
        "id": 295,
        "part": 8,
        "partName": "공사재료",
        "type": "B",
        "question": "건축물 외부의 전기 사용장소에서 전기 사용을 목적으로 조영물에 고정시켜 시설하는 전선은?",
        "options": [
            "저압배선",
            "옥내배선",
            "옥외배선",
            "옥측배선"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "외부 + 조영물 = 옥측배선 옥외 X"
    },
    {
        "id": 296,
        "part": 9,
        "partName": "분배전반",
        "type": "A",
        "question": "배전반 및 분전반에 대한 설명으로 틀린 것은?",
        "options": [
            "기구 및 전선은 쉽게 점검할 수 있어야 한다.",
            "옥외에 시설할 때는 방수형을 사용해야한다.",
            "모든 분전반은 최소간선용량보다는 작은 정격의 것이여야 한다.",
            "한 개의 분전반에는 한가지 전원만 공급해야한다,"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "모든 분전반은 실제 사용부하에 적절하게 계산된 부하가 필요로 하는 최소간선용량보다 큰 정격의 것이어야한다."
    },
    {
        "id": 297,
        "part": 9,
        "partName": "분배전반",
        "type": "A",
        "question": "배전반 및 분전반에 대한 설명으로 틀린 것은?",
        "options": [
            "노출된 충전부가 있는 배전반 및 분전반은 취급자 이외의 사람이 쉽게 출입할 수 없도록 설치해야한다.",
            "옥내에 설치하는 배전반 및 분전반은 불연성 또는 난연성이 있도록 시설할 것.",
            "옥내에 시설하는 저압용 배,분전반의 기구 및 전선은 쉽게 점검할 수 있도록 할 것.",
            "1개의 분전반에는 2개 이하의 전원만을 공급할 수 있다."
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "한 개의 분전반에는 한가지 전원만 공급."
    },
    {
        "id": 298,
        "part": 9,
        "partName": "분배전반",
        "type": "A",
        "question": "배전반 및 분전반에 대한 설명으로 틀린 것은?",
        "options": [
            "개폐기를 쉽게 개폐할 수 있어야 한다.",
            "옥측 또는 옥외 시설하는 경우는 방수형을 사용해야한다.",
            "노출하여 시설되는 분전반 및 배전반의 재료는 불연성의 것이어야한다.",
            "난연성 합성수지로 된 것은 최소 2mm 이상으로 내아크성을 사용한다."
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "난연성 합성수지로 된 것은 1.5mm의 이상의 내아크성인 것이어야한다."
    },
    {
        "id": 299,
        "part": 9,
        "partName": "분배전반",
        "type": "A",
        "question": "다음 중 배전반 및 분전반을 넣는 함의 요건으로 적합하지 않는 것은?",
        "options": [
            "반의 옆쪽 또는 뒤쪽에 설치하는 분배전반의 소형 덕트는 강판제이어야 한다.",
            "난연성 합성수지로 된 것은 두께가 최소 1.6mm 이상으로 내 수지성인 것이어야한다.",
            "강판제의 것은 두께 1.2mm 이상이어야한다, 다만 가로 또는 세로의 길이가 30cm 이하인 것은 두께 1mm 이상으로 할 수 있다.",
            "절연 저항 측정 및 전선 접속 단자의 점검이 용이한 구조이어야 한다."
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "난연성 합성수지로 된 것은 1.5mm의 이상의 내아크성인 것이어야한다."
    },
    {
        "id": 300,
        "part": 9,
        "partName": "분배전반",
        "type": "A",
        "question": "배전반 및 분전반을 넣은 함이 내아크성, 난연성의 합성수지로 되어있을 때, 함의 최소 두께는 (mm)?",
        "options": [
            "1.2",
            "1.5",
            "1.8",
            "2"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "난연성 합성수지로 된 것은 1.5mm의 이상의 내아크성인 것이어야한다."
    },
    {
        "id": 301,
        "part": 9,
        "partName": "분배전반",
        "type": "A",
        "question": "배전반 및 분전반의 설치 장소로 적합하지 않은 곳은?",
        "options": [
            "안정된 장소",
            "노출이 되어 있지 않은 장소",
            "개폐기를 쉽게 개폐할 수 있는 장소",
            "전기회로를 쉽게 조작할 수 있는 장소"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "노출된 장소"
    },
    {
        "id": 302,
        "part": 9,
        "partName": "분배전반",
        "type": "B",
        "question": "배전반 및 분전반을 넣는 함을 강판제로 만들 경우 함의 최소 두께(mm)는?(단 가로 또는 세로의 길이가 30cm를 초과하는 경우이다.)",
        "options": [
            "1",
            "1.2",
            "1.4",
            "1.6"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "판의 가로, 세로가 30cm 초과 -> 1.2mm, 판의 가로, 세로가 30cm 이하 -> 1mm"
    },
    {
        "id": 303,
        "part": 9,
        "partName": "분배전반",
        "type": "B",
        "question": "분전함에 대한 설명으로 틀린 것은?",
        "options": [
            "반의 옆쪽에 설치하는 분배전반의 소형 덕트는 강판제로서 전선을 구부리거나 눌리지 않을 정도로 충분히 큰 것이어야한다.",
            "목재함은 최소 두께 1cm ( 뚜껑포함 ) 이상으로 불연성 물질을 안에 바른 것이어야한다.",
            "난연성 합성수지로 된 것은 두께 1.5mm 이상으로 내아크성인 것이어야 한다.",
            "강판제의 것은 일반적인 경우 두께 1.2mm 이상이어야 한다."
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "목재함은 두께 1.2cm (뚜껑 제외)이상으로 불연성 물질을 안에 바른 것."
    },
    {
        "id": 304,
        "part": 9,
        "partName": "분배전반",
        "type": "B",
        "question": "분전반의 소형 덕트 폭으로 틀린 것은?",
        "options": [
            "전선 굵기 35mm^2 이하는 덕트 폭 5cm",
            "전선 굵기 95mm^2 이하는 덕트 폭 10cm",
            "전선 굵기 240mm^2 이하는 덕트 폭 15cm",
            "전선 굵기 400mm^2 이하는 덕트 폭 20cm"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "전선 굵기 35mm^2 이하는 덕트 폭 8cm"
    },
    {
        "id": 305,
        "part": 9,
        "partName": "분배전반",
        "type": "B",
        "question": "전선의 굵기가 95mm^2 이하인 경우 배전반과 분전반의 소형 덕트 폭은 최소 몇cm 인가?",
        "options": [
            "8",
            "15",
            "10",
            "20"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "전선 굵기 95mm^2 이하는 덕트 폭 10cm"
    },
    {
        "id": 306,
        "part": 9,
        "partName": "분배전반",
        "type": "A",
        "question": "다음 중 부하전류를 개폐할 수 없는 것은?",
        "options": [
            "DS",
            "OCB",
            "OS",
            "ACB"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "부하전류가 흐르는 전로는 개폐 할 수 없다."
    },
    {
        "id": 307,
        "part": 9,
        "partName": "분배전반",
        "type": "A",
        "question": "개폐기 중에서 부하전류 차단 능력이 없는 것은?",
        "options": [
            "DS",
            "ABB",
            "VCB",
            "OCB"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "부하전류가 흐르는 전로는 개폐 할 수 없다."
    },
    {
        "id": 308,
        "part": 9,
        "partName": "분배전반",
        "type": "A",
        "question": "고장 전류 차단 능력이 없는 것은?",
        "options": [
            "LS",
            "VCB",
            "ACB",
            "MCCB"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "DS 와 가능이 같다, DS와 마찬가지로 고장전류 차단 능력이 없다."
    },
    {
        "id": 309,
        "part": 9,
        "partName": "분배전반",
        "type": "A",
        "question": "보호 계전기의 종류가 아닌 것은?",
        "options": [
            "ASS",
            "RDR",
            "DGR",
            "OCGR"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "ASS 자동 고장 구분 개폐기-개폐기의 일종"
    },
    {
        "id": 310,
        "part": 9,
        "partName": "분배전반",
        "type": "B",
        "question": "단로기의 구조와 관계가 없는 것은?",
        "options": [
            "핀치",
            "베이스",
            "플레이트",
            "리클로저"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "리클로저 - 보호계전기와 차단기의 기능을 갖고 사고검출 및 자동차단과 재폐로가 가능한 차단기이다."
    },
    {
        "id": 311,
        "part": 9,
        "partName": "분배전반",
        "type": "A",
        "question": "배선용 차단기의 약호는?",
        "options": [
            "DS",
            "PF",
            "OCB",
            "MCCB"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "MCCB- 배선용 차단기"
    },
    {
        "id": 312,
        "part": 9,
        "partName": "분배전반",
        "type": "A",
        "question": "저압 배전반의 주차단기로 주로 사용되는 보호기기는?",
        "options": [
            "GCB",
            "VCB",
            "ACB",
            "OCB"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "ACB 기중 차단기 - 저압 배전반의 주 차단기로 사용됨."
    },
    {
        "id": 313,
        "part": 9,
        "partName": "분배전반",
        "type": "A",
        "question": "차단기 중 자연 공기 내에서 개방할 때 접촉자가 떨어지면서 자연 소호에 의한 소호 방식을 가지는 기능을 이용한 것은?",
        "options": [
            "공기 차단기",
            "가스 차단기",
            "기중차단기",
            "유입차단기"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "ACB 기중 차단기 - 대기중 자연공기에서 아크를 길게하여 소호실에서 냉각 차단."
    },
    {
        "id": 314,
        "part": 9,
        "partName": "분배전반",
        "type": "A",
        "question": "소호 능력이 우수하며 이상전압 발생이 적고, 고전압 대전류 차단에 적합한 지중 변전소 적용 차단기는?",
        "options": [
            "유입 차단기",
            "가스 차단기",
            "공기 차단기",
            "진공 차단기"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "GCB 가스 차단기 - 소호 능력이 우수하며 이상전압 발생이 적고, 고전압 대전류 차단에 적합한 지중 변전소 적용 차단기."
    },
    {
        "id": 315,
        "part": 9,
        "partName": "분배전반",
        "type": "B",
        "question": "특고압 배전선로 보호용 기기로 자동 재폐로가 가능한 기기는?",
        "options": [
            "ASS",
            "ALTS",
            "ASBS",
            "리클로저"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "리클로저 - 보호계전기와 차단기의 기능을 갖고 사고검출 및 자동차단과 재폐로가 가능한 차단기이다."
    },
    {
        "id": 316,
        "part": 9,
        "partName": "분배전반",
        "type": "C",
        "question": "MCCB 동작 방식에 대한 분류 중 틀린 것은?",
        "options": [
            "열동식",
            "열동 전자식",
            "기중식",
            "전자식"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "MCCB 동작에 대한 분류 - 열동식, 전자식, 열동 전자식"
    },
    {
        "id": 317,
        "part": 9,
        "partName": "분배전반",
        "type": "B",
        "question": "고압 회로 및 단락 보호용으로 사용되고 있는 기기는?",
        "options": [
            "단로기",
            "전력퓨즈",
            "부하 개폐기",
            "선로 개폐기"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "전력 퓨즈 - 방출형 퓨즈로 고압 회로 단락 보호용으로 사용됨."
    },
    {
        "id": 318,
        "part": 9,
        "partName": "분배전반",
        "type": "B",
        "question": "파워 퓨즈의 특성으로 아닌 것은?",
        "options": [
            "고임피던스 접지계통의 지락 보호가 가능하다.",
            "비보호 영역이 있다.",
            "한류형은 차단시에 과전압을 발생한다.",
            "후비보호에 완벽하다."
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "고임피던스 접지계통의 지락보호는 불가능"
    },
    {
        "id": 319,
        "part": 9,
        "partName": "분배전반",
        "type": "B",
        "question": "과전류 차단기로 시설하는 퓨즈 중 고압 전로에 사용하는 포장 퓨즈는 정격 전류의 몇 배의 전류에서 2시간 내에 용된 되지 않아야하는가?",
        "options": [
            "1.1",
            "1.3",
            "1.5",
            "1.7"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "포장 퓨즈는 정격전류의 1.3배"
    },
    {
        "id": 320,
        "part": 9,
        "partName": "분배전반",
        "type": "C",
        "question": "비포장 퓨즈의 종류가 아닌 것은?",
        "options": [
            "실퓨즈",
            "핀퓨즈",
            "고리퓨즈",
            "플러그퓨즈"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "포장 퓨즈-플러그 퓨즈, 비포장 퓨즈 - 실, 핀, 고리 퓨즈"
    },
    {
        "id": 321,
        "part": 9,
        "partName": "분배전반",
        "type": "B",
        "question": "주상 변압기 1차 측에 설치하여 변압기의 보호와 개폐에 사용하는 것은?",
        "options": [
            "단로기 DS",
            "진공 스위치 VCB",
            "선로 개폐기 LS",
            "컷 아웃 스위치 COS"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "1차측 보호- 컷아웃 스위치, 2차측 보호- 캐치 홀드"
    },
    {
        "id": 322,
        "part": 9,
        "partName": "분배전반",
        "type": "C",
        "question": "COS 컷아웃 스위치를 설치할 때 사용되는 부속 재료가 아닌것은",
        "options": [
            "내장 클램프",
            "브라켓",
            "내오손용 결합애자",
            "퓨즈링크"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "내장 클램프 - 전선을 내장 상태로 억류하기 위하여 사용하는 가선 쇠붙이"
    },
    {
        "id": 323,
        "part": 9,
        "partName": "분배전반",
        "type": "C",
        "question": "KS C 4506에 따른 컷아웃 스위치의 정격전류 (A)가 아닌 것은?",
        "options": [
            "15",
            "30",
            "45",
            "60"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "극수2 - 정격전류 15,30,60,100, 극수3 - 30,60,100"
    },
    {
        "id": 324,
        "part": 9,
        "partName": "분배전반",
        "type": "A",
        "question": "점유 면적이 좁고, 운전보수가 안전하여 공장 및 빌딩 등의 전기실에 많이 사용되는 배전반은?",
        "options": [
            "데드 프런트형",
            "수직형",
            "큐비클형",
            "라이브 프런트형"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "큐비클형(폐쇄식 배전반)- 점유면적이 좁고 운전, 보수에 안전하므로 공장, 빌딩 등의 전기실에 많이 사용되는 배전반"
    },
    {
        "id": 325,
        "part": 9,
        "partName": "분배전반",
        "type": "A",
        "question": "수전 설비를 주차단장치의 구성으로 분류하는 방법이 아닌 것은?",
        "options": [
            "PF-CB형",
            "PF-S형",
            "PF-PF형",
            "CB형"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "수전 설비 구성 형태 - CB, PF-CB, PF-S 형"
    },
    {
        "id": 326,
        "part": 9,
        "partName": "분배전반",
        "type": "A",
        "question": "수변전 설비 회로의 특고압 및 고압을 저압으로 변성하는 것은?",
        "options": [
            "계기용 변압기",
            "과전류 계전기",
            "계기용 변류기",
            "전력 콘덴서"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "계기용 변압기 (PT) - 특고압 및 고압을 저압으로 변성하여 계전기나 전압계에 공급"
    },
    {
        "id": 327,
        "part": 9,
        "partName": "분배전반",
        "type": "A",
        "question": "약호중 계기용 변성기를 표시하는 것은 ?",
        "options": [
            "PF-CB형",
            "PT",
            "MOF",
            "ZCT"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "MOF- 계기용 변성기"
    },
    {
        "id": 328,
        "part": 9,
        "partName": "분배전반",
        "type": "A",
        "question": "고압으로 수전하는 변전소에서 접지 보호용으로 사용되는 계전기의 영상정류를 공급하는 계전기는?",
        "options": [
            "CT",
            "PT",
            "ZCT",
            "GPT"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "ZCT- 접지 보호용으로 사용되는 계전기의 영상전류를 공급"
    },
    {
        "id": 329,
        "part": 9,
        "partName": "분배전반",
        "type": "A",
        "question": "문자기호 중 계기류에 속하지 않는 것은",
        "options": [
            "ZCT",
            "A",
            "W",
            "WHM"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "ZCT는 영상 변류기로 계전기류에 속한다."
    },
    {
        "id": 330,
        "part": 10,
        "partName": "배전선공사",
        "type": "A",
        "question": "배전선로의 지지물로 가장 많이 쓰이는 것은?",
        "options": [
            "철탑",
            "강판주",
            "강관 전주",
            "철근 콘크리트 전주"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "철근 콘크리트 전주 - 가공 배전선로의 지지물로 주로 사용됨."
    },
    {
        "id": 331,
        "part": 10,
        "partName": "배전선공사",
        "type": "B",
        "question": "철근 콘크리트주로서 전장 16m 이고, 설계하중이 8kN이라 하면 땅에 묻는 최소 깊이m는?",
        "options": [
            "2",
            "2.4",
            "2.5",
            "2.8"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "15m 초과, 16m 이하 and 6.8kN초과 9.8kN이하 일 때, 2.8m 이상"
    },
    {
        "id": 332,
        "part": 10,
        "partName": "배전선공사",
        "type": "A",
        "question": "가공전선로의 지지물에 취급자가 오르고 내리는데 사용하는 발판 볼트 등은 지표상 몇 m 미만에 시설하여서는 안되는 가",
        "options": [
            "1.8",
            "2.5",
            "3",
            "2"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "발판 볼트는 지표상 1.8m 미만에 시설하여서는 아니 된다."
    },
    {
        "id": 333,
        "part": 10,
        "partName": "배전선공사",
        "type": "B",
        "question": "철주의 주주재로 사용하는 강관의 두께는 몇 mm 이상이어야 하는가",
        "options": [
            "1.6",
            "2",
            "2.4",
            "2.8"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "철주의 주주재로 사용하는 것은 2mm, 철탑의 주주재로 사용하는 것은 2.4mm, 기타의 부재로 사용하는 것은 1.6mm"
    },
    {
        "id": 334,
        "part": 10,
        "partName": "배전선공사",
        "type": "B",
        "question": "한국전기설비 규정에 따른 철탑의 주주재로 사용하는 강관의 두께는 몇mm 이상이어야 하는가",
        "options": [
            "1.6",
            "2",
            "2.4",
            "2.8"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "철주의 주주재로 사용하는 것은 2mm, 철탑의 주주재로 사용하는 것은 2.4mm, 기타의 부재로 사용하는 것은 1.6mm"
    },
    {
        "id": 335,
        "part": 10,
        "partName": "배전선공사",
        "type": "B",
        "question": "가공전선로의 저압주에서 보안 공사의 경우 목주 말구(위쪽 끝) 굵기의 최소 지름cm은?",
        "options": [
            "10",
            "12",
            "14",
            "15"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "목주의 굵기는 위쪽 끝의 지름 0.12m 이상일 것."
    },
    {
        "id": 336,
        "part": 10,
        "partName": "배전선공사",
        "type": "B",
        "question": "콘크리트 전주의 접지선 인출구는 지지점 표시선으로부터 몇 mm 지점에 있는가",
        "options": [
            "600",
            "800",
            "1000",
            "1200"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "인출구 근입 표시에서 1000mm 하방"
    },
    {
        "id": 337,
        "part": 10,
        "partName": "배전선공사",
        "type": "C",
        "question": "철탑의 상부구조에서 사용되는 것이 아닌 것은",
        "options": [
            "암",
            "수평재",
            "보조재",
            "주각재"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "주각재- 송전탑의 다리에 해당하는 부분으로 철탑 수직의 무게를 지지"
    },
    {
        "id": 338,
        "part": 10,
        "partName": "배전선공사",
        "type": "C",
        "question": "전선 배열에 따라 장주를 구분할 때 수직 배열에 해당되는 장주는?",
        "options": [
            "보통 장주",
            "래크 장주",
            "창출 장주",
            "편출 장주"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "수직 배열 - 래크 장주, 수평 배열 - 보통, 편출, 창출 장주"
    },
    {
        "id": 339,
        "part": 10,
        "partName": "배전선공사",
        "type": "C",
        "question": "내장 철탑에서 양측 전선을 전기적으로 연결 시켜주는 중요 설비는",
        "options": [
            "스페이서",
            "점퍼 장치",
            "지지장치",
            "베이트 댐퍼"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "점퍼 장치 - 내장 철탑에서 양측 전선을 전기적으로 연결 시켜주는 장비"
    },
    {
        "id": 340,
        "part": 10,
        "partName": "배전선공사",
        "type": "A",
        "question": "지선과 지선용 근가를 연결하는 금구는?",
        "options": [
            "볼쇄클",
            "U 볼트",
            "지선 롯트",
            "지선 밴드"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "지선 롯트- 지선과 지선용 근가를 연결 시켜주는 금구"
    },
    {
        "id": 341,
        "part": 10,
        "partName": "배전선공사",
        "type": "A",
        "question": "가공전선로의 지지물에 지선을 사용하는 경우, 지선으로 사용되는 연선은?",
        "options": [
            "강심 알루미늄 연선",
            "아연도강연선",
            "알루미늄연선",
            "경동연선"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "지선에는 물에 강한 아연도강연선을 사용"
    },
    {
        "id": 342,
        "part": 10,
        "partName": "배전선공사",
        "type": "A",
        "question": "가공전선로의 지지물에 시설하는 지선으로 연선을 사용할 경우 소선의 지름은 최소 몇 mm 이상의 금속선인가",
        "options": [
            "2.1",
            "2.3",
            "2.6",
            "2.8"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "소선의 지름 2.6mm 이상의 금속선을 사용한 것일 것"
    },
    {
        "id": 343,
        "part": 10,
        "partName": "배전선공사",
        "type": "C",
        "question": "지선 밴드에서 2방 밴드의 규격이 아닌 것은?",
        "options": [
            "150 x 203mm",
            "180 x 240mm",
            "200 x 260mm",
            "240 x 300mm"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "지선 밴드 규격 (2방,3방, 4방 모두 동일) - 150x203, 180x240, 200x260, 220x280, 250x311"
    },
    {
        "id": 344,
        "part": 10,
        "partName": "배전선공사",
        "type": "A",
        "question": "전선을 지지하기 위하여 사용되는 자재로 애자를 부착하여 사용하며 단면이 agud으로 생긴 형강은?",
        "options": [
            "경완철",
            "분기고리",
            "행거밴드",
            "인류스트랍"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "경완철- 전선을 지지하기 위하여 사용되는 자재로 애자를 부착하여 사용하는 단면이 ㅁ 자 형으로 생긴 형강"
    },
    {
        "id": 345,
        "part": 10,
        "partName": "배전선공사",
        "type": "A",
        "question": "가공전선로에서 22.9(kV-Y)특고압 가공전선 2조를 수평으로 배열하기 위한 완금의 표준길이 mm는?",
        "options": [
            "1400",
            "1800",
            "2000",
            "2400"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "2조 특고압 1800mm"
    },
    {
        "id": 346,
        "part": 10,
        "partName": "배전선공사",
        "type": "A",
        "question": "특고압, 고압, 저압에 사용되는 완금(완철)의 표준길이mm에 해당하지 않는 것은",
        "options": [
            "900",
            "1800",
            "2400",
            "3000"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "완금의 표준길이 종류, 2400-1800-1400-900"
    },
    {
        "id": 347,
        "part": 10,
        "partName": "배전선공사",
        "type": "A",
        "question": "가선 금구 중 완금에 특고압 전선의 조수가 3일때 완금의 길이mm는?",
        "options": [
            "900",
            "1400",
            "1800",
            "2400"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "3조 특고압 - 2400mm"
    },
    {
        "id": 348,
        "part": 10,
        "partName": "배전선공사",
        "type": "A",
        "question": "특고압 가공전선로의 장주에 사용되는 완금의 표준 규격mm이 아닌 것은?",
        "options": [
            "1400",
            "1800",
            "2400",
            "2700"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "완금의 표준길이 종류, 2400-1800-1400-900"
    },
    {
        "id": 349,
        "part": 10,
        "partName": "배전선공사",
        "type": "A",
        "question": "다음 중 경완철의 표준 규격이 아닌 것은",
        "options": [
            "1000mm",
            "1400mm",
            "1800mm",
            "2400mm"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "완금의 표준길이 종류, 2400-1800-1400-900"
    },
    {
        "id": 350,
        "part": 10,
        "partName": "배전선공사",
        "type": "B",
        "question": "전선을 지지하기 위하여 수용가 측 설비에 부착하여 사용하는 'ㄱ' 자형으로 생긴 형강은?",
        "options": [
            "암타이 밴드",
            "완금 밴드",
            "경완금",
            "인입용 완금"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "인입용 완금- 전선을 지지하기 위해 수용가측 설비에 부착하여 사용하는 ㄱ 자형 형강"
    },
    {
        "id": 351,
        "part": 10,
        "partName": "배전선공사",
        "type": "C",
        "question": "가공 송전선로의 ACSR 전선 등에 설치되는 진동 방지용 장치가 아닌 것은?",
        "options": [
            "Damper",
            "PG Clamp",
            "Armor rod",
            "Spacer Damper"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "PG Clamp- 금속선을 접속시키기 위해 사용하는 금속 접속기의 일종, 두 가닥의 평행 홈통이 패어 있는 두 장의 편평한 철물 사이에 선을 끼우고 볼트를 죄도록 되어 있다."
    },
    {
        "id": 352,
        "part": 10,
        "partName": "배전선공사",
        "type": "C",
        "question": "다음 중 지선에 근가를 시공할 때 사용되는 콘크리트 근가의 규격m은? ( 단 원형지 선가 제외)",
        "options": [
            "0.5",
            "0.7",
            "0.9",
            "1"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "철근 콘크리트 근가 호칭 - 0.7, 1, 1.2, 1.5, 1.8m"
    },
    {
        "id": 353,
        "part": 10,
        "partName": "배전선공사",
        "type": "B",
        "question": "다음 중 완금 또는 앵글류의 지지물에 COS 또는 핀애자를 고정시키는 부속 자재는 ?",
        "options": [
            "폰 스탭",
            "앵글 베이스",
            "U 볼트",
            "턴버클"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "앵글 베이스 - 완금 또는 앵글류의 지지물에 COS 또는 핀애자를 고정시키는 부속자재"
    },
    {
        "id": 354,
        "part": 10,
        "partName": "배전선공사",
        "type": "B",
        "question": "라인 포스트 애자는 다음 중 어떤 종류의 애자인가",
        "options": [
            "핀애자",
            "현수애자",
            "장간애자",
            "지지애자"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "라인포스트 애자- 특고압 배전선로에서 절연전선이 지지하는데 사용하는 지지애자로 애자와 애자핀이 별도로 분리되어있다."
    },
    {
        "id": 355,
        "part": 10,
        "partName": "배전선공사",
        "type": "A",
        "question": "경완철에 현수애자를 설치하는 경우에 사용되는 자재가 아닌 것은",
        "options": [
            "볼쇄클",
            "소켓아이",
            "인장클램프",
            "볼크레비스"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "경완철- 볼쇄클-현수애자-소켓아이-데드앤드클램프(인장클램프)"
    },
    {
        "id": 356,
        "part": 10,
        "partName": "배전선공사",
        "type": "A",
        "question": "폴리머애자의 설치 부속 자재를 옳게 나열한 것은?",
        "options": [
            "경완철- 볼쇄클-소켓아이-폴리머애자-인장클램프",
            "볼쇄클-소켓아이-폴리머애자-경완철-인장클램프",
            "소켓아이-볼쇄클-데드앤드크램프-폴리머애자-경완철",
            "경완철-폴리머애자-소켓아이-데드앤드클램프-볼쇄클"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "경완철- 볼쇄클-소켓아이-폴리머애자-인장클램프"
    },
    {
        "id": 357,
        "part": 10,
        "partName": "배전선공사",
        "type": "A",
        "question": "가공 배전선로 경완철에 폴리머 현수애자를 결합하고자 한다. 경완철과 폴리머 현수 애자 사이에 설치되는 자재는?",
        "options": [
            "경완철용 아이쇄클",
            "볼크레비스",
            "인장클램프",
            "각암타이"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "경완철- 아이쇄클(볼쇄클+소켓아이)- 폴리머애자-인장클램프"
    },
    {
        "id": 358,
        "part": 10,
        "partName": "배전선공사",
        "type": "B",
        "question": "공칭전압 22.9kV인 경우 현수애자의 일련의 개수는",
        "options": [
            "19~22",
            "10~11",
            "2~3",
            "4~5"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "22kV(22.9kV-Y) : 2~3개"
    },
    {
        "id": 359,
        "part": 10,
        "partName": "배전선공사",
        "type": "B",
        "question": "공칭전압 345kV인 경우 현수애자의 일련의 개수는",
        "options": [
            "10~11",
            "18~20",
            "25~30",
            "40~45"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "345kV : 19~22개"
    },
    {
        "id": 360,
        "part": 10,
        "partName": "배전선공사",
        "type": "C",
        "question": "송전용 볼소켓형 현수애자의 표준형 지름은 약 몇 mm 인가?",
        "options": [
            "220",
            "250",
            "270",
            "300"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "현수애자의 표준형 지름- 180, 250, 280, 320mm"
    },
    {
        "id": 361,
        "part": 10,
        "partName": "배전선공사",
        "type": "C",
        "question": "ks c 3824에 다른 전차선로용 180mm 현수 애자 하부의 핀모양이 아닌 것은?",
        "options": [
            "훅(소)",
            "아이(평행)",
            "크레비스",
            "ㄷ 형"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "전차선로용 현수애자 핀 모양에는 ㄷ 형이 없다. (187p 표 422번 표 참고)"
    },
    {
        "id": 362,
        "part": 10,
        "partName": "배전선공사",
        "type": "C",
        "question": "폴리머 현수애자 A호의 사용지역으로 적당한 것은?",
        "options": [
            "오손등급 C등급 이상 지역",
            "오손등급 C등급 이하 지역",
            "오손등급 B등급 이상 지역",
            "오손등급 B등급 이하 지역"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "A호: 오손 등급 c급 이상 지역에 사용, 자기제 현수 애자 대체용으로 사용. B호 : 오손등급 B급 이하 지역에서 사용. 자기제 현수 애자 대체용으로 사용"
    },
    {
        "id": 363,
        "part": 10,
        "partName": "배전선공사",
        "type": "B",
        "question": "가공 배전선로 및 인입선에서 인류애자를 설치하기 위하여 사용하는 금구는 무엇인가",
        "options": [
            "인류스트랩",
            "암타이 밴드",
            "배선용 래크",
            "데드 앤드 클램프"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "인류스트랩- 가공배전선로 및 인입선에서 인류애자를 설치하기 위해 사용한다."
    },
    {
        "id": 364,
        "part": 10,
        "partName": "배전선공사",
        "type": "A",
        "question": "저압 인류애자에는 전압선용과 중성선용이 있다. 각 용도별 색깔이 옳게 연결된 것은?",
        "options": [
            "전압선용- 녹색, 중성선용- 백색",
            "전압선용- 백색, 중성선용- 녹색",
            "전압선용- 적색, 중성선용- 백색",
            "전압선용- 청색, 중성선용- 백색"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "저압 인류애자: 전압선용- 백색, 중성선용- 녹색"
    },
    {
        "id": 365,
        "part": 10,
        "partName": "배전선공사",
        "type": "B",
        "question": "행거밴드란 무엇인가",
        "options": [
            "완금을 전주에 설치하는데 필요한 밴드",
            "완금에 암타이를 고정시키기 위한 밴드",
            "전주 자체에 변압기를 고정시키기 위한 밴드",
            "전주에 COS 또는 LA를 고정시키기 위한 밴드"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "행거밴드 - 주상변압기를 전주에 설치하기 위해 사용"
    },
    {
        "id": 366,
        "part": 10,
        "partName": "배전선공사",
        "type": "B",
        "question": "애자의 형상에 의한 부뉴로서 내무애자란",
        "options": [
            "노브애자의 일종으로서 저압 옥내 애자이다.",
            "현수애자의 일종으로서 크레비스형의 애자이다",
            "선로용으로서 점퍼선의 지지용으로 사용되는 애자이다",
            "분진 또는 염해에 의한 섬락 사고를 방지하기 위한 송전용 애자이다"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "내무애자- 분진 또는 염해에 의한 섬락 사고를 방지하기 위한 송전용 애자"
    },
    {
        "id": 367,
        "part": 10,
        "partName": "배전선공사",
        "type": "C",
        "question": "옥내배선의 애자 사용공사에 많이 사용하는 특대 놉애자의 높이mm는?",
        "options": [
            "75",
            "65",
            "60",
            "50"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "특대놉 애자 - 65 mm"
    },
    {
        "id": 368,
        "part": 10,
        "partName": "배전선공사",
        "type": "B",
        "question": "가공전선로에 사용하는 애자가 구비해야 할 조건이 아닌 것은?",
        "options": [
            "이상 전압에 견디고, 내부 이상전압에 대해 충분한 절연 강도를 가질 것",
            "전선의 장력, 풍압, 빙설 등의 외력에 의한 하중에 견딜 수 있는 기계적 강도를 가질 것",
            "비 눈 안개 등에 대하여 충분한 전기적 표면 저항이 있어 누설 전류가 흐르지 못하게 할것",
            "온도나 습도의 변화에 대해 전기적 및 기계적 특성의 변화가 클것"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "온도나 습도의 변화에 대해 전기적 및 기계적 특성의 변화가 적을 것"
    },
    {
        "id": 369,
        "part": 10,
        "partName": "배전선공사",
        "type": "C",
        "question": "저압 핀애자의 종류가 아닌 것은?",
        "options": [
            "저압 소형 핀 애자",
            "저압 중형 핀 애자",
            "저압 대형 핀 애자",
            "저압 특대형 핀 애자"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "저압 핀애자 - 저압 소형 핀애자, 저압 중형 핀애자, 저압 대형 핀애자"
    },
    {
        "id": 370,
        "part": 11,
        "partName": "피뢰설비",
        "type": "A",
        "question": "번개로 인한 외부 이상전압이나 개폐서지로 인한 내부 이상전압으로부터 전기시설을 보호하는 장치는?",
        "options": [
            "피뢰기",
            "피뢰침",
            "차단기",
            "변압기"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "번개로 인한 외부 이상전압이나 개폐서지로 인한 내부 이상전압으로부터 전기시설을 보호"
    },
    {
        "id": 371,
        "part": 11,
        "partName": "피뢰설비",
        "type": "B",
        "question": "공칭전압 22kV인 중성점 비접지 방식의 변전소에 사용하는 피뢰기의 정격전압은 몇kV인가",
        "options": [
            "18",
            "20",
            "22",
            "24"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "공칭전압 22kV - 변전소 24kV"
    },
    {
        "id": 372,
        "part": 11,
        "partName": "피뢰설비",
        "type": "B",
        "question": "공칭전압 22.9kV인 3상 4선식 다중접지 방식의 변전소에서 사용하는 피뢰기의 정격 전압kV은?",
        "options": [
            "20",
            "18",
            "24",
            "21"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "공칭전압 22.9kV - 변전소 21kV"
    },
    {
        "id": 373,
        "part": 11,
        "partName": "피뢰설비",
        "type": "B",
        "question": "고압 및 특고압 전로에 시설하는 피뢰기의 접지선은 공칭 단면적 몇 mm^2 이상인 연동선 또는 이와 동등 이상의 세기 및 굵기의 금속선을 사용하여 하는가",
        "options": [
            "2.5",
            "4",
            "6",
            "3.2"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "접지선으로 공칭 단면적 6mm^2이상인 연동선을 사용"
    },
    {
        "id": 374,
        "part": 11,
        "partName": "피뢰설비",
        "type": "C",
        "question": "KS C 4610에 따른 고압 피뢰기의 정격전압kV이 아닌것은 ( 단 전압은 RMS값이다)",
        "options": [
            "7.5",
            "24",
            "74",
            "174"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "피뢰기의 표준 전압 등급 표 참고 ( 195p 435번)"
    },
    {
        "id": 375,
        "part": 11,
        "partName": "피뢰설비",
        "type": "C",
        "question": "갭페스형 피뢰기에 대한 설명으로 옳지 않은 것은?",
        "options": [
            "구조가 간단하고 소형이다",
            "특성요소 사고시 단락 사고와 같이 해석한다.",
            "산화 아연을 주성분으로 사용한다.",
            "직렬캡과 특성요소로 구성된다"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "갭레스형 피뢰기는 직영갭이 없다"
    },
    {
        "id": 376,
        "part": 11,
        "partName": "피뢰설비",
        "type": "A",
        "question": "KS C IEC 62305에 의한 수뢰도체, 피뢰침과 인하도선의 재료로 사용되지 않는 것은",
        "options": [
            "구리",
            "순금",
            "알루미늄연선",
            "용융아연도금강"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "구리, 알루미늄, 스테인리스, 용융아연도금강 등이 사용됨"
    },
    {
        "id": 377,
        "part": 11,
        "partName": "피뢰설비",
        "type": "A",
        "question": "피뢰 시스템의 수뢰도체로 사용되는 재료에 해당하지 않는 것은",
        "options": [
            "구리",
            "용융아연도강",
            "알루미늄연선",
            "니켈 망간 합금"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "구리, 알루미늄, 스테인리스, 용융아연도금강 등이 사용됨"
    },
    {
        "id": 378,
        "part": 11,
        "partName": "피뢰설비",
        "type": "A",
        "question": "피뢰 설비 중 돌침 지지관의 재료로 적합하지 않은 것은",
        "options": [
            "스테인리스 강관",
            "황동관",
            "합성수지관",
            "알루미늄관"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "황동관, 알루미늄관 스테인리스 강관 등"
    },
    {
        "id": 379,
        "part": 11,
        "partName": "피뢰설비",
        "type": "B",
        "question": "피뢰를 목적으로 피보호물 전체를 덮은 연속적인 망상도체는",
        "options": [
            "수직도체",
            "인하도선",
            "케이지",
            "용마루 가설도체"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "케이지 방식- 피뢰를 목적으로 피보호물 전체를 덮은 연속적인 망상도체"
    },
    {
        "id": 380,
        "part": 11,
        "partName": "피뢰설비",
        "type": "A",
        "question": "KS C IEC 62305-3에 의해 피뢰침의 재료로 테이프형 단선 형상의 알루미늄을 사용하는 경우 최소단면적mm^2은",
        "options": [
            "25",
            "35",
            "50",
            "70"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "알루미늄 테이프형의 최소 단면적 70mm^2"
    },
    {
        "id": 381,
        "part": 11,
        "partName": "피뢰설비",
        "type": "B",
        "question": "피뢰침 돌침부의 돌침은 지름 몇 mm 이상인가",
        "options": [
            "6",
            "12",
            "55",
            "88"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "돌침은 구리, 알루미늄 또는 용융 아연도금을 한 철 또는 강의 지름 12mm 이상의 봉 또는 이와 동 등 이상의 강도 및 성능의 것을 사용"
    },
    {
        "id": 382,
        "part": 11,
        "partName": "피뢰설비",
        "type": "A",
        "question": "피뢰침용 인하도선으로 가장 적당한 전선은",
        "options": [
            "동선",
            "캡타이어 케이블",
            "고무 절연 전선",
            "비닐 절연 전선"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "최소 단면적이 피복이 없는 동선을 기준으로 수뢰부, 인하도선 및 접지극은 50mm^2 이상이거나 이와 동등 이상의 성능을 가질 것"
    },
    {
        "id": 383,
        "part": 11,
        "partName": "피뢰설비",
        "type": "A",
        "question": "피뢰 설비를 시설하고 이것을 접지하기 위한 인하도선에 피복이 없는 동선 재료를 사용할 경우 단면적 mm^2은 얼마 이상인가",
        "options": [
            "50",
            "35",
            "16",
            "10"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "최소 단면적이 피복이 없는 동선을 기준으로 수뢰부, 인하도선 및 접지극은 50mm^2 이상이거나 이와 동등 이상의 성능을 가질 것"
    },
    {
        "id": 384,
        "part": 11,
        "partName": "피뢰설비",
        "type": "A",
        "question": "피뢰 시스템의 인하도선 재료로 원형 단선으로 된 알루미늄을 쓰고자 한다. 해당 재료의 단면적 mm^2은 얼마 이상인가 (단 KS C IEC 62561-2를 기준으로 한다)",
        "options": [
            "20",
            "30",
            "40",
            "50"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "원형 단선의 최소 단면적은 50mm^2 이다"
    },
    {
        "id": 385,
        "part": 11,
        "partName": "피뢰설비",
        "type": "A",
        "question": "피뢰 설비 설치에 관한 사항으로 옳은 것은",
        "options": [
            "수뢰부는 동선을 기준으로 35mm^2이상",
            "접지극은 동선을 기준으로 50mm^2이상",
            "인하도선은 동선을 기준으로 16mm^2이상",
            "돌침은 건축물의 맨 윗부분으로부터 20cm 이상 돌출"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "최소 단면적이 피복이 없는 동선을 기준으로 수뢰부, 인하도선 및 접지극은 50mm^2 이상이거나 이와 동등 이상의 성능을 가질 것"
    },
    {
        "id": 386,
        "part": 11,
        "partName": "피뢰설비",
        "type": "A",
        "question": "배선 기구라 함은 다음중 어느 것인가",
        "options": [
            "전선을 접속하는데 필요한 와이어 커넥터",
            "스위치(텀블러) 및 콘센트류",
            "전선 및 케이블을 단말 처리할 때 필요한 터미널류의 기구",
            "전선 및 케이블을 전선관에 입선할 때 필요한 공구"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "개폐기류 및 접속기류"
    },
    {
        "id": 387,
        "part": 11,
        "partName": "피뢰설비",
        "type": "C",
        "question": "개폐기의 명칭과 기호의 연결로 틀린것은",
        "options": [
            "2극 쌍투형: DPDT",
            "2극 단투형: DPST",
            "단극 쌍투형: SPDT",
            "단극 단투형: TPST"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "단극 단투형 : SPST"
    },
    {
        "id": 388,
        "part": 11,
        "partName": "피뢰설비",
        "type": "C",
        "question": "KS C 8309에 따른 옥내용 소형 스위치 중 텀블러스위치의 정격 전류가 아닌것은",
        "options": [
            "5",
            "10",
            "15",
            "20"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "옥내용 소형 텀블러 스위치의 정격 전류- 0.5 , 1, 3, 4, 6, 7, 10, 12, 15, 16, 20A"
    },
    {
        "id": 389,
        "part": 11,
        "partName": "피뢰설비",
        "type": "B",
        "question": "2개소에서 한 개의 전등을 자유롭게 점멸할 수 있는 스위치 방식은",
        "options": [
            "로터리 스위치",
            "마그넷 스위치",
            "3로 스위치",
            "푸시 버튼 스위치"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "3로 스위치- 2개소에서 한 개의 전등을 점멸할 수 있는 스위치 방식"
    },
    {
        "id": 390,
        "part": 11,
        "partName": "피뢰설비",
        "type": "B",
        "question": "투광기와 수광기로 구성되고 물체가 광로를 차단하면 접점이 개폐되는 스위치는",
        "options": [
            "압력 스위치",
            "리밋 스위치",
            "광전 스위치",
            "근접 스위치"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "광전 스위치 - 투광기와 수광기로 구성되고 물체가 광로를 차단하면 접점이 개폐되는 스위치"
    },
    {
        "id": 391,
        "part": 11,
        "partName": "피뢰설비",
        "type": "C",
        "question": "누전차단기의 동작시간에 따른 분류로 틀린 것은",
        "options": [
            "고속형",
            "저감도형",
            "시연형",
            "반한시 형"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "동작시간에 따른 분류 - 고속형, 시연형, 반한시형"
    },
    {
        "id": 392,
        "part": 11,
        "partName": "피뢰설비",
        "type": "C",
        "question": "누전차단기의 동작시간 중 틀린 것은?",
        "options": [
            "고감도 고속형 : 정격 감도 전류에서 0.1초 이내",
            "중감도 고속형 : 정격 감도 전류에서 0.2초 이내",
            "고감도 고속형 : 인체 감전 보호용은 0.03초 이내",
            "중감도 시연형 : 정격 감도 전류에서 0.1초를 초과하고 2초 이내"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "중감도 고속형 : 정격 감도 전류에서 0.1초 이내"
    },
    {
        "id": 393,
        "part": 11,
        "partName": "피뢰설비",
        "type": "A",
        "question": "다음 중 절연성, 내온성, 내유성이 풍부하며 연피케이블에 사용하는 전기용 테이프는",
        "options": [
            "면 테이프",
            "비닐 테이프",
            "리노 테이프",
            "고무 테이프"
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "리노 테이프- 점착성은 없으나 절연성, 내온성 및 내유성이 있으므로 연피케이블 접속에 사용"
    },
    {
        "id": 394,
        "part": 11,
        "partName": "피뢰설비",
        "type": "C",
        "question": "녹아웃 펀치와 같은 목적으로 사용하는 공구의 명칭은",
        "options": [
            "리이머",
            "히키",
            "드라이브이트",
            "호울 소우"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "호울 소우- 캐비닛의 철판 등에 전선관을 넣기 위한 구멍을 만들기 위한 공구이다."
    },
    {
        "id": 395,
        "part": 11,
        "partName": "피뢰설비",
        "type": "C",
        "question": "무거운 조명기구를 파이프로 매달때 사용하는 것은",
        "options": [
            "노멀밴드",
            "파이프 행거",
            "언트런스 캡",
            "픽스쳐터드와 하키"
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "픽스쳐터드와 하키- 아웃트랙 박스에 조명기구를 부착시킬 때 기구 중량의 장력을 보강하기 위해 사용"
    },
    {
        "id": 396,
        "part": 11,
        "partName": "피뢰설비",
        "type": "B",
        "question": "접지도체에 피뢰 시스템이 접속되는 경우 접지도체의 최소 단면적 mm^2은(단, 접지도체는 구리로 됨)",
        "options": [
            "16",
            "20",
            "24",
            "28"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "이 경우 접지도체의 단면적은 구리 16 또는 철 50이상이다"
    },
    {
        "id": 397,
        "part": 11,
        "partName": "피뢰설비",
        "type": "B",
        "question": "접지극으로 탄소피복 강봉을 사용하는 경우 최소 규격으로 옳은 것은",
        "options": [
            "지름 8mm이상의 강심, 길이 0.9m 이상일 것",
            "지름 10mm이상의 강심, 길이 1.2m 이상일 것",
            "지름 12mm이상의 강심, 길이 1.4m 이상일 것",
            "지름 14mm이상의 강심, 길이 1.6m 이상일 것"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "지름 8mm이상의 강심, 길이 0.9m 이상일 것"
    },
    {
        "id": 398,
        "part": 11,
        "partName": "피뢰설비",
        "type": "B",
        "question": "접지 저감재의 구비조건으로 틀린 것은",
        "options": [
            "안전할 것",
            "지속성이 없을 것",
            "전기적으로 양도체일 것",
            "전극을 부식시키지 않을 것"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "지속성이 있을 것"
    },
    {
        "id": 399,
        "part": 11,
        "partName": "피뢰설비",
        "type": "C",
        "question": "내선 규정에서 정하는 용어의 정의로 틀린 것은",
        "options": [
            "케이블이란 통신용 케이블 이외의 케이블 및 캡타이어 케이블을 말한다",
            "애자란, 놉애자, 인류애자, 핀애자와 같이 전선을 부착하여 이것을 다른 것과 절연하는 것을 말한다.",
            "전기용품이란 전기 설비의 부분이 되거나 또는 여기에 접속하여 사용되는 기계기구 및 재료를 말한다",
            "불연성이란 불꽃, 아크 또는 고열에 의해 착화하기 어렵거나 착화 하여도 쉽게 연소하지 않는 성질을 말한다."
        ],
        "answer": 3,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "불연성이란 사용중 닿게 될지도 모르는 불꽃, 아크 또는 고열에 의해 연소되지 성질을 말한다"
    },
    {
        "id": 400,
        "part": 11,
        "partName": "피뢰설비",
        "type": "B",
        "question": "특유속도가 가장 낮은 수차는",
        "options": [
            "펠톤 수차",
            "사류 수차",
            "프로펠러 수차",
            "프란시스 수차"
        ],
        "answer": 0,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "펠턴 수차 12~23으로 제일 낮다"
    },
    {
        "id": 401,
        "part": 11,
        "partName": "피뢰설비",
        "type": "C",
        "question": "벨트 컨베이어 중 드라이브 풀리의 접촉각을 증가시키기 위해 사용하는 풀리는",
        "options": [
            "테일 풀리",
            "스너브 풀리",
            "테이크업 풀리",
            "헤드 풀리"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "스너브 풀리 - 벨트 컨베이어 중 드라이브 풀리의 접촉각을 증가시키기 위해 사용하는 풀리"
    },
    {
        "id": 402,
        "part": 11,
        "partName": "피뢰설비",
        "type": "C",
        "question": "암거에 시설하는 지중전선에 대한 설명으로 틀린 것은 (단, 암거 내에 자동소화 설비가 시설되지 않은 경우이다.)",
        "options": [
            "불연성이 있는 연소지도료로 지중전선을 피복한 전선은 사용이 가능하다.",
            "자소성이 있는 난연성 피복이 된 지중전선은 사용이 가능하다",
            "자소성이 있는 난연성 관에 지중전선을 넣어 시설하는 것은 불가능하다.",
            "자소성이 있는 난연성의 연소방지테이프로 지중전선을 피복한 전선은 사용이 가능하다."
        ],
        "answer": 2,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "자기 소화성이 있는 난연성의 관에 넣어 지중 전선을 시설할 것"
    },
    {
        "id": 403,
        "part": 11,
        "partName": "피뢰설비",
        "type": "A",
        "question": "배전선의 전압을 조정하는 방법으로 적당하지 않은 것은",
        "options": [
            "승압기",
            "병렬 콘덴서",
            "변압기의 탭조정",
            "유도전압 조정기"
        ],
        "answer": 1,
        "noShuffle": false,
        "hasImage": false,
        "explanation": "병렬 콘덴서 - 역률을 개선하는 설비"
    }
];