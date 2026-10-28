
 // script.js : 내 영화 평점 통계(콘솔판)
 // 작성자 : 김재호(2651016)

const titles = ["스파이더맨: 브랜드 뉴 데이", "스파이더맨", "스파이더맨: 홈커밍", "어메이징 스파이더맨", "스파이더맨: 뉴 유니버스"];
const ratings = [8.168, 7.357, 7.333, 6.8, 8.168];
const years = [2026, 2002, 2017, 2012, 2018];

let sum = 0;
for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i];
}
console.log("합계:", sum);

const average = sum / ratings.length;
console.log("평균:", average);

let max = ratings[0];
let maxIndex = 0;

for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > max) {
        max = ratings[i];
        maxIndex = i;
    }
}
console.log("최고:", titles[maxIndex], max);

let count = 0;

for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] >= 8) {
        count++;
    }
}
console.log("8점 이상:", count, "편");

for (let i = 0; i < ratings.length; i++) {
    let label;

    if (ratings[i] >= 8.5) {
        label = "명작";
    } else if (ratings[i] >= 7) {
        label = "추천";
    } else {
        label = "보통";
    }

    console.log(
        titles[i] + " (" + years[i] + "): " +
        ratings[i] + " - " + label
    );
}

// 6. 내 영화로 바꾸고 요약 한 줄
titles[0] = "내 영화";
ratings[0] = 9.0;
years[0] = 2026;

const avgText = average.toFixed(1);
const best = titles[maxIndex];

alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);
