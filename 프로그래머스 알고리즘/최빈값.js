function solution(array) {
    // array의 길이가 1일 경우 갯수가 하나이기에
    // 그 값을 반환해준다.
    if (array.length === 1) return array[0];
  

    const obj = {};
    const answer = [];
    //임시 object와 배열 선언.

    // array를 forEach() 반복문을 돌려
    // obj에 값이 없으면 값을 만들고 1을 넣어주고
    // obj에 값이 있으면 기존 값 +1을 해준다.
    array.forEach((n) => {
        // array = 1 2 3 3 3 4
        // n = 1 2 3 3 3 4 순으로 나온다 
        // why? => forEach문에서는 매개변수에 배열 요소가 오기 때문에 n = array[index]
        obj[n] = ++obj[n] || 1;
        //그래서 obj[n] => obj1 obj2 obj3 obj3 obj3 obj4 순으로 돌아간다.
    });
  
    for (let key in obj) {
      answer.push([key, obj[key]]);
    }
  
    answer.sort((a, b) => b[1] - a[1]);
  
    // 최빈값이 여러 개면 -1을 반환해야 하기 때문에 확인한다.
    if (answer.length > 1 && answer[0][1] === answer[1][1]) return -1;
  
    // 여러개가 아니라면 정렬한 처음 값을 반환한다.
    return Number(answer[0][0]);
  }
  
  console.log(solution([1, 2, 3, 3, 3, 4])); // 3
//   console.log(solution([1, 1, 2, 2])); // -1
//   console.log(solution([1])); // 1