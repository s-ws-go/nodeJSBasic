setInterval(() => {
  console.log('시작');
  try {
    throw new Error('에러!!!');
  } catch (error) {
    console.log(error);
  }
}, 1000);
