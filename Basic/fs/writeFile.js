const fs = require('fs/promises');

fs.writeFile('./write.txt', '글을 입력해 봅니다(수정)')
  .then(() => fs.readFile('./write.txt'))
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => console.log(err));
