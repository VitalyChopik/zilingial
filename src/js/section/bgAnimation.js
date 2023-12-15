const bgAnimation = (linearGradients) => {
  const linearGradientsCount = linearGradients.length;

  // Перемешиваем массив индексов в случайном порядке
  const shuffledIndexes = Array.from({ length: linearGradientsCount }, function (_, index) {
    return index;
  }).sort(function () {
    return Math.random() - 0.5;
  });

  // Добавляем класс active в рандомном порядке
  shuffledIndexes.forEach(function (index, i) {
    setTimeout(function () {
      linearGradients[index].classList.add('active');
    }, i * 50); // Задержка в миллисекундах (в данном случае 1000 мс = 1 сек)
  });
}
export default bgAnimation;